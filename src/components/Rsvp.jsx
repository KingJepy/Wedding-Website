import { useState } from "react";




function Rsvp() {
    const [showForm, setShowForm] = useState(false);

    // main guest info 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [vegetarian, setVegetarian] = useState(false);
    const [songRequest, setSongRequest] = useState("");

    //guest info 
    const [bringingGuest, setBringingGuest] = useState(true);

    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [guestVegetarian, setGuestVegetarian] = useState(false);
    const [guestSongRequest, setGuestSongRequest] = useState("");

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

                    <label className="guest-toggle">
                        <input
                            type="checkbox"
                            checked={bringingGuest}
                            onChange={() => setBringingGuest(!bringingGuest)}
                        />
                        Bringing a Guest?
                    </label>

                    {bringingGuest && (
                        <div className="guest-section">
                            <h2>Guest Information</h2>
                            <label>
                                Guest Name
                                <input
                                    type="text"
                                    value={guestName}
                                    onChange={(e) => setGuestName(e.target.value)}
                                />
                            </label>

                            <label>
                                Guest Email
                                <input
                                    type="email"
                                    value={guestEmail}
                                    onChange={(e) => setGuestEmail(e.target.value)}
                                />
                            </label>

                            <div className="radio-group">
                                <p>Guest Dietary Preference</p>

                                <label>
                                    <input
                                        type="radio"
                                        name="guest-diet"
                                        checked={!guestVegetarian}
                                        onChange={() => setGuestVegetarian(false)}
                                    />
                                    Not Vegetarian
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="guest-diet"
                                        checked={guestVegetarian}
                                        onChange={() => setGuestVegetarian(true)}
                                    />
                                    Vegetarian
                                </label>
                            </div>

                            <label>
                                Guest Song Request
                                <input
                                    type="text"
                                    value={guestSongRequest}
                                    onChange={(e) => setGuestSongRequest(e.target.value)}
                                />
                            </label>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
}

export default Rsvp;