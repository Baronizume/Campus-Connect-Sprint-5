import { Link } from "react-router-dom";
import "./Home.css";

const events = [
  {
    id: 1,
    title: "ADTU FEST",
    category: "Cultural",
    date: "15 Aug 2026",
    location: "ADTU Campus",
    icon: "🎭",
    description:
      "A celebration of culture, music, dance and creativity.",
  },
  {
    id: 2,
    title: "Tech Workshop",
    category: "Workshop",
    date: "20 Aug 2026",
    location: "Computer Lab",
    icon: "💻",
    description:
      "Learn new technologies and improve your technical skills.",
  },
  {
    id: 3,
    title: "Sports Tournament",
    category: "Sports",
    date: "25 Aug 2026",
    location: "College Ground",
    icon: "🏆",
    description:
      "Join exciting sports activities and compete with fellow students.",
  },
];

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            🎓 CAMPUS EVENT PLATFORM
          </div>

          <h1>
            Discover.
            <br />
            <span>Connect.</span>
            <br />
            Experience.
          </h1>

          <p>
            Find exciting events, workshops, cultural programs,
            sports activities and opportunities happening on your campus.
          </p>

          <div className="hero-actions">

            <a href="#events" className="btn-primary">
              Explore Events
              <span>→</span>
            </a>

            <Link to="/create-event" className="btn-outline">
              + Create Event
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>50+</strong>
              <span>Events</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>1K+</strong>
              <span>Students</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="floating-card card-one">
            🎭
            <span>Cultural Events</span>
          </div>

          <div className="event-preview">

            <div className="preview-icon">
              🎓
            </div>

            <div>
              <small>UPCOMING EVENT</small>

              <h3>
                Campus Fest 2026
              </h3>

              <p>
                📅 15 August · ADTU Campus
              </p>
            </div>

          </div>

          <div className="floating-card card-two">
            🏆
            <span>Sports</span>
          </div>

        </div>

      </section>

      {/* EVENTS SECTION */}
      <section
        className="events-section"
        id="events"
      >

        <div className="section-header">

          <div>

            <span className="section-label">
              UPCOMING EVENTS
            </span>

            <h2>
              What's happening?
            </h2>

            <p>
              Discover events and activities happening around your campus.
            </p>

          </div>

          <a
            href="#events"
            className="view-all"
          >
            View All →
          </a>

        </div>

        {/* SEARCH */}
        <div className="search-container">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search events..."
          />

        </div>

        {/* CATEGORIES */}
        <div className="category-list">

          <button className="category active">
            All
          </button>

          <button className="category">
            Cultural
          </button>

          <button className="category">
            Workshop
          </button>

          <button className="category">
            Sports
          </button>

          <button className="category">
            Technical
          </button>

        </div>

        {/* EVENT CARDS */}
        <div className="event-grid">

          {events.map((event) => (

            <article
              className="event-card"
              key={event.id}
            >

              <div className="event-cover">

                <div className="event-icon">
                  {event.icon}
                </div>

                <span className="event-category">
                  {event.category}
                </span>

              </div>

              <div className="event-body">

                <h3>
                  {event.title}
                </h3>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-details">

                  <div>
                    <span>📅</span>
                    {event.date}
                  </div>

                  <div>
                    <span>📍</span>
                    {event.location}
                  </div>

                </div>

                <Link
                  to={`/event/${event.id}`}
                  className="event-view-button"
                >
                  View Event
                  <span>→</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CREATE EVENT SECTION */}
      <section
        className="create-section"
        id="about"
      >

        <div className="create-content">

          <span className="create-icon">
            ✨
          </span>

          <div>

            <span className="section-label">
              FOR EVENT ORGANIZERS
            </span>

            <h2>
              Have an event to share?
            </h2>

            <p>
              Create your event and let students discover,
              connect and participate.
            </p>

          </div>

          <Link
            to="/create-event"
            className="btn-primary"
          >
            Create an Event →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;