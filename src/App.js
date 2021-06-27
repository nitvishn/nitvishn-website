import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main></Main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
