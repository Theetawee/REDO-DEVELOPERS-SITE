import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { lazy } from "react";

const HomePage = lazy(()=>import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)



const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
