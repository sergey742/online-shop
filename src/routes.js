import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import Contacts from "./pages/Contacts/Contacts";
import Vacancies from "./pages/Vacancies/Vacancies";
import SearchResults from "./pages/SearchResults/SearchResults";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import Cart from "./pages/Cart/Cart";

export const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about-company" element={<AboutCompany />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/vacancy" element={<Vacancies />} />
            <Route path="/searchResult" element={<SearchResults />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/product/:id" element={<ProductInformation />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}