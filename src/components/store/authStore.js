import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      localStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
      this.user = null;
    }
  };

  getProfile = async profile => {};

  login = async (userData, history) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      this.setUser(user.token);
      history.replace("/");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  signup = async (userData, history) => {
    try {
      const res = await instance.post("register/", userData);
      // const res = await axios.post({ instance }, userData);
      const user = res.data;
      //this.user = jwt_decode(user.token);
      this.setUser(user.token);
      this.props.history.replace("/");
      console.log("[sign up from appstore] done");
    } catch (err) {
      console.error(err);
    }
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
