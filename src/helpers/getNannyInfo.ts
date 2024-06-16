import { Nanny } from 'nannies/nannies.types';

export const getNannyInfo = (nanny: Nanny) => {
  function calculateAge(birthday: string) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age.toString();
  }

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return [
    { title: 'Age: ', value: calculateAge(nanny.birthday) },
    { title: 'Experience: ', value: nanny.experience },
    { title: 'Kids age: ', value: nanny.kids_age },
    {
      title: 'Characters: ',
      value: capitalizeWords(nanny.characters.join(', ')),
    },
    { title: 'Education: ', value: nanny.education },
  ];
};

export const getNannyAdditionalInfo = (nanny: Nanny) => {
  return [
    { title: 'Location', value: nanny.location, icon: 'pin' },
    { title: 'Rating:', value: nanny.rating.toString(), icon: 'star' },
    {
      title: 'Price / 1 hour:',
      value: `$${nanny.price_per_hour.toString()}`,
      icon: '',
    },
  ];
};
