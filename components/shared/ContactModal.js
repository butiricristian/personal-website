import styles from '../../styles/ContactModal.module.css'
import Modal from "../common/Modal";
import facebook from "../../public/social/FacebookBlack.svg";
import linkedin from "../../public/social/LinkedInBlack.svg";
import mail from "../../public/social/Mail.svg";
import Image from "next/image";

export default function ContactModal({showModal, setShowModal}) {
  const contactMethods = [
    { name: "Mail", icon: mail, url: 'mailto:butiri.cristian@gmail.com' },
    { name: "Facebook", icon: facebook, url: "https://www.facebook.com/butiri.cristian"},
    { name: "LinkedIn", icon: linkedin, url: "https://www.linkedin.com/in/cristian-butiri-614598127/" },
  ];

  const contactMapper = ({ name, icon, url }) => {
    const redirectToLink = () => {
      window.open(url, '_blank')
    }

    return (
      <div className={styles.contactContainer} key={name} onClick={redirectToLink}>
        <Image src={icon} alt="social" />
        <h5>{name}</h5>
      </div>
    );
  };

  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      style={{ maxWidth: "700px" }}
    >
      <h4 className={styles.modalTitle}>How would you like to reach out?</h4>
      {contactMethods.map(contactMapper)}
    </Modal>
  )
}