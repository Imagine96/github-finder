import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import User from './components/Pages/User'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Error404 from './components/Pages/404'
import GithubContextProvider from './utils/context/GithubContext'

const App: React.FC = () => {

  return (
    <GithubContextProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title='Github Finder' />
          <main className='container h-full mx-auto px-3' >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/users/:username' element={<User />} />
              <Route path='/*' element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GithubContextProvider>
  )
}

export default App
