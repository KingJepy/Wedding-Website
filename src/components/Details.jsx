import React from "react";
import "../app.css";

function Details() {
    return (
        <div className="details-page">
            <div className="details-content">
                <h1> Wedding Details</h1>

                <section>
                    <h2> Color Palette </h2>
                    <p>
                        Our celebration will feature deep navy blues alongside warm terracotta and burnt orange hues, accented with subtle sage green undertones. Guests are welcome to incorporate these colors into their attire to complement the day.
                    </p>
                </section>

                <section>
                    <h2> Dress Code </h2>
                    <p> 
                        Semi-formal / cocktail attire. Think suits, dresses, and comfortable yet stylish shoes to boogie in.
                    </p>
                </section>

                <section>
                    <h2> Travel & Lodging </h2>
                    <p>
                        We will share the hotel block details and travel recommendations soon. Stay tuned for updates!
                    </p>

                    <p>
                        For those flying in, the nearest airport is ...... or ......
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Details;