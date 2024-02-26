import './App.scss'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NavBar } from "./components/navBar/NavBar";
import { LeftBar } from "./components/leftBar/LeftBar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Customer } from "./pages/customer/Customer";
import { Drivers } from './pages/Drivers/Drivers';
import { CustomerUpdate } from './pages/customerUpdate/CustomerUpdate';
import { DriversUpdate } from './pages/driversUpdate/DriversUpdate';
import { NavPages } from './components/NavPages/NavPages';

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <NavPages/>
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 7 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard/>
        },
        {
          path: "/customers",
          element: <Customer/>
        }
        ,
        {
          path: "/drivers",
          element: <Drivers/>
        }
        ,
        {
          path: "/customerUpdate",
          element: <CustomerUpdate/>
        }
        ,
        {
          path: "/driverUpdate",
          element: <DriversUpdate/>
        }
      ]
        
      
    }])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
