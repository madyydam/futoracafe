import React from 'react';
import Image from 'next/image';
import { MousePointer2, LayoutGrid } from 'lucide-react';

interface OpeningHours {
  left: { day: string; time: string }[];
  right: { day: string; time: string }[];
}

interface RestaurantLocation {
  id: string;
  name: string;
  image: string;
  address: string;
  serviceOptions?: string;
  phone?: string;
  order?: string;
  locatedIn?: string;
  hours: OpeningHours;
  hasReserveBtn: boolean;
}

const locations: RestaurantLocation[] = [
  {
    id: "prabhat-road",
    name: "SA DOSA CAFE (PRABHAT ROAD)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/2024-08-15-9.jpg",
    address: "Prabhat road, Lane no 8, Karve Rd, near garware college, Kachare Colony, Erandwane, Pune, Maharashtra 411004",
    serviceOptions: "Has all you can eat · Has outdoor seating · Serves vegan dishes",
    phone: "+91 84466 53644",
    hours: {
      left: [
        { day: "Sunday", time: "8:30 am–11:30 pm" },
        { day: "Monday", time: "8:30 am–11 pm" },
        { day: "Tuesday", time: "8:30 am–11 pm" },
        { day: "Wednesday", time: "8:30 am–11 pm" }
      ],
      right: [
        { day: "Thursday", time: "8:30 am–11:30 pm" },
        { day: "Friday", time: "8:30 am–11 pm" },
        { day: "Saturday", time: "8:30 am–11 pm" }
      ]
    },
    hasReserveBtn: true
  },
  {
    id: "bibwewadi",
    name: "SA DOSA CAFE (BIBWEWADI)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/RESTAURANT01-10.jpg",
    address: "Soba Saanj Apartment, Sitaram Aabaji Bibwe Path, opp. to bhagali hospital, Shree Sant Eknath Nagar, Padmavati Nagar, Pune, Maharashtra 411037",
    serviceOptions: "Has outdoor seating · Serves vegan dishes · Has Kids' Menu",
    phone: "098234 44534",
    hours: {
      left: [
        { day: "Sunday", time: "8:30 am–11 pm" },
        { day: "Monday", time: "8:30 am–11 pm" },
        { day: "Tuesday", time: "8:30 am–11 pm" },
        { day: "Wednesday", time: "8:30 am–11 pm" }
      ],
      right: [
        { day: "Thursday", time: "8:30 am–11 pm" },
        { day: "Friday", time: "8:30 am–11 pm" },
        { day: "Saturday", time: "8:30 am–11 pm" }
      ]
    },
    hasReserveBtn: true
  },
  {
    id: "aero-mall",
    name: "SA DOSA CAFE ( AERO MALL)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Screenshot_18-12-2024_21023_www_google_com_-11.jpeg",
    address: "Survey No 225, Pune Airport, Aeromall, Unit K 12, Lohegaon, Pune, Maharashtra 411047",
    serviceOptions: "Serves vegan dishes · Has Wi-Fi",
    phone: "+91 84466 53644",
    hours: {
      left: [
        { day: "Sunday", time: "8:30 am–11 pm" },
        { day: "Monday", time: "8:30 am–11 pm" },
        { day: "Tuesday", time: "8:30 am–11 pm" },
        { day: "Wednesday", time: "8:30 am–11 pm" }
      ],
      right: [
        { day: "Thursday", time: "8:30 am–11 pm" },
        { day: "Friday", time: "8:30 am–11 pm" },
        { day: "Saturday", time: "8:30 am–11 pm" }
      ]
    },
    hasReserveBtn: false
  },
  {
    id: "pimple-saudagar",
    name: "SA DOSA CAFE (PIMPLE SAUDAGAR)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/IMG_4132-scaled-12.jpg",
    address: "BLOCK A, KUNAL'S DEEPMALA, Deepmala Society, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027",
    serviceOptions: "Reservations required · Has all you can eat · Serves happy-hour food",
    phone: "098234 44534",
    hours: {
      left: [
        { day: "Sunday", time: "8:30 am–11 pm" },
        { day: "Monday", time: "8:30 am–11 pm" },
        { day: "Tuesday", time: "8:30 am–11 pm" },
        { day: "Wednesday", time: "8:30 am–11 pm" }
      ],
      right: [
        { day: "Thursday", time: "8:30 am–11 pm" },
        { day: "Friday", time: "8:30 am–11 pm" },
        { day: "Saturday", time: "8:30 am–11 pm" }
      ]
    },
    hasReserveBtn: true
  },
  {
    id: "wakad",
    name: "SA DOSA CAFE (WAKAD)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Screenshot_16-12-2024_213456_-13.jpeg",
    address: "Phoenix Mall Of The Millennium, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057",
    locatedIn: "Phoenix Mall Of The Millennium",
    order: "Swiggy.com",
    hours: {
      left: [
        { day: "Sunday", time: "11 am – 11 pm" },
        { day: "Monday", time: "11 am – 11 pm" },
        { day: "Tuesday", time: "11 am – 11 pm" },
        { day: "Wednesday", time: "11 am – 11 pm" }
      ],
      right: [
        { day: "Thursday", time: "11 am – 11 pm" },
        { day: "Friday", time: "11 am – 11 pm" },
        { day: "Saturday", time: "11 am – 11 pm" }
      ]
    },
    hasReserveBtn: false
  },
  {
    id: "nigdi",
    name: "SA DOSA CAFE ( NIGDI)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/2025-04-01-e1743758392648-14.jpg",
    address: "Sector No 24, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044",
    serviceOptions: "Has outdoor seating · Has fireplace · Serves vegan dishes",
    phone: "+91 84466 53644",
    hours: {
      left: [
        { day: "Sunday", time: "8:30 am–11 pm" },
        { day: "Monday", time: "8