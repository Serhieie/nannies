import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink
      className={'z-50 text-2xl leading-[117%] xs:mb-2 md:mb-0'}
      to={'/'}
    >
      Nanny.Services
    </NavLink>
  );
};
