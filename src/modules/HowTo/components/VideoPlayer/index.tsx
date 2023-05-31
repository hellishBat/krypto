// VideoPlayer
import React from 'react'
import ReactPlayer from 'react-player/file'
import type { VideoPlayerProps } from '@/types'
import { IconUiPlay } from '@/assets'

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ data }) => {
  const { mov, img } = data

  return (
    <ReactPlayer
      className="width-full height-full video-player aspect-vertical-video max-w-[25rem] overflow-hidden rounded-xl object-cover sm:max-w-none"
      url={mov}
      width="100%"
      height="auto"
      muted
      loop
      playing
      playIcon={
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-xl transition lg:h-20 lg:w-20 lg:will-change-transform lg:hover:scale-105 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:active:bg-red-600/20">
          <IconUiPlay />
        </button>
      }
      light={img}
    ></ReactPlayer>
  )
}
