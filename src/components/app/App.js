import store from "../../store/store";
import Container from "../container/container";
import MainScreen from "../main-screen/main-screen";
import { Provider } from "react-redux";
import ErrorPage from "../errorPage/errorPage";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import WrongCode from "../wrongCode/wrongCode";
import Rules from "../rules/rules";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/:numGame",
      element: <ErrorBoundary fallback='введений неіснуючи код'><Container/></ErrorBoundary>,
    },
    {
      path: "/",
      element: <MainScreen/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/wrongCode',
      element: <WrongCode></WrongCode>
    },
    {
      path: '/rules',
      element: <Rules></Rules>
    }

  ]); 


function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider> 
    )               
}

export default App;