import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";
import ProfileStore from "./profileStore";
class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      localStorage.setItem("myToken", token);
      ProfileStore.fetchProfile();
    } else {
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
      this.user = null;
    }
  };

  // getProfile = async profile => {};

  login = async (userData, history) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      this.setUser(user.access);
      history.replace("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  signup = async (userData, history) => {
    try {
      const res = await instance.post("signup/", userData);
      // const res = await axios.post({ instance }, userData);
      const user = res.data;
      //this.user = jwt_decode(user.token);
      this.setUser(user.access);
      history.replace("profile/");
      console.log("[sign up from appstore] done");
    } catch (err) {
      console.error(err);
    }
  };

  logout = history => {
    this.setUser();
    history.replace("/login");
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
