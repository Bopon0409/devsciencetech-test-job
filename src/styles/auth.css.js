import styled from "styled-components";
import HidePass from "./images/hide_password.svg";

const authStyles = {
  WrapperContainer: styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f9f9f9;

    font-family: "SourceSansPro", sans-serif;
  `,
  LogoContainer: styled.div`
    position: relative;
    height: 6.93vh;
    width: 138.68vh;
    margin-top: 11.16vh;
    background-color: #f5f6f7;
    display: flex;
    align-items: center;
  `,
  LogoName: styled.span`
    margin-left: 1.63vh;
    color: #222;
    font-family: "SourceSansPro", sans-serif;
    font-size: 3.47vh;
    font-style: normal;
    font-weight: 600;
  `,
  AuthContainer: styled.div`
    margin: 13.86vh 0vh;
    padding: 3.465vh 0;
    width: 44.64vh;
    border-radius: 1.3vh;
    border: 0.09vh solid #edeff2;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  AuthContent: styled.div`
    width: 37.7vh;
    height: 30.77vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  AuthServiceName: styled.div`
    color: #222;
    font-family: "SourceSansPro", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 3.36vh;
    width: 100%;
  `,
  AuthInputContent: styled.div`
    height: 7.37vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  AuthInputName: styled.span`
    font-family: "SourceSansPro", sans-serif;
    color: #6f7276;
    font-size: 1.52vh;
    font-style: normal;
    font-weight: 400;
    line-height: 2.17vh;
    letter-spacing: 0.11vh;
  `,
  AuthInput: styled.input`
    width: 37.7vh;
    padding: 0.87vh 1.73vh;
    border-radius: 0.87vh;
    border: 0.11vh solid #cfd0d1;
    font-size: 1.73vh;
    border: ${(props) => props?.border && props.border};

    &:focus {
      outline: none;
      border: 0.11vh solid #cfd0d1;
    }
  `,
  AuthHidePassword: styled.div`
    position: absolute;
    top: 50%;
    right: 1.3vh;
    transform: translateY(-50%);
    cursor: pointer;
    height: 2.6vh;
    width: 2.6vh;
    z-index: 9999;
    background-image: url("${HidePass}");
    background-size: cover;
  `,
  AuthButton: styled.div`
    height: 4.33vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #666;
    border-radius: 0.87vh;
    letter-spacing: 0.11vh;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 600;
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  `,

  ErrorText: styled.span`
  margin-top: 2.6vh;
    color: #f00;
    font-family: SourceSansPro;
    font-size: 2.17vh;
    font-style: normal;
    font-weight: 400;
    line-height: 2.17vh;
    letter-spacing: 0.01vh;
  `,

  AboutContainer: styled.div`
    height: 6.5vh;
    width: 138.68vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 0.09vh solid #f5f6f7;
    background: #f5f6f7;
  `,
  AboutContent: styled.div`
    height: 100%;
    width: 28.82vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  AboutButton: styled.div`
    color: #666;
    font-family: "SourceSansPro", sans-serif;
    font-size: 1.55vh;
    font-style: normal;
    font-weight: 600;
    user-select: none;

    &:hover {
      cursor: pointer;
      color: blue;
    }
  `,
};

export default authStyles;
