import React, { useState } from "react";
import objectsListCss from "../../../styles/objectsList.css";
import { mainStore } from "../../../store/MainStore";
import { observer } from "mobx-react";

import IDIcon from "../../../styles/images/id_icon.svg";
import ImageIcon from "../../../styles/images/image_icon.svg";
import EditIcom from "../../../styles/images/edit_icon.svg";

const {
  HeaderBlock,
  HeaderSearchBlock,
  ContentBlock,
  SearchBlock,
  HeaderSearchIconBlock,
  HeaderSearchIcon,
  HeaderSearchInput,
  HeaderSearchSymbol,

  TableBlock,
  TableLine,
  TableCell,
  TableCellContent,

  FooterBlock,
  FooterContent,
  PagesAmount,
  PagesFrom,
  PagesBlock,
  NumberPageBlock,
  ArrowIcon,
} = objectsListCss;

const DEAFULT_ARROW_TYPES = {
  left: "left",
  right: "right",
};

const SelectOptions = [
  { label: "10/page", value: 10 },
  { label: "12/page", value: 12 },
  { label: "15/page", value: 15 },
];

const MaxAmountPages = 6;

export const ObjectsList = observer(() => {
  const [objectsOnPage, setObjectsOnPage] = useState(10);
  const [objectsPage, setObjectsPage] = useState(0);

  const {
    serachInputValue,
    onChangeSearchInputValue,
    objectsArray,
    setChangedObject,
    changeMenuId,
  } = mainStore;

  const totalPages = Math.ceil(objectsArray.length / objectsOnPage);

  const getObjectsFromArray = () => {
    const startFrom = objectsOnPage * objectsPage;
    const viewObjectsArrayFilter = objectsArray.filter((object, idx) => {
      if (object.Title.includes(serachInputValue)) {
        return object;
      }
    });
    const viewObjectsArray = viewObjectsArrayFilter.slice(
      startFrom,
      startFrom + objectsOnPage
    );

    const pagesInfo = getPagesFromTo(viewObjectsArrayFilter);
    const numberPages = getNumericPages();

    return {
      viewObjectsArray: viewObjectsArray.map((object, idx) => {
        const { Id, Image, Description, Title, Video } = object;

        return (
          <TableLine height={"52px"} key={Id} hover={'hover'}>
            <TableCell width={"66px"}>{Id}</TableCell>
            <TableCell width={"61px"}>
              <TableCellContent bgimg={Image} />
            </TableCell>
            <TableCell width={"140px"}>{Description}</TableCell>
            <TableCell width={"161px"}>{Title}</TableCell>
            <TableCell width={"300px"}>{Video}</TableCell>
            <TableCell width={"80px"}>
              <TableCellContent
                bgimg={EditIcom}
                cursor={"pointer"}
                onClick={() => onClickChangeObject(object)}
              />
            </TableCell>
          </TableLine>
        );
      }),
      pagesInfo: pagesInfo,
      numbericPages: numberPages,
    };
  };

  const generateOptionsObjectsAmount = () => {
    return SelectOptions.map((option, idx) => {
      return (
        <option value={option.value} key={idx}>
          {option.label}
        </option>
      );
    });
  };

  const onChangeOptionObjectsAmount = (e) => {
    setObjectsOnPage(+e.target.value);
  };

  const getPagesFromTo = (array) => {
    let currentMinId = objectsPage * objectsOnPage + 1;
    let currentMaxId = (objectsPage + 1) * objectsOnPage;
    return `${currentMinId}-${currentMaxId} from ${array.length}`;
  };

  const getNumericPages = () => {
    const visiblePages = 6;
    const startPage = Math.max(0, objectsPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages - 1, startPage + visiblePages - 1);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number, idx) => (
      <React.Fragment key={idx}>
        {idx === 5 && <NumberPageBlock>...</NumberPageBlock>}
        <NumberPageBlock
          onClick={() => setObjectsPage(number)}
          border={number === +objectsPage ? 'true' : 'false'}
        >
          {number + 1}
        </NumberPageBlock>
      </React.Fragment>
    ));
  };

  const onClickArrow = (type) => {
    if (type === DEAFULT_ARROW_TYPES.left && objectsPage > 0) {
      setObjectsPage((prev) => prev - 1);
    } else if (
      type === DEAFULT_ARROW_TYPES.right &&
      objectsPage < totalPages - 1
    ) {
      setObjectsPage((prev) => prev + 1);
    }
  };

  const onClickChangeObject = (object) => {
    setChangedObject(object);
    changeMenuId(2);
  };

  const { viewObjectsArray, pagesInfo, numbericPages } = getObjectsFromArray();

  return (
    <React.Fragment>
      <HeaderBlock>
        <HeaderSearchBlock>
          <HeaderSearchIconBlock>
            <HeaderSearchIcon />
          </HeaderSearchIconBlock>
          <HeaderSearchInput
            placeholder="Поиск объекта"
            value={serachInputValue}
            onChange={(e) => onChangeSearchInputValue(e.target.value)}
          />
          <HeaderSearchSymbol>/</HeaderSearchSymbol>
        </HeaderSearchBlock>
      </HeaderBlock>
      <TableBlock>
        <TableLine height={"40px"} bgcolor={"#D7E4EE"} userselect={"none"}>
          <TableCell width={"66px"}>
            <TableCellContent bgimg={IDIcon} />
          </TableCell>
          <TableCell width={"61px"}>
            <TableCellContent bgimg={ImageIcon} />
          </TableCell>
          <TableCell width={"140px"}>ID</TableCell>
          <TableCell width={"161px"}>Название</TableCell>
          <TableCell width={"300px"}>Видео</TableCell>
        </TableLine>
        {viewObjectsArray}
      </TableBlock>
      <FooterBlock>
        <FooterContent>
          <PagesAmount onChange={onChangeOptionObjectsAmount}>
            {generateOptionsObjectsAmount()}
          </PagesAmount>
          <PagesFrom>{pagesInfo}</PagesFrom>
          <PagesBlock>
            <NumberPageBlock
              onClick={() => onClickArrow(DEAFULT_ARROW_TYPES.left)}
            >
              <ArrowIcon rotate={0} />
            </NumberPageBlock>

            {numbericPages}

            <NumberPageBlock
              onClick={() => onClickArrow(DEAFULT_ARROW_TYPES.right)}
            >
              <ArrowIcon rotate={180} />
            </NumberPageBlock>
          </PagesBlock>
        </FooterContent>
      </FooterBlock>
    </React.Fragment>
  );
});
