export default {
  isLogged: !!localStorage.getItem("login"),
  userData: {
    name: "",
    login: "",
    password: "",
  },
  isLoading: false,
};
