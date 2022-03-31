import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import {
  Login,
  Register,
  Profile,
  Dashboard,
  Articles,
  Statistics,
  Comments,
  Pages,
  Settings,
} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="articles" element={<Articles />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="comments" element={<Comments />} />
        <Route path="pages" element={<Pages />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};
export default Router;
