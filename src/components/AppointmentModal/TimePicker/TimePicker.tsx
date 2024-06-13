import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../assets/sprite.svg';

export const TimePicker = ({ selected, onChange }) => {
  const startDate = new Date();

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      className={
        'min-h-[52px] min-w-[292px] rounded-[12px] border-[1px] border-skin-grey border-opacity-20 px-[18px] py-4 leading-[125%] placeholder:font-normal placeholder:text-skin-base md:min-w-[246px]'
      }
      showIcon
      toggleCalendarOnIconClick
      closeOnScroll={(e) => e.target === document}
      showTimeSelect
      showTimeSelectOnly
      timeCaption="Time"
      dateFormat="h:mm aa"
      timeIntervals={15}
      placeholderText="Booking date"
      calendarStartDay={1}
      startDate={startDate}
      icon={
        <svg
          className="right-1 top-1/2 -translate-y-1/2 fill-transparent stroke-skin-base-text"
          width={20}
          height={20}
        >
          <use href={`${sprite}#icon-clock`}></use>
        </svg>
      }
    />
  );
};
