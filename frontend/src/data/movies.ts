export type Movie = {
  id: string
  title: string
  year: number
  genre: string
  rating: number
  reviewer: string
  poster: string
  accent: string
  summary: string
  reviewTitle: string
  essay: string[]
}

// Change this once and every review card will update.
const reviewerName = 'Your First L.'

// To add your essays, replace each string in the essay arrays below.
// Each string becomes one paragraph on that movie's review page.
export const movies: Movie[] = [
  {
    id: 'rocky-iv',
    title: 'Rocky IV',
    year: 1985,
    genre: 'Action',
    rating: 4,
    reviewer: reviewerName,
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2MHUit4H6OK5adcOjnCN6suCKOl.jpg',
    accent: '#d96b3d',
    summary:
      'A loud, patriotic boxing spectacle built around rivalry, training, and the pressure to prove something bigger than yourself.',
    reviewTitle: 'Why Rocky IV Earned This Rating',
    essay: [
      'Paste the first paragraph of your Rocky IV essay here. You can write as much as you want, and the page will format each paragraph cleanly.',
      'Paste another Rocky IV paragraph here. Add more strings to this essay array if you want more paragraphs.',
    ],
  },
  {
    id: 'hoosiers',
    title: 'Hoosiers',
    year: 1986,
    genre: 'Drama',
    rating: 4.5,
    reviewer: reviewerName,
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/dHpjZQXEdoi1xNLubM1rPmTHJYz.jpg',
    accent: '#5aa0b8',
    summary:
      'A quiet, disciplined underdog story about a small-town team finding rhythm, trust, and identity through basketball.',
    reviewTitle: 'Why Hoosiers Earned This Rating',
    essay: [
      'Paste the first paragraph of your Hoosiers essay here. Keep each paragraph inside quotation marks and separated by commas.',
      'Paste another Hoosiers paragraph here, or delete this placeholder if you only need one paragraph.',
    ],
  },
  {
    id: 'offside',
    title: 'Offsides',
    year: 2006,
    genre: 'Drama',
    rating: 4,
    reviewer: reviewerName,
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9BDtD58nuNFyByMAoTLdFNHX5qZ.jpg',
    accent: '#ce3d38',
    summary:
      'A sharp, human story about soccer, restriction, and the strange humor that appears when people keep pushing toward freedom.',
    reviewTitle: 'Why Offsides Earned This Rating',
    essay: [
      'Paste the first paragraph of your Offsides essay here. If your assignment uses the title Offside instead, you can change the title above too.',
      'Paste another Offsides paragraph here. The site will automatically keep the spacing readable.',
    ],
  },
]
