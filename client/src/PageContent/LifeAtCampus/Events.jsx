import React, { useEffect, useState } from "react";
import axios from "axios";
import "./events.css";

const Events = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEventData(res.data);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  return (
    <div className="event-container">
      <h2 className="innerpage-title">Events</h2>

      {eventData.length === 0 ? (
        <p>No events available</p>
      ) : (
        eventData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="title-row">
              <h2 className="innerpage-subtitle">{event.title}</h2>

              {event.doc_path && (
                <a
                  href={`http://localhost:5000${event.doc_path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  aria-label={`View event report: ${event.title}`}
                >
                  View Event Report
                </a>
              )}
            </div>

            {/* IMAGES */}
            {event.file_path && (
              <div className="event-images">
                {(() => {
                  let paths = [];
                  try { paths = JSON.parse(event.file_path); } catch { paths = [event.file_path]; }
                  return paths.map((p, i) => (
                    <img key={i} src={`http://localhost:5000${p}`} alt={`${event.title} - photo ${i + 1}`} />
                  ));
                })()}
              </div>
            )}

            <div className="ql-content" dangerouslySetInnerHTML={{ __html: event.description }} />

            {/* LINK */}
            {event.link_url && (
              <a
                href={event.link_url}
                target="_blank"
                rel="noreferrer"
                className="event-link"
              >
                {event.link_text || "Learn More"}
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Events;