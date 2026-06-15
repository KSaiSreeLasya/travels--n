export interface SubCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlightFeatures: string[];
  suggestedVehicles: string[];
  ctaUrl: string;
}

export interface MainCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  subcategories: SubCategory[];
}

export const MAIN_NAV_STRUCTURE: MainCategory[] = [
  {
    id: "vehicles",
    title: "Vehicles",
    description: "Our certified commercial-plate ready rental fleet, maintained directly by Settooru Bros",
    iconName: "Car",
    subcategories: [
      {
        id: "cars",
        name: "Standard Cars",
        tagline: "Hatchbacks & Sedans for daily city commuting",
        description: "Perfect, economical solution for local Kadapa run, commercial license drops, or visiting nearby villages safely.",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Superb Air Conditioning", "Compact and Highly Maneuverable", "High Highway Mileage Engine", "Spacious Boot Space"],
        suggestedVehicles: ["Suzuki Baleno Core", "Toyota Etios AC Sedan"],
        ctaUrl: "Standard Cars"
      },
      {
        id: "suvs",
        name: "Premium SUVs",
        tagline: "Rugged stability & dual-air control cabins",
        description: "Equipped with reliable ground clearance and tough suspension. Ideal for long travels on remote highway lanes.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Higher Highway Visibility", "Dual AC Temperature Setup", "All-Terrain Suspension Board", "Premium Cabin Space"],
        suggestedVehicles: ["Suzuki Ertiga Comfort", "Toyota Innova Crysta"],
        ctaUrl: "Premium SUVs"
      },
      {
        id: "innova_crysta",
        name: "Innova Crysta",
        tagline: "Gold Standard of Indian road travels",
        description: "The absolute premium family ride. Includes extra legroom, captain seats, rear climate control, and generous top luggage rails.",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Premium Captain Seats", "Professional Dedicated Highway Driver", "Overnight Ride Safety Rails", "Zero Security Cash Deposit"],
        suggestedVehicles: ["Toyota Innova Crysta (7+1 Seater)"],
        ctaUrl: "Toyota Innova Crysta"
      },
      {
        id: "tempo_traveller",
        name: "Tempo Traveller",
        tagline: "Unmatched performance for family group runs",
        description: "Classic Force Traveller layouts of 11+1 up to 13+1 seat capacity. Equipped with heavy overhead carriers for temple bags.",
        image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["12+1 Seater Passenger Cap", "Heavy Duty Roof Luggage Carrier", "Excellent for Outstation Pilgrimages", "High Ground Clearance"],
        suggestedVehicles: ["Force Cruiser (12 Seats)", "Force Toofan (11 Seats)"],
        ctaUrl: "Force Tempo Traveller"
      },
      {
        id: "urbania",
        name: "Urbania Luxury",
        tagline: "Next-gen super-premium executive cruisers",
        description: "Indulge in wide panoramic view windows, ergonomic individual bucket seats, individual AC blowers, and high-fidelity sound acoustics.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Panoramic Wide Glass Vents", "Individual USB Port Chargers", "Plush Headrest Recliners", "Direct Owner Booking Rate"],
        suggestedVehicles: ["Force Urbania Executive Cruiser (14 Seater)"],
        ctaUrl: "Force Urbania"
      },
      {
        id: "buses",
        name: "Buses & Coaches",
        tagline: "AC & Non-AC luxury coaches for grand events",
        description: "Full size SML and custom transport coaches ranging from 25 to 40 passengers. Best for marriage functions and company retreats.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["25+1 Luxury Headroom Seats", "Air Conditioned Executive Cab", "Full Integrated Sound System", "Custom Long-Distance Package Deals"],
        suggestedVehicles: ["SML Executive Passenger Bus"],
        ctaUrl: "SML Luxury Coach Bus"
      }
    ]
  },
  {
    id: "services",
    title: "Services",
    description: "Custom tailored road travel solutions covering every logistical requirement",
    iconName: "Briefcase",
    subcategories: [
      {
        id: "local_rental",
        name: "Local Rental",
        tagline: "Hourly & full day bookings inside Kadapa",
        description: "Direct city transport solutions for shopping visits, relative check-ins, medical travels, or localized business tours.",
        image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Flexible 8 Hour / 80 Km Base Plans", "Transparent Per-Kilometer Adjustments", "Friendly Local drivers", "No Prepayment Deposit Needed"],
        suggestedVehicles: ["Suzuki Baleno Core", "Suzuki Ertiga Family Comfort"],
        ctaUrl: "Local Hourly Rental"
      },
      {
        id: "outstation_rental",
        name: "Outstation Rental",
        tagline: "Safe interstate & intercity single or round voyages",
        description: "Direct non-stop long distance travel with trained drivers who understand crucial forest checkposts and state-border taxes.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Intercity Toll & Tax Management", "All India Tourist Permit Plates", "Experienced High Speed Highway Control", "Dual Driver Availability Options"],
        suggestedVehicles: ["Toyota Innova Crysta", "Toyota Etios (AP39TD8168)"],
        ctaUrl: "Outstation Trip Rental"
      },
      {
        id: "airport_transfer",
        name: "Airport Transfer",
        tagline: "Timely drops and pickups to major airports",
        description: "Guaranteed terminal drops to Tirupati Airport (Renigunta), Kadapa Airport, Chennai International Airport, or Bangalore Kempegowda Airport.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["24x7 Doorstep Flight Connection Alerts", "Experienced On-Time Highway Safe Arrivals", "Sufficient Luggage Carrier Setups", "Consistent Flat Ride Tariff Quotes"],
        suggestedVehicles: ["Toyota Etios Sedan", "Toyota Innova Crysta"],
        ctaUrl: "Airport Transfer"
      },
      {
        id: "wedding_rental",
        name: "Wedding Rental",
        tagline: "Premium wedding luxury fleets & transport",
        description: "Arrive in style with pristine, decorated white luxury vehicle lines and coordinated bus logistics to ferry all wedding guests safely.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Spotless Pristine White Vehicles", "Coordinated Multi-Car Dispatch System", "Uniformed Professional chauffeurs", "SML Buses for extended Guest Transfers"],
        suggestedVehicles: ["Toyota Innova Crysta", "SML Executive Passenger Bus"],
        ctaUrl: "Wedding Travel Caravan"
      },
      {
        id: "corporate_rental",
        name: "Corporate Rental",
        tagline: "Professional long-term travels for companies",
        description: "High-grade sedan and SUVs on monthly retainer or punctual day schedules for corporate executives, VIP delegates, and site workers.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["GST Invoicing & Direct Monthly Settlement", "Verified Polite Multilingual Highway Drivers", "Strict Punctual Pickups", "Non-Branded Premium Clean Cab Lines"],
        suggestedVehicles: ["Toyota Etios Sedan", "Toyota Innova Crysta"],
        ctaUrl: "Corporate Fleet Agreement"
      },
      {
        id: "tour_packages",
        name: "Tour Packages",
        tagline: "All-inclusive road transport packages",
        description: "Pre-planned religious and tourist routes from Kadapa to holy shrines or leisure spots, combining scenic halts and safe highway speeds.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Customized Scenic Viewpoints & Halts", "Experienced Route Drivers", "Transparent Round pricing", "Flexible Stay Duration Adaptability"],
        suggestedVehicles: ["Toyota Innova Crysta", "SML Executive Passenger Bus"],
        ctaUrl: "Complete Tour Package"
      }
    ]
  },
  {
    id: "destinations",
    title: "Destinations",
    description: "Our highly demanded highway pathways throughout Andhra Pradesh and neighboring states",
    iconName: "Compass",
    subcategories: [
      {
        id: "temple_trips",
        name: "Temple Trips",
        tagline: "Devotional circuits to prominent south Indian temples",
        description: "Direct door-to-door pilgrimage trips. From Kadapa local areas directly to Tirumala Tirupati, Srisailam forest, Mahanandi shrines, and Ahobilam.",
        image: "https://images.unsplash.com/photo-1608930264026-616a9c3f103a?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Drivers Well-Versed in Temple Routings", "Safe Driving on High-Ghat Roads", "Forest Checkpost Clearance Guidance", "Special Senior Citizen Accommodation Stops"],
        suggestedVehicles: ["Force Cruiser (12+1 Seater)", "Toyota Innova Crysta"],
        ctaUrl: "Devotional Temple Pilgrimage"
      },
      {
        id: "tourist_places",
        name: "Tourist Places",
        tagline: "Adventure escapes and historical viewpoints",
        description: "Explore the Grand Canyon of India at Gandikota, traverse the underground formations of Belum Caves, or enjoy the mist at Horsley Hills.",
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Expert Local Guides / Spot Knowledge", "Photogenic Sunrises / Sunset Stops", "Safe Storage of Camper Gear Cabinets", "Roundtrip Budget Discounts Included"],
        suggestedVehicles: ["Suzuki Ertiga Family Comfort", "Toyota Innova Crysta"],
        ctaUrl: "Scenic Tourist Destination"
      },
      {
        id: "cities",
        name: "Intercity Pathways",
        tagline: "Direct swift routes to south India’s leading cities",
        description: "Reliable, regular drop or round trips to Bangalore, Chennai, Hyderabad, Nellore, Anantapur, and Vijayawada.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Intercity Express Toll Highway Routings", "Round-The-Clock Backup Cab Protection", "Comfort Cab Insulated cabins", "Verified Interstate Tax Documentation"],
        suggestedVehicles: ["Toyota Etios Sedan", "Suzuki Baleno Hatchback"],
        ctaUrl: "Intercity Highway Drops"
      },
      {
        id: "custom_trip",
        name: "Custom Trip Plans",
        tagline: "Decide your own milestones with Settooru Bros",
        description: "Tell us exactly where you want to go. Perfect for multi-family gatherings, multi-city visits, or personal leisure explorations.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Build Multi-Stop High-Halt Travel Routes", "Choose Any Combination of Vehicles", "Flexible Overnight halts", "Friendly Proprietor Tariff Pricing"],
        suggestedVehicles: ["All Sree Hanuman Fleet Available"],
        ctaUrl: "Custom Trip Blueprint"
      }
    ]
  }
];
