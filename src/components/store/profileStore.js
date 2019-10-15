import { instance } from "./instance";
import { decorate, observable } from "mobx";

class ProfileStore {
  profile = "";
  loading = true;
  errors = null;
  points = 0;

  fetchProfile = async () => {
    try {
      const res = await instance.get("profile/");
      const profile = res.data;
      this.profile = profile;
      this.points = profile.points;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getProfileById(profileID) {
    return this.profile.find(profile => +profile.id === +profileID);
  }
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable,
  errors: observable
});

let profileStore = new ProfileStore();
export default profileStore;
