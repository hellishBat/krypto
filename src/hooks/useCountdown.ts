// useCountdown Hook
import { useEffect, useState } from 'react'

export const useCountdown = (countdownTarget: string) => {
  const targetTime = new Date(countdownTarget).getTime()
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [isCounting, setIsCounting] = useState(true) // Add isCounting state

  const timeBetween = Math.max(targetTime - currentTime, 0)
  const seconds = Math.floor((timeBetween / 1000) % 60)
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60)
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (timeBetween <= 0) {
      setIsCounting(false)
    }
  }, [timeBetween])

  return { seconds, minutes, hours, days, isCounting }
}
