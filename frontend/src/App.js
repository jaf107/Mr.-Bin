import './css/App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
