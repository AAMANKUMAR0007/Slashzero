import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, MessageSquare, Lightbulb, Briefcase } from "lucide-react"

export default function MentoringPage() {
  const mentorFields = [
    {
      title: "IoT & Automation",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Learn from experts in sensors, microcontrollers, and automation systems.",
    },
    {
      title: "AI/ML & Robotics",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Get guidance from professionals working with cutting-edge AI and robotics technologies.",
    },
    {
      title: "Graphic Design & Branding",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Learn from designers with experience in major brands and agencies.",
    },
    {
      title: "App & Web Development",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Get mentored by developers working with the latest frameworks and technologies.",
    },
    {
      title: "Marketing & Growth Hacking",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Learn strategies from marketers with proven track records in digital growth.",
    },
  ]

  const mentorActivities = [
    {
      title: "Live Sessions",
      icon: <Video className="h-6 w-6" />,
      description: "Interactive online classes with real-time Q&A and demonstrations.",
    },
    {
      title: "Q&A Meetups",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Regular opportunities to ask questions and get personalized advice.",
    },
    {
      title: "Real-world Project Guidance",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Hands-on support for your projects from concept to completion.",
    },
    {
      title: "Ongoing Career Tips",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Advice on building portfolios, interview preparation, and industry trends.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      {/* How We Mentor Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How We Mentor</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            We provide personalized mentoring with industry professionals from various fields of technology and design.
            Our mentors are passionate about sharing their knowledge and helping students grow.
          </p>
        </div>
      </section>

      {/* Mentor Fields Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Our Mentors Specialize In</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentorFields.map((field, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {field.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{field.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{field.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Activities Section */}
      <section className="mb-16 rounded-lg bg-muted/30 p-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Mentor Activities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {mentorActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">Meet Our Mentors</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src={`/images/mentor-${i}.png`}
                    alt={`Mentor ${i}`}
                    width={200}
                    height={200}
                    className="h-32 w-32 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Mentor Name</h3>
                <p className="text-sm text-muted-foreground">IoT Specialist</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Connect with a Mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">What Students Say</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="overflow-hidden rounded-full">
                      <Image
                        src={`/images/student-${i}.png`}
                        alt={`Student ${i}`}
                        width={100}
                        height={100}
                        className="h-12 w-12 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Student Name</h3>
                      <p className="text-sm text-muted-foreground">Class 10, XYZ School</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "The mentoring I received at SlashZero completely changed my perspective on technology. I've built
                    projects I never thought I could, and now I'm confident about pursuing a career in tech."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-gradient-to-r from-purple-700 to-teal-700 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Ready to Get Started?</h2>
          <p className="mb-6">Join our mentoring program and start building the skills that will shape your future.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Apply for Mentorship</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
