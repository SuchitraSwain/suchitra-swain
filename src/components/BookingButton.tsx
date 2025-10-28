import React from "react";
import { openBookingPage, isBookingConfigured } from "../utils/BookingConfig";

interface BookingButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
}

const BookingButton: React.FC<BookingButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  children = 'Book a Call'
}) => {
  const handleClick = () => {
    if (isBookingConfigured()) {
      openBookingPage();
    } else {
      alert("Booking system is not configured yet. Please contact Suchitra directly at suchitraswain.2012@gmail.com");
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'booking-button';
    const variantClasses = {
      primary: 'booking-button--primary',
      secondary: 'booking-button--secondary',
      outline: 'booking-button--outline'
    };
    const sizeClasses = {
      small: 'booking-button--small',
      medium: 'booking-button--medium',
      large: 'booking-button--large'
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
  };

  return (
    <button 
      className={getButtonClasses()}
      onClick={handleClick}
    >
      <span className="booking-button__icon">📅</span>
      <span className="booking-button__text">{children}</span>
    </button>
  );
};

export default BookingButton;
