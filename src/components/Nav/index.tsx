import { HamburguerLinks } from "./HamburguerLinks"
import { Links } from "./Links"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav" 

export const Nav = () => {

  return (
    <nav>
      <Logo />
      <Links />
      <HamburguerLinks />
      <MobileNav />
    </nav>
  )
}

