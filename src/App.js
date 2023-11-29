import './styles.css'
import React, { useEffect } from "react";
import { pagesStore, PAGES_NAMES } from "./store/PagesStore";
import { observer } from "mobx-react";
import Auth from "./components/pages/Auth";
import Main from "./components/pages/Main";

const App = observer(() => {
  const { page } = pagesStore;

  useEffect(() => {
    window.vh = (pixels) => {
      const vh = Math.max(923 || 0, 923 || 0);
      const result = (pixels / vh) * 100;

      return `${result.toFixed(2)}vh`;
    };
  }, []);

  switch (page) {
    case PAGES_NAMES.Auth:
      return <Auth />;
    case PAGES_NAMES.Main:
      return <Main />;
    default:
      return <p>This page not found</p>;
  }
});

export default App;
