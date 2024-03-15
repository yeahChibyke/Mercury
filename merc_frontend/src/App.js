import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import BgVideo from "./components/BgVideo/BgVideo";

function App() {
  return (
    <>
      <BgVideo>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </BgVideo>
    </>
  );
}

export default App;
