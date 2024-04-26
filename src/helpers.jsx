function storeToken(name, token) {
  const currentTime = new Date().getTime();
  const expirationTime = currentTime + 60000; // 1 minute expiration
  const userData = { name, token, expirationTime };
  localStorage.setItem("userData", JSON.stringify(userData));
}

export { storeToken };
