import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Clock, Calendar, Users, School } from "lucide-react"

export default function TrainingPage() {
  const sessions = [
    { number: 1, title: "Introduction to IoT & Robotics" },
    { number: 2, title: "Basic Electronics & Circuit Fundamentals" },
    { number: 3, title: "Microcontrollers & Programming Foundations" },
    { number: 4, title: "Sensors & Actuators" },
    { number: 5, title: "IoT Architecture & Communication Protocols" },
    { number: 6, title: "Introduction to Robotics Kinematics & Movement" },
    { number: 7, title: "Cloud Integration & Data Visualization" },
    { number: 8, title: "Building a Basic Mobile Robot (Assembly & Testing)" },
    { number: 9, title: "Wireless Control & IoT Security Basics" },
    { number: 10, title: "Advanced Robotics Concepts (Line Following or Obstacle Avoidance)" },
    { number: 11, title: "Project Building & Troubleshooting" },
    { number: 12, title: "Final Project Presentations & Program Conclusion" },
  ]

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      {/* Curriculum Overview Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our 6-Month School Curriculum
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Our comprehensive curriculum is designed to give students hands-on experience with the latest technologies,
            preparing them for future careers in tech and innovation.
          </p>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 rounded-lg bg-muted/30 p-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Clock className="mb-2 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">3 Hours</h3>
              <p className="text-sm text-muted-foreground">Per Session</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="mb-2 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">12 Sessions</h3>
              <p className="text-sm text-muted-foreground">Bi-weekly</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="mb-2 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Fully Hands-On</h3>
              <p className="text-sm text-muted-foreground">Project-Based</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <School className="mb-2 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">School-Based</h3>
              <p className="text-sm text-muted-foreground">Lab Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="mb-16">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="iot" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="iot">IoT & Robotics</TabsTrigger>
              <TabsTrigger value="webdev">App & Web Dev</TabsTrigger>
              <TabsTrigger value="design">Creative Design</TabsTrigger>
              <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
              <TabsTrigger value="ip">IP & Innovation</TabsTrigger>
            </TabsList>
            <TabsContent value="iot" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">IoT & Robotics Program</CardTitle>
                      <CardDescription>Learn sensors, microcontrollers, wireless control</CardDescription>
                    </div>
                    <Badge>Most Popular</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="mb-2 text-lg font-semibold">Program Overview</h3>
                    <p className="text-muted-foreground">
                      This 6-month program focuses on hands-on learning of IoT, basic electronics, sensors,
                      microcontrollers, and robotics concepts. Students will build multiple projects and gain practical
                      experience with industry-standard tools and technologies.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-semibold">Session Breakdown</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {sessions.map((session) => (
                        <div key={session.number} className="flex items-center gap-2 rounded-md border p-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {session.number}
                          </div>
                          <p className="text-sm font-medium">{session.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="#">
                      <Download className="h-4 w-4" /> Download Curriculum PDF
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/contact">Apply for This Program</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="webdev" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">App & Web Development</CardTitle>
                      <CardDescription>Create real-world apps using Flutter & React</CardDescription>
                    </div>
                    <Badge>Beginner Friendly</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This program teaches students how to build modern web and mobile applications using
                    industry-standard frameworks like React and Flutter. Students will learn front-end and back-end
                    development, database integration, and deployment.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Detailed curriculum coming soon. Contact us for more information.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild>
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="design" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">Creative Design</CardTitle>
                      <CardDescription>Branding, print, UI/UX projects with Figma</CardDescription>
                    </div>
                    <Badge>High Demand</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This program focuses on graphic design, UI/UX design, branding, and digital art. Students will learn
                    to use industry-standard tools like Figma and Adobe Creative Suite to create professional designs
                    for various media.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Detailed curriculum coming soon. Contact us for more information.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild>
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="marketing" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">Digital Marketing</CardTitle>
                      <CardDescription>SEO, Paid Ads, Email & LinkedIn strategy</CardDescription>
                    </div>
                    <Badge>Career Ready</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This program teaches students the fundamentals of digital marketing, including SEO, social media
                    marketing, email campaigns, content creation, and analytics. Students will work on real campaigns
                    and learn to use industry tools.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Detailed curriculum coming soon. Contact us for more information.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild>
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="ip" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">IP & Innovation</CardTitle>
                      <CardDescription>Intellectual Property Basics & Legal Awareness</CardDescription>
                    </div>
                    <Badge>New Program</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This program introduces students to intellectual property concepts, innovation frameworks, and the
                    legal aspects of creating and protecting digital content and inventions. Perfect for students
                    interested in entrepreneurship.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Detailed curriculum coming soon. Contact us for more information.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild>
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-gradient-to-r from-purple-700 to-teal-700 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Ready to Transform Your School?</h2>
          <p className="mb-6">
            Bring SlashZero's innovative curriculum to your school and give your students the skills they need for the
            future.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
