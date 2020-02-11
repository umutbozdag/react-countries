import React from 'react'
import styles from './filter.module.css';

export default function Filter(props) {
    return (
        <div>
            <section className={styles.filter}>
                <div className={styles.container}>
                    <div className={styles.searchCountry}>
                        <i className=" fas fa-search" />
                        <input onChange={props.searchCountry} className={styles.searchInput} type="text" placeholder="Search for a country..." aria-label="search-country" />
                    </div>
                    <select onChange={props.filterRegion} name="region-select" id="regionSelect">
                        <option disabled hidden selected>Filter by Region</option>
                        <option value="all">All</option>
                        <option value="africa">Africa</option>
                        <option value="americas">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </section>

        </div>
    )
}
