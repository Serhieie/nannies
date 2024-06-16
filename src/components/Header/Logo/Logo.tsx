import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink
      className={
        'z-50 text-2xl leading-[117%] transition-all duration-300 hover:scale-105 xs:mb-2 sm:mb-0'
      }
      to={'/'}
    >
      Nanny.Services
    </NavLink>
  );
};
