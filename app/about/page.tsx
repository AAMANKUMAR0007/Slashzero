import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function AboutPage() {
  const academicPrograms = [
    {
      title: "School-Tech Track",
      description: "IoT, Robotics, Basic Electronics, Coding",
      link: "/training#iot",
    },
    {
      title: "Design & Branding",
      description: "Logo, UI/UX, Creative Tools, Figma",
      link: "/training#design",
    },
    {
      title: "Web & App Development",
      description: "React, Flutter, Django, Laravel",
      link: "/training#webdev",
    },
    {
      title: "Marketing & Strategy",
      description: "SEO, Google Ads, Meta Marketing",
      link: "/training#marketing",
    },
    {
      title: "IP & Innovation",
      description: "Intellectual Property Basics & Legal Awareness",
      link: "/training#ip",
    },
  ]

  const differentiators = [
    {
      title: "Curriculum that Innovates",
      description: "Designed for school environments, mapped with NEP and future-ready skills.",
    },
    {
      title: "Mentorship from Experts",
      description: "Our mentors come from leading tech and design industries.",
    },
    {
      title: "Hands-On Learning",
      description: "Every course is project-based with real-world challenges.",
    },
    {
      title: "Flexible & Scalable",
      description: "Whether it's a school of 50 or 500, we adapt and deliver.",
    },
    {
      title: "Career-Connected",
      description: "Workshops, internships, and guidance built into the system.",
    },
  ]

  const events = [
    {
      title: "Global Open Class",
      date: "April 10, 2025",
      time: "10:30 AM - 1:25 PM",
      location: "Online",
      link: "#",
    },
    {
      title: "Hyderabad Workshop",
      date: "April 24, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Hyderabad",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      {/* Mission Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl md:text-5xl">
                Our Mission
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                SlashZero is redefining school learning by combining the power of tech and creativity, shaping students
                into innovators from a young age. We're not waiting for college – we start early. With hands-on
                mentoring, real tools, and project-based learning, SlashZero enables students to explore, build, and
                grow – right inside their school walls.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/training">Explore Our Programs</Link>
                </Button>
              </div>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/vision.jpeg"
                alt="Students working on a robotics project"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-16 rounded-lg bg-gradient-to-r from-purple-50 to-teal-50 p-8 border border-purple-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-purple-700">Our Vision</h2>
          <p className="text-xl font-medium">
            To make students job-ready and innovation-driven by the time they graduate from school.
          </p>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-purple-700">Our Academic Programs</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academicPrograms.map((program, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={program.link}>Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="mb-16 rounded-lg bg-muted/30 p-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-purple-700">
            What Makes Us Different?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-purple-700">Trusted By</h2>
          <p className="mb-8 text-muted-foreground">
            Schools, educators, and parents across the region trust SlashZero to deliver quality tech education.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex h-16 w-32 items-center justify-center rounded-md bg-white p-4 shadow-sm">
                <Image
                  src={`/images/school-partner-${i}.png`}
                  alt={`Partner School ${i}`}
                  width={120}
                  height={60}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Coming Soon: SlashZero Partner Schools, Awards & Recognitions, Alumni Projects
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-purple-700">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {event.date}, {event.time}
                    <br />
                    {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link href={event.link}>{index === 0 ? "Register Now" : "Get Tickets"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
