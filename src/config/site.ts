/**
 * Single source of truth for Dei Gratia's public details.
 * Values confirmed from the brand flyer are filled in; anything only the
 * client can supply is marked with `PLACEHOLDER` so it's easy to grep before launch.
 */

const PLACEHOLDER = "PLACEHOLDER" as const;

export const site = {
  name: "Dei Gratia Medical Services",
  shortName: "Dei Gratia",
  tagline: "Trusted hands, by grace",
  signoff: "Dei Gratia, by the grace of God.",

  // Contact - confirmed from the flyer
  phone: { display: "054 673 1001", href: "tel:+233546731001" },
  phoneAlt: { display: "020 764 2170", href: "tel:+233207642170" },
  whatsapp: { display: "054 673 1001", href: "https://wa.me/233546731001" },
  email: { display: "deigratiamsl@gmail.com", href: "mailto:deigratiamsl@gmail.com" },

  // Dedicated WhatsApp line for appointment bookings.
  // PLACEHOLDER: swap the number if the client provides a separate booking line.
  // For now it points at the main WhatsApp.
  whatsappBooking: { href: "https://wa.me/233546731001" },

  // Emergency line, highlighted on the contact page.
  // PLACEHOLDER: swap if a dedicated emergency number is provided; currently the main line.
  emergency: { display: "054 673 1001", href: "tel:+233546731001" },

  address: {
    line1: "Wayamba Junction, Tamale-Bolgatanga Road",
    line2: "Opposite Quantum filling station",
    city: "Tamale",
    region: "Northern Region",
    country: "Ghana",
  },
  geo: { lat: 9.496242, lng: -0.844425 },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=9.496242,-0.844425",

  // OPD hours, confirmed with the client.
  hours: "8am to 10pm daily",
  hoursShort: "8am to 10pm",
  social: {
    facebook: PLACEHOLDER,
    instagram: PLACEHOLDER,
    tiktok: PLACEHOLDER,
  },

  nhisAccepted: true,
  emergency247: true,
} as const;

/**
 * Booking runs through WhatsApp everywhere - every "Book an appointment"
 * button opens a chat with the message ready to send, rather than routing
 * to the contact page.
 */
export const bookingHref = `${site.whatsappBooking.href}?text=${encodeURIComponent(
  "Hello Dei Gratia, I would like to book an appointment."
)}`;

export const primaryNav = [
  { label: "Our Story", href: "/our-story" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceIcon =
  | "heart"
  | "shield"
  | "siren"
  | "flask"
  | "scan"
  | "stethoscope"
  | "pill"
  | "clipboard"
  | "users";

export type Service = {
  title: string;
  blurb: string;
  href: string;
  icon: ServiceIcon;
  tone: "blue" | "navy" | "teal" | "slate" | "emergency";
  /** Flagship care gets visual emphasis in the services scroller. */
  flagship?: boolean;
  /** Optional photo (in /public). Falls back to a branded panel when absent. */
  image?: string;
};

/** Services hub - ordered to lead with the flagship and emergency (per the brief). */
export const services: Service[] = [
  {
    title: "Maternal & Child Health",
    blurb: "Caring for mothers and babies, from pregnancy through the early years.",
    href: "/services/maternal-child-health",
    icon: "heart",
    tone: "blue",
    flagship: true,
    image: "/media/services/maternal-child-health",
  },
  {
    title: "Emergency & Urgent Care",
    blurb: "Ready the moment you need us, quickly and calmly, every hour of the day.",
    href: "/services/emergency-urgent-care",
    icon: "siren",
    tone: "emergency",
    image: "/media/services/emergency-urgent-care",
  },
  {
    title: "Laboratory & Diagnostics",
    blurb: "Accurate results on-site, so answers come sooner.",
    href: "/services/laboratory-diagnostics",
    icon: "flask",
    tone: "teal",
    image: "/media/services/laboratory-diagnostics",
  },
  {
    title: "Medical Imaging",
    blurb: "X-ray and ultrasound for a clearer picture of your health.",
    href: "/services/imaging",
    icon: "scan",
    tone: "slate",
    image: "/media/services/imaging",
  },
  {
    title: "Outpatient Consultations",
    blurb: "Unhurried time with a doctor who listens.",
    href: "/services/outpatient",
    icon: "stethoscope",
    tone: "navy",
    image: "/media/services/outpatient",
  },
  {
    title: "Pharmacy",
    blurb: "Your prescriptions filled before you leave.",
    href: "/services/pharmacy",
    icon: "pill",
    tone: "teal",
    image: "/media/services/pharmacy",
  },
  {
    title: "Health Screenings",
    blurb: "Catch concerns early and stay ahead of them.",
    href: "/services/health-screenings",
    icon: "clipboard",
    tone: "blue",
    image: "/media/services/health-screenings",
  },
  {
    title: "Specialist Services",
    blurb: "Expert care for specific needs, close to home.",
    href: "/services/specialist-services",
    icon: "users",
    tone: "slate",
    image: "/media/services/specialist-services",
  },
];

/**
 * Hero background photos - cross-fade in the order listed.
 * PLACEHOLDER imagery: swap the `src` values for the client's own facility
 * and staff photos when they arrive (keep them ~1920px wide, avif + webp).
 */
export const heroSlides = [
  { src: "/media/hero-1", alt: "The Dei Gratia medical team together at the clinic." },
  { src: "/media/hero-2", alt: "A Dei Gratia clinician in the consulting room." },
] as const;
