import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
// import { useRouteError } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const AppLayout = () => {



  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};


const appRouter=createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact-us",
          element: <Contact/>
        },
        {
          path: "/restaurent/:resid",
          element: <RestaurantMenu/>
        }
      ],
      errorElement : <Error/>
    },
    
  ]
);



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
