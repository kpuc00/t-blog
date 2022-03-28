import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import { Profile } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/profile" element={<Profile />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};
export default Router;
