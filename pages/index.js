import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='fakebody'>
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
                <Link href='/'><b>Home</b></Link>
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
          
      

          <div className='allar-myndir'>
      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Múlafossur, Gásadalur, Vágar, Føroyar</p> </div>
        </div>
        <img src='https://www.photohound.co/images/1004925l.jpg' alt="múlafossur" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Trælanípan, Vágar, Føroyar</p> </div>
        </div>
        <img src='https://media01.stockfood.com/largepreviews/MjIxMjE5MDU2Ng==/71360986-Coast-waterfall-and-cliffs-at-Tr%C3%A6lan%C3%ADpa-on-the-island-of-Vagar-on-Lake-Leitisvatn-Faroe-Islands.jpg' alt="trælanípan" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Viti, Mykines, Føroyar</p> </div>
        </div>
        <img src='https://cdn-adventures-live.azureedge.net/adventurescache/a/7/f/9/4/1/a7f9413de189bcf91ae9626c72e7817c6d45969b.jpg' alt="mykines" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Lundi</p> </div>
        </div>
        <img src='https://i.pinimg.com/originals/cb/43/41/cb4341d286f525a648def76abfc10e7e.jpg' alt="lundi" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Tjaldur</p> </div>
        </div>
        <img src='https://img.ev.mu/images/attractions/1193/960x640/13832.jpg' alt="tjaldur" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Seyður</p> </div>
        </div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f8/Porkeri_sheep.jpg' alt="seyður" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Saksun, Streymoy, Føroyar</p> </div>
        </div>
        <img src='http://photos.wikimapia.org/p/00/04/14/59/92_big.jpg' alt="saksun" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Kirkjubøur, Streymoy, Føroyar</p> </div>
        </div>
        <img src='https://backpackingtheworld.dk/wp-content/uploads/2018/10/Kirkjub%C3%B8ur_by-1020x600.jpg' alt="kirkjubøur" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Seyður</p> </div>
        </div>
        <img src='https://mitziemee.com/wp-content/uploads/2019/04/2019-3-190.jpg' alt="seyður" className='money' test-cy = 'mynd'></img>
      </div>

      <div className='cash'>

        <div className='myndateksturparent'>
          <div className='myndatekstur'> <p className='caption-ljósmyndir'>Faroese Photography</p> <p className='paragraph-caption' test-cy = 'captiontext'>Seyður</p> </div>
        </div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Sheep_N%C3%B3lsoy%2C_Faroe_Islands.jpg' alt="seyður" className='money' test-cy = 'mynd'></img>
      </div>
      </div>
    </div>
  )
}