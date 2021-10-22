import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import styled from 'styled-components';

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
                <Link href='/' test-cy = 'homebutton'>Home</Link>
              </li>
              <li>
                <Link href='/about' test-cy = 'aboutbutton'>About</Link>
              </li>
              <li>
                <Link href='/support' test-cy = 'contactbutton'><b>Contact</b></Link>
              </li>
              <li>
                <Link href='/form' test-cy = 'formbutton'>Form</Link>
              </li>
            </ul>
          </nav>
          <div className="h2">
              <h2 className='h2h2'>Customer Support</h2>
          </div>

          <div className={styles.needhelp}>
            <p className={styles.needhelpp}><b>Need Help? Contact us here:</b></p>
            <p className={styles.needhelpp}>Email: odin@ellefsen.fo</p>
            <p className={styles.needhelpp}>Phone Number: +298 588914</p>
          </div>
        </div>
    )
}

export default support
