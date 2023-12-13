import { Logo } from "@/components/Logo"
import { SearchBar } from "@/components/SearchBar"

export function Header() {
  return (
    <header className="navbar px-0 py-4 justify-between items-center gap-5">
      <div className="navbar-start w-14 shrink-0">
        <Logo />
      </div>

      <SearchBar />
    </header>
  )
}
