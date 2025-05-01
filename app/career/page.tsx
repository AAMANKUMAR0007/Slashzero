import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin } from "lucide-react"

export default function CareerPage() {
  const openings = [
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Hyderabad, India",
      description:
        "We're looking for a skilled Full Stack Developer with experience in React, Node.js, and database technologies to help build our educational platform.",
    },
    {
      title: "Graphic/UI Designer",
      type: "Full-time",
      location: "Hyderabad, India",
      description:
        "Join our creative team to design engaging educational materials, user interfaces, and branding assets for our programs.",
    },
    {
      title: "Curriculum Developer",
      type: "Full-time",
      location: "Remote",
      description:
        "Help us create innovative, hands-on curriculum for IoT, robotics, and programming courses for school students.",
    },
    {
      title: "Growth & Marketing Executive",
      type: "Full-time",
      location: "Hyderabad, India",
      description:
        "Drive our marketing efforts to reach more schools and students with our innovative educational programs.",
    },
    {
      title: "School Partner Program Manager",
      type: "Full-time",
      location: "Hyderabad, India",
      description:
        "Manage relationships with partner schools and help expand our educational programs to new institutions.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      {/* Work With Us Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Want to Work With Us?</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            We're building the future – and we need passionate minds. If you believe in empowering students and love
            working on exciting tech + ed projects, apply now.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="mb-16 rounded-lg bg-muted/30 p-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Why Join SlashZero?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Meaningful Impact</h3>
              <p className="text-muted-foreground">
                Help shape the future of education and make a real difference in students' lives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Innovation & Growth</h3>
              <p className="text-muted-foreground">
                Work with cutting-edge technologies and continuously develop your skills.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Collaborative Team</h3>
              <p className="text-muted-foreground">
                Join a diverse team of educators, technologists, and designers passionate about education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Current Openings</h2>
          <div className="grid gap-6">
            {openings.map((job, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-2 pt-1">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" /> {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </Badge>
                      </CardDescription>
                    </div>
                    <Badge>New</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Opportunities Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Other Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Upload Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Don't see a position that fits your skills? Upload your resume and we'll keep you in mind for future
                  openings.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Upload Resume</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Get Notified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sign up to receive notifications when new positions that match your interests become available.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Subscribe</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer internships for students and recent graduates looking to gain experience in edtech.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-gradient-to-r from-purple-700 to-teal-700 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Join Our Team</h2>
          <p className="mb-6">
            Be part of a mission to transform education and prepare the next generation for the future of work.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Apply Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
