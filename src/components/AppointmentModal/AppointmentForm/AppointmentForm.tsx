import {
  Controller,
  Resolver,
  UseFormRegister,
  useForm,
} from 'react-hook-form';
import { setIsAppointmentOpen } from 'modalsState/modalsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { TimePicker } from '../TimePicker/TimePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentSchema } from '@/schemas/appointmentSchema';
import { Button } from 'components/Parts/Button/Button';
import { Input } from 'components/Parts/Input/Input';
import {
  appointmentDefaultValues,
  appointmentInputsConfig,
} from '../appointmentInputCofig';
import { clsx } from 'clsx';
import { AppointmentFormData } from './AppointmentForm.types';

export const AppointmentForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: appointmentDefaultValues,
    resolver: yupResolver(appointmentSchema) as Resolver<AppointmentFormData>,
  });

  const onSubmit = (data: AppointmentFormData) => {
    console.log(data);
    dispatch(setIsAppointmentOpen(false));
  };

  return (
    <form
      className={`grid min-w-[292px] max-w-[600px] custom-scrollbar xs:custom-grid-xs sm2:custom-grid`}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete={'off'}
    >
      {appointmentInputsConfig.map(
        ({ id, type, placeholder, required, templateArea, labelClasses }) => (
          <Input
            key={id}
            register={register as UseFormRegister<AppointmentFormData>}
            errors={errors}
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            templateArea={templateArea}
            labelClasses={labelClasses}
          />
        )
      )}
      <label style={{ gridArea: 'comment' }} htmlFor="comment">
        <textarea
          className={clsx(
            'h-[116px] w-full resize-none focus:outline-skin-primary active:outline-skin-primary',
            'rounded-[12px] border border-skin-grey border-opacity-20 bg-skin-background-white',
            'px-[18px] py-[15px] leading-[125%] placeholder:font-normal placeholder:text-skin-base',
            'hover:border-skin-primary focus:border-skin-primary active:border-skin-primary'
          )}
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
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <div className="w-full" style={{ gridArea: 'datePicker' }}>
            <TimePicker selected={field.value} onChange={field.onChange} />
          </div>
        )}
      />
      <Button
        className={clsx(
          'mt-4 border border-transparent text-skin-inverted hover:border-skin-primary',
          'hover:border-opacity-40 hover:bg-skin-background-fullWhite'
        )}
        text="Send"
        type="submit"
        templateArea={true}
      />
    </form>
  );
};
