import { RecoilRoot } from "recoil";
import Router from "./Routes/Router";
import { GlobalStyle } from "./Styles/GlobalStyle";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
};

export default App;
