import { Input } from "@/components/ui/input";
import { Button } from "@/lib/components/ui/button";

export default function LoginForm(){
  return (
    <form action="" className="space-y-5 pt-5">
      <Input
      placeholder={"email"}
      className="w-71 bg-zinc-100"
      type="text" />
      <Input
      placeholder={"senha"}
      className="w-71 bg-zinc-100"
      type="password" />
      <Button className="w-71">
        Login
      </Button>
    </form>
  )
}