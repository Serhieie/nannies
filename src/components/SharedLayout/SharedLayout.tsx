import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const SharedLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      {!isHome && <Header />}
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme="colored"
        />
      </main>
    </>
  );
};
