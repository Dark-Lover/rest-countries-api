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

const Themes = {
  Light: LightMode,
  Dark: DarkMode,
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SUCCES":
//       return { isLoading: false, data: action.preLoad, isFetched: true };
//     case "FAILED":
//       return { isLoading: false, data: action.error, isFetched: false };
//     default:
//       return state;
//   }
// };

function App() {
  const [theme, setTheme] = useState("Dark");
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState("");
  const [isFetched, setFetched] = useState(false);
  // const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    try {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setisLoading(false);
          setData(res.data);
          setFetched(true);
        })
        .catch((err) => {
          console.log(`axios Get: Something went wrong ${err}`);
        });
    } catch (err) {
      console.log(`Fetching Data`);
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
              {data === "" ? (
                <h1>We are looooading</h1>
              ) : (
                <MainComp data={data} />
              )}
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
