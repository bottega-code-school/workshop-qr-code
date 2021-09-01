import * as React from "react";
import QRCode from "qrcode.react";

const icon = require("../../static/assets/images/code-icon.png");

export default function QrCode() {
  const [url, setUrl] = React.useState("");

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    // TODO

    setUrl("");
  };

  return (
    <div className="qr-container">
      <form onSubmit={downloadQRCode} className="qr-container__form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div className="qr-container__qr-code">QR Code here</div>
    </div>
  );
}
