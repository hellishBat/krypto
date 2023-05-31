// Newsletter
import React from 'react'

export const Newsletter: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement
    const email = emailInput.value

    alert(`Thank you! ${email} subscribed for Krypto newsletter.`)
  }

  return (
    <form action="#" onSubmit={handleSubmit} className="max-w-[23rem]">
      <div className="relative mb-3 flex  flex-col">
        <input
          className="w-full rounded-[3.125rem] bg-white py-4 pl-6 pr-32 text-lg text-black/60 transition-all placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-red-500/40"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <input
          className="absolute right-3 top-2/4 block -translate-y-1/2 cursor-pointer whitespace-nowrap rounded-[2.5rem] border-0 bg-red-500 p-3 text-sm font-medium uppercase transition lg:will-change-transform lg:hover:scale-105 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:active:shadow-inner"
          type="submit"
          value="Subscribe"
        />
      </div>
      <p className="text-sm text-white/60">
        Krypto is a global secure cryptocurrency trading platform. Contact our support team for more
        information.
      </p>
    </form>
  )
}
