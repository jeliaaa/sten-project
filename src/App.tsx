import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import PipelineDashboard from './pages/Pipelines';


function App() {
  return (
    <div className="flex w-full h-dvh">
      <Sidebar />
      <div className='w-full h-full p-4'>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/pipelines' element={<PipelineDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
