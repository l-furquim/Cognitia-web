import NeutralNavBar from "@/shared/neutral-nav-bar";

export default function AuthLayout({
  children
}: { children: React.ReactNode }){
  return (
    <div className="p-4 h-full w-full flex items-center flex-col bg-zinc-800">
      <NeutralNavBar/>
      {children}
    </div>
  )
}