import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/profile";
function App() {
  const isLogget = true;
  return (
    <>

      <MyButton></MyButton>
      {isLogget ? <Profile/> : null}
    </>
  );
}

export default App;
