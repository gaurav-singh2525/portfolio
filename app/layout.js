import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Gaurav Singh",
    "IIT Jodhpur",
    "SDE Intern",
    "Software Development Engineer",
    "Backend Systems",
    "Systems Programming",
    "Distributed Systems",
    "Competitive Programming",
    "LeetCode",
    "C++",
    "Go",
    "Mini Redis",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Student",
    description: siteConfig.description,
    email: siteConfig.email,
    url: siteConfig.url,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Jodhpur",
    },
    knowsAbout: [
      "Backend Systems",
      "Distributed Systems",
      "Systems Programming",
      "Data Structures and Algorithms",
      "C++",
      "Concurrency",
      "TCP/IP Networking",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-background text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
