import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import MarketplacesPage from "../pages/MarketPlacesPage";
import MarketPlacePage from "../pages/MarketPlacePage";

const RoutesProvider = () => {
  Routes
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="mainplace" element={<MarketplacesPage />} />
        <Route path="marketplace" element={<MarketPlacePage />}/>
      </Route>
    </Routes>
  )
}

export default RoutesProvider;