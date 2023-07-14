import { BrowserRouter } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { About, Bathroom, Kitchen, Gallery, Contact, Hero, Hero2, Navbar, TilePage } from './components';
const App = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className='relative bg-white'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='h-1 bg-beige w-[80%] mx-auto'></div>
        <Bathroom />
        <div className='h-1 bg-beige w-[80%] mx-auto'></div>
        <Kitchen />
        <div id='Plastering'></div>
        <Hero2 />
        <TilePage />
        <div className='h-1 bg-beige w-[80%] mx-auto'></div>
        <Gallery />
        <div className='relative z-0'>
          <Contact />
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App
