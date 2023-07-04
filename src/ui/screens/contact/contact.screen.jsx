import "./contact.screen.css";
import { ContainerComponent, CopyToClipboardComponent, DownloadComponent, FooterComponent, FormularioComponent } from "../../components";
import contacts from '../../../constant/contacts'

export function ContactScreen() {


  function renderContact(contact, index) {
    if (contact.name == "Email") {
      return (
        <li key={index} className="contact-option hover-behavior">
          <CopyToClipboardComponent
            information="hzanettik@gmail.com"
            text="Email"
            children={<img src={contact.image} alt={contact.name} className='default-width-for-icons' />}
          />
        </li>
      )
    }
    return (
      <li key={index}>
        <a href={contact.path} target="_blank" className="contact-option hover-behavior">
          <img src={contact.image} alt={contact.name} className='default-width-for-icons' />
          <p>{contact.name}</p>
        </a>
      </li>
    )
  }

  return (
    <div id="contact" className="screen screen-secondary contact">
      <ContainerComponent fullHeight={true}>
        <div className="contact-screen-content">
          {/* <h1 className="title-contact-screen-content">Formas de contato</h1> */}
          <div className="contact-screen-contacts">
            <div className="container-form-contact">
              <FormularioComponent />

            </div>
            <div className="icon-contacts-screen">
              <ul>
                {
                  contacts.map((contact, index) => (
                    renderContact(contact, index)
                  ))
                }
                <DownloadComponent />
              </ul>
            </div>
          </div>
          <FooterComponent />
        </div>
      </ContainerComponent >
    </div >
  );
}
