import { Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-teal-600 py-12 lg:py-16">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              🚀 Transforming Schools into <span className="text-orange-400">Innovation Hubs</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
              We bring tech education and career-ready skills straight to classrooms with IoT, AI, Design, and
              Development – from the very beginning.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/training">Explore Courses</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                <Link href="#video">
                  <Play className="mr-2 h-4 w-4" /> Watch Intro Video
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 w-full overflow-hidden rounded-lg bg-white/10 shadow-xl backdrop-blur-sm">
            <Image
              src="/hero.jpg"
              alt="Students working on robotics projects in a classroom"
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
