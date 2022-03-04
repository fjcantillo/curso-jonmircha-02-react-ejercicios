import React from "react"
import Modal from "./Modal";
import {useModal} from "../hooks/useModal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false)
  const [isOpenModalSong, openModalSong, closeModalSong] = useModal(false)
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false)

  return(
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>

      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>

      <button onClick={openModalSong}>Modal Canciones</button>
      <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>

      <button onClick={openModalPortal}>Modal en Potal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM diferente a donde
          carga nuestra app de React, gracias a un React Portal. Tu no te has tirado de un
          puente porque no te queda cerca.
        </p>
        <img src="https://placeimg.com/400/400/arch" alt="Architecture" />
      </ModalPortal>
    </div>
  )
}

export default Modals
