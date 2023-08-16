import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './Social.css'

function Social() {

  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
  const whatssapIcon = <FontAwesomeIcon icon={faWhatsapp} />

  return (
    <div className='social'>
      <ul className='social-group'>
        <li><a href="https://www.linkedin.com/in/eeem77/" className="nav-item-social">{linkedinIcon}</a></li>
        <li><a href="mailto:escobarmernestoe@gmail.com" className="nav-item-social">{envelopeIcon}</a></li>
        <li><a href="https://api.whatsapp.com/send?phone=5804123079105" className="nav-item-social">{whatssapIcon}</a></li>
      </ul>
    </div>
  )
}

export default Social