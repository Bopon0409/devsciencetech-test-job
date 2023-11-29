import React, { useEffect, useState } from "react";
import axios from "axios";
import { authStore } from "../../store/AuthStore";
import authStyles from "../../styles/auth.css";
import { observer } from "mobx-react";
import { PAGES_NAMES, pagesStore } from "../../store/PagesStore";
import { apiController } from "../../utils/apiControler";

const INPUT_TYPES = {
  login: "login",
  password: "password",
};

const {
  WrapperContainer,
  LogoContainer,
  LogoName,
  AuthContainer,
  AboutContainer,
  AboutContent,
  AboutButton,
  AuthServiceName,
  AuthContent,
  AuthInputName,
  AuthInputContent,
  AuthButton,
  AuthInput,
  AuthHidePassword,
  ErrorText,
} = authStyles;

const TIME_TO_CLEAR_ERRRO = 3000; //ms

const Auth = observer(() => {
  const [hide, setHide] = useState(true);
  const [authError, setAuthError] = useState(false);

  const { login, password, changeLogin, changePassword } = authStore;

  // ф-ия скрытия/показа пароля
  const onHideClick = () => {
    return hide ? setHide(false) : setHide(true);
  };

  // ф-ия изменения значения в инпуте
  const onChangeInput = (type, value) => {
    if (type === INPUT_TYPES.login) {
      changeLogin(value);
    } else if (type === INPUT_TYPES.password) {
      changePassword(value);
    }
  };

  // нажатие на кнопки "войти"
  const onClickAuth = async () => {
    const res = await apiController.authorize(login, password);
    console.log(res);

    if (res.code === 400) {
      setAuthError(true);
      let timer = setTimeout(() => {
        setAuthError(false);
        clearTimeout(timer);
      }, TIME_TO_CLEAR_ERRRO);
      return;
    }

    const { accessToken, refreshToken } = res;

    apiController.setAccessToken(accessToken);
    apiController.setRefreshToken(refreshToken);

    pagesStore.changePage(PAGES_NAMES.Main);
  };

  return (
    <WrapperContainer>
      <LogoContainer>
        <LogoName>AR Admin</LogoName>
      </LogoContainer>

      <AuthContainer>
        <AuthContent>
          <AuthServiceName>Вход в приложение</AuthServiceName>
          <AuthInputContent>
            <AuthInputName>Логин</AuthInputName>
            <AuthInput
              value={authStore.login}
              onChange={(event) =>
                onChangeInput(INPUT_TYPES.login, event.target.value)
              }
              border={authError ? "0.12vh solid #F00" : "0.11vh solid #cfd0d1"}
            />
          </AuthInputContent>

          <AuthInputContent>
            <AuthInputName>Пароль</AuthInputName>
            <div style={{ position: "relative" }}>
              <AuthInput
                value={authStore.password}
                type={hide ? "password" : "text"}
                onChange={(event) =>
                  onChangeInput(INPUT_TYPES.password, event.target.value)
                }
                border={
                  authError ? "0.12vh solid #F00" : "0.11vh solid #cfd0d1"
                }
              />
              <AuthHidePassword onClick={onHideClick} />
            </div>
          </AuthInputContent>

          <AuthButton onClick={onClickAuth}>Войти</AuthButton>
        </AuthContent>
        {authError && <ErrorText>Неверный логин или пароль</ErrorText>}
      </AuthContainer>

      <AboutContainer>
        <AboutContent>
          <AboutButton>Контактные данные</AboutButton>
          <AboutButton>FAQ</AboutButton>
        </AboutContent>
      </AboutContainer>
    </WrapperContainer>
  );
});

export default Auth;

// console.log("sdsad")
// const formData = {
//   login,
//   password,
// };
// try {

//   const res = await apiController.authorize(login, password);
//   console.log(res)

//   const response = await axios.post(
//     "http://86.57.194.20:5002/api/Home/login",
//     formData
//   );

// const response2 = await axios.get(
//   "http://86.57.194.20:5002/api/Content/GetContent",
//   {
//     headers: {
//       "Authorization": "Bearer " + sessionStorage.getItem("accessToken")
//     },
//     params: {
//       contentName: "q",
//     }
//   }
// );

// console.log(response2.data);

//   const resultData = response.data;
//   console.log(resultData);
