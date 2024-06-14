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
        'sm2:min-w-fit min-h-[52px] w-full rounded-[12px] border-[1px] border-skin-grey border-opacity-20 leading-[125%] placeholder:font-normal placeholder:text-skin-base'
      }
      showIcon
      toggleCalendarOnIconClick
      showTimeSelect
      showTimeSelectOnly
      timeCaption="Meeting time"
      dateFormat="HH : mm"
      timeFormat={'HH  :  mm'}
      timeIntervals={30}
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
