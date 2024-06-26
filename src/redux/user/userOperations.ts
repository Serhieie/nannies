import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, database, storage } from '@/firebaseConfig/firebaseConfig';
import { toast } from 'react-toastify';
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  ref as storageRef,
  uploadString,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { get, ref, set } from 'firebase/database';
import { CredentialsRegistration, CustomUser } from './initialStateUser.types';

export const registerUser = createAsyncThunk<
  CustomUser,
  CredentialsRegistration,
  { rejectValue: string }
>('auth/register', async (credentials, thunkApi) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      credentials.email.trim().toLowerCase(),
      credentials.password.trim()
    );

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: credentials.name.trim(),
    });

    const userRef = ref(database, 'users/' + user.uid);
    await set(userRef, {
      name: credentials.name.trim(),
      email: user.email.trim().toLowerCase(),
    });

    toast.success('Registration success', {
      position: 'bottom-right',
    });

    return {
      uid: user.uid,
      displayName: user.displayName || null,
      email: user.email || null,
      photoURL: user.photoURL || null,
    };
  } catch (error: any) {
    if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
      toast.error('This email address is already in use', {
        position: 'bottom-right',
      });
    } else {
      toast.error('Registration failed', {
        position: 'bottom-right',
      });
    }
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk<
  CustomUser,
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async (credentials, thunkApi) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email.trim().toLowerCase(),
      credentials.password.trim()
    );

    if (userCredential.user) {
      toast.success('Login success', {
        position: 'bottom-right',
      });

      const userRef = ref(database, `users/${userCredential.user.uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const photoURL = userData.photoURL || null;

        return {
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName || null,
          email: userCredential.user.email || null,
          photoURL: photoURL,
        };
      } else {
        throw new Error('User data not found in database');
      }
    }

    throw new Error('No user found');
  } catch (error: any) {
    toast.error('Login failed', {
      position: 'bottom-right',
    });
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await signOut(auth);

      toast.warning('Logout success', {
        position: 'bottom-right',
      });
    } catch (error: any) {
      toast.error('Logout failed', {
        position: 'bottom-right',
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export interface UserProfileCredentials {
  updatedName: string;
  photoURL?: File | string;
}

export interface UpdatedUserProfile {
  name: string;
  photoURL?: string;
}

export const updateUserProfile = createAsyncThunk<
  UpdatedUserProfile,
  UserProfileCredentials,
  { rejectValue: string }
>('auth/updateProfile', async (credentials, thunkApi) => {
  const user = auth.currentUser;

  if (!user) {
    console.error('No user is signed in.');
    return thunkApi.rejectWithValue('No user is signed in.');
  }

  try {
    const updatedUserData: UpdatedUserProfile = {
      name: credentials.updatedName.trim(),
      photoURL: '',
    };

    if (credentials.updatedName) {
      await updateProfile(user, {
        displayName: credentials.updatedName.trim(),
      });
    }

    // Get the current photoURL from the database
    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);
    const currentPhotoURL = snapshot.val()?.photoURL || '';

    if (credentials.photoURL === 'delete') {
      // Delete photoURL from storage and database
      if (currentPhotoURL) {
        const storageReference = storageRef(storage, currentPhotoURL);
        await deleteObject(storageReference);
      }
      await set(userRef, {
        name: credentials.updatedName.trim(),
        email: user.email.trim().toLowerCase(),
        photoURL: '',
      });

      updatedUserData.photoURL = '';
    } else if (credentials.photoURL instanceof File) {
      const storageReference = storageRef(
        storage,
        `avatars/${user.uid}/${credentials.photoURL.name}`
      );
      const fileReader = new FileReader();
      fileReader.readAsDataURL(credentials.photoURL);
      const dataUrl = await new Promise<string>((resolve, reject) => {
        fileReader.onload = (e) => {
          resolve(e.target?.result as string);
        };
        fileReader.onerror = (e) => {
          reject(e);
        };
      });
      await uploadString(storageReference, dataUrl, 'data_url');

      const downloadURL = await getDownloadURL(storageReference);

      await set(userRef, {
        name: credentials.updatedName.trim(),
        email: user.email.trim().toLowerCase(),
        photoURL: downloadURL,
      });

      updatedUserData.photoURL = downloadURL;
    } else {
      await set(userRef, {
        name: credentials.updatedName.trim(),
        email: user.email.trim().toLowerCase(),
        photoURL: currentPhotoURL,
      });

      updatedUserData.photoURL = currentPhotoURL;
    }

    toast.success('Profile updated successfully', {
      position: 'bottom-right',
    });

    return updatedUserData;
  } catch (error: any) {
    toast.error('Failed to update profile', {
      position: 'bottom-right',
    });
    console.error('Error updating profile:', error);
    return thunkApi.rejectWithValue(error.message);
  }
});
