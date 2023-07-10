import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from './components';
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-20 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
