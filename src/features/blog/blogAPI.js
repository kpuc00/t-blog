const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost/"
    : "https://api.tblog.kstrahilov.dev/";

const api = "blogs/";

function create(name, description) {
  return fetch(domain + api, {
    method: "POST",
    body: JSON.stringify({ name, description, collaboratorsId: [] }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

function getById(blogId) {
  return fetch(domain + api + blogId, {
    method: "GET",
    credentials: "include",
  });
}

function getOwn() {
  return fetch(domain + api, {
    method: "GET",
    credentials: "include",
  });
}

export { create, getById, getOwn };
