export function formatPrice(num: any) {
  return parseInt(num)?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}