import styled from "styled-components";
import ArrowBackIcon from "./images/arrow_back_icon.svg";
/*
styled.div`
    
    `,
*/

const controlCss = {
  HeaderBlock: styled.div`
    height: 7.48vh;
    width: 100%;
    display: flex;
    align-items: center;
    background: #f6f6f6;
  `,
  ArrowBack: styled.div`
    margin: 0 2.93vh 0 2.06vh;
    height: 2.38vh;
    width: 2.38vh;
    background-image: url("${ArrowBackIcon}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &:hover {
      cursor: pointer;
    }
  `,
  HeaderBlockName: styled.div`
    color: #14181f;
    font-family: SourceSansPro;
    font-size: 2.22vh;
    font-style: normal;
    font-weight: 600;
    line-height: 2.93vh;
    letter-spacing: 0.02vh;
  `,
  LoadWrapper: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #fff;
  `,
  LoadContainer: styled.div`
    margin-top: 0.65vh;
    height: 51.79vh;
    width: 121.45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.47vh;
    border: 0.12vh solid #edeff2;

    background: #fff;
  `,
  TextBlock: styled.div`
    color: #6f7276;
    height: 2.49vh;
    width: ${(props) => props?.width && props.width}%;
    font-family: SourceSansPro;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01vh;
  `,
  NameContainer: styled.div`
    height: 7.37vh;
    width: 46.37vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  InputBlock: styled.input`
    height: 3.90vh;
    width: 25.68vh;
    padding: 1.08vh;
    border-radius: 0.98vh;
    border: 0.11vh solid #cfd0d1;
    background: #fff;
    font-size: 1.73vh;
    &:focus {
      outline: none;
    }
  `,
  ImageContainer: styled.div`
    margin-top: 1.95vh;
    height: 7.37vh;
    width: 46.37vh;
    display: flex;

    & > div {
      margin-right: 2.17vh;
    }
  `,
  ImageLabel: styled.label`
    &:hover {
      cursor: pointer;
    }
  `,
  ImageBlock: styled.div`
    width: 6.18vh;
    height: 7.15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("${(props) => props?.bgimg && props.bgimg}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100%;

    &:hover {
      cursor: ${(props) => props?.cursor && props.cursor};
    }
  `,
  VideoContainer: styled.div`
    margin-top: 2.17vh;
    height: 21.24vh;
    width: 46.37vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  VideoBlock: styled.div`
    margin-top: 3.14vh;
    height: 15.60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.65vh;
    border: 0.11vh solid #286eeb;
  `,
  ChooseVideoButton: styled.label`
    margin-top: 2.60vh;
    padding: 0.76vh 1.95vh;
    border-radius: 0.98vh;
    background: #286eeb;
    color: #fff;
    font-family: SourceSansPro;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.02vh;

    &:hover {
      cursor: pointer;
    }
  `,
  InputVideoContainer: styled.input`
    margin-top: 2.06vh;
    height: 3.90vh;
    width: 40.95vh;
    padding: 1.08vh;
    border-radius: 0.98vh;
    font-size: 1.73vh;
    border: 0.11vh solid #cfd0d1;
    background: #fff;

    &:focus {
      outline: none;
    }
  `,

  ButtonsContainer: styled.div`
    border-top-color: #edeff2;
    border-top-style: solid;
    border-top-width: 0.11vh;
    width: 100%;
    height: 8.67vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2.93vh;
  `,
  ButtonBlock: styled.div`
    height: 4.01vh;
    margin-right: 1.63vh;
    padding: 0px 1.95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.98vh;
    background: ${props => props.bgcolor};

    &:hover {
      cursor: pointer;
    }
  `,
  ButtonIcon: styled.div`
    margin-right: 0.33vh;
    height: 1.95vh;
    width: 1.95vh;
    background-image: url("${(props) => props?.bgimg && props.bgimg}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `,
  ButtonText: styled.div`
    height: 1.95vh;
    color: #fff;
    text-align: center;
    font-family: SourceSansPro;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.02vh;
  `,
};

export default controlCss;
