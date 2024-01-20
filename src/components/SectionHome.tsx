import { useState } from 'react';
import { arrSongs } from './pic';

import xMark from '../img/xmark-white.png'
import '../styles/sectionHome.scss';










type myOBJ = {
  name: string;
  id: number;
  song: any;
}

const importTravisSongs = [
  arrSongs[4],
  arrSongs[5],
  arrSongs[6],
  arrSongs[7],
  arrSongs[8],
  arrSongs[9],
]

const travisSongs: myOBJ [] = [
  {
    id: 0,
    name: "Twins Bitches",
    song: importTravisSongs[0]
  },
  {
    id: 1,
    name: "Highest in the Room",
    song: importTravisSongs[1]
  },
  {
    id: 2,
    name: "MIA",
    song: importTravisSongs[2]
  },
  {
    id: 3,
    name: "Butterfly Effect",
    song: importTravisSongs[3]
  },
  {
    id: 4,
    name: "Antidote",
    song: importTravisSongs[4]
  },
  {
    id: 5,
    name: "Goosebumps",
    song: importTravisSongs[5]
  },
  
];


const importDojaSongs = [
  arrSongs[2],
  arrSongs[3],
]


const dojaSongs: myOBJ [] =[
  {
    id: 0,
    name: "you are right",
    song: importDojaSongs[0]
  },
  {
    id: 1,
    name: "Doja",
    song: importDojaSongs[1]
  }
]

const importJackboysSongs = [
  arrSongs[0],
  arrSongs[1]
]

const jackboysSong: myOBJ [] =[
  {
    id: 0,
    name: "OUT WEST",
    song: importJackboysSongs[0]
  },
  {
    id: 1,
    name: "Gang",
    song: importJackboysSongs[1]
  }
]




export const SectionHome = () => {
  const [travis, setTravis] = useState(Boolean);
  const [doja, setDoja] = useState(Boolean);
  const [jackboys, setJackboys] = useState(Boolean);
  const [inputValue, setInputValue] = useState('');



  const handleClearClick = () => {
    setInputValue('');
  };


const handleButtonClick = (artist: boolean | string) => {
    switch (artist) {
      case 'travis':
        setTravis(!travis);
        setDoja(false);
        setJackboys(false);
        break;
      case 'doja':
        setTravis(false);
        setDoja(!doja);
        setJackboys(false);
        break;
      case 'jackboys':
      setTravis(false);
      setDoja(false);
      setJackboys(!jackboys);
        break;
      default:
    }
  }

 

  return (
    <>
    <div className='section-home'>

      <section className='section-1'>
        <h1>welcome.</h1>
        <p>
        This is a small pet project to which I added my playlist, you can find it by searching for queries indicating the name of the song. not a large selection
        </p>
      </section>
      
      <section className='section-2'>
        <h1>playlist</h1>

        <ul>

          <li className={`li ${travis ? 'close-li' : ''}`}>
              <button onClick={() => handleButtonClick('travis')} className='li-btn'>Travis Scott</button>
          </li>

          <li className={`li ${doja ? 'close-li' : ''}`}>
            <button onClick={() => handleButtonClick('doja')} className='li-btn'>Doja Cat</button>
          </li>

          <li className={`li ${jackboys ? 'close-li' : ''}`}>
            <button onClick={() => handleButtonClick('jackboys')} className='li-btn'>Jackboys</button>
          </li>

        </ul>
      </section>

      

       {travis && <div className='travis'>
        <img src={xMark} onClick={e => setTravis(!travis)}/>
        <h3>Travis scott</h3>

        <input type="text" 
          placeholder='Type song name*'
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          />
            {inputValue && <span onClick={handleClearClick}>clear</span>}

              {inputValue && travisSongs.map(({id, name, song}) => (
                inputValue.toLowerCase().includes(name.toLowerCase()) && (
                  <label key={id} htmlFor=''>
                    {name}
                    {song}
                  </label>
                  
                )
                
              ))}
        </div>} 



        {doja && <div className='doja'>
        <img src={xMark} onClick={e => setDoja(!doja)}/>
        <h3>Doja cat</h3>

        <input type="text" 
          placeholder='Type song name*'
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          />
 {inputValue && <span onClick={handleClearClick}>clear</span>}

{inputValue && dojaSongs.map(({id, name, song}) => (
                inputValue.toLowerCase().includes(name.toLowerCase()) && (
                  <label key={id} htmlFor=''>
                    {name}
                    {song}
                  </label>
                )
              ))}

        </div>}


        {jackboys && <div className='jackboys'>
        <img src={xMark} onClick={e => setJackboys(!jackboys)}/>
        <h3>Jackboys</h3>

        <input type="text" 
          placeholder='Type song name*'
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
 {inputValue && <span onClick={handleClearClick}>clear</span>}
{inputValue && jackboysSong.map(({id, name, song}) => (
                inputValue.toLowerCase().includes(name.toLowerCase()) && (
                  <label key={id} htmlFor=''>
                    {name}
                    {song}
                  </label>
                )
              ))}
        </div> }


    </div>
          <footer>This is a small project created by | <span>Jasur Umarov</span> </footer>
    </>
  )
}
