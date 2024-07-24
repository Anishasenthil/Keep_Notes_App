import React from "react";

const date = new Date();
const yr = date.getFullYear();

function Footer()
{
    return(
    <footer><p> Copyright@{yr}</p></footer>
    );
   
}
export default Footer;