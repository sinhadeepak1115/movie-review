"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Film } from "lucide-react"

const popularMovies = [
  "The Stellar Journey",
  "Midnight in Paris",
  "The Last Detective",
  "Ocean's Mystery",
  "Digital Dreams",
  "The Artist's Way",
]

export default function ReviewPage() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [selectedMovie, setSelectedMovie] = useState("")
  const [customMovie, setCustomMovie] = useState("")
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewContent, setReviewContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setRating(0)
    setSelectedMovie("")
    setCustomMovie("")
    setReviewTitle("")
    setReviewContent("")
    setIsSubmitting(false)

    alert("Review submitted successfully!")
  }

  const movieToReview = selectedMovie === "other" ? customMovie : selectedMovie

  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Write a Review</h1>
          <p className="text-muted-foreground text-lg">Share your thoughts and help others discover great movies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Film className="h-5 w-5" />
                  Movie Review
                </CardTitle>
                <CardDescription>Tell us about your movie experience</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="movie-select">Select Movie</Label>
                    <Select value={selectedMovie} onValueChange={setSelectedMovie}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a movie to review" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularMovies.map((movie) => (
                          <SelectItem key={movie} value={movie}>
                            {movie}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other (specify below)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedMovie === "other" && (
                    <div className="space-y-2">
                      <Label htmlFor="custom-movie">Movie Title</Label>
                      <Input
                        id="custom-movie"
                        placeholder="Enter movie title"
                        value={customMovie}
                        onChange={(e) => setCustomMovie(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Your Rating</Label>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className="p-1"
                          onMouseEnter={() => setHoveredRating(i + 1)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(i + 1)}
                        >
                          <Star
                            className={`h-8 w-8 transition-colors ${
                              i < (hoveredRating || rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300 hover:text-yellow-400"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        {rating > 0 && `${rating} out of 5 stars`}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-title">Review Title</Label>
                    <Input
                      id="review-title"
                      placeholder="Give your review a title"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-content">Your Review</Label>
                    <Textarea
                      id="review-content"
                      placeholder="Share your thoughts about the movie. What did you like or dislike? Would you recommend it to others?"
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      rows={8}
                      required
                    />
                    <p className="text-sm text-muted-foreground">{reviewContent.length}/1000 characters</p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!movieToReview || rating === 0 || !reviewTitle || !reviewContent || isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Be Honest</h4>
                  <p className="text-muted-foreground">
                    Share your genuine opinion about the movie. Your honest feedback helps others make informed
                    decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Be Respectful</h4>
                  <p className="text-muted-foreground">
                    Keep your language respectful and constructive. Avoid personal attacks or offensive content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Be Specific</h4>
                  <p className="text-muted-foreground">
                    Mention specific aspects like acting, plot, cinematography, or soundtrack to make your review more
                    helpful.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Avoid Spoilers</h4>
                  <p className="text-muted-foreground">
                    Please don't reveal major plot points or endings that might spoil the experience for others.
                  </p>
                </div>
              </CardContent>
            </Card>

            {movieToReview && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{movieToReview}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  {reviewTitle && (
                    <div>
                      <h5 className="font-medium">{reviewTitle}</h5>
                    </div>
                  )}
                  {reviewContent && (
                    <div>
                      <p className="text-sm text-muted-foreground line-clamp-4">{reviewContent}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
