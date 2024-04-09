import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect,useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  // const onButtonClick = useCallback(() => {
  //   navigate("/dashboard");
  // }, [navigate]);

  const onButtonClick = async () => {
    if (password == password2){
      registerWithEmailAndPassword(email, password);
      await logInWithEmailAndPassword(email, password); 
    }
    else alert('Please make sure the passwords match!')
    //navigate("/dashboard");
  }

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.formText}>
        <div className={styles.createAccount}>Create Account</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.formFieldsParent}>
          <div className={styles.formFields}>
            <div className={styles.email}>
              <img
                className={styles.iconaccount}
                alt=""
                src="/iconaccount1.svg"
              />
              <input
                className={styles.emailAddress}
                type="text"

                value={email}
                onChange={e => setEmail(e.target.value)}
                
                placeholder="Email address"
                maxLength
                minLength
              />
            </div>
            <div className={styles.password}>
              <img
                className={styles.iconaccount}
                alt=""
                src="/iconpassword.svg"
              />
              <input
                className={styles.emailAddress}
                type="password"

                value={password}
                onChange={e => setPassword(e.target.value)}
                
                placeholder="Password"
                maxLength
                minLength
              />
            </div>
            <div className={styles.password}>
              <img
                className={styles.iconaccount}
                alt=""
                src="/iconpassword.svg"
              />
              <input
                className={styles.emailAddress}
                type="password"
                
                value={password2}
                onChange={e => setPassword2(e.target.value)}

                placeholder="Confirm password"
                maxLength
                minLength
              />
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.button1}>Sign up</div>
          </button>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.orSignUpWithParent}>
          <div className={styles.orSignUp}>Or sign up with</div>
          <div className={styles.socialLogindefaultCopyParent}>
            <div className={styles.socialLogindefaultCopy}>
              <div className={styles.facebook}>
                <img
                  className={styles.socialIcongm}
                  alt=""
                  src="/socialicongm1.svg"
                />
              </div>
              <div className={styles.facebook1}>Google</div>
            </div>
            <div className={styles.socialLogindefaultCopy}>
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
              <div className={styles.facebook2}>Facebook</div>
            </div>
            <div className={styles.socialLogindefaultCopy}>
              <img
                className={styles.facebookIcon}
                alt=""
                src="/facebook2.svg"
              />
              <div className={styles.facebook1}>Apple</div>
            </div>
          </div>
        </div>
        <div
          className={styles.iAlreadyHaveContainer}
          onClick={onIAlreadyHaveClick}
        >
          <span>I already have an account.</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.login1}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
