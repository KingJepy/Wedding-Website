import { useLocation } from "react-router-dom";

function Confirmation() {
    const { state } = useLocation();

    if (!state) {
        return (
            <div className="confirmation-page">
                <div className="confirmation-card">
                    <h1>No RSVP data found.</h1>
                    <p>Please return to the RSVP page and try again.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="confirmation-page">
            <div className="confirmation-card">

                <div className="confirmation-header">
                    <h1>Thank You!</h1>
                    <p>Your RSVP has been received.</p>
                </div>

                <section className="confirmation-section">
                    <h2>Your Information</h2>

                    <p>
                        <strong>Name:</strong> {state.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {state.email}
                    </p>

                    <p>
                        <strong>Vegetarian:</strong>{" "}
                        {state.vegetarian ? "Yes" : "No"}
                    </p>

                    <p>
                        <strong>Song Request:</strong>{" "}
                        {state.songRequest || "None"}
                    </p>
                </section>

                {state.bringingGuest && (
                    <section className="confirmation-section">
                        <h2>Guest Information</h2>

                        <p>
                            <strong>Name:</strong> {state.guestName}
                        </p>

                        <p>
                            <strong>Email:</strong> {state.guestEmail}
                        </p>

                        <p>
                            <strong>Vegetarian:</strong>{" "}
                            {state.guestVegetarian ? "Yes" : "No"}
                        </p>

                        <p>
                            <strong>Song Request:</strong>{" "}
                            {state.guestSongRequest || "None"}
                        </p>
                    </section>
                )}

                {state.message && (
                    <section className="confirmation-section">
                        <h2>Message for the Couple</h2>

                        <p className="confirmation-message">
                            "{state.message}"
                        </p>
                    </section>
                )}

                <div className="confirmation-footer">
                    <p>
                        The above information has been sent to the couple.
                    </p>

                    <p>
                        We can't wait to celebrate with you!
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Confirmation;