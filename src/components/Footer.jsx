import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Keeper App developed by Alexei Popov ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
