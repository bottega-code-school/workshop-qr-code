import * as React from "react";

const icon = require("../../static/assets/images/code-icon.png");

export default function QrCode() {
  const [url, setUrl] = React.useState("");

  return (
    <div className="qr-container">
      <form className="qr-container__form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button type="submit">Generate QR Code</button>
      </form>

      <div className="qr-container__qr-code">Code goes here...</div>
    </div>
  );
}
