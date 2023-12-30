/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
// eslint-disable-next-line react/prop-types
function CountriesList({ cities, isloading }) {
  if (isloading) return <Spinner />;
  if (!cities.length) return <Message message="add city by clicking on map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((c) => (
          // eslint-disable-next-line react/jsx-key
          <CountryItem c={c} />
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
