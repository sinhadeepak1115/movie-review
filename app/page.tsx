import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Clock, Users } from "lucide-react"

const featuredMovies = [
  {
    id: 1,
    title: "The Stellar Journey",
    year: 2024,
    genre: "Sci-Fi",
    rating: 4.8,
    reviews: 1247,
    image: "/placeholder.svg?height=400&width=300",
    description: "An epic space adventure that redefines the boundaries of cinema.",
  },
  {
    id: 2,
    title: "Midnight in Paris",
    year: 2024,
    genre: "Romance",
    rating: 4.6,
    reviews: 892,
    image: "/placeholder.svg?height=400&width=300",
    description: "A romantic tale set against the backdrop of the City of Light.",
  },
  {
    id: 3,
    title: "The Last Detective",
    year: 2024,
    genre: "Thriller",
    rating: 4.7,
    reviews: 1056,
    image: "/placeholder.svg?height=400&width=300",
    description: "A gripping thriller that will keep you on the edge of your seat.",
  },
]

const recentReviews = [
  {
    id: 1,
    movieTitle: "The Stellar Journey",
    reviewer: "Alex Chen",
    rating: 5,
    excerpt: "Absolutely breathtaking visuals and a compelling storyline that kept me engaged throughout...",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    movieTitle: "Midnight in Paris",
    reviewer: "Sarah Johnson",
    rating: 4,
    excerpt: "Beautiful cinematography and excellent performances. A must-watch for romance lovers...",
    timeAgo: "5 hours ago",
  },
  {
    id: 3,
    movieTitle: "The Last Detective",
    reviewer: "Mike Rodriguez",
    rating: 5,
    excerpt: "Edge-of-your-seat thriller with unexpected twists. The acting is phenomenal...",
    timeAgo: "1 day ago",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Discover Your Next Favorite Movie</h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Read reviews, share your thoughts, and connect with fellow movie enthusiasts in our vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/browse">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Browse Movies
                </Button>
              </Link>
              <Link href="/review">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Write a Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="container space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Movies</h2>
            <p className="text-muted-foreground">Trending movies this week</p>
          </div>
          <Link href="/browse">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMovies.map((movie) => (
            <Card key={movie.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative">
                <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-black/80">{movie.genre}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="line-clamp-1">{movie.title}</CardTitle>
                    <CardDescription>{movie.year}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{movie.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{movie.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{movie.reviews} reviews</span>
                  <Link href={`/movie/${movie.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="container space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Recent Reviews</h2>
            <p className="text-muted-foreground">Latest thoughts from our community</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentReviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{review.movieTitle}</CardTitle>
                    <CardDescription>by {review.reviewer}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{review.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {review.timeAgo}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-muted-foreground">Movies Reviewed</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">100K+</h3>
              <p className="text-muted-foreground">Reviews Written</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
