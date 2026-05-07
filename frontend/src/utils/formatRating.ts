export function formatRating(rating: number) {
  return Number.isInteger(rating) ? rating.toString() : rating.toFixed(1)
}
