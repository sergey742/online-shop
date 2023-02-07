import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import { routes } from './routes';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBXEj9YJcN4PA_s13GSIPP9omvbfgCp2KE",
//   authDomain: "online-shop-68ecd.firebaseapp.com",
//   projectId: "online-shop-68ecd",
//   storageBucket: "online-shop-68ecd.appspot.com",
//   messagingSenderId: "407118248288",
//   appId: "1:407118248288:web:6f59ef0aa7037f930ec605",
//   measurementId: "G-8D30PKQGQL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const CartContext = createContext({});
export const SearchResultContext = createContext('');
export const CategoryContext = createContext([]);

function App() {
  const [isCartOpen, setIsCartOpen] = useState();
  const [searchResult, setSearchResult] = useState('');
  const [categoryArg, setCategoryArg] = useState([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
        <SearchResultContext.Provider value={{ searchResult, setSearchResult }}>
          <CategoryContext.Provider value={{ categoryArg, setCategoryArg }}>
            <div className="App">
              <Header />
              {routes()}
              <Footer />
            </div>
          </CategoryContext.Provider>
        </SearchResultContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
