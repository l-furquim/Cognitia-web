import Image from "next/image"

interface AreaContainerProps {
  name: string,
  icon: string,
  learners: number
}

export const AreaContainer: React.FC<AreaContainerProps> = ({icon, learners, name}) => {
  return (
    <div className="w-fit h-fit flex flex-col space-y-1 ">
      <div className="bg-zinc-300 rounded-xl w-64 h-52">
        <Image width={300} height={300} alt="Area icon" src={`/${icon}`}  />
      </div>
      <h1 className="font-bold text-zinc-200">{name}</h1>
      <p className="text-muted-foreground">{learners} estudantes</p>
    </div>
  )
}