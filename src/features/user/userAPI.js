const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost/"
    : "https://api.tblog.kstrahilov.dev/";

const api = "users/";

function register(first_name, last_name, username, email, password) {
  return fetch(domain + api + "register", {
    method: "POST",
    body: JSON.stringify({ first_name, last_name, username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function login(username, password) {
  const formBody = `username=${username}&password=${password}`;
  return fetch(domain + api + "login", {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
  });
}

function logout() {
  return fetch(domain + api + "logout", {
    method: "GET",
    credentials: "include",
  });
}

function getOwnUserData() {
  return fetch(domain + api + "me", {
    method: "GET",
    credentials: "include",
  });
}

export { register, login, logout, getOwnUserData };
