import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

import { auth, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect,useState } from "react";


const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    logout();
    // navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    console.log(user)
  }, [user])

  return (
    <div className={styles.dashboard}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-478@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.designToCodeParent}>
                <div className={styles.designToCode}>Design to code</div>
                <div className={styles.minReadWrapper}>
                  <div className={styles.minRead}>3 min read</div>
                </div>
              </div>
              <b className={styles.locofyaiTurn}>
                Locofy.ai – Turn Figma to Code!
              </b>
            </div>
            <div className={styles.goFromFigmaToCodeInMinimWrapper}>
              <div className={styles.goFromFigma}>
                Go from Figma to code in minimum amount of time using Locofy.
                Take your..
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameItem} />
            <div className={styles.articleAuthor}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.authorText}>
                <div className={styles.annaRos}>Anna Rosé</div>
                <div className={styles.postedJustNow}>Posted just now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-4781@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.designToCodeGroup}>
                <div className={styles.designToCode}>Design to code</div>
                <div className={styles.minReadContainer}>
                  <div className={styles.minRead}>2 min read</div>
                </div>
              </div>
              <b className={styles.locofyaiTurn}>Figma for Developers</b>
            </div>
            <div className={styles.goFromFigmaToCodeInMinimWrapper}>
              <div className={styles.goFromFigma}>
                Developers often believe they will be off to a flying start if
                they skip the designing process and jump directly to code.
              </div>
            </div>
          </div>
          <div className={styles.lineGroup}>
            <div className={styles.lineDiv} />
            <div className={styles.articleAuthor}>
              <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
              <div className={styles.authorText}>
                <div className={styles.annaRos}>Justin Chen</div>
                <div className={styles.postedJustNow}>
                  Posted on Sep 6, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-4782@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.designToCodeGroup}>
                <div className={styles.designToCode}>Integrations</div>
                <div className={styles.minReadContainer}>
                  <div className={styles.minRead}>2 min read</div>
                </div>
              </div>
              <b className={styles.locofyaiTurn}>
                Best UI library to use in Figma
              </b>
            </div>
            <div className={styles.goFromFigmaToCodeInMinimWrapper}>
              <div className={styles.goFromFigma}>
                Find out what UI library suit your product the most. From
                Material UI, Bootstrap, ...
              </div>
            </div>
          </div>
          <div className={styles.lineGroup}>
            <div className={styles.frameChild1} />
            <div className={styles.articleAuthor}>
              <img className={styles.avatarIcon} alt="" src="/avatar2@2x.png" />
              <div className={styles.authorText}>
                <div className={styles.annaRos}>Isaac Tan</div>
                <div className={styles.postedJustNow}>
                  Posted on Sep 5, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={styles.searchFlightsButton}
        onClick={onSearchFlightsButtonClick}
      >
        <div className={styles.button}>Log Out</div>
      </button>
    </div>
  );
};

export default Dashboard;
