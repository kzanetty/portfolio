import {
  AboutMeScreen,
  ExperienceScreen,
  ProjectScreen,
  ContactScreen,
} from "./ui/screens";
import { NavbarComponent } from "./ui/components/navbar/navbar.component";
import "./App.css";
import { DarkModeComponent } from "./ui/components";

function App() {
  return (
    <div className="app">
      <NavbarComponent />
      <DarkModeComponent />
      <AboutMeScreen />
      <ExperienceScreen />
      <ProjectScreen />
      <ContactScreen />
    </div>
  );
}

export default App;