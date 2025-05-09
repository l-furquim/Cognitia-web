export default function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="w-full h-[250vh] p-4  flex items-center flex-col bg-zinc-800">
    {children}
    </div>
  )
}