import React, { useState } from "react";
import mainStyles from "../../styles/main.css";
import { mainStore } from "../../store/MainStore";

import ObjectsIcon from "../../styles/images/objects_icon.svg";
import ControlIcon from "../../styles/images/control_icon.svg";
import { observer } from "mobx-react";
import { ObjectsList } from "../views/local/ObjectsList";
import { Control } from "../views/local/Control";

const {
  MainWrapper,
  LeftMenuBlock,
  RoleBlock,
  BlockName,
  RoleName,
  NotificationsBlock,
  NotificationIcon,
  NotificationText,
  NotificationsAmount,
  Line,
  MenuBlock,
  MenuBlockName,
  MenuName,
  HideMenuIcon,
  MenuElement,
  MenuElementIcon,
  MenuElementText,
  LeftMenuContent,
  UserBlock,

  TextBlock,
  ContentBlock,

  UserIcon,
  UserNameBlock,
  UserName,
  UserRole,
  MoreInfoIcon,

  RightBlock,
} = mainStyles;

const MENU_PAGES = {
  Objects: {
    id: 0,
    name: "Объекты",
    icon: ObjectsIcon,
  },
  Conrol: {
    id: 1,
    name: "Управление",
    icon: ControlIcon,
  },
};

const Main = observer(() => {
  const [hideMenu, setHideMenu] = useState(false);

  const { currentMenuId, changeMenuId } = mainStore;

  const onClickHideMenu = () => {
    setHideMenu(!hideMenu);
  };

  const onClickMenuEl = (id) => {
    changeMenuId(id);
  };

  const createMenuPages = () => {
    return Object.keys(MENU_PAGES).map((value) => {
      const MenuEl = MENU_PAGES[value];
      return (
        <MenuElement
          key={MenuEl.id}
          onClick={() => onClickMenuEl(MenuEl.id)}
          backgroundcolor={currentMenuId === MenuEl.id ? "#F6F6F6" : "#FFF"}
        >
          <MenuElementIcon backgroundimage={`url("${MenuEl.icon}")`} />
          <MenuElementText>{MenuEl.name}</MenuElementText>
        </MenuElement>
      );
    });
  };

  const renderCurrentMenuPage = () => {
    switch (currentMenuId) {
      case 0:
        return <ObjectsList />;
      case 1:
        return <Control />;
      case 2:
        return <Control />;
    }
  };

  return (
    <MainWrapper>
      <LeftMenuBlock>
        <LeftMenuContent>
          <RoleBlock>
            <BlockName>AR admin</BlockName>
            <RoleName>Администратор</RoleName>
          </RoleBlock>
          <NotificationsBlock>
            <NotificationIcon />
            <NotificationText>Уведомления</NotificationText>
            <NotificationsAmount>0</NotificationsAmount>
          </NotificationsBlock>
          <Line />
          <MenuBlock>
            <MenuBlockName>
              <MenuName>Основное</MenuName>
              <HideMenuIcon
                onClick={onClickHideMenu}
                rotate={hideMenu ? 180 : 0}
              />
            </MenuBlockName>
            {!hideMenu && createMenuPages()}
          </MenuBlock>
        </LeftMenuContent>
        <UserBlock>
          <UserIcon />
          <UserNameBlock>
            <UserName>{"Алексей"}</UserName>
            <UserRole>{"Admin"}</UserRole>
          </UserNameBlock>
          <MoreInfoIcon />
        </UserBlock>
      </LeftMenuBlock>

      <RightBlock>{renderCurrentMenuPage()}</RightBlock>
    </MainWrapper>
  );
});

export default Main;
