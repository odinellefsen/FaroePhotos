import Link from 'next/link'

const Header = () => {
    return (
         <nav className='navbar'>
         <div className='hometitle'>
           <h1>Faroe Islands Photography</h1>
         </div>
            <ul className='navlinks'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/support'>Contact</Link>
              </li>
              <li>
                <Link href='/form'>Form</Link>
              </li>
            </ul>
          </nav>
    )
}

export default Header
