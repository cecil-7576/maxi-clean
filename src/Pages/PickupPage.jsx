import React, { useState } from 'react';
import emailjs from "emailjs-com";



function PickupPage() {
    const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    service: "Laundry",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rulpbwu",   // replace with your EmailJS service ID
        "template_uv20a5y",  // replace with your EmailJS template ID
        form,
        "bb3qqG9mKeTOmcWyt"    // replace with your EmailJS public key
      )
      .then(
        () => {
          console.log("✅ Email sent successfully!");
        },
        (error) => {
          console.error("❌ Email error:", error);
        }
      );

    // 2️⃣ Send WhatsApp Notification
            const whatsappMsg = `📌 New Pickup Request
        Name: ${form.name}
        Phone: ${form.phone}
        Address: ${form.address}
        Date: ${form.date} at ${form.time}
        Service: ${form.service}
        Notes: ${form.notes}`;

    // Replace with YOUR WhatsApp number (include country code, no + sign)
    window.open(
      `https://wa.me/2347037953559?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );

    // 3️⃣ Reset form
    setForm({
      name: "",
      phone: "",
      address: "",
      date: "",
      time: "",
      service: "Laundry",
      notes: "",
    });

    alert("✅ Pickup request sent! You’ll be contacted shortly.");
  };

  return (
    <section className="min-h-screen bg-indigo-50 flex flex-col items-center py-50 px-6">

        {/* <div className="absolute inset-0 bg-black/50"></div> */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-8">
        Schedule Your Laundry Pickup 🚚
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
        />
        <textarea
          name="address"
          placeholder="Pickup Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
        ></textarea>
        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-1/2 border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-1/2 border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
          />
        </div>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
        >
          <option>Laundry</option>
          <option>Dry Cleaning</option>
          <option>Ironing</option>
        </select>
        <textarea
          name="notes"
          placeholder="Special Instructions (optional)"
          value={form.notes}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-indigo-200"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Confirm Pickup
        </button>
      </form>
    </section>
  )
}

export default PickupPage;