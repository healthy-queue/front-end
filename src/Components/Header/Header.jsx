import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Logout/LogoutButton";


const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <text>Healthy Queue</text>
        { isAuthenticated
          ? <LogoutButton />
          : <LoginButton />
        }
    </div>
  );
}

export default Header;