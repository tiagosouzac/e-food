import { Logo } from "@/components/Logo"
import { SearchBar } from "@/components/SearchBar"

export function Header() {
  return (
    <header className="navbar px-0 py-4 flex-col items-start gap-5 sm:flex-row sm:justify-between sm:items-center">
      <div className="navbar-start">
        <Logo />
      </div>

      <SearchBar />
    </header>
  )
}
