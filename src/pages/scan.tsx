import { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

export default function Scan() {
  const [data, setData] = useState("No result");

  return (
    <div>
      <h1>Scan QR Code</h1>
      <div className="card" style={{ width: "20%" }}>
        <QrReader
          onResult={(result, error) => {
            if (result) setData(result.getText());
            if (error) console.info(error);
          }}
          constraints={{ facingMode: "environment" }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}
