import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();

  if (!state) {
    return <p>No RSVP data found.</p>;
  }

  return (
    <div className="confirmation-page">
      <h1>Thank you for your RSVP!</h1>

      <p>
        <strong>Name:</strong> {state.name}
      </p>

      <p>
        <strong>Email:</strong> {state.email}
      </p>

      <p>
        <strong>Vegetarian:</strong> {state.Vegetarian ? "Yes" : "No"}
      </p>

      <p>
        <strong>Song Request:</strong> {state.songRequest || "None"}
      </p>
      {state.bringingGuest && (
        <>
          <h2>Guest</h2>
          <p>{state.guestName}</p>
          <p><strong>Email:</strong> {state.guestEmail}</p>
          <p><strong>Vegetarian:</strong> {state.guestVegetarian ? "Yes" : "No"}</p>
          <p><strong>Song Request:</strong> {state.guestSongRequest || "None"}</p>
        </>
      )}

      {state.message && (
        <>
          <h2>Message</h2>
          <p>{state.message}</p>
        </>
      )}

      <p>An email confirmation will be sent shortly.</p>
    </div>
  );
}

export default Confirmation;