/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function Weather() {
	return(
        <div className="weather">
            <div class="flex-container">
                <img
                    height="700"
                    width="1800"
                    src="./images/evergreenHuckleberryBerryClusters1800x700.png"
                    alt="evergreen huckleberry"
                />
                <h1>Weather</h1>
            </div>
        </div>    
    )
}

/* always ends with */
export default Weather