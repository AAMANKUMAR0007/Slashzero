import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import NewsletterSignup from "./newsletter-signup"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="slashzero_logo.jpg" alt="SlashZero Logo" width={250} height={800} className="mr-2" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming schools into innovation hubs with IoT, AI, Design, and Development education.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-500 transition-colors hover:text-purple-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-500 transition-colors hover:text-purple-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-500 transition-colors hover:text-purple-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-500 transition-colors hover:text-purple-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mentoring" className="text-muted-foreground hover:text-primary">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-muted-foreground hover:text-primary">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-muted-foreground hover:text-primary">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/training#iot" className="text-muted-foreground hover:text-primary">
                  IoT & Robotics
                </Link>
              </li>
              <li>
                <Link href="/training#webdev" className="text-muted-foreground hover:text-primary">
                  App & Web Dev
                </Link>
              </li>
              <li>
                <Link href="/training#design" className="text-muted-foreground hover:text-primary">
                  Creative Design
                </Link>
              </li>
              <li>
                <Link href="/training#marketing" className="text-muted-foreground hover:text-primary">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/training#ip" className="text-muted-foreground hover:text-primary">
                  IP & Innovation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              <p className="text-sm text-muted-foreground">hello@slashzero.com</p>
              <p className="text-sm text-muted-foreground">+91-XXXXXXXXXX</p>
            </address>

            <div className="mt-6">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SlashZero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
