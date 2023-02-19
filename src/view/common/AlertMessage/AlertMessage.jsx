import { XOctagonIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";

import * as S from "./styles";

const SEVERITY_ICONS = {
  error: XOctagonIcon,
  success: CheckCircle,
};

export const AlertMessage = ({ severity, message }) => {
  const Icon = SEVERITY_ICONS[severity];

  return (
    <S.Container data-severity={severity}>
      <S.IconWrapper>
        <Icon size={32} />
      </S.IconWrapper>
      <S.MessageWrapper>{message}</S.MessageWrapper>
    </S.Container>
  );
};
