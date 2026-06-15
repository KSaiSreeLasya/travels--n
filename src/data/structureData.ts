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
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Superb Air Conditioning", "Compact and Highly Maneuverable", "High Highway Mileage Engine", "Spacious Boot Space"],
        suggestedVehicles: ["Suzuki Baleno Core", "Toyota Etios AC Sedan"],
        ctaUrl: "Standard Cars"
      },
      {
        id: "suvs",
        name: "Premium SUVs",
        tagline: "Rugged stability & dual-air control cabins",
        description: "Equipped with reliable ground clearance and tough suspension. Ideal for long travels on remote highway lanes.",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Higher Highway Visibility", "Dual AC Temperature Setup", "All-Terrain Suspension Board", "Premium Cabin Space"],
        suggestedVehicles: ["Suzuki Ertiga Comfort", "Toyota Innova Crysta"],
        ctaUrl: "Premium SUVs"
      },
      {
        id: "innova_crysta",
        name: "Innova Crysta",
        tagline: "Gold Standard of Indian road travels",
        description: "The absolute premium family ride. Includes extra legroom, captain seats, rear climate control, and generous top luggage rails.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
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
        tagline: "Hourly & full day runs inside Kadapa",
        description: "Affordable city cruising solutions for business check-ins, relative meets, temple drops, or localized travels.",
        image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Costs ₹11 - ₹25 per Km onwards", "Flexible 8 Hour / 80 Km Base Plans", "Affordable local driver arrangements", "Zero Cash Advance Options Available"],
        suggestedVehicles: ["Suzuki Baleno Core", "Suzuki Ertiga Family Comfort"],
        ctaUrl: "Local Hourly Rental"
      },
      {
        id: "outstation_rental",
        name: "Outstation Rental",
        tagline: "₹1,800 - ₹5,000 onwards / day",
        description: "Direct long distance travel with experienced highway drivers. Perfect for families, corporate outstations, and multiple halts.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Cost: ₹1,800 - ₹5,000 per day onwards", "Interstate permits & tolls sorted", "Trained high-speed highway drivers", "24/7 backup vehicle protection"],
        suggestedVehicles: ["Toyota Innova Crysta", "Toyota Etios AC Sedan"],
        ctaUrl: "Outstation Trip Rental"
      },
      {
        id: "airport_transfer",
        name: "Car on Rent - Airport Transfer",
        tagline: "₹11 - ₹25 / Km onwards",
        description: "Timely drops and pickups to major international/domestic terminals from Kadapa. Direct 4-lane highway transport.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Costs ₹11 - ₹25 per Km onwards", "Airport pickups & terminal drop assistance", "Generous luggage carriers included", "Covers Chennai, Bangalore, Tirupati, Hyd"],
        suggestedVehicles: ["Toyota Etios Sedan", "Toyota Innova Crysta"],
        ctaUrl: "Airport Transfer"
      },
      {
        id: "event_rental",
        name: "Car on Rent - Events",
        tagline: "₹1,800 onwards / day",
        description: "Turn marriages, VIP guest arrivals, political meetings, and family events into seamless premium passenger voyages.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Costs ₹1,800 onwards per day", "Pristine white vehicle selections", "Polite uniformed drivers", "Multi-fleet coordination systems"],
        suggestedVehicles: ["Toyota Innova Crysta", "SML Executive Passenger Bus"],
        ctaUrl: "Wedding Travel Caravan"
      },
      {
        id: "monthly_rental",
        name: "Car on Rent - Monthly",
        tagline: "₹12,000 onwards / monthly",
        description: "Reliable, regular vehicle retainerships for monthly company staff transits, executive standard pickups, or corporate retainers.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Costs ₹12,000 onwards per month", "GST invoicing & corporate compliance", "Dedicated driver & replacement cars", "Optimized long-term custom agreements"],
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
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Drivers Well-Versed in Temple Routings", "Safe Driving on High-Ghat Roads", "Forest Checkpost Clearance Guidance", "Special Senior Citizen Accommodation Stops"],
        suggestedVehicles: ["Force Cruiser (12+1 Seater)", "Toyota Innova Crysta"],
        ctaUrl: "Devotional Temple Pilgrimage"
      },
      {
        id: "tourist_places",
        name: "Tourist Places",
        tagline: "Adventure escapes and historical viewpoints",
        description: "Explore the Grand Canyon of India at Gandikota, traverse the underground formations of Belum Caves, or enjoy the mist at Horsley Hills.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Expert Local Guides / Spot Knowledge", "Photogenic Sunrises / Sunset Stops", "Safe Storage of Camper Gear Cabinets", "Roundtrip Budget Discounts Included"],
        suggestedVehicles: ["Suzuki Ertiga Family Comfort", "Toyota Innova Crysta"],
        ctaUrl: "Scenic Tourist Destination"
      },
      {
        id: "cities",
        name: "Intercity Pathways",
        tagline: "Direct swift routes to south India’s leading cities",
        description: "Reliable, regular drop or round trips to Bangalore, Chennai, Hyderabad, Nellore, Anantapur, and Vijayawada.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Intercity Express Toll Highway Routings", "Round-The-Clock Backup Cab Protection", "Comfort Cab Insulated cabins", "Verified Interstate Tax Documentation"],
        suggestedVehicles: ["Toyota Etios Sedan", "Suzuki Baleno Hatchback"],
        ctaUrl: "Intercity Highway Drops"
      },
      {
        id: "custom_trip",
        name: "Custom Trip Plans",
        tagline: "Decide your own milestones with Settooru Bros",
        description: "Tell us exactly where you want to go. Perfect for multi-family gatherings, multi-city visits, or personal leisure explorations.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
        highlightFeatures: ["Build Multi-Stop High-Halt Travel Routes", "Choose Any Combination of Vehicles", "Flexible Overnight halts", "Friendly Proprietor Tariff Pricing"],
        suggestedVehicles: ["All Sree Hanuman Fleet Available"],
        ctaUrl: "Custom Trip Blueprint"
      }
    ]
  }
];
