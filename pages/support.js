import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const support = () => {
    return (
        <div>
           
      <Head>
        <title>FaroePhotos</title>
        <meta name='keywords' content='web development, programming'></meta>
      </Head>
      
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
                <Link href='/support'><b>Contact</b></Link>
              </li>
              <li>
                <Link href='/form'>Form</Link>
              </li>
            </ul>
          </nav>
          <div className="h2">
              <h2 className='h2h2'>Customer Support</h2>
          </div>
        </div>
    )
}

export default support
