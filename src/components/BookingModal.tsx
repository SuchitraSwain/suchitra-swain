import React from "react";
import BookingCard from "./BookingCard";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <BookingCard onClose={onClose} />
      </div>
    </div>
  );
};

export default BookingModal;
