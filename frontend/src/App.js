import Login from './components/User/Login';
import Register from './components/User/Register';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
