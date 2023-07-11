import { BrowserRouter } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { About, Gallery, Contact, Hero, Navbar} from './components';
const App = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className='relative bg-white'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Gallery />
        <div className='relative z-0'>
          <Contact />
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App
