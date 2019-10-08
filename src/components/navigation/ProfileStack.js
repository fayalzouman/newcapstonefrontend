import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
import HomeScreen from "../components/Home";
import NotLoggedInScreen from "../components/NotLoggedIN";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
    NotLoggedIn: NotLoggedInScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerLeft: null
    }
  }
);

export default ProfileStack;
