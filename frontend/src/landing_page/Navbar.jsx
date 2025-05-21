import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsSignedUp(!!token);
  }, []);

  function handleSignout() {
    localStorage.removeItem("authToken");
    setIsSignedUp(false);
    toast.success("Signed out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1000); // 1-second delay
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#fff", position: "sticky", top: "0" }}
      >
        <div className="container">
          <Link className="navbar-brand " to="/ ">
            <img
              src="media\images\logo (1).svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isSignedUp ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active links"
                      to="/"
                      onClick={handleSignout}
                    >
                      SignOut
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active links" to="/signup">
                        SignUp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active links" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}

                <li className="nav-item">
                  <Link
                    className="nav-link active links"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active links"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active links"
                    aria-current="page"
                    to="/product"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active links"
                    aria-current="page"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active links"
                    aria-current="page"
                    to="support"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
}

export default Navbar;
