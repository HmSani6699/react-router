import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import ErrorPage from './component/ErrorPage/ErrorPage';
import MealDb from './component/MealDb/MealDb';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <About></About>,
//     errorElement: <ErrorPage></ErrorPage>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/mealDb',
        element: <MealDb></MealDb>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
