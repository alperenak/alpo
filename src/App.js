import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Experiences from "./screens/Experiences/Experiences";
import { About } from "./screens/About/About";
import { HireMe } from "./screens/HireMe/HireMe";
import { Works } from "./screens/Works/Works";

const StyledAppWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 85%;
`;
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            component={() => {
              return (
                <>
                  <StyledAppWrapper>
                    <StyledApp>
                      <Home />
                      <Experiences />
                      <Works />
                      <About />
                      <HireMe />
                    </StyledApp>
                  </StyledAppWrapper>
                </>
              );
            }}
            path="/"
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
