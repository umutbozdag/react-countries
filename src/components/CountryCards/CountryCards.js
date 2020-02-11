import React, { Component } from 'react'
import CountryCard from '../CountryCard/CountryCard'
import styles from './country-cards.module.css';
import Filter from '../Filter/Filter';
import Spinner from '../Spinner/Spinner';

export default class CountryCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            isFiltered: false,
            filteredCountries: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getCountries();
        window.scrollTo(0, 0);
    }

    getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => {
                this.setState({ countries: data });
                console.log(this.state.countries);
                this.setState({ isLoading: false });
            });
    }

    searchCountry = (e) => {
        if (e.target.value == '') {
            this.setState({ isFiltered: false });
        } else {

            this.setState({ isFiltered: true });

            const filteredCountries = this.state.countries.filter(country => {
                const regex = new RegExp(e.target.value, 'gi');
                return country.name.match(regex);
            });

            this.setState({ filteredCountries: filteredCountries });
        }

    }

    filterRegion = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'all') {
            this.getCountries();
        } else {
            fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ countries: data });
                    console.log(this.state.countries);
                });
        }
    }

    render() {
        const { countries, isFiltered, filteredCountries, isLoading } = this.state;

        return (
            <div>
                <Filter searchCountry={this.searchCountry} filterRegion={this.filterRegion} />

                <div>
                    <main>
                        <div className={styles.container}>
                            {isLoading ? <Spinner /> : <div className={styles.countryCards}>
                                {isFiltered ? filteredCountries.map(filteredCountry => (
                                    <div key={filteredCountry.alpha3Code}>
                                        <CountryCard country={filteredCountry} />
                                    </div>
                                )) : countries.map(country => (
                                    <div key={country.alpha3Code}>
                                        <CountryCard country={country} />
                                    </div>
                                ))
                                }
                            </div>
                            }
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
