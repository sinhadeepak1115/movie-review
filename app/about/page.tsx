import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Star, Heart, Target, Lightbulb, Globe, Shield } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Film school graduate with 10+ years in the industry. Passionate about connecting movie lovers worldwide.",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mike Rodriguez",
    role: "Head of Product",
    bio: "Former Netflix engineer who loves building products that enhance the movie-watching experience.",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Emily Chen",
    role: "Community Manager",
    bio: "Movie critic turned community builder. Ensures our platform remains a welcoming space for all film enthusiasts.",
    image: "/placeholder.svg?height=150&width=150",
  },
]

const features = [
  {
    icon: Star,
    title: "Comprehensive Reviews",
    description: "Read detailed reviews from fellow movie enthusiasts and critics to make informed viewing decisions.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Connect with like-minded film lovers, follow your favorite reviewers, and discover new perspectives.",
  },
  {
    icon: Heart,
    title: "Personal Watchlists",
    description: "Keep track of movies you want to watch and get personalized recommendations based on your taste.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Discover films from around the world and explore diverse cinematic cultures and storytelling styles.",
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">About CineReview</h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Connecting movie lovers worldwide through the power of shared cinematic experiences
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At CineReview, we believe that movies have the power to inspire, educate, and bring people together. Our
            mission is to create a platform where film enthusiasts can discover new movies, share their thoughts, and
            connect with others who share their passion for cinema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the world's most trusted platform for movie discovery and discussion, fostering a global
                community of film lovers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We value authenticity, diversity, and respect. Every voice matters, and every perspective adds value to
                our community's understanding of cinema.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're committed to maintaining a safe, inclusive environment where all users can express their opinions
                freely while respecting others.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50">
        <div className="container py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CineReview offers a unique blend of features designed to enhance your movie discovery journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind CineReview who work tirelessly to bring you the best movie discovery
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="text-purple-100">Active Users</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">100K+</h3>
              <p className="text-purple-100">Reviews Written</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-purple-100">Movies Reviewed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-purple-100">User Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
          <p className="text-lg text-muted-foreground">
            Ready to discover your next favorite movie? Join thousands of film enthusiasts who trust CineReview for
            their movie recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Reviewing</Button>
            <Button size="lg" variant="outline">
              Browse Movies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
