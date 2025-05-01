import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Why IoT Should Start in Grade 8",
      excerpt:
        "Early exposure to IoT concepts helps students develop critical thinking and problem-solving skills that are essential for future careers.",
      author: "Dr. Sharma",
      date: "April 15, 2025",
      category: "Education",
      image: "/IOT.jpg",
      slug: "why-iot-should-start-in-grade-8",
    },
    {
      title: "Design Thinking for Kids",
      excerpt:
        "Teaching design thinking to children helps them develop empathy, creativity, and a solution-oriented mindset from an early age.",
      author: "Priya Mehta",
      date: "April 10, 2025",
      category: "Design",
      image: "/design_thinking.jpeg",
      slug: "design-thinking-for-kids",
    },
    {
      title: "Top Career Paths in AR/VR",
      excerpt:
        "Augmented and virtual reality are creating exciting new career opportunities. Here's what students should know about these emerging fields.",
      author: "Rahul Kapoor",
      date: "April 5, 2025",
      category: "Careers",
      image: "/ar_vr.jpg",
      slug: "top-career-paths-in-ar-vr",
    },
    {
      title: "Coding vs Building – What Schools Miss",
      excerpt:
        "Many schools focus solely on coding syntax, but building complete projects teaches students more valuable and practical skills.",
      author: "Ananya Singh",
      date: "March 28, 2025",
      category: "Education",
      image: "/program_build.jpeg",
      slug: "coding-vs-building-what-schools-miss",
    },
    {
      title: "The Future of Education is Project-Based",
      excerpt:
        "Project-based learning is revolutionizing education by making it more engaging, practical, and effective for today's students.",
      author: "Dr. Sharma",
      date: "March 20, 2025",
      category: "Education",
      image: "/fututre_class.jpeg",
      slug: "future-of-education-is-project-based",
    },
    {
      title: "How to Nurture Innovation in Schools",
      excerpt:
        "Creating an environment that fosters innovation requires more than just technology—it needs the right mindset and approach.",
      author: "Priya Mehta",
      date: "March 15, 2025",
      category: "Innovation",
      image: "/innivation.jpeg",
      slug: "how-to-nurture-innovation-in-schools",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      {/* Blog Header Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl md:text-5xl">
            From Our Experts & Mentors
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Insights, tips, and thought leadership from our team of educators and industry professionals.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border bg-card shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-6 md:order-1">
              <Badge className="mb-2 w-fit bg-purple-100 text-purple-800 hover:bg-purple-200">Featured</Badge>
              <h2 className="mb-2 text-2xl font-bold">Why IoT Should Start in Grade 8</h2>
              <p className="mb-4 text-muted-foreground">
                Early exposure to IoT concepts helps students develop critical thinking and problem-solving skills that
                are essential for future careers. This article explores the benefits of introducing IoT education early.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
                  <Image
                    src=""
                    alt="Dr. Sharma"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm text-muted-foreground">Dr. Sharma • April 15, 2025</span>
              </div>
              <Button asChild>
                <Link href="/blog/why-iot-should-start-in-grade-8">Read Article</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/Iot_blog.jpeg"
                alt="IoT Education"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-purple-700">Latest Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="bg-slate-50">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 overflow-hidden rounded-full bg-muted">
                      <Image
                        src="/images/mentor-2.png"
                        alt={post.author}
                        width={24}
                        height={24}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-purple-700">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["Education", "Technology", "Design", "Careers", "Innovation", "Robotics", "Programming", "IoT"].map(
              (category, index) => (
                <Button key={index} variant="outline" asChild>
                  <Link href={`/blog/category/${category.toLowerCase()}`}>{category}</Link>
                </Button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="rounded-lg bg-gradient-to-r from-purple-50 to-teal-50 p-8 border border-purple-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-purple-700">Subscribe to Our Blog</h2>
          <p className="mb-6 text-muted-foreground">
            Get the latest articles, resources, and updates delivered directly to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <Input type="email" placeholder="Your email address" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
