/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
import Message from "./Message";
// eslint-disable-next-line react/prop-types
function CityList({ cities, isloading }) {
  if (isloading) return <Spinner />;
  if (!cities.length) return <Message message="add city by clicking on map" />;
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <Cityitem key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
