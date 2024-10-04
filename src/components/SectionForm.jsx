import React, { useState } from "react";

const SectionForm = ({ addData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const limit = 50;

  const handleTitleChange = (event) => {
    const newTitle = event.target.value.slice(0, limit);
    setTitle(newTitle);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addData({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="note-app" onSubmit={handleSubmit}>
      <div className="note-app__body">
        <div className="note-input">
          <label htmlFor="title" className="note-input__title">
            Judul :{" "}
            <span className="note-input__title__char-limit">
              {limit - title.length} sisa karakter
            </span>
          </label>
          <input
            value={title}
            onChange={handleTitleChange}
            type="text"
            id="title"
            placeholder="Tuliskan judul..."
            required
          />
        </div>
        <div className="note-input">
          <label htmlFor="message">Catatan</label>
          <textarea
            value={body}
            onChange={handleBodyChange}
            id="message"
            rows="4"
            placeholder="Tuliskan catatan..."
          ></textarea>
        </div>
        <div className="note-input">
          <button type="submit">Tambahkan</button>
        </div>
      </div>
    </form>
  );
};

export default SectionForm;
