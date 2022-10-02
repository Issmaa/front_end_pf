import Modal from "../Modal/Modal";
import s from './Card2.module.css';

function Card2({ name, cost, lore }) {
  return (
    <div className={s.containerAll}>
      <div className={s.containerCard}>
        <img variant="top" src="holder.js/100px160" />
        <h1>Acapulco {name}</h1>
        <p>Me voy a la playa{lore} </p>
        <div>
          <h2 className="h2cost">$ 99999 {cost}</h2>
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default Card2;