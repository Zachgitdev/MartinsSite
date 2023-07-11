import { BrowserRouter } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { About, Gallery, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
const App = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className='relative bg-primary'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Gallery />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App
