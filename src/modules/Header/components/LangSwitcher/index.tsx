import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { IconLangEnUs, IconLangEnGb, IconLangEs, IconUiArrowDown, IconUiCheck } from '@/assets'
import { LangProps } from '@/types'

const languages: LangProps[] = [
  { id: 1, flag: <IconLangEnUs title="English (USA)" />, abbr: 'EN-US', unavailable: false },
  { id: 2, flag: <IconLangEnGb title="English (GB)" />, abbr: 'EN-GB', unavailable: true },
  { id: 3, flag: <IconLangEs title="Español" />, abbr: 'ES', unavailable: true },
]

export const LangSwitcher: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LangProps>(languages[0])

  const handleLanguageChange = (language: LangProps) => {
    setSelectedLanguage(language)
  }

  return (
    <div className="flex text-lg ">
      <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
        <div className="relative flex">
          <Listbox.Button className="relative flex rounded-[1.25rem] border-2 border-red-500 bg-navy/50 py-2 pl-3 pr-10 transition-colors focus:ring-red-500/40 lg:hover:bg-white/5 lg:focus:outline-none lg:focus:ring-2 lg:active:shadow-inner">
            {selectedLanguage.flag}
            <IconUiArrowDown className="absolute inset-y-auto right-3" />
          </Listbox.Button>
          <Listbox.Options className="absolute top-12 right-0 z-10 max-h-60 min-w-max space-y-1 rounded-md bg-white py-1 shadow-md">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.id}
                value={lang}
                disabled={lang.unavailable}
                className={({ active }) =>
                  `relative flex cursor-pointer items-center py-1 pr-2 pl-9 ${
                    active ? 'bg-red-100 font-medium text-red-400' : 'text-black/60'
                  } transition-colors`
                }
              >
                {({ selected }) => (
                  <>
                    {lang.flag}
                    {selected && (
                      <IconUiCheck className="absolute top-1/2 left-2 -translate-y-1/2 text-red-400" />
                    )}
                    <span className="ml-2 text-sm">{lang.abbr}</span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
