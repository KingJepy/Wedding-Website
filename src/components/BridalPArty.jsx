

function BridalParty() {
    const bridalParty = [
        {
        name: "Rachel",
        role: "Maid of Honor",
        image: "/images/rachel.jpg",
        bio: "Lorem ipsum..."
        },
        {
        name: "Tyler",
        role: "Best Man",
        image: "/images/tyler.jpg",
        bio: "Lorem ipsum..."
        }

    ]

    return (
        <div className="bridal-party-page">
        <h1>Meet the Bridal Party</h1>

        <div className="party-grid">
            {bridalParty.map((person) => (
            <div className="party-card" key={person.name}>
                <img src={person.image} alt={person.name} />

                <h2>{person.name}</h2>

                <h3>{person.role}</h3>

                <p>{person.bio}</p>
            </div>
            ))}
        </div>
        </div>
    );
}