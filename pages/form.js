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
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/support'>Support</Link>
              </li>
              <li>
                <Link href='/form'><b>Form</b></Link>
              </li>
            </ul>
          </nav>
          <div className="h2">
              <h2 className='h2h2'>Want to recommend a photo? fill out form please :) </h2>
          </div>

        <section>
          <div className='container'>
            <form action='https://formspree.io/f/xpzknejo' method='POST' className='my-form'>
              
              <div className='form-group'>
                <label for='name'>Your Name</label>
                <input type='text' id='name' name='name' autocomplete='nope' required />
              </div>

              <div className='form-group'>
                <label for='email'>Your Email</label>
                <input type='email' id='email' name='email' autcomplete='false' required />
              </div>

              <div className='form-group'>
                <label for='imageSource'>Paste image source</label>
                <input type='url' id='imageSrc' name='src' autocomplete='nope' required />
              </div>

              <div className='form-group'>
                <label for='message'>Message</label>
                <textarea name='message' id='message' cols='30' rows='10' maxlength='400'></textarea>
              </div>
              
              <button type='submit'>Submit</button>
            </form>
          </div>
        </section>


        </div>
    )
}

export default form
