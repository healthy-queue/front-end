import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Logout/LogoutButton";
import ResponsiveAppBar from './AppBar';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <ResponsiveAppBar />
      <p>Healthy Queue</p>
        { isAuthenticated
          ? <LogoutButton />
          : <LoginButton />
        }
    </div>
  );
}

export default Header;

