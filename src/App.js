import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/HomePage/Home';
import Home2 from './views/HomePage2/Home2';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/home-2' element={<Home2/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;