
export interface Room {
  id: string;
  name: string;
  building: string;
  capacity: number;
  amenities: string[];
  image: string;
  availableSlots: string[];
}

export const rooms: Room[] = [
  {
    id: "101",
    name: "The Quiet Room",
    building: "Academic Block A",
    capacity: 4,
    amenities: ["Wi-Fi", "Air Conditioning", "Power Outlets"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    availableSlots: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
  },
  {
    id: "102",
    name: "The Discussion Suite",
    building: "Academic Block B",
    capacity: 8,
    amenities: ["Wi-Fi", "Whiteboard", "Projector"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    availableSlots: ["09:00 AM", "12:00 PM", "03:00 PM"],
  },
  {
    id: "103",
    name: "Digital Lab",
    building: "Technology Centre",
    capacity: 15,
    amenities: ["Computers", "Wi-Fi", "Air Conditioning"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    availableSlots: ["10:00 AM", "01:00 PM", "03:00 PM"],
  },
  {
    id: "104",
    name: "The Seminar Room",
    building: "Academic Block A",
    capacity: 20,
    amenities: ["Projector", "Wi-Fi", "Whiteboard"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    availableSlots: ["09:00 AM", "11:00 AM", "02:00 PM"],
  },
  {
    id: "105",
    name: "The Conference Room",
    building: "Administrative Block",
    capacity: 12,
    amenities: ["Projector", "Air Conditioning", "Wi-Fi"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    availableSlots: ["10:00 AM", "01:00 PM", "04:00 PM"],
  },
  {
    id: "106",
    name: "Creative Space",
    building: "Innovation Hub",
    capacity: 6,
    amenities: ["Wi-Fi", "Whiteboard", "Power Outlets"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    availableSlots: ["09:00 AM", "12:00 PM", "02:00 PM"],
  },
];
