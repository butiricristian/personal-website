import { useState } from "react";
import Button from "../common/Button";
import ContactModal from "./ContactModal";

export default function ContactButton({className, onClick, children, ...props}) {
  const [showModal, setShowModal] = useState();

  const handleClick = (e) => {
    e.preventDefault()
    setShowModal(true)
    onClick && onClick()
  }

  return (
    <>
      <Button
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
      <ContactModal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}