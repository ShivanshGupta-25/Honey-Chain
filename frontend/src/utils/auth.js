export const saveAuth = (data) => {
  if (!data?.token || !data?.user) {
    throw new Error(
      "Invalid authentication response"
    );
  }

  localStorage.setItem(
    "token",
    data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  const storedUser =
    localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
};

export const isAuthenticated = () => {
  return Boolean(
    localStorage.getItem("token")
  );
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};