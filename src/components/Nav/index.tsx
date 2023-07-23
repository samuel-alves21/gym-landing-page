import { HamburguerLinks } from "./HamburguerLinks"
import { Links } from "./Links"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav" 
import { useState } from "react"

export const Nav = () => {
  const [shouldDisplayMobileNav, setShouldDisplayMobileNav] = useState(false)

  return (
    <nav>
      <Logo />
      <Links />
      <HamburguerLinks setShouldDisplayMobileNav={setShouldDisplayMobileNav} />
      <MobileNav shouldDisplayMobileNav={shouldDisplayMobileNav} setShouldDisplayMobileNav={setShouldDisplayMobileNav}/>
    </nav>
  )
}

