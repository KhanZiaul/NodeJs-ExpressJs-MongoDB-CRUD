import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './component/Users.jsx';
import UpdateUser from './component/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader:()=> fetch('http://localhost:7000/users')
  },
  {
    path: "/users/:id",
    element: <UpdateUser></UpdateUser>,
    loader:({params})=> fetch(`http://localhost:7000/users/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
