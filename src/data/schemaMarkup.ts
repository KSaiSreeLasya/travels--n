export interface SchemaMarkup {
  [key: string]: unknown;
}

export const organizationSchema: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sree Hanuman Travels",
  "description": "Reliable car rentals, taxi services, tempo travellers, and bus rentals in Kadapa",
  "url": "https://sreehanumantravels.com",
  "telephone": "+919676939529",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kadapa",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "516001",
    "addressCountry": "IN"
  },
  "areaServed": [
    "Kadapa",
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Vijayawada",
    "Tirupati",
    "Srisailam"
  ],
  "serviceType": [
    "Car Rental",
    "Taxi Service",
    "Bus Rental",
    "Airport Transfer",
    "Tour Package",
    "Wedding Vehicle Rental"
  ],
  "image": "https://sreehanumantravels.com/favicon.svg",
  "priceRange": "₹₹",
  "sameAs": [
    "https://www.facebook.com/sreehanumantravels",
    "https://www.instagram.com/sreehanumantravels",
    "https://www.google.com/maps/place/sreehanumantravels"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "250"
  }
};

export const homePageSchema: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sree Hanuman Travels - Car Rentals & Taxi Services in Kadapa",
  "description": "Book reliable car rentals, taxi services, and tour packages in Kadapa",
  "url": "https://sreehanumantravels.com",
  "publisher": {
    "@type": "Organization",
    "name": "Sree Hanuman Travels"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>): SchemaMarkup => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>): SchemaMarkup => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export function injectSchemaMarkup(schema: SchemaMarkup): void {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function injectOrganizationSchema(): void {
  injectSchemaMarkup(organizationSchema);
}

export function injectHomePageSchema(): void {
  injectSchemaMarkup(homePageSchema);
}
