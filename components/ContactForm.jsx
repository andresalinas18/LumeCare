import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    procedure: "",
    comments: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please accept the terms before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_zg0t8f9",
        "template_ww3jb6p",
        formRef.current,
        "o4f2YboIoUW0i-NdL"
      )

      .then(
        () => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 4000);
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            procedure: "",
            comments: "",
            consent: false,
          });
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert("There was an error sending the message. Please try again.");
        }
      );
  };

  return (
    <>
    {showPopup && (
      <div className="fixed inset-x-0 top-6 z-[9999] flex justify-center">
        <div className="bg-white text-black px-6 py-4 rounded-lg border border-green-400 shadow-xl animate-fade-in flex items-center gap-3">
          <span className="text-green-600 text-xl">✅</span>
          <span>Your form has been submitted successfully!</span>
          <button
            onClick={() => setShowPopup(false)}
            className="ml-4 text-xl font-bold text-gray-600 hover:text-black"
          >
            ×
          </button>
        </div>
      </div>
    )}

    <section className="bg-[var(--color-background)] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-4 font-lora">
            Let’s talk about your journey
          </h2>
          <p className="text-[var(--color-text)] text-lg leading-relaxed font-lora italic">
            Fill out the form and one of our LumeCare specialists will get in
            touch to help you take the first step toward your transformation.
          </p>
        </div>

        {/* Right column: Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] placeholder-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4BO7F] text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] placeholder-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4BO7F] text-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] placeholder-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4BO7F] text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] placeholder-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4BO7F] text-sm"
            />
          </div>

          <input
            type="text"
            name="procedure"
            placeholder="Procedure of Interest"
            value={formData.procedure}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-[var(--color-text)] text-[var(--color-text)] placeholder-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[#D4BO7F] bg-white text-sm"
          />

          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-2xl border border-[var(--color-text)] text-[var(--color-text)] placeholder-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[#D4BO7F] bg-white text-sm resize-none"
          />

          <div className="flex items-start text-sm text-gray-700">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2 mt-1"
            />
            <label>
              By completing this form, you are giving us permission to follow up
              by phone, email or text.
            </label>
          </div>

          <button
            type="submit"
            className="bg-[var(--color-white)] text-[var(--color-text)] border border-black py-3 px-8 rounded-full text-sm font-semibold hover:bg-[var(--color-primary)] transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
