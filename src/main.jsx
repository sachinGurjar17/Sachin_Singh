import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Blogs from './components/Blogs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Sachin_Singh/' element={<Layout />}>
      <Route  path='/Sachin_Singh/' element={<Home/>}/>
      <Route  path='/Sachin_Singh/about' element={<About/>}/>
      <Route  path='/Sachin_Singh/projects' element={<Projects/>}/>
      <Route  path='/Sachin_Singh/blogs' element={<Blogs/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
