import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSignUpInfo } from 'app/data/slices/signupSlice';
import { InputControl } from 'view/common/InputControl';
import { Button } from 'view/common/Button';
import { formSchema } from './schema';

import * as S from './styles';

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    criteriaMode: 'all',
  });

  const handleOnSubmit = (data) => {
    dispatch(updateSignUpInfo(data));
    navigate('/more-info');
  };

  const nameField = register('name', { required: true });
  const emailField = register('email', { required: true });
  const passwordField = register('password', { required: true });

  return (
    <>
      <header>
        <h1>Sign Up</h1>
      </header>
      <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputControl
          errors={errors}
          label="First Name"
          placeholder="First Name"
          type="text"
          {...nameField}
        />
        <InputControl
          errors={errors}
          label="E-mail"
          placeholder="Email Address"
          type="text"
          {...emailField}
        />
        <InputControl
          errors={errors}
          label="Password"
          placeholder="Password"
          type="password"
          {...passwordField}
        />
        <S.ActionFooter>
          <Button type="submit">Next</Button>
        </S.ActionFooter>
      </S.Form>
    </>
  );
};
