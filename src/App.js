import React from 'react';
import './App.css';

//connecting the store with the app
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        Hellooooou.
      </div>
    </Provider>
  );
}

export default App;
