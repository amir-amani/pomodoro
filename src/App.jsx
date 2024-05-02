import React from "react";
import { Routes , Route, Navigate} from "react-router-dom";

// Components
import Timer from "./components/Timer";

// Styles
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`



function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route path=":name" element={<Timer />} />
      </Route>
    </Routes>    
  )
}

export default App;
