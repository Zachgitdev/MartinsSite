import { BrowserRouter } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { About, PolishedPlaster, DecorativeWalls, Gallery, Contact, Hero, Hero2, Navbar, TilePage} from './components';
const App = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className='relative bg-white'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <PolishedPlaster />
        <DecorativeWalls />
        <div id='Plastering'></div>
        <Hero2 />
        <TilePage />
        <Gallery />
        <div className='relative z-0'>
          <Contact />
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App
