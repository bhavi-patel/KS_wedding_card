 "use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function Rsvp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("Joyfully accepts");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      `Wedding RSVP for ${site.shortNames}`,
      `Name: ${name}`,
      `Phone: ${phone || "Not provided"}`,
      `Response: ${attendance}`,
      `Number of guests: ${attendance === "Joyfully accepts" ? guests : "0"}`,
      `Message: ${message || "—"}`
    ].join("\n");
    const number = site.whatsappNumber.replace(/\D/g, "");
    if (!number || number === "919876543210") {
      window.alert("Please add your real WhatsApp number in lib/site.ts before using RSVP.");
      return;
    }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="rsvp-form" onSubmit={submit}>
      <label>
        Your name *
        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your full name" />
      </label>
      <label>
        Mobile number
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 ..." />
      </label>
      <label>
        Your response
        <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
          <option>Joyfully accepts</option>
          <option>Regretfully declines</option>
        </select>
      </label>
      {attendance === "Joyfully accepts" && (
        <label>
          Number of guests
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {["1", "2", "3", "4", "5", "6"].map((n) => <option key={n}>{n}</option>)}
          </select>
        </label>
      )}
      <label>
        A note for the couple (optional)
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Send us your wishes..." />
      </label>
      <button className="primary-button form-button" type="submit">Send RSVP on WhatsApp ↗</button>
      <p className="form-hint">This opens WhatsApp with your response ready to send. Your details are not stored by this website.</p>
    </form>
  );
}