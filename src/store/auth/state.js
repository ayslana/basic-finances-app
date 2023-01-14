export default {
  isLogged: !!localStorage.getItem("login"),
  userData: {
    login: "",
    password: "",
  },
  isLoading: false,
};
