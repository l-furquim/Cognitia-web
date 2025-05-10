export interface Course{
  id: number,
  title: string,
  description: string,
  requirements: string,
  skill: string,
  people: string,
  price: number,
  thumbUrl: string,
  createdAt: string,
  totalReviews: number,
  totalHours: number,
  totalRate: number,
  totalStudents: number,
  lastUpdate: string,
  language: string,
  topics: string[],
  featuredReview: {
    reviewer: string,
    rating: number,
    comment: string
  }
}

export interface UserHistoryCourse {
  lastVideoThumbUrl: string,
  title: string,
  videoName: string,
  videoId: string,
  videoDuration: number
}