import React from 'react'
import CountryCards from '../CountryCards/CountryCards';
import './Home.css';

export default function Home() {
    return (
        <div className="Home">
            <div className="container">
                <CountryCards />
            </div>
        </div>
    )
}
