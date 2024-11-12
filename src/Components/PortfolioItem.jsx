import { useState, useEffect } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // ব্যাকগ্রাউন্ড স্ক্রল বন্ধ করে
    } else {
      document.body.style.overflow = "auto"; // ব্যাকগ্রাউন্ড স্ক্রল চালু করে
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal" onClick={closeModal}>
          <div
            className="portfolio__modal-content"
            onClick={(e) => e.stopPropagation()} // ক্লিক ইভেন্ট ব্যাকগ্রাউন্ডে যেতে দেয় না
          >
            <img
              src={Close}
              alt="close icon"
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>
                  <div>
                    <span className="item__title">{title}</span>
                    <span className="item__details">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="modal__img-container">
              <img src={img} className="modal__img" alt="portfolio item" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
