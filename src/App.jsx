import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import PannerPage from "./routes/PannerPage";
import TodosPage from "./routes/TodosPage";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  const location = useLocation();

  // arg1 - items to transition
  // arg2 - fn to tell keys of each item
  // arg3 - config
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: "translateX(-100%)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
      position: "relative",
    },
    leave: {
      opacity: 0,
      transform: "translateX(100%)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <div className="App">
      <Header />

      <div
        style={{
          position: "relative",
        }}
      >
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/panner">
                <PannerPage />
              </Route>
              <Route path="/todos">
                <TodosPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
