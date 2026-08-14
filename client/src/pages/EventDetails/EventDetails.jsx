import { Link, useParams } from "react-router-dom";
import "./EventDetails.css";

const events = {
    1: {
        title: "ADTU FEST",
        category: "Cultural",
        date: "15 Aug 2026",
        location: "ADTU Campus",
        icon: "🎭",
        description:
            "A celebration of culture, music, dance and creativity. Join students from across the campus for an exciting day of music, dance and cultural activities.",
    },
    2: {
        title: "Tech Workshop",
        category: "Workshop",
        date: "20 Aug 2026",
        location: "Computer Lab",
        icon: "💻",
        description:
            "Learn new technologies and improve your technical skills through practical sessions and demonstrations.",
    },
    3: {
        title: "Sports Tournament",
        category: "Sports",
        date: "25 Aug 2026",
        location: "College Ground",
        icon: "🏆",
        description:
            "Join exciting sports activities and compete with fellow students in a friendly campus tournament.",
    },
};

function EventDetails() {
    const { id } = useParams();
    const event = events[id];

    if (!event) {
        return (
            <div className="event-not-found">
                <h2>Event Not Found</h2>
                <Link to="/">← Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="event-details-page">
            <Link to="/" className="back-link">
                ← Back to Events
            </Link>

            <div className="event-details-card">
                <div className="event-details-banner">
                    <span>{event.icon}</span>
                </div>

                <div className="event-details-content">
                    <span className="event-details-category">
                        {event.category}
                    </span>

                    <h1>{event.title}</h1>

                    <p className="event-details-description">
                        {event.description}
                    </p>

                    <div className="event-info">
                        <div>
                            <span>📅</span>
                            <div>
                                <small>Date</small>
                                <strong>{event.date}</strong>
                            </div>
                        </div>

                        <div>
                            <span>📍</span>
                            <div>
                                <small>Location</small>
                                <strong>{event.location}</strong>
                            </div>
                        </div>
                    </div>

                    <button
                        className="book-button"
                        onClick={() =>
                            alert("Event booking feature coming soon!")
                        }
                    >
                        Book Event →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;