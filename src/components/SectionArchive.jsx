import React from "react";
import SectionNoteCard from "./SectionNoteCard";

function SectionArchive(props) {
  const { onDelete, notes, onArchive } = props;


  return (
    <div className="note-archive">
      {notes.map((note) => (
        <SectionNoteCard
          key={note.id}
          onDelete={onDelete}
          buttonData={onArchive}
          changeButton="Aktif"
          {...note}
        />
      ))}
    </div>
  );
}

export default SectionArchive;
