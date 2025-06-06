import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Calendar, Heart, Edit, Settings, Trophy, Film } from "lucide-react"

const userProfile = {
  name: "Alex Chen",
  username: "@alexchen",
  avatar: "/placeholder.svg?height=100&width=100",
  initials: "AC",
  joinDate: "March 2023",
  bio: "Movie enthusiast and aspiring filmmaker. Love sci-fi, thrillers, and indie films. Always looking for hidden gems!",
  stats: {
    reviews: 47,
    watchlist: 23,
    followers: 156,
    following: 89,
  },
  badges: ["Top Reviewer", "Sci-Fi Expert", "Early Adopter"],
}

const userReviews = [
  {
    id: 1,
    movieTitle: "The Stellar Journey",
    rating: 5,
    title: "A Masterpiece of Science Fiction",
    excerpt: "Christopher Nolan has outdone himself with this incredible journey through space and time...",
    date: "2024-03-20",
    likes: 24,
  },
  {
    id: 2,
    movieTitle: "Digital Dreams",
    rating: 4,
    title: "Thought-Provoking Thriller",
    excerpt: "Virtual reality meets reality in this mind-bending thriller that keeps you guessing...",
    date: "2024-03-15",
    likes: 18,
  },
  {
    id: 3,
    movieTitle: "Ocean's Mystery",
    rating: 4,
    title: "Beautiful Underwater Adventure",
    excerpt: "Stunning visuals and an engaging mystery make this a worthwhile watch...",
    date: "2024-03-10",
    likes: 12,
  },
]

const watchlist = [
  {
    id: 1,
    title: "The Artist's Way",
    year: 2023,
    genre: "Drama",
    image: "/placeholder.svg?height=150&width=100",
  },
  {
    id: 2,
    title: "Midnight in Paris",
    year: 2024,
    genre: "Romance",
    image: "/placeholder.svg?height=150&width=100",
  },
  {
    id: 3,
    title: "The Last Detective",
    year: 2024,
    genre: "Thriller",
    image: "/placeholder.svg?height=150&width=100",
  },
]

export default function ProfilePage() {
  return (
    <div className="container py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">{userProfile.initials}</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                  <p className="text-muted-foreground">{userProfile.username}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Joined {userProfile.joinDate}
                  </div>
                </div>

                <p className="text-muted-foreground">{userProfile.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {userProfile.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="font-semibold">{userProfile.stats.reviews}</span>
                    <span className="text-muted-foreground ml-1">Reviews</span>
                  </div>
                  <div>
                    <span className="font-semibold">{userProfile.stats.watchlist}</span>
                    <span className="text-muted-foreground ml-1">Watchlist</span>
                  </div>
                  <div>
                    <span className="font-semibold">{userProfile.stats.followers}</span>
                    <span className="text-muted-foreground ml-1">Followers</span>
                  </div>
                  <div>
                    <span className="font-semibold">{userProfile.stats.following}</span>
                    <span className="text-muted-foreground ml-1">Following</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="reviews" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reviews">My Reviews</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Reviews</h2>
              <Button>Write New Review</Button>
            </div>

            <div className="grid gap-6">
              {userReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.title}</CardTitle>
                        <CardDescription>
                          Review of "{review.movieTitle}" • {review.date}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{review.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <Heart className="h-4 w-4" />
                          {review.likes} likes
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="watchlist" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Watchlist</h2>
              <Button>Add Movie</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {watchlist.map((movie) => (
                <Card key={movie.id} className="overflow-hidden">
                  <div className="aspect-[2/3] relative">
                    <img
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-1">{movie.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {movie.year} • {movie.genre}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Activity</h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Reviewed "The Stellar Journey"</p>
                      <p className="text-sm text-muted-foreground">Gave it 5 stars • 3 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Added "Midnight in Paris" to watchlist</p>
                      <p className="text-sm text-muted-foreground">5 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      <Film className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Reviewed "Digital Dreams"</p>
                      <p className="text-sm text-muted-foreground">Gave it 4 stars • 1 week ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
