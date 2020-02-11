import React from 'react'
import { Link } from 'react-router-dom';
import styles from './country-card.module.css';

export default function CountryCard(props) {
    const { alpha3Code, name, population, region, flag, capital } = props.country;


    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className={styles.countryCard}>
            <Link to={`/countries/${alpha3Code}`} >
                <img
                    className={styles.countryImg}
                    width={240}
                    src={flag}
                    alt="Country flag" />
                <h2 className={styles.countryName}>{name}</h2>
                <p className="country-population"><span>Population:</span> {numberWithCommas(population)}</p>
                <p className="country-region"> <span>Region:</span> {region ? region : 'None'}</p>
                <p className="country-capital"><span>Capital:</span>  {capital ? capital : 'None'}</p>
            </Link>
        </div>
    )
}
