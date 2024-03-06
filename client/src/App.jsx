import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from '../src/redux/store'; // Import your Redux store
import Home from './pages/Home';

export default function App() {
  return (
    <Provider store={store}> {/* Wrap your entire application with Provider and provide the store */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Add other routes here if needed */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
