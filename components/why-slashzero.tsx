import { Check } from "lucide-react"

export default function WhySlashZero() {
  const benefits = [
    "Project-Based Learning",
    "Real-World Mentors",
    "School-Integrated Curriculum",
    "Creative + Tech Fusion",
    "Continuous Career Guidance",
  ]

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">Why SlashZero?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-purple-200 hover:shadow-md"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-center font-medium text-slate-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
