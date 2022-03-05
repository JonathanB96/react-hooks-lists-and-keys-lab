import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const els = links.map((el)=>{
    return <a key={el} href={`#${el}`}>{el}</a>

  })

  return <nav>{els}</nav>;
}

export default NavBar;
