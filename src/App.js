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
import { useEffect, useState } from "react";

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

  const [favouriteItem, setFavouriteItem] = useState([]);
  const [moveTolistName, setMoveToListName] = useState("");
  const [selectedListName, setSelectedListName] = useState("All");

  const moveToList = (product, toList) => {
    console.log("to list", toList);
    const productExist = favouriteItem.find((item) => item.id === product.id);
    
    if (productExist) {
      setProductsInListName((prevProductsInListName) => {
        const updatedProductsInListName = { ...prevProductsInListName };
  
        // Ensure that productsInListName[moveTolistName] is an array
        if (!updatedProductsInListName[toList]) {
          updatedProductsInListName[toList] = [];
        }
  
        // Add the product to the specified list
        updatedProductsInListName[toList].push(productExist);
  
        return updatedProductsInListName;
      });
    }
  };
  

  const addToFavourite = (product) => {
    const productExist = favouriteItem.find((item) => item.id === product.id);
    if (!productExist) {
      setFavouriteItem([...favouriteItem, { ...product, listName: "" }]);
    }
  };

  const [productsInListName, setProductsInListName] = useState([]);
  // a new state that holds product of the selected list name
  const [productOfSelectedList, setProductOfSelectedList] = useState([])
  
  useEffect(() => {
    const itemsOfList = () => {
      console.log("selectedListName:", selectedListName);
      console.log("Favourites:", favouriteItem);
      
      if (selectedListName === "All") {
        setProductOfSelectedList(favouriteItem);
      }
      else{
        setProductOfSelectedList(productsInListName[selectedListName]);
      }
    };
  
    itemsOfList();
  }, [selectedListName, setProductOfSelectedList]);
  

  console.log("productsInListName",productsInListName);

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
                productsInListName={productsInListName}
                setSelectedListName={setSelectedListName}
                moveToList={moveToList}
                setMoveToListName={setMoveToListName}
                moveTolistName={moveTolistName}
                selectedListName={selectedListName}
                productOfSelectedList={productOfSelectedList}
              />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
