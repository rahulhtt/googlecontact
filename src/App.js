import { Suspense, lazy } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RegisterPage from './Pages/Auth/RegisterPage';
import Login from './Pages/Auth/Login';
import Contacts from './Pages/Contacts';
import CreateContact from './Pages/CreateContact';
import 'react-toastify/dist/ReactToastify.css';
import EditContact from './Pages/EditContact';
import SuspenseLoader from './Components/SuspenseLoader';
const ErrorComponent = lazy(() => import('./Components/ErrorComponent'));
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/register" element={<RegisterPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='' element={<HomePage />}>
        <Route path='/contact' element={<Contacts />} errorElement={<ErrorComponent />} />
        <Route path='/create' element={<CreateContact />} errorElement={<ErrorComponent />} />
        <Route path='/editform/:id' element={<EditContact />} errorElement={<ErrorComponent />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
