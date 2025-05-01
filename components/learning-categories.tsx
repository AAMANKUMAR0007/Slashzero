import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Palette, Megaphone } from "lucide-react"

export default function LearningCategories() {
  const categories = [
    {
      title: "Build",
      icon: <Code className="h-8 w-8" />,
      description: "Web Dev (React, Django, Flutter), Robotics & IoT, App Dev (iOS + Android)",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
      borderColor: "border-blue-100 hover:border-blue-200",
    },
    {
      title: "Create",
      icon: <Palette className="h-8 w-8" />,
      description: "Graphic Design, UI/UX, Branding, Logo Design, Signage, Print Design, UX Development",
      color: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
      borderColor: "border-orange-100 hover:border-orange-200",
    },
    {
      title: "Market",
      icon: <Megaphone className="h-8 w-8" />,
      description: "SEO, Ads, Marketing Campaigns, Email, LinkedIn, Meta Growth, Multimedia & IP Awareness",
      color: "bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400",
      borderColor: "border-teal-100 hover:border-teal-200",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">Popular Learning Categories</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md ${category.borderColor}`}
            >
              <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">{category.title}</h3>
              <p className="mb-4 flex-1 text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/training">Browse All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
