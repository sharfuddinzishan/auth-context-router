import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import PrivateRoute from './routes/PrivateRoute';
import OrderUs from './component/OrderUs';
import About from './component/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/order',
          element: <PrivateRoute><OrderUs></OrderUs></PrivateRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
