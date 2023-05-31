// HowTo
import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { VideoPlayer } from '../'
import type { HowToTabsProps } from '@/types'

export const HowToTabs: React.FC<HowToTabsProps> = ({ data, subheading }) => {
  return (
    <Tab.Group vertical>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <Tab.Panels className="w-full max-w-[25rem] sm:w-1/2 sm:max-w-none">
          {data.map((item, idx) => (
            <Tab.Panel key={idx}>
              <VideoPlayer data={item} />
            </Tab.Panel>
          ))}
        </Tab.Panels>

        <Tab.List className="flex flex-col items-center sm:w-1/2 md:p-4 lg:p-8 lg:px-20">
          <h3 className="mb-10 text-center text-4xl font-bold text-red-500 sm:text-left">
            {subheading}
          </h3>
          <ul className="counter-parent flex flex-col items-start gap-6">
            {data.map((item, idx) => (
              <li key={idx}>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`counter-item flex min-w-[18rem] cursor-pointer items-center overflow-hidden rounded-[5rem] border-none py-[1.188rem] pl-16 pr-14 text-lg font-medium text-red-500 transition lg:will-change-transform lg:hover:scale-105 lg:hover:shadow-glow-md lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:active:bg-black/10 ${
                        selected ? 'shadow-glow-md' : 'shadow-glow-xs'
                      }`}
                    >
                      <span>{item.btnText}</span>
                    </button>
                  )}
                </Tab>
              </li>
            ))}
          </ul>
        </Tab.List>
      </div>
    </Tab.Group>
  )
}
