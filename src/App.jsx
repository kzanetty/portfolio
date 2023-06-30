import { HomeScreen, AboutScreen, ContactScreen } from './ui/screens'
import { NavbarComponent } from './ui/components/navbar/navbar.component'

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
