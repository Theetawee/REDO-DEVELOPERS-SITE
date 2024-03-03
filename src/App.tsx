import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "./components/common/CommonError";

const HomePage = lazy(()=>import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CarrersPage = lazy(() => import('./pages/CarrersPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CEOPage = lazy(() => import('./pages/CEOPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/carrers" element={<CarrersPage />} />
      <Route path="/products" element={<ServicesPage />} />
      <Route path="/profiles" element={<ProfilePage />} />
      <Route path="/profiles/ceo" element={<CEOPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)



const App = () => {
  return (
    <ErrorBoundary fallback={<CommonError/>}>
    <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
