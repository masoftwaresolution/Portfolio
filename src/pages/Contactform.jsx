import { useState } from "react";
import PhoneInput from "react-phone-input-2";

function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"pk"}
      value={phone}
      onChange={setPhone}
      enableSearch
      inputStyle={{
        width: "100%",
        height: "50px",
        background: "#0f172a",
        color: "black",
        border: "1px solid #334155",
      }}
      buttonStyle={{
        background: "#0f172a",
        border: "1px solid #334155",
      }}
    />
  );
}