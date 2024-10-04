import React from "react";
import SectionArchiveNote from "./SectionArchiveNote";
import SectionArchive from "./SectionArchive";

function SectionBody(props) {
  const { onDelete, onActive, onArchive, activeNotes, archivedNotes } = props;
  return (
    <>
      <section className="container-active">
        <h2>Catatan Aktif</h2>
        {activeNotes.length === 0 ? (
          <p className="note-empty">Tidak ada catatan</p>
        ) : (
          <SectionArchiveNote
            onDelete={onDelete}
            notes={activeNotes}
            onActive={onActive}
          />
        )}
      </section>
      <section className="container-archive">
        <h2>Arsip</h2>
        {archivedNotes.length === 0 ? (
          <p className="note-empty">Tidak ada catatan</p>
        ) : (
          <SectionArchive
            onDelete={onDelete}
            notes={archivedNotes}
            onArchive={onArchive}
          />
        )}
      </section>
    </>
  );
}
export default SectionBody;
