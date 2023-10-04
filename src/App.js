import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Card from "./pages/Cart";
import Help from "./pages/Help";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import Data from "./components/home/Data";
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import NewProducts from "./components/product/NewProducts";
import SearchResult from "./pages/SearchResult";

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decrementQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty - 1 }
            : item
        )
      );
    }
  };

  const addToFavourite = (product) => {
    const productExist = favouriteItem.find((item) => item.id === product.id);
    if (!productExist) {
      setFavouriteItem([...favouriteItem, { ...product, listName: "" }]);
    }
  };

  const [favouriteItem, setFavouriteItem] = useState([]);
  const [selectedListName, setSelectedListName] = useState("All");
  

  const changeListTo = (product, listName) =>{
    const productExist = favouriteItem.find((item) => item.id === product.id);
    if (productExist) {
      setFavouriteItem(
        favouriteItem.map((item) =>
          item.id === product.id
            ? { ...productExist, listName: listName }
            : item
        )
      );
    }
  }
  const favouriteItemsWithList = (listName) =>{
    if(listName === "All"){
      return favouriteItem
    }
    return favouriteItem.filter((item) => item.listName === listName);
  }

  return (
    <div className=" w-screen font-[poppins] ">
      <Header nbrItem={cartItem.length} />
      <Routes>
        <Route path="/" exact>
          <Route
            index
            element={
              <Home
                productItems={productItems}
                addToCart={addToCart}
                addToFavourite={addToFavourite}
              />
            }
          />
          <Route
            path="card"
            element={
              <Card
                decrementQty={decrementQty}
                cartItem={cartItem}
                addToCart={addToCart}
                setCartItem={setCartItem}
                addToFavourite={addToFavourite}
              />
            }
          />
          <Route path="help" element={<Help />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="favourites"
            element={
              <Favourites
                favouriteItem={favouriteItem}
                setFavouriteItem={setFavouriteItem}
                addToCart={addToCart}
                setSelectedListName={setSelectedListName}
                selectedListName={selectedListName}
                changeListTo={changeListTo}
                favouriteItemsWithList={favouriteItemsWithList}
              />
            }
          />
        </Route>
        <Route path="product_details" element={<ProductDetails />} />
        <Route path="products" >
          <Route path="new" element={<NewProducts addToCart={addToCart} addToFavourite={addToFavourite}/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
