const baseURL = "http://localhost:3000";
interface User {
  email: string;
  password: string;
}

export const fakeLoginService = async ({ email, password }: User) => {
  let response = await fetch(`${baseURL}/users`);
  let users = await response.json();
  const user = users.find(
    (user: User) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("user", email);
  } else {
    alert("Usuario incorrecto");
  }
};

export const fakeStocksService = async () => {
  let data = await fetch(`${baseURL}/stocks`);
  let stocks = await data.json();
  return stocks;
};

export const fakeDocumentsService = async () => {
  let data = await fetch(`${baseURL}/documents`);
  let documents = await data.json();
  return documents;
};

export const fakeActivityService = async () => {
  let data = await fetch(`${baseURL}/activity`);
  let activities = await data.json();
  return activities;
};
