import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Calendar, Clock, Users, Play, Heart, Share2 } from "lucide-react"

// Mock data - in a real app, this would come from an API
const movieData = {
  id: 1,
  title: "The Stellar Journey",
  year: 2024,
  runtime: 148,
  genres: ["Sci-Fi", "Adventure", "Drama"],
  rating: 4.8,
  totalReviews: 1247,
  director: "Christopher Nolan",
  cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  plot: "In a near future where Earth is becoming uninhabitable, a team of astronauts embarks on a mission through a wormhole near Saturn to find humanity a new home. What they discover challenges everything they thought they knew about space, time, and love.",
  image: "/placeholder.svg?height=600&width=400",
  trailer: "#",
  releaseDate: "2024-03-15",
}

const reviews = [
  {
    id: 1,
    user: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
    },
    rating: 5,
    date: "2024-03-20",
    title: "A Masterpiece of Science Fiction",
    content:
      "Christopher Nolan has outdone himself with this incredible journey through space and time. The visual effects are breathtaking, the story is emotionally compelling, and the performances are top-notch. This is the kind of movie that reminds you why you love cinema.",
    helpful: 24,
  },
  {
    id: 2,
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    rating: 4,
    date: "2024-03-18",
    title: "Visually Stunning but Complex",
    content:
      "The cinematography and visual effects are absolutely stunning. The story is complex and requires attention, but it's worth it. Some parts felt a bit slow, but the emotional core of the story really resonates. A solid sci-fi film.",
    helpful: 18,
  },
  {
    id: 3,
    user: {
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MR",
    },
    rating: 5,
    date: "2024-03-16",
    title: "Epic Space Adventure",
    content:
      "This movie takes you on an incredible journey across the cosmos. The blend of hard science fiction with human emotion is perfectly balanced. The soundtrack is phenomenal and the acting is superb. Highly recommended!",
    helpful: 31,
  },
]

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      {/* Movie Header */}
      <section className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image src={movieData.image || "/placeholder.svg"} alt={movieData.title} fill className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{movieData.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {movieData.year}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {movieData.runtime} min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {movieData.totalReviews} reviews
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {movieData.genres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(movieData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold">{movieData.rating}</span>
                  <span className="text-muted-foreground">({movieData.totalReviews} reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">{movieData.plot}</p>

            <div className="space-y-4">
              <div>
                <span className="font-semibold">Director: </span>
                <span className="text-muted-foreground">{movieData.director}</span>
              </div>
              <div>
                <span className="font-semibold">Cast: </span>
                <span className="text-muted-foreground">{movieData.cast.join(", ")}</span>
              </div>
              <div>
                <span className="font-semibold">Release Date: </span>
                <span className="text-muted-foreground">{movieData.releaseDate}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Watch Trailer
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Add to Watchlist
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Reviews Section */}
      <section className="container space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Reviews</h2>
          <Button>Write a Review</Button>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{review.user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.title}</CardTitle>
                      <CardDescription>
                        by {review.user.name} • {review.date}
                      </CardDescription>
                    </div>
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
                <p className="text-muted-foreground leading-relaxed mb-4">{review.content}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="hover:text-foreground">👍 Helpful ({review.helpful})</button>
                  <button className="hover:text-foreground">Reply</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
