export interface EventType {
  id: number;
  name: string;
  date: string; // Format: day, dd-mm-yyyy
  time: string; // Format: hh:mm AM/PM
  image: string; // URL or path to the image
  description: string; // Short description of the event
  type: string; // Event type: Social, Career, Education, etc.
  address: string; // Location or address of the event
  details: string[]; // Array of paragraphs describing the event in detail
  campus: string; // Campus where the event will be held
  registrationLink: string; // link for event registration
  isUpcoming: boolean;
}
