import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from 'assets/sprite.svg';
import { clsx } from 'clsx';
import { TimePickerProps } from './TimePicker.types';

export const TimePicker: React.FC<TimePickerProps> = ({
  selected,
  onChange,
}) => {
  const startDate = new Date();

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      className={clsx(
        'min-h-[52px] focus:outline-skin-primary active:outline-skin-primary sm2:min-w-fit',
        'w-full rounded-[12px] border-[1px] border-skin-grey border-opacity-20 leading-[125%]',
        'placeholder:font-normal placeholder:text-skin-base hover:border-skin-primary',
        'bg-skin-background-white focus:border-skin-primary active:border-skin-primary'
      )}
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
