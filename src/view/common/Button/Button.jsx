import { colors } from "app/theme/tokens";
import { LoadingSpinner } from "../LoadingSpinner";

import * as S from "./styles";

export const Button = ({
  onClick,
  children,
  variant = "contained",
  type = "button",
  disabled = false,
  loading = false,
}) => (
  <S.Button
    type={type}
    onClick={onClick}
    disabled={disabled || loading}
    data-variant={variant}
  >
    {loading ? (
      <LoadingSpinner color={colors.white} size={24} thickness={3} />
    ) : (
      children
    )}
  </S.Button>
);
