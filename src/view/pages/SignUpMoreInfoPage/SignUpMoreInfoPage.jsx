import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetchColorsQuery } from 'app/api/baseApi';
import { selectSignupHasBasicInfo } from 'app/data/selectors/selectSignupHasBasicInfo';
import { selectSignUp } from 'app/data/selectors/selectSignup';
import { updateSignUpInfo } from 'app/data/slices/signupSlice';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'view/common/Button';
import { CheckboxControl } from 'view/common/CheckboxControl';
import { SelectControl } from 'view/common/SelectControl';
import { ColorSelectSkeleton } from './ColorSelectSkeleton';
import { formSchema } from './schema';

import * as S from './styles';

export const SignUpMoreInfoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupValues = useSelector(selectSignUp);
  const hasBasicInfo = useSelector(selectSignupHasBasicInfo);
  const { isLoading, data: colors = [] } = useFetchColorsQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    criteriaMode: 'all',
    defaultValues: signupValues
  });

  const handleOnSubmit = (data) => {
    dispatch(updateSignUpInfo(data));
    navigate('/confirmation');
  };

  const handleOnReturn = () => {
    navigate('/');
  };

  const colorField = register('color', { required: true });
  const termsField = register('terms', { required: true });

  if (!hasBasicInfo) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      <header>
        <h1>Additional Info</h1>
      </header>

      <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
        {isLoading ? (
          <ColorSelectSkeleton />
        ) : (
          <SelectControl
            defaultValue="-default-"
            errors={errors}
            label="Select your favorite color"
            {...colorField}
          >
            <option disabled value="-default-">
              Select a color...
            </option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </SelectControl>
        )}

        <CheckboxControl
          errors={errors}
          label="I agree to Terms and Conditions"
          type="checkbox"
          {...termsField}
        />
        <S.ActionFooter>
          <Button onClick={handleOnReturn} type="button" variant="outlined">
            Back
          </Button>
          <Button disabled={isLoading} type="submit">
            Next
          </Button>
        </S.ActionFooter>
      </S.Form>
    </>
  );
};
