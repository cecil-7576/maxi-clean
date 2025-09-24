import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import PickupPage from "./Pages/PickupPage";



function App() {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element= {<MainLayout />}>
      <Route path="/" element= {<Home />} />
      <Route path="/pickup" element= {<PickupPage />} />
      {/* <Route path="/" element= {<Features />} />
      <Route path="/about" element= {<About />} />
      <Route path="/" element= {<ServiceCard />} />
      <Route path="/" element= {<Services />} />
      <Route path="/" element= {<Location />} />
      <Route path="/price" element= {<Pricing />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/" element= {<Footer />} /> */}
    </Route>
  )
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
