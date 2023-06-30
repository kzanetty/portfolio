import { HomeScreen, AboutScreen, ContactScreen } from './ui/screens'
import { NavbarComponent } from './ui/components/navbar/navbar.component'
import './App.css'

function App() {
  return (
    <div className='app'>
      <NavbarComponent />
      <HomeScreen />
      <AboutScreen />
      <ContactScreen />
    </div>
  )
}

export default App
