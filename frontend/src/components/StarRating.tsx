import { formatRating } from '../utils/formatRating'

type StarRatingProps = {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="stars" aria-label={`${formatRating(rating)} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.max(0, Math.min(1, rating - index))

        return (
          <span className="star" aria-hidden="true" key={index}>
            <span style={{ width: `${fill * 100}%` }} />
          </span>
        )
      })}
    </div>
  )
}
