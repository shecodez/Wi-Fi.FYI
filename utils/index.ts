export const formatPrice = (price: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

// DD. MMM YYYY -> 29. FEB 2000
export const formatDate = (date: Date, locale = 'en-GB'): string => {
  if (!date)
    return
  const options = { year: 'numeric', month: 'short', day: '2-digit' }
  return new Intl.DateTimeFormat(locale, options).format(date).toUpperCase()
}

// https://docs.netlify.com/forms/setup/#submit-javascript-rendered-forms-with-ajax
export function encode(data: any) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
