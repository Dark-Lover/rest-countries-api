import MainComp from "./Components/Main";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "styled-components";
import { useState, useReducer, useEffect } from "react";
import DarkMode from "./Themes/Dark";
import LightMode from "./Themes/Light";
import GlobalStyle from "./Themes/GloStyles";
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { DetailCountry } from "./Pages/DetailCountry";
import Loading from "./Components/Loading/Loading";
const Themes = {
  Light: LightMode,
  Dark: DarkMode,
};

function App() {
  const [theme, setTheme] = useState("Dark");
  const [data, setData] = useState("");
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    try {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(`axios Get: Something went wrong ${err}`);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Router>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />
        <div className="App">
          <Navbar theme={theme} setTheme={setTheme} />
          <Switch>
            <Route path="/" exact>
              {data === "" ? <Loading /> : <MainComp data={data} />}
            </Route>
            <Route path="/:country" exact>
              <DetailCountry />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
