import { Outlet } from "react-router-dom";
import { Card } from "view/common/Card";
import * as S from "./styles";

export const SignUpLayout = () => (
  <S.Container>
    <S.CardWrapper>
      <Card>
        <Outlet />
      </Card>
    </S.CardWrapper>
  </S.Container>
);
