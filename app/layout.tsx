import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import OrganizationSchema from "./organization-schema"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: {
    template: "%s | Genius Labs Blog",
    default: "Genius Labs Blog - Educational Resources for Young Innovators",
  },
  description:
    "Discover educational resources, workshops, and learning opportunities for children. Genius Labs helps young minds explore STEM, arts, and creative thinking.",
  keywords:
    "genius labs, educational resources, STEM for kids, children's workshops, educational camps, learning projects, creative thinking",
  authors: [{ name: "Genius Labs", url: "https://geniuslabs.edu" }],
  creator: "Genius Labs",
  publisher: "Genius Labs",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://blog.geniuslabs.edu"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  category: "Education",
  openGraph: {
    title: "Genius Labs Blog - Educational Resources for Young Innovators",
    description:
      "Discover educational resources, workshops, and learning opportunities for children. Genius Labs helps young minds explore STEM, arts, and creative thinking.",
    url: "https://blog.geniuslabs.edu",
    siteName: "Genius Labs Blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genius Labs Blog - Educational Resources for Young Innovators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Labs Blog - Educational Resources for Young Innovators",
    description: "Discover educational resources, workshops, and learning opportunities for children",
    images: ["/og-image.jpg"],
    creator: "@GeniusLabs",
    site: "@GeniusLabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  )
}

