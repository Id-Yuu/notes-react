import React from "react";
import SectionNoteCard from "./SectionNoteCard";

function SectionArchiveNote(props) {
  const { onDelete, onActive, notes } = props;
  return (
    <div className="note-list">
      {notes.map((note) => (
        <SectionNoteCard
          key={note.id}
          onDelete={onDelete}
          buttonData={onActive}
          changeButton="Arsip"
          {...note}
        />
      ))}
    </div>
  );
}

export default SectionArchiveNote;
