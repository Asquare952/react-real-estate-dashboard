import * as  MdIcon from "react-icons/md";
export const NextArrow = ({ onClick }) => {
  return (
    <button className="arrow-container right" onClick={onClick}>
      <MdIcon.MdOutlineKeyboardArrowRight className="next-arrow-icon " />
    </button>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <button className="arrow-container left" onClick={onClick}>
      <MdIcon.MdOutlineKeyboardArrowLeft className="prev-arrow-icon" />
    </button>
  );
};
