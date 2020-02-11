import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './country-detail.module.css';
import './country-detail.css';

export default class CountryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: {},
            countryId: this.props.match.params.countryId,
            borders: []
        }
    }

    componentDidMount() {
        this.getCountry(this.state.countryId);
        window.scrollTo(0, 0);
    }

    getCountry = (countryId) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ country: data })
                console.log(this.state.country);
            });
    }

    getBorderByCode = (code) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
            .then(res => res.json())
            .then(data => {
                return data.name;
            });
    }

    render() {
        const country = this.state.country;
        return (
            <div>
                <div className={styles.countryDetail}>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <Link className="backButton" to='/'><i className={` fas fa-long-arrow-alt-left ${styles.backIcon}`} />Back</Link>
                            <img className={styles.countryFlag} src={country && country.flag} alt="" />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.row}>
                                <div className={styles.col}>
                                    <p className={styles.countryName}>{country.name}</p>
                                    <p className={styles.countryNativeName}> <span>Native Name:</span> {country.nativeName}</p>
                                    <p className={styles.countryPopulation}> <span> Population: </span> {country.population}</p>
                                    <p className={styles.countryRegion}> <span>Region: </span> {country.region ? country.region : 'None'}</p>
                                    <p className={styles.countrySubRegion}> <span> Sub Region: </span> {country.subregion ? country.subregion : 'None'}</p>
                                    <p className={styles.countryCapital}> <span> Capital: </span> {country.capital ? country.capital : 'None'}</p>

                                    <ul className={styles.borderCountries}>
                                        <div className={styles.tags}>
                                            <p className="border-text"> <span> Border Countries:</span></p>

                                            {country.borders && country.borders.length != 0 ? country.borders.map(border => (
                                                <div className={styles.tag}>
                                                    <li key={border} className={styles.borderTag}><Link to={`/countries/${border}`}>{border ? this.getBorderByCode(border) : <p>None</p>}</Link></li>
                                                </div>
                                            )) : <p>None</p>}

                                        </div>
                                    </ul>
                                </div>
                                <div className={styles.col}>
                                    <p className="country-domain"> <span> Top Level Domain: </span> {country.topLevelDomain}</p>
                                    <p className="country-currency"> <span> Currencies: </span>
                                        {country.currencies && country.currencies.map(currency => (
                                            currency.name
                                        )).join(', ')}
                                    </p>
                                    <p className="country-languages"><span>Languages: </span>
                                        {country.languages && country.languages.map(language => (
                                            language.name
                                        )).join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
