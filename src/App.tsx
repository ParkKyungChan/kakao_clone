import React, {useState} from "react";
import GNB from "./components/GNB";
import MainPage from "./pages/MainPage";
import styled from "styled-components";

function App() {
  const [isDateOn, setIsDateOn] = useState<boolean>(true);
  return (
    <>
      <GNB isDateOn={isDateOn} />
      <MainPage setIsDateOn={setIsDateOn}></MainPage>
    </>
  );
}

export default App;
