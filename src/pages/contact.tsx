import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill required fields");
      return;
    }
    alert("Message Sent!");
  };

  const contactCards = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "+91 07942700870",
      href: "tel:+9107942700870",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/9107942700870",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "agarwal.ankit0193@gmail.com",
      href: "mailto:agarwal.ankit0193@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Visit Us",
      value: "EB 20, Shop No 2 & 3, Near Baguiati AC Market, VIP Road, Deshbandhunagar, Kolkata-700059, West Bengal",
      href: "#info",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-500 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Contact Us
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              We're Here <br /> To Help You
            </h1>

            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
              Questions, bulk orders, returns or just a quick chat —
              our support team responds fast.
            </p>

            <div className="flex flex-col gap-3">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  className="group flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors duration-200 leading-relaxed">
                      {card.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
            <p className="text-gray-400 text-sm mb-6">We'll get back to you within 24 hours.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  className="border border-gray-200 p-3 pl-4 rounded-xl w-full focus:outline-none focus:border-orange-500 text-sm transition-colors placeholder-gray-400"
                  placeholder="Your name *"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="relative">
                <input
                  className="border border-gray-200 p-3 pl-4 rounded-xl w-full focus:outline-none focus:border-orange-500 text-sm transition-colors placeholder-gray-400"
                  placeholder="Email *"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>

            <div className="relative mt-4">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                className="border border-gray-200 p-3 pl-10 rounded-xl w-full focus:outline-none focus:border-orange-500 text-sm transition-colors placeholder-gray-400"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div className="relative mt-4">
              <textarea
                className="border border-gray-200 p-3 pl-4 rounded-xl w-full min-h-[130px] focus:outline-none focus:border-orange-500 text-sm transition-colors placeholder-gray-400 resize-none"
                placeholder="Your message *"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>

            <button
              onClick={submit}
              className="group relative overflow-hidden bg-[#111] text-white w-full mt-5 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Send Message
              </span>
              <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl" />
            </button>
          </div>
        </div>

        {/* MAP + HOURS */}
        <div
          id="info"
          className="grid md:grid-cols-2 mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        >
          {/* GOOGLE MAP */}
          <div className="w-full h-[400px]">
           <iframe
  src="https://www.google.com/maps?q=EB%2020,%20Shop%20No%202%20%26%203,%20Near%20Baguiati%20AC%20Market,%20VIP%20Road,%20Deshbandhunagar,%20Kolkata%20700059,%20West%20Bengal&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>

          {/* BUSINESS HOURS */}
          <div className="bg-[#111] text-white p-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Hours
            </span>

            <h3 className="text-xl font-bold mb-6">Business Hours</h3>

            <div className="space-y-0 divide-y divide-gray-700">
              {[
                { day: "Monday – Friday", hours: "10 AM – 9 PM" },
                { day: "Saturday",        hours: "10 AM – 10 PM" },
                { day: "Sunday",          hours: "11 AM – 8 PM" },
              ].map((row) => (
                <div key={row.day} className="flex justify-between items-center py-4">
                  <span className="text-gray-300 text-sm">{row.day}</span>
                  <span className="text-orange-400 font-semibold text-sm">{row.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Store Address</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    EB 20, Shop No 2 &amp; 3, Near Baguiati AC Market,<br />
                    VIP Road, Deshbandhunagar, Kolkata-700059
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}