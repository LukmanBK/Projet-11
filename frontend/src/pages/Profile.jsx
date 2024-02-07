import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeaderProfile from "../components/HeaderProfile/HeaderProfile";
import Account from "../components/Account/Account";

const Profile = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    }, [token, navigate]);
  
  return (
    <div className="page_account">
      <Navbar />
      <main className="main bg-dark">
        <HeaderProfile />
        <Account
          accountType="Checking"
          accountNumber="x8349"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          accountType="Savings"
          accountNumber="x6712"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          accountType="Credit Card"
          accountNumber="x8349"
          amount="$184.30"
          description="Current Balance"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
