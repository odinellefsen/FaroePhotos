import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

const about = () => {
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
                <Link href='/about'><b>About</b></Link>
              </li>
              <li>
                <Link href='/support'>Contact</Link>
              </li>
              <li>
                <Link href='/form'>Form</Link>
              </li>
            </ul>
          </nav>
          <div className='h2'>
          <h2 className='h2h2'>About Us</h2>
          </div>      
    </div>
  )
}

export default about
