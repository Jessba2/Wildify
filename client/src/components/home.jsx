/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function home() {
	return(
        <div className="home">
            <div class="flex-container">
                <img
                    height="700"
                    width="1800"
                    src="/images/benchWesternSwordFern1800x700.png"
                    alt="nature"
                />
                <h1>Home</h1>
            </div>
        </div>    
    );
}

/* always ends with */
export default home