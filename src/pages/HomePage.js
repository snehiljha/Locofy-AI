import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";


const HomePage = () => {
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.calloutImages}>
        <img
          className={styles.calloutSwissWinterImage}
          alt=""
          src="/unsplashofdfttcno@2x.png"
        />
        <div className={styles.calloutImagesColumn}>
          <img
            className={styles.calloutSwitzerlandMountains}
            alt=""
            src="/unsplashkelbg6si6ge@2x.png"
          />
          <img
            className={styles.calloutSwitzerlandSunsetIma}
            alt=""
            src="/unsplasho5casqlny0@2x.png"
          />
        </div>
      </div>
      <div className={styles.calloutCopywriting}>
        <i className={styles.oneOfThe}>
          One of the best hikes we’ve done so far...
        </i>
        <div className={styles.calloutText}>
          <p
            className={styles.asOneOf}
          >{`As one of the alpine countries, landlocked Switzerland with her mountains has to compete not only with her neighbours but with other destinations. There are, e.g., no coastal resorts. `}</p>
          <p className={styles.asOneOf}>&nbsp;</p>
          <p className={styles.asOneOf}>
            The advantage is that tourism in Switzerland benefits of a large
            diversity of beautiful landscapes in a relatively small space.
          </p>
        </div>
        <button
          className={styles.searchFlightsButton}
          onClick={onSearchFlightsButtonClick}
        >
          <div className={styles.button}>Login</div>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
