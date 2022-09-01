import React from 'react'
import poster1 from './misc-images/poster1.jpg'

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop-container">

                <div className="shop-item">
                    <a href="https://www.etsy.com/listing/1031948718/cute-anime-posters" target="_blank" rel="noreferrer">
                        <img src={poster1} alt="poster" className="shop-img"/>
                    </a>
                    <div className="shop-txt">
                        <h3>Cute Anime Posters</h3>
                        <h4>21cm x 29.7cm (A4)</h4>
                        <h5>Moomin, Mimikyu and Dragonair</h5> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shop