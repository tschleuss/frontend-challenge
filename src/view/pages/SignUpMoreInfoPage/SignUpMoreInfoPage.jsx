import { yupResolver } from "@hookform/resolvers/yup";
import { useFetchColorsQuery } from "app/api/baseApi";
import { updateSignUpInfo } from "app/data/slices/signupSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "view/common/Button";
import { CheckboxControl } from "view/common/CheckboxControl";
import { SelectControl } from "view/common/SelectControl";
import { ColorSelectSkeleton } from "./ColorSelectSkeleton";
import { formSchema } from "./schema";

import * as S from "./styles";

export const SignUpMoreInfoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, data: colors = [] } = useFetchColorsQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    criteriaMode: "all",
  });

  const handleOnSubmit = (data, event) => {
    dispatch(updateSignUpInfo(data));
    navigate("/confirmation");
  };

  const handleOnReturn = () => {
    navigate("/");
  };

  const colorField = register("color", { required: true });
  const termsField = register("terms", { required: true });

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
            label="Select your favorite color"
            defaultValue="-default-"
            errors={errors}
            {...colorField}
          >
            <option value="-default-" disabled>
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
          type="checkbox"
          label="I agree to Terms and Conditions"
          errors={errors}
          {...termsField}
        />
        <S.ActionFooter>
          <Button type="button" variant="outlined" onClick={handleOnReturn}>
            Back
          </Button>
          <Button type="submit" disabled={isLoading}>
            Next
          </Button>
        </S.ActionFooter>
      </S.Form>
    </>
  );
};
