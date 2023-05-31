// usePriceRequest
import { useState, useEffect } from 'react'

export const usePricesRequest = (endpoint: string) => {
  const [coinPrices, setCoinPrices] = useState<number[]>([])

  const getCoinPrices = async () => {
    try {
      const response = await fetch(endpoint)
      const coinsData = await response.json()

      const coinPrices: number[] = coinsData.map((coin: { current_price: number }) => {
        const price = Math.round((coin.current_price + Number.EPSILON) * 100) / 100
        return price
      })

      setCoinPrices(coinPrices)
    } catch (error) {
      console.error('Error fetching coin prices:', error)
    }
  }

  useEffect(() => {
    getCoinPrices()
  }, [])

  return { coinPrices }
}
