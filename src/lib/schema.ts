export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smilex Digital Printing & Designing",
  "image": "https://smilexprinting.vercel.app/logo.png",
  "url": "https://smilexprinting.vercel.app/",
  "telephone": "+923325156123",
  "email": "smilex.isb@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ground Floor, Javed Plaza, Smilex Printing Shop#1, Main PWD Rd, behind D.Watson, D Block D PWD Society",
    "addressLocality": "Islamabad",
    "addressRegion": "Islamabad",
    "postalCode": "44000",
    "addressCountry": "PK",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.57118973000966,
    "longitude": 73.14523882663934,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    "opens": "08:00",
    "closes": "21:00",
  },
  "areaServed": [
    "Rawalpindi",
    "Islamabad",
    "Bahria Town",
    "Soan Garden",
    "CBR Town",
  ],
  "sameAs": [
    "https://www.facebook.com/smilex.isb/",
    "https://www.instagram.com/smilex_pk/",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Smilex Digital Printing & Designing",
  "url": "https://smilexprinting.vercel.app/",
  "logo": "https://smilexprinting.vercel.app/logo.png",
  "sameAs": [
    "https://www.facebook.com/smilex.isb/",
    "https://www.instagram.com/smilex_pk/",
  ],
};

const faqData = [
  {
    question: "What printing services do you offer?",
    answer:
      "We offer a full range of printing services including digital printing, offset printing, large format printing, UV printing, photocopying, binding, laminating, graphic design, and custom stationery like wedding cards, business cards, and brochures.",
  },
  {
    question: "How long does a typical print job take?",
    answer:
      "Turnaround time depends on the complexity and quantity. Most small to medium jobs are completed within 24\u201348 hours. Rush orders are available upon request.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer competitive rates and special discounts for bulk orders. Contact us with your quantity and requirements and we'll provide the best quote.",
  },
  {
    question: "Can I get a proof before printing?",
    answer:
      "Absolutely. We provide a digital proof for approval before starting the print run. This ensures the design, colors, and layout are exactly what you need.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept PDF, AI, PSD, CDR, EPS, JPG, and PNG files. If you don't have a print-ready file, our graphic design team can help create one for you.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Smilex Digital Printing & Designing",
  "url": "https://smilexprinting.vercel.app/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://smilexprinting.vercel.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
