import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import classes from "@/components/ui/forms/modal-forms/formModal.module.scss";
import FormInput from "@/components/ui/forms/modal-forms/modal-input/formInput";
import {
  passwordIconClass,
  passwordLabel,
  passwordLengthMessage,
  passwordMinLength,
  passwordRepeatLabel,
  passwordRepeatMessage,
  requiredFieldMessage,
} from "@/constants/constants";
import IUser from "@/types/iUser";
import { changePassword } from "@/shared/utils/apiRequests";
import useTypedSelector from "@/hooks/redux/useTypedSelector";

type Password = Pick<IUser, "password" | "passwordRepeat">;

const ChangePasswordForm: FC = () => {
  const [isModalActive, setModalActive] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = useTypedSelector((state) => state.auth.user!.id);
  const handleOpen = (): void => setModalActive(true);
  const handleClose = (): void => setModalActive(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm<Password>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Password> = async (userPassword: Password) => {
    type CurrentUser = Pick<IUser, "id" | "password">;
    const currentUser: CurrentUser = { id: userId, password: userPassword.password };
    await changePassword(currentUser);
    reset();
  };

  return (
    <>
      <Button text="Change password" type="button" onClick={handleOpen} />
      <Modal isActive={isModalActive} onClose={handleClose}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h4 className={classes.auth}>Change Password</h4>
          <FormInput
            label={passwordLabel}
            iconClass={passwordIconClass}
            type="password"
            register={register(passwordLabel, {
              required: requiredFieldMessage,
              minLength: {
                value: passwordMinLength,
                message: passwordLengthMessage,
              },
            })}
            errors={errors}
          />
          <FormInput
            label={passwordRepeatLabel}
            iconClass={passwordIconClass}
            type="password"
            register={register("passwordRepeat", {
              required: requiredFieldMessage,
              validate: (value) => value === getValues().password || passwordRepeatMessage,
            })}
            errors={errors}
          />
          <Button disabled={!isValid} text="Change Password" />
        </form>
      </Modal>
    </>
  );
};

export default ChangePasswordForm;
