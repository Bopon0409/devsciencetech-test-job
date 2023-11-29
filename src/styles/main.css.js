import styled from "styled-components";
import NotificationIcon from "./images/notification_icon.svg";
import ArrowIcon from "./images/arrow_icon.svg";
import MoreInfoIcon from "./images/more_info_icon.svg";

const mainStyles = {
  MainWrapper: styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #e9e9ed;
  `,
  LeftMenuBlock: styled.div`
    height: 100%;
    width: 16.32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.65vh;
    background: #fff;
    box-sizing: border-box;
    // border: 1px solid #7C7B84;
  `,
  LeftMenuContent: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  RoleBlock: styled.div`
    margin: 2.93vh 0;
    height: 4.12vh;
    width: 23.62vh;
    display: flex;
    flex-direction: column;
    jusify-content: space-between;
  `,
  BlockName: styled.div`
    color: #000;
    font-family: Inter;
    font-size: 1.46vh;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.01vh;
  `,
  RoleName: styled.div`
    color: #8a8a8a;
    font-family: Inter;
    font-size: 1.25vh;
    font-style: normal;
    font-weight: 400;
  `,
  NotificationsBlock: styled.div`
    height: 3.36vh;
    width: 23.62vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  `,
  NotificationIcon: styled.div`
    height: 2.06vh;
    width: 2.06vh;
    background-image: url("${NotificationIcon}");
    background-size: cover;
    background-position: 100% 100%;
  `,
  NotificationText: styled.div`
    color: #7c7b84;
    font-family: Inter;
    font-size: 1.46vh;
    font-style: normal;
    font-weight: 400;
    height: 1.73vh;
    width: 14.95vh;
  `,
  NotificationsAmount: styled.div`
    height: 1.84vh;
    padding: 0 0.42vh;
    background-color: #e92e50;
    border-radius: 0.22vh;
    font-size: 1.25vh;
    color: #fff;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.73vh;
  `,
  Line: styled.div`
    margin: 1.63vh 0;
    height: 0.11vh;
    width: 100%;
    background: #e2e1e7;
  `,
  MenuBlock: styled.div`
    width: 23.73vh;
    height: 56.34vh;
    display: flex;
    flex-direction: column;
  `,
  MenuBlockName: styled.div`
    height: 1.84vh;
    width: 23.73vh;
    display: flex;
    justify-content: space-between;
  `,
  MenuName: styled.div`
    color: #7c7b84;
    font-family: Inter;
    font-size: 1.25vh;
    font-style: normal;
    font-weight: 500;
  `,
  HideMenuIcon: styled.div`
    height: 100%;
    width: 1.63vh;
    transform: rotate(${(props) => props.rotate}deg);
    background-image: url("${ArrowIcon}");
    background-size: cover;
    background-position: 100% 100%;

    &:hover {
      cursor: pointer;
    }
  `,
  MenuElement: styled.div`
    margin-top: 0.76vh;
    height: 3.36vh;
    width: 23.73vh;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.backgroundcolor};

    &:hover {
      cursor: pointer;
    }
  `,
  MenuElementIcon: styled.div`
    height: 2.17vh;
    width: 2.17vh;
    margin: 0 1.3vh;
    background-image: ${(props) => props.backgroundimage};
    background-size: cover;
    background-position: 100% 100%;
  `,
  MenuElementText: styled.div`
    font-size: 1.52vh;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 2.06vh;
    user-select: none;
  `,
  TextBlock: styled.div`
    font-family: Inter;
    color: ${(props) => (props?.color ? props.color : "#7C7B84")};
    font-size: ${(props) => props?.fontSize && props.fontSize};
    font-weight: ${(props) => props?.fontWeight && props.fontWeight};
    font-style: ${(props) => props?.fontStyle && props.fontStyle};
  `,
  UserBlock: styled.div`
    height: 8.56vh;
    width: 100%;
    display: flex;
    align-items: center;
    background: #f6f6f6;
  `,
  UserIcon: styled.div`
    margin: 0 3.79vh 0 1.63vh;
    height: 5.2vh;
    width: 5.2vh;
    border-radius: 1.08vh;
    background-color: black;
  `,
  UserNameBlock: styled.div`
    height: 3.9vh;
    width: 11.38vh;
    display: flex;
    flex-direction: column;
    font-family: Inter;
  `,
  UserName: styled.div`
    height: 2.06vh;
    width: 100%;
    color: #000;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01vh;
  `,
  UserRole: styled.div`
    height: 1.84vh;
    width: 100%;
    color: #7C7B84;
    font-size: 1.25vh;
    font-style: normal;
    font-weight: 400;
    line-height: 1.84vh;
    letter-spacing: 0.01vh;
  `,
  MoreInfoIcon: styled.div`
    margin-left: 1.3vh;
    height: 2.06vh;
    width: 2.06vh;
    background-image: url("${MoreInfoIcon}");
    background-size: cover;
    background-position: center;

    &:hover {
      cursor: pointer;
    }
  `,

  RightBlock: styled.div`
    width: 83.68%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e9e9ed;
    font-family: Inter;
  `,
  ContentBlock: styled.div``,
};

export default mainStyles;
