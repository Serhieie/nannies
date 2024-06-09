import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';

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
      </main>
    </>
  );
};
