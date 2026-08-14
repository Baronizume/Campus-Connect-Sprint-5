import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateEvent.css";

function CreateEvent() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "Cultural",
        date: "",
        location: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Event created successfully!");

        navigate("/");
    };

    return (
        <div className="create-event-page">

            <div className="create-event-container">

                <Link to="/" className="create-back-link">
                    ← Back to Home
                </Link>

                <div className="create-event-heading">
                    <div className="create-event-logo">🎓</div>

                    <h1>Create an Event</h1>

                    <p>
                        Create and share an event with students on your campus.
                    </p>
                </div>

                <form
                    className="create-event-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="title">
                            Event Name
                        </label>

                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter event name"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="category">
                                Category
                            </label>

                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="Cultural">Cultural</option>
                                <option value="Workshop">Workshop</option>
                                <option value="Sports">Sports</option>
                                <option value="Technical">Technical</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">
                                Event Date
                            </label>

                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="location">
                            Location
                        </label>

                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Example: ADTU Campus"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">
                            Event Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows="6"
                            placeholder="Describe your event..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="create-event-actions">

                        <Link
                            to="/"
                            className="cancel-event-button"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            className="submit-event-button"
                        >
                            Create Event →
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default CreateEvent;