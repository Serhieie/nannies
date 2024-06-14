import { Controller, useForm } from 'react-hook-form';
import { setIsAppointmentOpen } from '../../../redux/modals/modalsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { TimePicker } from '../TimePicker/TimePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentSchema } from '../../../schemas/appointmentSchema';
import { Button } from '../../Parts/Button/Button';
import { Input } from '../../Parts/Input/Input';
import {
  appointmentDefaultValues,
  appointmentInputsConfig,
} from '../appointmentInputCofig';

export const AppointmentForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: appointmentDefaultValues,
    resolver: yupResolver(appointmentSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setIsAppointmentOpen(false));
  };

  return (
    <form
      className={`custom-scrollbar xs:custom-grid-xs sm2:custom-grid grid min-w-[292px] max-w-[600px]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {appointmentInputsConfig.map(
        ({ id, type, placeholder, required, templateArea, labelClasses }) => (
          <Input
            key={id}
            register={register}
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
        className="mt-4 border border-transparent text-skin-inverted hover:border-skin-primary hover:border-opacity-40 hover:bg-skin-background-fullWhite"
        text="Send"
        type="submit"
        templateArea={true}
      />
    </form>
  );
};
