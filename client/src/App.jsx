import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import AppRoutes from "./routes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
