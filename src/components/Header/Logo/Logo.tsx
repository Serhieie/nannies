import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink className={'leading-[117%] xs:text-lg md:text-2xl'} to={'/'}>
      Nanny.Services
    </NavLink>
  );
};
