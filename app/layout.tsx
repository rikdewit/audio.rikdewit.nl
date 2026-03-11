// Added React import to fix 'Cannot find namespace React' when using React.ReactNode
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { inter, jetbrainsMono, caveat } from "./fonts";
import ScrollHandler from "./scroll-handler";

// Define the base URL to ensure social images and canonicals work correctly
const BASE_URL = 'https://audio.rikdewit.nl';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rik de Wit Audio | Professionele Geluidstechnicus & Live Mixing",
    template: "%s | Rik de Wit Audio"
  },
  description: "Freelance audio technicus gespecialiseerd in live mixing, evenementen en technische ondersteuning. Gevestigd in Eindhoven & Utrecht. Passie voor perfect geluid.",
  keywords: ["Rik de Wit", "Audio Technicus", "Live Mixing", "Geluidstechnicus Utrecht", "Geluidstechnicus Eindhoven", "Freelance Audio", "Geluidsman", "Evenementen techniek"],
  authors: [{ name: "Rik de Wit" }],
  creator: "Rik de Wit",
  publisher: "Rik de Wit Audio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/Favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Favicon/apple-touch-icon.png",
  },
  manifest: "/Favicon/site.webmanifest",
  openGraph: {
    title: "Rik de Wit Audio | Professionele Geluidstechnicus",
    description: "Freelance audio technicus voor live mixing en evenementen. Kwaliteit en precisie voor elk project.",
    url: BASE_URL,
    siteName: "Rik de Wit Audio",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://s6.imgcdn.dev/Y07eng.png",
        width: 1200,
        height: 630,
        alt: "Rik de Wit Audio - Visual Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rik de Wit Audio | Professionele Geluidstechnicus",
    description: "Freelance audio technicus voor live mixing en evenementen. Kwaliteit en precisie voor elk project.",
    images: ["https://s6.imgcdn.dev/Y07eng.png"],
    creator: "@rikdewit_audio", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rik de Wit Audio",
              "image": "https://s6.imgcdn.dev/Y07eng.png",
              "@id": BASE_URL,
              "url": BASE_URL,
              "telephone": "+31637231247",
              "email": "audio@rikdewit.nl",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Eindhoven",
                "addressRegion": "Noord-Brabant",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.4416,
                "longitude": 5.4697
              },
              "areaServed": [
                {
                    "@type": "City",
                    "name": "Eindhoven"
                },
                {
                    "@type": "City",
                    "name": "Utrecht"
                },
                {
                    "@type": "Country",
                    "name": "Netherlands"
                }
              ],
              "openingHours": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/rikdewit.audio"
              ],
              "description": "Professionele audio-oplossingen voor live evenementen, mixing en technisch advies door Rik de Wit.",
              "hasOfferingDescription": [
                {
                  "@type": "Service",
                  "name": "Live Audio Mixing",
                  "description": "Professionele live mixing services voor evenementen, concerten en productionen."
                },
                {
                  "@type": "Service",
                  "name": "Technische Geluidsverzorging",
                  "description": "Complete technische ondersteuning van geluidssystemen voor alle soorten evenementen."
                },
                {
                  "@type": "Service",
                  "name": "Audio Consultancy",
                  "description": "Advies en consultatie op het gebied van professionele audiotechniek."
                }
              ]
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
        <ScrollHandler />
        <script data-goatcounter="https://rikdewit-audio.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
      </body>
    </html>
  );
}