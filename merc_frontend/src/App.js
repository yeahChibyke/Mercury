import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import BgVideo from "./components/BgVideo/BgVideo";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <BgVideo />
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
