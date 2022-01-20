import "./App.css";
import { Header } from "./components";
import { auth, createUserProfileDocument } from "./FireBase/FireBaseUtil";
import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/userSlice";
import { Collection, Checkout, HomePage, ShopPage, SignIn } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cleanup = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snap) => {
          dispatch(setCurrentUser({ id: snap.id, ...snap.data() }));
        });
      } else dispatch(setCurrentUser(null));
    });
    return () => cleanup();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:collectionName" element={<Collection />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
export default App;
