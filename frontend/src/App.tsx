import React from "react";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./domain/pages/Home";
import { Provider } from "react-redux";
import { store } from "./core/dataSource/localDataSource/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
