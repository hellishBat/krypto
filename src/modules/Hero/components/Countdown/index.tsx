// Countdown
import { FC } from 'react'
import type { CountdownProps } from '@/types'

export const Countdown: FC<CountdownProps> = ({ countdownText, countdownData }) => {
  return (
    <>
      <p className="mb-6 text-lg ">{countdownText}</p>

      <ul className="mb-10 flex rounded-[5rem] bg-navy/50 px-10 py-2">
        {countdownData.map((item, idx) => (
          <li
            className="flex items-center after:p-[2px] after:content-[':'] last:after:content-none"
            key={idx}
          >
            <div className="flex flex-col items-center px-2">
              <time className="text-3xl font-medium text-red-500">{item.time}</time>
              <span className="text-xs uppercase">{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
