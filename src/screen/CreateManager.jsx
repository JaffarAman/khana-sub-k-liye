import React, { useState } from "react";
import Header from "../components/Header";
import styles from "./CreateManager.module.css";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import swal from "sweetalert";
const CreateManager = () => {
  const [name, setName] = useState(null);
  const [branchName, setbranchName] = useState(null);
  const [email, setemail] = useState(null);
  const [passowrd, setpassowrd] = useState(null);
  const [loading, setloading] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!name || !branchName || !email || !passowrd) {
      alert("please enter all fields");
      return;
    }
    setloading(true)
    const dbRef = collection(db, "managerUser");
    await addDoc(dbRef, {
      name,
      branchName,
      email,
      passowrd,
    })
      .then((res) => {
        console.log("your data is saved ", res);
        swal("Created", "Account Successfully Created..", "success");
        setloading(false)

      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className={styles.mainbox}>
        <section className={styles.formBox}>
          <h3>CREATE MANAGER</h3>

          <form onSubmit={formSubmit}>
            <div>
              <label htmlFor="">Manager Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter Manager Name"
              />
            </div>

            <div>
              <label htmlFor="">Manager Branch Name</label>
              <input
                onChange={(e) => {
                  setbranchName(e.target.value);
                }}
                type="text"
                placeholder="Enter Manager Branch Name"
              />
            </div>

            <div>
              <label htmlFor="">Manager Email Address</label>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="text"
                placeholder="Enter Manager Email Address"
              />
            </div>

            <div>
              <label htmlFor="">Manager Password</label>
              <input
                onChange={(e) => {
                  setpassowrd(e.target.value);
                }}
                type="password"
                placeholder="Enter Manager Password "
              />
            </div>
            {loading ? (
              <section class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </section>
            ) : (
              <button>Create Account</button>
            )}
          </form>
        </section>
      </div>
    </>
  );
};

export default CreateManager;
