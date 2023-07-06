import {
  AboutMeScreen,
  ExperienceScreen,
  ProjectScreen,
  ContactScreen,
} from "./ui/screens";
import "./App.css";
import { DarkModeComponent, ToastrComponent, NavbarComponent } from "./ui/components";
import { GlobalToastrProvider } from "./context/toastr/toastr.context";


function App() {
  return (
    <div className="app">
      <GlobalToastrProvider>
        <ToastrComponent />
        <NavbarComponent />
        <DarkModeComponent />
        <AboutMeScreen />
        <ExperienceScreen />
        <ProjectScreen />
        <ContactScreen />
      </GlobalToastrProvider>

    </div>
  );
}

export default App;
