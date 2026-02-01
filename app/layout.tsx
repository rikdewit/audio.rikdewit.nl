// Added React import to fix 'Cannot find namespace React' when using React.ReactNode
import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rik de Wit Audio | Professionele Geluidstechnicus & Live Mixing",
  description: "Freelance audio technicus gespecialiseerd in live mixing, evenementen en technische ondersteuning. Gevestigd in Eindhoven & Utrecht. Passie voor perfect geluid.",
  keywords: ["Rik de Wit", "Audio Technicus", "Live Mixing", "Geluidstechnicus Utrecht", "Geluidstechnicus Eindhoven", "Freelance Audio"],
  authors: [{ name: "Rik de Wit" }],
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
    url: "https://audio.rikdewit.nl/",
    siteName: "Rik de Wit Audio",
    images: [
      {
        url: "https://s6.imgcdn.dev/Y07eng.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rik de Wit Audio | Professionele Geluidstechnicus",
    description: "Freelance audio technicus voor live mixing en evenementen.",
    images: ["https://s6.imgcdn.dev/Y07eng.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rik de Wit Audio",
              "image": "https://s6.imgcdn.dev/Y07eng.png",
              "@id": "https://audio.rikdewit.nl",
              "url": "https://audio.rikdewit.nl",
              "telephone": "+31637231247",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Eindhoven",
                "addressRegion": "Noord-Brabant",
                "addressCountry": "NL"
              },
              "description": "Professionele audio-oplossingen voor live evenementen door Rik de Wit."
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}