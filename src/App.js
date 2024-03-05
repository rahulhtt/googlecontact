
import './App.css';
import HomePage from './Pages/HomePage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import RegisterPage from './Pages/Auth/RegisterPage';
import Login from './Pages/Auth/Login';
import Contacts from './Pages/Contacts';
import CreateContact from './Pages/CreateContact';
import 'react-toastify/dist/ReactToastify.css';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/register" element={<RegisterPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='' element={<HomePage />}>
        <Route path='/contact' element={<Contacts />} />
        <Route path='/create' element={<CreateContact />} />
      </Route>
    </Route>
  )
)

function App() {
  return (

    <RouterProvider router={routes} />

  );
}

export default App;
