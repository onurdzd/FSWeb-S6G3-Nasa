import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Footer = () => {
  const [menu, setMenu] = useState(["Ana Sayfa", "Hakkında", "İletişim"]);
  return (
    <div className="container footer">
      {menu.map((item, key) => (
        <div key={key}>
          <Button variant="warning">{item}</Button>
        </div>
      ))}
    </div>
  );
};

export default Footer;
