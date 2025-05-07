import Link from "next/link";

interface LinkProps {
  content: string,
  href: string,
  adicionalClassname? : string
}

export const SimpleLink: React.FC<LinkProps> = ({content, href, adicionalClassname}) => {
  return (
    <Link
    className={`${adicionalClassname} hover:bg-zinc-600 hover:text-zinc-100 transition-all rounded-md p-2`}
    href={href}>
    {content}
    </Link>
  )
}