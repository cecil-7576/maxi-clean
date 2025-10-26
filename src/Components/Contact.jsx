import React from 'react'

function Contact() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Google Map */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.443541209848!2d7.9266!3d5.038963999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d586c66c04159%3A0x843b55e50a20b5a3!2sUyo%20521271%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1727111111111!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Contact Details */}
        {/* <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>

          <p className="font-semibold text-gray-800">Address:</p>
          <p className="text-gray-600 mb-4">
            Cappador Mall, Block C Shop 3, 85 Aguiyi Ironsi Road, Maitama, Abuja.
          </p>

          <p className="font-semibold text-gray-800">Open Hours:</p>
          <p className="text-gray-600">
            Monday - Saturday: 8:30AM - 8:00PM
            <br />
            Sunday: 1:00PM - 8:00PM
          </p>

          <p className="font-semibold text-gray-800 mt-4">Telephone:</p>
          <p className="text-gray-600">0909 206 7977</p>

          <p className="font-semibold text-gray-800 mt-4">Email:</p>
          <p className="text-gray-600">admin@amerigolaundro.com</p>
        </div> */}
      </div>
    </section>
  )
}

export default Contact;