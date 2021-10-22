import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const form = () => {
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
                <Link href='/support' test-cy = 'contactbutton'>Contact</Link>
              </li>
              <li>
                <Link href='/form' test-cy = 'formbutton'><b>Form</b></Link>
              </li>
            </ul>
          </nav>
          <div className="h2">
              <h2 className='h2h2'>Want to recommend a photo? fill out form please :)</h2>
          </div>

        <section>
          <div className='container'>
            <form action='https://formspree.io/f/xpzknejo' method='POST'>
              
              <div className='form-group'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' name='name' autoComplete='nope' required />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' name='email' autoComplete='false' required />
              </div>

              <div className='form-group'>
                <label htmlFor='imageSource'>Paste image source</label>
                <input type='url' id='imageSrc' name='src' autoComplete='nope' required />
              </div>

              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' cols='30' rows='10' maxLength='400'></textarea>
              </div>
              
              <button type='submit'>Submit</button>
            </form>
          </div>
        </section>


        </div>
    )
}

export default form
