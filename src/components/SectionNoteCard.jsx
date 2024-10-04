import React from "react";
import { showFormattedDate } from "../utils/index.js";

function SectionNoteCard(props) {
  const { title, body, createdAt, id, onDelete, buttonData, changeButton } =
    props;
  return (
    <div className="note-card">
      <div className="note-card__header">
        <h5>{title}</h5>
        <span>{showFormattedDate(createdAt)}</span>
      </div>
      <p className="note-card__body">{body}</p>
      <div className="note-card__footer">
        <button
          className="note-card_btn_footer__delete"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className="note-card_btn_footer__archive"
          onClick={() => buttonData(id)}
        >
          {changeButton}
        </button>
      </div>
    </div>
  );
}

export default SectionNoteCard;
