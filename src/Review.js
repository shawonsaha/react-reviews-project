import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setPerson] = useState(0);
  const { name, job, image, text } = people[person];

  const checkPerson = (p) => {
    if (p > people.length - 1) {
      return 0;
    }

    if (p < 0) {
      return people.length - 1;
    }

    return p;
  };

  const clickPrev = () => {
    let newPerson = person - 1;
    setPerson(checkPerson(newPerson));
  };

  const clickNext = () => {
    let newPerson = person + 1;
    setPerson(checkPerson(newPerson));
  };

  const clickSurpriseMe = () => {
    let newPerson = Math.floor(Math.random() * people.length);

    if (newPerson === person) {
      newPerson = checkPerson(person + 1);
    }
    setPerson(newPerson);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={() => clickPrev()}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={() => clickNext()}>
        <FaChevronRight />
      </button>
      <div>
        <button className="random-btn" onClick={() => clickSurpriseMe()}>
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
