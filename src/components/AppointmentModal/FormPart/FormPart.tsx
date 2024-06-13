import { Controller, useForm } from 'react-hook-form';
// import { format } from 'date-fns';
import { setIsAppointmentOpen } from '../../../redux/modals/modalsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { TimePicker } from '../TimePicker/TimePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentSchema } from '../../../schemas/appointmentSchema';
import { AppointmentFormData } from './FormPart.types';
import { Button } from '../../Parts/Button/Button';

export const FormPart = () => {
  const defaultValues: AppointmentFormData = {
    address: '',
    tel: '',
    childAge: '',
    date: null,
    email: '',
    parentName: '',
    comment: '',
  };

  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(appointmentSchema),
  });

  const onSubmit = (data) => {
    // const formattedData = {
    //   ...data,
    //   date: data.date ? format(data.date, 'dd-MM-yyyy') : null,
    // };
    console.log(data);
    dispatch(setIsAppointmentOpen(false));
  };

  return (
    <form
      className="flex min-w-[292px] max-w-[600px] flex-col xs:gap-2 md:gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
        <label className="relative w-full" htmlFor="address">
          <input
            className="w-full rounded-[12px] border border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base"
            id="address"
            placeholder="Address"
            type="text"
            {...register('address')}
          />
          {errors.address && (
            <p className="absolute text-center text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </label>
        <label className="relative w-full" htmlFor="tel">
          <input
            className="w-full rounded-[12px] border border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base"
            id="tel"
            placeholder="+380"
            type="tel"
            {...register('tel')}
          />
          {errors.tel && (
            <p className="absolute text-sm text-red-500">
              {errors.tel.message}
            </p>
          )}
        </label>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
        <label className="relative" htmlFor="childAge">
          <input
            className="w-full rounded-[12px] border border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base xs:min-w-[292px] md:w-[246px]"
            id="childAge"
            placeholder="Child's age"
            type="text"
            {...register('childAge')}
          />
          {errors.childAge && (
            <p className="absolute text-sm text-red-500">
              {errors.childAge.message}
            </p>
          )}
        </label>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <TimePicker selected={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <label className="relative w-full" htmlFor="email">
        <input
          className="w-full rounded-[12px] border border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base"
          id="email"
          placeholder="Email"
          type="text"
          {...register('email')}
        />
        {errors.email && (
          <p className="absolute text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </label>
      <label className="relative w-full" htmlFor="parentName">
        <input
          className="w-full rounded-[12px] border-[1px] border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base"
          id="parentName"
          placeholder="Father's or mother's name"
          type="text"
          {...register('parentName')}
        />
        {errors.parentName && (
          <p className="absolute text-sm text-red-500">
            {errors.parentName.message}
          </p>
        )}
      </label>
      <label htmlFor="comment">
        <textarea
          className="h-[116px] w-full resize-none rounded-[12px] border border-skin-grey border-opacity-20 px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base"
          id="comment"
          placeholder="Comment"
          {...register('comment')}
        />
        {errors.comment && (
          <p className="absolute text-sm text-red-500">
            {errors.comment.message}
          </p>
        )}
      </label>
      <Button
        className="mt-4 border border-transparent text-skin-inverted hover:border-skin-primary hover:border-opacity-40 hover:bg-skin-background-fullWhite"
        text="Send"
        type="submit"
      />
    </form>
  );
};
