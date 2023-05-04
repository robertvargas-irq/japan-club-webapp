import { useState } from "react";
import QRCode from "react-qr-code";

export default function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <div>
      <div>Generate QR Code</div>
      <input
        type="text"
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
      {qrCodeValue && <QRCode value={qrCodeValue} />}
    </div>
  );
}
