import { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

export default function Scan() {
  const [data, setData] = useState("No result");

  return (
    <div>
      <div>Scan QR Code</div>
      <QrReader
        onResult={(result, error) => {
          if (result) setData(result.getText());
          if (error) console.info(error);
        }}
        constraints={{ facingMode: "environment" }}
        videoContainerStyle={{
          position: "fixed",
        }}
      />
      <p>{data}</p>
    </div>
  );
}
