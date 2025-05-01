import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "../components/header"
import { ThemeProvider } from "../components/theme-provider"
import SplashPopup from "../components/splash-popup"
import Footer from "../components/footer"
import { Toaster } from "../components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SlashZero - Transforming Schools into Innovation Hubs",
  description:
    "We bring tech education and career-ready skills straight to classrooms with IoT, AI, Design, and Development – from the very beginning.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SplashPopup />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
