import React, { useState } from "react";
import {
  getBookingUrl,
  openBookingPage,
  isBookingConfigured,
  BOOKING_CONFIG,
} from "../utils/BookingConfig";

interface BookingCardProps {
  onClose?: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ onClose }) => {
  const [showEmbed, setShowEmbed] = useState(
    BOOKING_CONFIG.SHOW_EMBED_BY_DEFAULT
  );

  const handleBookNow = () => {
    if (isBookingConfigured()) {
      openBookingPage();
    } else {
      alert(
        "Booking system is not configured yet. Please contact Suchitra directly at suchitraswain.2012@gmail.com"
      );
    }
  };

  const handleEmbedToggle = () => {
    setShowEmbed(!showEmbed);
  };

  return (
    <div className="booking-card">
      <div className="booking-header">
        <h4 className="booking-title">{BOOKING_CONFIG.TITLE}</h4>
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            <img
              src="/src/assets/close.png"
              alt="Close"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>

      <div className="booking-content">
        <p className="booking-description">{BOOKING_CONFIG.DESCRIPTION}</p>

        <div className="booking-options">
          <button className="book-btn primary" onClick={handleBookNow}>
            <span className="btn-icon">📅</span>
            Book Now
          </button>

          <button className="book-btn secondary" onClick={handleEmbedToggle}>
            <span className="btn-icon">📋</span>
            {showEmbed ? "Hide Calendar" : "Show Calendar"}
          </button>
        </div>

        {showEmbed && (
          <div className="booking-embed">
            {isBookingConfigured() ? (
              <>
                <div className="booking-embed-header">
                  <h5 className="embed-title">📅 Select Your Preferred Time</h5>
                  <p className="embed-subtitle">
                    Choose from available 15-minute slots
                  </p>
                </div>
                <div className="iframe-container">
                  <iframe
                    src={getBookingUrl()}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    title="Booking Calendar"
                    className="booking-iframe"
                  />
                </div>
              </>
            ) : (
              <div className="booking-embed-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">📅</div>
                  <h5>Calendar Not Configured</h5>
                  <p>To enable the embedded calendar, please:</p>
                  <ol>
                    <li>Go to Google Calendar</li>
                    <li>Create an "Appointment Schedule"</li>
                    <li>Set duration to 15 minutes</li>
                    <li>Copy the booking page URL</li>
                    <li>Update the CALENDAR_URL in BookingConfig.ts</li>
                  </ol>
                  <p className="placeholder-note">
                    For now, you can use the "Book Now" button above to open the
                    booking page directly.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
