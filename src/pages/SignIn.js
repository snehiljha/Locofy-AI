import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect,useState } from "react";


const SignIn = () => {
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

  const onButtonClick = () => {
    logInWithEmailAndPassword(email, password);
    // navigate("/dashboard");
  }

  return (
    <div className={styles.signin}>
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
                src="/iconaccount.svg"
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
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.button1}>Sign IN</div>
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
                  src="/socialicongm.svg"
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
                src="/facebook1.svg"
              />
              <div className={styles.facebook1}>Apple</div>
            </div>
          </div>
        </div>
        <div className={styles.iAlreadyHaveContainer}>
          <span>I already have an account.</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.login}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
