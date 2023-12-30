import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Pagenotfound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountriesList from "./components/Countrieslist";
import City from "./components/City";
import Form from "./components/Form";

const Base_Url = "  http://localhost:9000";

function App() {
  const [cities, setcities] = useState([]);
  const [isloading, setisloading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setisloading(true);
        const res = await fetch(`${Base_Url}/cities`);
        const data = await res.json();
        setcities(data);
      } catch {
        alert("their was error");
      } finally {
        setisloading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/" element={<Homepage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isloading={isloading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountriesList cities={cities} isloading={isloading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
