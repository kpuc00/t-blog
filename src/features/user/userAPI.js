const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost/"
    : "https://api.tblog.kstrahilov.dev/";

const api = "users/";

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

export { login, logout, getOwnUserData };
