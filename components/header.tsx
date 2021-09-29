import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex flex-col mb-20 mt-8 items-center">
    <h2 className="text-6xl md:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight">
      <Link href="/">
        <a className="hover:underline">BrewFinder</a>
      </Link>
    </h2>
    <p className="mt-3 text-2xl ">get a good beer anywhere 🍻</p>
    </div>
  )
}

export default Header