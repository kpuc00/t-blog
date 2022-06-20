import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { selectUser } from "./features/user/userSlice";

const Router = () => {
  const user = useSelector(selectUser);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Profile /> : <Navigate replace to="/login" />}
      />
      <Route
        path="/login"
        element={user ? <Navigate replace to="/" /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate replace to="/" /> : <Register />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate replace to="/login" />}
      >
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
