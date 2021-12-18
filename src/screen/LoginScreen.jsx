import React, { useState } from "react";
import styles from "./LoginCss.module.css"; 
import LoginPic from "../Images/logo.png";
// import InputTextFeild from "../Components/InputField";
// import FormButton from "../Components/Button";
import { Link , useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setpassword] = useState(null)
  const [errorBoxClass , setErrorBoxClass ] = useState("errorBOx")
    const history = useHistory() 
  const login = ()=>{
    // console.log("hello ")
    console.log(email , password)
    signInWithEmailAndPassword(auth , email , password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid)
            console.log(user)
            if(user.uid){
                history.replace("/dashboard")
                localStorage.setItem("uid" , user.uid)
            }
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
} 

  return (
  

    <section className={styles.mainLoginBox}>

        <section className={styles.adminLoginBox}>
            <div className={styles.adminLoginimg}>
                <img src={LoginPic} width="100%" alt="" />
            </div>
            <div className={styles.adminLoginForm}>
                <div >
                    <h1>WELCOME ADMIN...</h1>
                </div>
            <div>

                <input type="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }} placeholder="Email Address..." />
                <input type="password" onChange={(e)=>{
                    setpassword(e.target.value)
                }}   placeholder="Password..."/>
            </div>

                <div>
                    <button onClick={login}>Login</button>
                </div>
            </div>


        </section>


    </section>


    
  );
};

export default LogIn;