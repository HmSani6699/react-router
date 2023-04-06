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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
