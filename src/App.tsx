import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="flex w-full h-dvh">
        <Sidebar />
        <Routes>
          <Route index path='/' element={<div>a</div>} />
        </Routes>
    </div>
  );
}

export default App;
