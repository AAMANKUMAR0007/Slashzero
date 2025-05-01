import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


export default function ShowcasePrograms() {
  const programs = [
    {
      title: "IoT & Robotics",
      description: "Learn sensors, microcontrollers, wireless control",
      image: "/IOT.jpg",
      link: "/training#iot",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      title: "App & Web Dev",
      description: "Create real-world apps using Flutter & React",
      image: "/web_development.jpeg",
      badge: "Beginner Friendly",
      link: "/training#webdev",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      title: "Creative Design",
      description: "Branding, print, UI/UX projects with Figma",
      image: "/ui_ux.jpeg",
      badge: "High Demand",
      link: "/training#design",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      title: "Digital Marketing",
      description: "SEO, Paid Ads, Email & LinkedIn strategy",
      image: "digital_marketing.jpeg",
      badge: "Career Ready",
      link: "/training#marketing",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">Showcase Programs</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-slate-200 transition-all hover:border-purple-200 hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.title} program`}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-slate-800">{program.title}</CardTitle>
                  <Badge variant="outline" className={`ml-2 ${program.badgeColor}`}>
                    {program.badge}
                  </Badge>
                </div>
                <CardDescription className="text-slate-600">{program.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-200 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
                >
                  <Link href={program.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
            <Link href="/training">See All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
