import { useState } from "react";




function Rsvp() {
    const [showForm, setShowForm] = useState(false);

    // main guest info 
    


    return (
        <div className="rsvp-page">
            <h1>RSVP</h1>

            {!showForm && (
                <button
                    className="rsvp-start-btn"
                    onClick={() => setShowForm(true)}
                >
                    RSVP NOW!
                </button>
            )}

            {showForm && (
                <div className="rsvp-form">
                    <p>rsvp form will go here</p>
                </div>
            )}
        </div>
    );
}

export default Rsvp;