import { useState,useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BoxP} from '../src/Compound/Box'
import { Image } from './Compound/Image'
import {Route} from '../src/Compound/Boxs'
// import {Box} from './Compound/Box'
import {ScrollAtom} from '../src/Compound/Atomes'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Mobile } from './Compound/mobile'
import { Message } from './Compound/Message'
import { DragCards } from './Compound/USA'
import {FirstCard} from '../src/Compound/TextinCard'
import {SecondCard} from '../src/Compound/TextinCard'
import Enchanted from '../src/assets/Music/Enchanted.mp3'
import Animal from '../src/assets/Music/AnimalSOng.mp3'
function App() {
  const [scrollPosition, setScrollPosition] = useState();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const handleScroll = () => {
    
    const scrollTop = window.scrollY;
    // console.log(Math.trunc(scrollTop%10))
    setScrollPosition(scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  if(windowSize.height>800 ){
    return <div>
      <div className='App'>
       &nbsp;&nbsp;&nbsp;
        please scroll the screen
      <Image/>
       
      <div className=' absolute'>
       {windowSize.height}
      
      </div>
        <Mobile postion={50} scrollPosition={scrollPosition} />
        
        {/* <Message postion={{
            x:50,
            y:475
          }}  scrollPosition={scrollPosition}/> */}
          {scrollPosition > 500 && scrollPosition <700 ? <Message  postion={{
            x:50,
            y:475
          }}  scrollPosition={scrollPosition} message={FirstCard}  song={Enchanted}/>:null }
          {scrollPosition > 700 && scrollPosition <900 ? <Message  postion={{
            x:50,
            y:475
          }}  scrollPosition={scrollPosition} message={SecondCard} song={Animal}/>:null }
      </div>
        <DragCards/>
    </div>
  }
  return (
    <>
     
      <div className='App'>
      <Image/>
      <div className=' absolute'>
       {windowSize.height} X {windowSize.width}
      </div>
      <Route postion={50} scrollPosition={scrollPosition}/>
      {scrollPosition > 600 && scrollPosition <800 ? <Message  postion={{
            x:930,
            y:175
          }}  scrollPosition={scrollPosition} message={"Naa banagram"}/>:null }
     
      </div>
      
      <DragCards/>
      
        
    </>
  )
}


export default App
