import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransaCard from "../components/features/TransaCard";
import { updateProfile } from "../components/actions/profil.actions";
import { UidContext } from "../components/AppContext";

const Transactions = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const uid = useContext(UidContext);
  const userInfo = useSelector((state) => state.profile.userInfo);
  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstName || "");
      setLastName(userInfo.lastName || "");
    }
  }, [userInfo]);

  const handleEditProfile = () => {
    if (userInfo) {
      setFirstName(userInfo.firstName || "");
      setLastName(userInfo.lastName || "");
    }
    setEditMode(true);
  };

  const handleSave = () => {
    dispatch(updateProfile({ firstName, lastName }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setFirstName(userInfo ? userInfo.firstName || "" : "");
    setLastName(userInfo ? userInfo.lastName || "" : "");
    setEditMode(false);
  };

  return (
    <div>
      <Navbar />
      {uid ? (
        <>
          <main className="main bg-dark">
            <div className="header">
              <h1>
                Welcome back
                <br />
                {!editMode && userInfo && (
                  <span>
                    {userInfo.firstName} {userInfo.lastName}
                  </span>
                )}
              </h1>
              {!editMode && (
                <button className="edit-button" onClick={handleEditProfile}>
                  Edit Name
                </button>
              )}
              <div className={editMode ? "inputs" : "inputs hidden"}>
                {editMode ? (
                  <>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input-field"
                    />
                  </>
                ) : null}
              </div>
              <div className={editMode ? "btns" : "btns hidden"}>
                <button onClick={handleSave} className="save-btn">
                  Save
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <TransaCard
              title="Argent Bank Checking (x8349)"
              amount="$2,082.79"
              description="Available Balance"
            />
            <TransaCard
              title="Argent Bank Savings (x6712)"
              amount="$10,928.42"
              description="Available Balance"
            />
            <TransaCard
              title="Argent Bank Credit Card (x8349)"
              amount="$184.30"
              description="Current Balance"
            />
          </main>
        </>
      ) : (
        <>
          <h2>Vous n'etes pas connecté</h2>
          <a href="/login">Se Connecter</a>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Transactions;
