import { useState } from "react";




function Rsvp() {
    const [showForm, setShowForm] = useState(false);

    // main guest info 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [vegetarian, setVegetarian] = useState(false);
    const [songRequest, setSongRequest] = useState("");


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
                <form className="rsvp-form">
                    <h2>Your RSVP Information</h2>

                    <label>
                        Name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <div className="radio-group">
                        <p>Dietary Preference</p>

                        <label>
                            <input
                                type="radio"
                                name="diet"
                                checked={!vegetarian}
                                onChange={() => setVegetarian(false)}
                            />
                            Not Vegetarian
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="diet"
                                checked={vegetarian}
                                onChange={() => setVegetarian(true)}
                            />
                            Vegetarian
                        </label>
                    </div>

                    <label>
                        Song Request
                        <input
                            type="text"
                            value={songRequest}
                            onChange={(e) => setSongRequest(e.target.value)}
                        />
                    </label>
                </form>
            )}
        </div>
    );
}

export default Rsvp;