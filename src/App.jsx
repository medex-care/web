import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet
} from "react-router-dom";

import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import ContactUs from "./Components/Pages/ContactUs";
import Imprint from "./Components/Pages/Imprint";

import "./assets/css/global.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
//         <Routes>
//           <Route path="/" element={<HomeTwo />} />
//           <Route path="/imprint" element={<Imprint />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomeTwo />,
    errorElement: <ErrorPage />,
    element: (
      <>
        <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
          <ScrollRestoration />
          <Outlet />
        </div>
      </>
    ),
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <HomeTwo />,
      },
      {
        path: "/imprint",
        element: <Imprint />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
{
  /* <ScrollRestoration />; */
}
function App() {
  return (
    // <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
    <RouterProvider router={router} />
    // </div>
  );
}

export default App;
