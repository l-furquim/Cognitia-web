import type { UserHistoryCourse } from "@/@types/course-types"
import Image from "next/image"
import Link from "next/link"

export const LearningContainer: React.FC<UserHistoryCourse> = ({ title, videoDuration, lastVideoThumbUrl, videoName, videoId }) => {
  return (
    <Link href={"/watch/" + videoId}>
      <div className="w-[300px] overflow-hidden space-y-3 h-fit flex justify-end items-start">
        <Image
          className="opacity-60 object-cover object-right p-0 [clip-path:inset(0_0_0_50%)]"
          width={300}
          height={100}
          src={"https://marketplace.canva.com/EAFNgl2fFFo/1/0/1600w/canva-miniatura-youtube-v%C3%ADdeo-curioso-gr%C3%A1tis-4BU-L3rT9uA.jpg"} alt="Course thumb" />
         <div className="bg-zinc-200  p-3 flex justify-center">
            <h1 className="font-bold text-xs text-muted-foreground">
              {videoName}
            </h1>
         </div>
      </div>
    </Link>
  )
}