// Booking Configuration
export const BOOKING_CONFIG = {
  // Replace with your actual Google Calendar booking page URL
  // You can get this URL by:
  // 1. Going to Google Calendar
  // 2. Creating an "Appointment Schedule"
  // 3. Setting it to 15 minutes duration
  // 4. Copying the generated booking page URL
  CALENDAR_URL:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2E9QFa5Ca3ybQwQgaGNgsaL3NJb9VVch0RkHMqKqKMjHtnkMVWhDHzVyDj6SUTsS-Ip-60LFC_",

  // Booking settings
  DURATION: "15 minutes",
  TITLE: "15-Minute Consultation Call",
  DESCRIPTION:
    "Book a quick 15-minute call to discuss your project requirements, ask questions, or explore collaboration opportunities.",

  // UI settings
  SHOW_EMBED_BY_DEFAULT: false,
  ENABLE_MODAL: true,

  // Contact information for booking
  CONTACT_EMAIL: "suchitraswain.2012@gmail.com",
  CONTACT_NAME: "Suchitra Swain",

  // Timezone settings (optional)
  TIMEZONE: "Europe/Berlin", // Based on the address in contact info

  // Available time slots (if using custom implementation)
  AVAILABLE_HOURS: {
    start: 9, // 9 AM
    end: 17, // 5 PM
  },

  // Days of the week (0 = Sunday, 1 = Monday, etc.)
  AVAILABLE_DAYS: [1, 2, 3, 4, 5], // Monday to Friday
};

// Helper function to get the booking URL
export const getBookingUrl = (): string => {
  return BOOKING_CONFIG.CALENDAR_URL;
};

// Helper function to open booking in new tab
export const openBookingPage = (): void => {
  window.open(getBookingUrl(), "_blank", "noopener,noreferrer");
};

// Helper function to check if booking URL is configured
export const isBookingConfigured = (): boolean => {
  return (
    BOOKING_CONFIG.CALENDAR_URL !==
    "https://calendar.google.com/calendar/appointments/schedules/YOUR_CALENDAR_ID"
  );
};
