import styled from "styled-components";
import SearchIcon from "./images/search_icon.svg";
import ArrowIcon from "./images/arrow.svg";
// console.log(SearchIcon)

const objectsListCss = {
  HeaderBlock: styled.div`
    width: 100%;
    height: 7.48vh;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
  `,
  HeaderSearchBlock: styled.div`
    height: 3.36vh;
    width: 57.42vh;
    background-color: #fff;
    border-radius: 1.08vh;
    margin-left: 8.56vh;
    display: flex;
    align-items: center;
  `,
  HeaderSearchIconBlock: styled.div`
    margin-left: 1.19vh;
    height: 2.6vh;
    width: 2.6vh;
    border-radius: 50%;
    background-color: rgba(217, 217, 217, 0.43);
  `,
  HeaderSearchIcon: styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${SearchIcon});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: 50%;
  `,
  HeaderSearchInput: styled.input`
    margin-left: 1.19vh;
    width: 44.96vh;
    height: 2.06vh;
    color: #505050;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03vh;
    border: none;
    &:focus {
      outline: none;
    }
  `,
  HeaderSearchSymbol: styled.div`
    margin-left: 3.58vh;
    height: 2.71vh;
    width: 2.71vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.65vh;
    background: rgba(217, 217, 217, 0.38);
  `,
  TableBlock: styled.div`
    min-height: 85.2vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
  `,
  TableLine: styled.div`
    width: 100%;
    height: ${(props) => props.height};
    display: flex;
    background: ${(props) => props?.bgcolor && props.bgcolor};
    user-select: ${(props) => props?.userselect && props.userselect};

    &:hover {
      background: ${(props) =>
        props.hover == "hover" &&
        "linear-gradient(0deg, rgba(38, 168, 241, 0.11) 0%, rgba(38, 168, 241, 0.11) 100%), #FFF"};
    }
  `,
  TableCell: styled.div`
    height: 100%;
    width: ${(props) => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TableCellContent: styled.div`
    height: 2.28vh;
    width: 2.28vh;
    background-image: url("${(props) => props?.bgimg && props.bgimg}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 100%;

    &:hover {
      cursor: ${(props) => props?.cursor && props.cursor};
    }
  `,

  FooterBlock: styled.div`
    width: 100%;
    height: 8.45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9e9ed;
  `,
  FooterContent: styled.div`
    height: 4.01vh;
    display: flex;
    align-items: center;
  `,
  PagesAmount: styled.select`
    width: 11.81vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #14181f;

    font-family: SourceSansPro;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 400;
    line-height: 2.49vh;
    letter-spacing: 0.01vh;

    border-radius: 0.98vh;
    border: 0.11vh solid #cfd0d1;

    background: #fff;

    &:focus {
      outline: none;
    }
  `,

  PagesFrom: styled.div`
    margin: 0 2.93vh;
    height: 2.49vh;

    color: #6f7276;

    text-align: right;
    font-size: 1.73vh;
    font-style: normal;
    font-weight: 400;
    line-height: 2.49vh;
    letter-spacing: 0.01vh;
  `,
  PagesBlock: styled.div`
    width: 43.45vh;
    height: 100%;
    display: flex;
  `,
  NumberPageBlock: styled.div`
    margin-right: 0.98vh;
    width: 3.9vh;
    height: 3.9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.98vh;
    border: ${(props) =>
      props?.border == 'true' ? "0.11vh solid #286EEB" : "0.11vh solid #e1e3e5"};

    &:hover {
      cursor: pointer;
    }
  `,
  ArrowIcon: styled.div`
    height: 2.93vh;
    width: 2.93vh;
    background-image: url("${ArrowIcon}");
    background-size: contain;
    transform: rotate(${(props) => props?.rotate && props.rotate}deg);
  `,
  ContentBlock: styled.div``,
  SearchBlock: styled.div``,
};

export default objectsListCss;
