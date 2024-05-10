import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/profile";
import Product from "./components/Product/product";
function App() {
  const isLogget = true;
  return (
    <>

      <MyButton></MyButton>
      {isLogget ? <Profile/> : null}

      <Product/>

      
    </>
  );
}

export default App;
