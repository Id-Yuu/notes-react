import React from "react";

function Navbar(props) {
  const { onSearch } = props;

  return (
    <nav className="navbar">
      <div className="navbar__body">
        <a href="/">
          <span>Notes</span>
        </a>
        <div>
          <input
            onChange={(event) => onSearch(event)}
            type="text"
            id="search"
            placeholder="Cari catatan..."
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
