import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import {
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
      <Route path="/" />
      <Route path="/profile" element={<Profile />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="articles" element={<Articles />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="comments" element={<Comments />} />
        <Route path="pages" element={<Pages />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
export default Router;
