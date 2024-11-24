// import store from "../../store/store";
// import Container from "../container/container";
// import MainScreen from "../main-screen/main-screen";
// import { Provider } from "react-redux";
// import ErrorPage from "../errorPage/errorPage";
// import ErrorBoundary from "../errorBoundary/errorBoundary";
// import WrongCode from "../wrongCode/wrongCode";
// import Rules from "../rules/rules";

// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

//   const router = createBrowserRouter([
//     {
//       path: "/tic-tac-toe/:numGame",
//       element: <ErrorBoundary fallback='введений неіснуючи код'><Container/></ErrorBoundary>,
//     },
//     {
//       path: "/tic-tac-toe",
//       element: <MainScreen/>,
//       errorElement: <ErrorPage/>
//     },
//     {
//       path: '/tic-tac-toe/wrongCode',
//       element: <WrongCode></WrongCode>
//     },
//     {
//       path: '/tic-tac-toe/rules',
//       element: <Rules></Rules>
//     }

//   ]); 


// function App() {
//     return (
//         <Provider store={store}>
//             <RouterProvider router={router} />
//         </Provider> 
//     )               
// }

// export default App;

import store from "../../store/store";
import Container from "../container/container";
import MainScreen from "../main-screen/main-screen";
import { Provider } from "react-redux";
import ErrorPage from "../errorPage/errorPage";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import WrongCode from "../wrongCode/wrongCode";
import Rules from "../rules/rules";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainScreen />} />
                    <Route 
                        path="/:numGame" 
                        element={
                            <ErrorBoundary fallback="введений неіснуючи код">
                                <Container />
                            </ErrorBoundary>
                        } 
                    />
                    <Route path="/wrongCode" element={<WrongCode />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </HashRouter>
        </Provider>
    );
}

export default App; 