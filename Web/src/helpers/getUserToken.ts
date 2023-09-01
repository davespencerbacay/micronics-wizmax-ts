const getUserToken = () => {
  const userInfo = JSON.parse(localStorage.getItem("user")!);
  const authToken = userInfo?.token;

  return authToken;
};

export default getUserToken;
