import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zomato Blog - Food and Restaurant Stories",
  description:
    "Discover inspiring stories from the world of food and restaurants. Read about successful restaurateurs, food culture, and our mission for better food for more people.",
  openGraph: {
    title: "Zomato Blog - Food and Restaurant Stories",
    description: "Discover inspiring stories from the world of food and restaurants",
    url: "https://blog.zomato.com",
    siteName: "Zomato Blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

