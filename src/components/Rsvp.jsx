import { useState } from "react";
import { useNavigate } from "react-router-dom";



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

    //  message to the couple
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!email.includes("@")) {
            newErrors.email = "Email must be valid.";
        }

        if (bringingGuest) {
            if (!guestName.trim()) {
                newErrors.guestName = "Guest name is required.";
            }
            if (!guestEmail.trim()) {
                newErrors.guestEmail = "Guest email is required.";
            } else if (!guestEmail.includes("@")) {
                newErrors.guestEmail = "Guest email must be valid.";
            }
        }

        setErrors(newErrors);

        // If no errors, navigate
        if (Object.keys(newErrors).length === 0) {
            navigate("/confirmation", {
            state: {
                name,
                email,
                vegetarian,
                songRequest,
                bringingGuest,
                guestName,
                guestEmail,
                guestVegetarian,
                guestSongRequest,
                message,
            },
            });
        }
    };

    const [errors, setErrors] = useState({});

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
                <form className="rsvp-form" onSubmit={handleSubmit}>
                    <h2>Your RSVP Information</h2>

                    <label>
                        Name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
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
                                {errors.guestName && <span className="error">{errors.guestName}</span>}
                            </label>

                            <label>
                                Guest Email
                                <input
                                    type="email"
                                    value={guestEmail}
                                    onChange={(e) => setGuestEmail(e.target.value)}
                                />
                                {errors.guestEmail && <span className="error">{errors.guestEmail}</span>}
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

                    <div className="message-section">
                        <h2>Message for the Couple</h2>

                        <textarea
                            placeholder="Write a note to the bride & groom"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit RSVP
                    </button>
                </form>
            )}
        </div>
    );
}

export default Rsvp;