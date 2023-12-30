import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
function Map() {
  const navigate = useNavigate();
  const [searchparams, setsearchparams] = useSearchParams();
  const lat = searchparams.get("lat");
  const lng = searchparams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <h1>
        {" "}
        Position :{lat} ,{lng}
      </h1>
      <button onClick={() => setsearchparams({ lat: 23, lng: 50 })}>
        poition change
      </button>
    </div>
  );
}

export default Map;
