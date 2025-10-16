import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Muzamil | Java Backend Developer | Hyderabad",
  description:
    "Muhammad Muzamil - Senior Java Backend Developer from Hyderabad, Sindh. Expert in Spring Boot, Microservices, and scalable application architecture. View my portfolio, projects, and expertise.",
  keywords:
    "Muhammad Muzamil, Java Developer, Backend Developer, Spring Boot, Microservices, Hyderabad, Sindh, Pakistan, REST APIs, Database Design",
  authors: [{ name: "Muhammad Muzamil" }],
  creator: "Muhammad Muzamil",
  publisher: "Muhammad Muzamil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadmuzamil.dev",
    title: "Muhammad Muzamil | Java Backend Developer | Hyderabad",
    description:
      "Explore the portfolio of Muhammad Muzamil, a skilled Java Backend Developer specializing in scalable applications, REST APIs, and microservices.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738660079146-fem3Nz5T2sDtFIzwX3y3XqwkizR7Hc.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Muzamil - Java Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Muzamil | Java Backend Developer",
    description: "Explore my portfolio showcasing Java, Spring Boot, and microservices projects.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738660079146-fem3Nz5T2sDtFIzwX3y3XqwkizR7Hc.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://muhammadmuzamil.dev",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
