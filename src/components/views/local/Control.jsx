import React, { useEffect, useState } from "react";
import controlCss from "../../../styles/control.css";
import { mainStore } from "../../../store/MainStore";
import { observer } from "mobx-react";
import LoadIcon from "../../../styles/images/load_image.svg";
import PlusIcon from "../../../styles/images/plus_icon.svg";
import { apiController } from "../../../utils/apiControler";

const {
  HeaderBlock,
  ArrowBack,
  HeaderBlockName,
  LoadWrapper,
  LoadContainer,
  TextBlock,
  InputBlock,
  NameContainer,
  ImageContainer,
  ImageBlock,
  ImageLabel,
  VideoContainer,
  VideoBlock,
  ChooseVideoButton,
  InputVideoContainer,
  ButtonsContainer,
  ButtonBlock,
  ButtonIcon,
  ButtonText,
} = controlCss;

export const Control = observer(() => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [objectId, setObjectId] = useState(-1);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [description, setDescription] = useState("");

  const { currentMenuId, changedObject, changeMenuId } = mainStore;

  const EDIT_FILE_DATA = currentMenuId === 2;

  useEffect(() => {
    if (!EDIT_FILE_DATA) return;
    const { Title, Video, Image, Id, Description } = changedObject;
    setSelectedImage(Image);
    setObjectId(Id);
    setSelectedVideo(Video);
    setTitleInputValue(Title);
    setDescription(Description);
  }, []);

  const onChangeImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onChangeVideo = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedVideo(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onChangeTitleInput = (value) => {
    setTitleInputValue(value);
  };

  const onChangeVideoInput = (value) => {
    setDescription(value);
  };

  const onClickArrowBack = () => {
    changeMenuId(0);
  };

  const onClickAddObject = async () => {
    const object = {
      Video: selectedVideo,
      Title: titleInputValue,
      Image: selectedImage,
      Description: description,
    };

    await apiController.addContent(object);
    console.log("tz tz tz");
  };

  const OnClickUpdateObject = async () => {
    const object = {
      Id: objectId,
      Video: selectedVideo,
      Title: titleInputValue,
      Image: selectedImage,
      Description: description,
    };

    await apiController.changeContent(object);
  };

  const onClickDeleteContent = async () => {
    await apiController.deleteContent(objectId);
  };

  return (
    <React.Fragment>
      <HeaderBlock>
        <ArrowBack onClick={onClickArrowBack} />
        <HeaderBlockName>
          {EDIT_FILE_DATA
            ? `${titleInputValue} Изменение объекта`
            : "Добавление объекта"}
        </HeaderBlockName>
      </HeaderBlock>
      <LoadWrapper>
        <LoadContainer>
          <NameContainer>
            <TextBlock>Название</TextBlock>
            <InputBlock
              value={titleInputValue}
              onChange={(e) => onChangeTitleInput(e.target.value)}
            />
          </NameContainer>
          <ImageContainer>
            <TextBlock>Изображение</TextBlock>
            <ImageLabel htmlFor="imageInput">
              <ImageBlock bgimg={LoadIcon} cursor={"poiner"} />
            </ImageLabel>
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={onChangeImage}
              id={"imageInput"}
            />
            <ImageBlock bgimg={selectedImage !== null ? selectedImage : ""} />
          </ImageContainer>
          <VideoContainer>
            <TextBlock width={100}>Видео</TextBlock>
            <VideoBlock>
              <ChooseVideoButton htmlFor="videoInput">
                Выбор видео на ПК
              </ChooseVideoButton>
              <input
                style={{ display: "none" }}
                type="file"
                accept="video/*"
                onChange={onChangeVideo}
                id={"videoInput"}
              />
              <InputVideoContainer
                value={description}
                onChange={(e) => onChangeVideoInput(e.target.value)}
              />
            </VideoBlock>
          </VideoContainer>
          <ButtonsContainer>
            <ButtonBlock
              bgcolor={"#666"}
              onClick={EDIT_FILE_DATA ? OnClickUpdateObject : onClickAddObject}
            >
              <ButtonIcon bgimg={PlusIcon} />
              <ButtonText>
                {EDIT_FILE_DATA ? "Изменить объект" : "Добавить объект"}
              </ButtonText>
            </ButtonBlock>
            {EDIT_FILE_DATA && (
              <ButtonBlock bgcolor={"#DD5D6E"} onClick={onClickDeleteContent}>
                <ButtonText>Удалить объект</ButtonText>
              </ButtonBlock>
            )}
          </ButtonsContainer>
        </LoadContainer>
      </LoadWrapper>
    </React.Fragment>
  );
});
