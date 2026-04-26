import  { useState } from 'react'

const links =[
  {name: "Home" , href:"#home"},
  {name:"AI Types", href:"#types"},
  {name:"Benefits", href:"#benefits"},
  {name:"Contact", href:"#contact"}
]
function Navbar() {
  const[mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white/80 backrob-blur-md shadow-sm fixed w-full z-50">
      <div className='app-container flex justify-between items-center h-16'>
        {/* logo */}
        <span className="gradient-text text-2xl font-bold">AI Revolution</span>
           {/* disktop links */}
      <div className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
          <a key={link.name} className="nav-item" href={link.href}> {link.name} </a>

        ))}
        <a href="#" className='nav-btn'> Get Stareted</a>
      </div>
      {/* Mobile menu button */}
      <button 
      onClick={() => setMobileMenuOpen((prev)=>!prev)}
      className='md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      </div>
      {/* mobile menu */}
      {mobileMenuOpen &&(
        <div className="md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1 text-center">
          {links.map((link) => (
          <a key={link.name} className="mobile-nav-item" href={link.href}> {link.name} </a>

        ))}
           <a href="#" className='mobile-nav-btn'> Get Stareted</a>

        </div>
      )}
    </nav>
  )
}

export default Navbar
