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

          <div className={styles.flextime}>
          <div className='cash'>
            <img src='https://media.timeout.com/images/105705260/1372/1029/image.jpg' alt="kalsoy" className={styles.aboutmyndir} test-cy = 'mynd'></img>
            <div className={styles.aboutmyndatekstur}>
              <div className={styles.aboutmyndaparent}><p className={styles.abouttekstur}>Faroe Islands Photography is a website created by new software engineer Óðin Andor Ellefsen</p></div>
            </div>
          </div>
          <div className='cash'>
            <img src='https://media.timeout.com/images/105705258/1372/1029/image.jpg' alt="vágar" className={styles.aboutmyndir} test-cy = 'mynd'></img>
            <div className={styles.aboutmyndatekstur}>
              <div className={styles.aboutmyndaparent}><p className={styles.abouttekstur}>The Pictures on Faroe Islands Photography have been taken from the internet and are not this websites property</p></div>
            </div>
             </div>
          
          <div className='cash'>
            <img src='https://media.timeout.com/images/105705256/1372/1029/image.jpg' alt="tindhólmur" className={styles.aboutmyndir} test-cy = 'mynd'></img>
            <div className={styles.aboutmyndatekstur}>
              <div className={styles.aboutmyndaparent}><p className={styles.abouttekstur}>The point of this website is to show beautiful pictures of the Faroe Islands and faroese nature</p></div>
            </div>
             </div>
        </div>     
    </div>
  )
}

export default about
