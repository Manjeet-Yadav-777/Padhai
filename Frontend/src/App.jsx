import React from "react";
import AppRouter from "./routes/AppRouter";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
};

export default App;
