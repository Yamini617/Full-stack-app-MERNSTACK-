import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import UserProfile from './components/UserProfile.jsx';
import SellerProfile from './components/SellerProfile.jsx';
import AdminProfile from './components/AdminProfile.jsx';
import Products from './components/Products.jsx'
import UserCart from './components/UserCart.jsx'
import AddProduct from './components/AddProduct.jsx'

function App() {
  const browseRouterObj = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '', // This will render the Home component on the root path
          element: <Home />,
        },
        {
          path: 'register', // Path for Register component
          element: <Register />,
        },
        {
          path: 'login', // Path for Login component
          element: <Login />,
        },
        {
          path:"user-profile",
          element:<UserProfile />,
          children:[
            {
              path:"products",
              element:<Products />
            },
            {
              path:"cart",
              element:<UserCart />
            }
              
          ]
        },
        {
          path:"seller-profile",
          element:<SellerProfile />,
          children:[
            {
              path:"add-product",
              element:<AddProduct />
            
            },

            {
              path:"products",
              element:<Products />
            },
          ]
        },
        {
          path:"admin-profile",
          element:<AdminProfile />
        },
      ],
    },
  ]);

  return <RouterProvider router={browseRouterObj} />;
}

export default App;



// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import RootLayout from './RootLayout';
// import Home from './components/Home.jsx';
// import Register from './components/Register.jsx';
// import Login from './components/Login.jsx';
// import UserProfile from './components/UserProfile.jsx'
// import SellerProfile from './components/SellerProfile.jsx'
// import AdminProfile from './components/AdminProfile.jsx'
// function App() {
//   const browseRouterObj = createBrowserRouter([
//     {
//       path: '',
//       element: <RootLayout />,
//       children: [
//         {
//           path: '', // This will render the Home component on the root path
//           element: <Home />,
//         },
//         {
//           path: 'register', // Path for Register component
//           element: <Register />,
//         },
//         {
//           path: 'login', // Path for Login component
//           element: <Login />,
//         },
//         {
//           path:"user-profile",
//           element:<UserProfile /> 
//           },
//           {
//             path:"seller-profile",
//             element:<SellerProfile />
//           },
//           {
//             path:"admin-profile",
//             element:<AdminProfile />
//           }
//       ],
//     },
//   ]);

//   return <RouterProvider router={browseRouterObj} />;
// }

// export default App;