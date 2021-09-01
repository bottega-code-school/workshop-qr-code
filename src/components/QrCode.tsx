import * as React from "react";
import QRCode from "qrcode.react";

const icon = require("../../static/assets/images/code-icon.png");

export default function QrCode() {
  const qrRef = React.useRef();
  const [url, setUrl] = React.useState("");

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    // @ts-ignore
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCode = (
    <QRCode
      id="qrCodeElToRender"
      size={500}
      value={url}
      bgColor="white"
      fgColor="#141926"
      level="H"
      imageSettings={{
        src: icon,
        excavate: true,
        width: 500 * 0.1,
        height: 500 * 0.1,
      }}
    />
  );

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

      <div className="qr-container__qr-code" ref={qrRef}>
        {qrCode}
      </div>
    </div>
  );
}
