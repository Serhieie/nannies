import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NoPage } from './pages/NoPage/NoPage';
import PrivateRoute from './redirect/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('./pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() => import('./pages/Favorites/Favorites'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/">
              <FavoritesPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
