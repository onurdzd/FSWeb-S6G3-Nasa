import React, { useState } from "react";

const Footer = () => {
  const [menu, setMenu] = useState(["Ana Sayfa", "Hakkında", "İletişim"]);
  return (
    <div>
      {menu.map((item, key) => (
        <div key={key}>
          <button>{item}</button>
        </div>
      ))}
    </div>
  );
};

export default Footer;
