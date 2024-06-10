import React, { useContext } from "react";
import bankLogo from "../assets/img/argentBankLogo.png";
import { setUidToken } from "./uidSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const uidToken = useSelector((state) => state.uid.token);
  const userInfo = useSelector((state) => state.profile.userInfo);

  const logout = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={bankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {uidToken ? (
            <>
              <div>
                <a className="main-nav-item" href="/user">
                  <i className="fa fa-user-circle"></i>
                  {userInfo.firstName}
                </a>
                <a className="main-nav-item" href="./" onClick={logout}>
                  <i className="fa fa-sign-out"></i>
                  Sign Out
                </a>
              </div>
            </>
          ) : (
            <>
              <a className="main-nav-item" href="./login">
                <i className="fa fa-user-circle"></i>
                Sign In
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
