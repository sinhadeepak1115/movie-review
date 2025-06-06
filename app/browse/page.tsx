"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Search, Filter } from "lucide-react"

const movies = [
  {
    id: 1,
    title: "The Stellar Journey",
    year: 2024,
    genre: ["Sci-Fi", "Adventure"],
    rating: 4.8,
    reviews: 1247,
    image: "/placeholder.svg?height=400&width=300",
    description: "An epic space adventure that redefines cinema.",
  },
  {
    id: 2,
    title: "Midnight in Paris",
    year: 2024,
    genre: ["Romance", "Drama"],
    rating: 4.6,
    reviews: 892,
    image: "/placeholder.svg?height=400&width=300",
    description: "A romantic tale in the City of Light.",
  },
  {
    id: 3,
    title: "The Last Detective",
    year: 2024,
    genre: ["Thriller", "Crime"],
    rating: 4.7,
    reviews: 1056,
    image: "/placeholder.svg?height=400&width=300",
    description: "A gripping thriller with unexpected twists.",
  },
  {
    id: 4,
    title: "Ocean's Mystery",
    year: 2023,
    genre: ["Adventure", "Mystery"],
    rating: 4.4,
    reviews: 743,
    image: "/placeholder.svg?height=400&width=300",
    description: "Deep sea adventure with ancient secrets.",
  },
  {
    id: 5,
    title: "Digital Dreams",
    year: 2023,
    genre: ["Sci-Fi", "Thriller"],
    rating: 4.5,
    reviews: 621,
    image: "/placeholder.svg?height=400&width=300",
    description: "Virtual reality meets reality in this thriller.",
  },
  {
    id: 6,
    title: "The Artist's Way",
    year: 2023,
    genre: ["Drama", "Biography"],
    rating: 4.3,
    reviews: 534,
    image: "/placeholder.svg?height=400&width=300",
    description: "The inspiring story of a struggling artist.",
  },
]

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
]
const years = ["2024", "2023", "2022", "2021", "2020"]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedYear, setSelectedYear] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some((genre) => movie.genre.includes(genre))
    const matchesYear = !selectedYear || selectedYear === "all" || movie.year.toString() === selectedYear

    return matchesSearch && matchesGenre && matchesYear
  })

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "year":
        return b.year - a.year
      case "reviews":
        return b.reviews - a.reviews
      case "title":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const handleGenreChange = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre])
    } else {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
    }
  }

  return (
    <div className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Browse Movies</h1>
          <p className="text-muted-foreground">Discover your next favorite film</p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search movies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any year</SelectItem>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sort by</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                      <SelectItem value="reviews">Reviews</SelectItem>
                      <SelectItem value="title">Title</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Genres</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {genres.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox
                          id={genre}
                          checked={selectedGenres.includes(genre)}
                          onCheckedChange={(checked) => handleGenreChange(genre, checked as boolean)}
                        />
                        <label htmlFor={genre} className="text-sm cursor-pointer">
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {sortedMovies.length} of {movies.length} movies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedMovies.map((movie) => (
                <Card key={movie.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] relative">
                    <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {movie.genre.slice(0, 2).map((g) => (
                        <Badge key={g} className="bg-black/80 text-xs">
                          {g}
                        </Badge>
                      ))}
                    </div>
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

            {sortedMovies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No movies found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedGenres([])
                    setSelectedYear("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
