import { useNavigate } from "react-router-dom";
import "./style.css";

function Nav() {
  const handleConnectClick = () => {
    console.log("Connect button clicked");
  };
  const handleGetWalletClick = () => {
    console.log("Get Wallet button clicked");
  };
  const navigate = useNavigate();
  return (
    <nav className="hero-nav">
      <div
        className="nav-logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="./logo192.png" alt="logo" />
      </div>

      <div className="nav-auth">
        {" "}
        <button className="connect" onClick={handleConnectClick}>
          Connect
        </button>
        <button className="btn get-wallet" onClick={handleGetWalletClick}>
          Get Wallet
        </button>
      </div>
    </nav>
  );
}

export default Nav;
