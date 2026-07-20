import "./ContactInfo.css";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="contact-page">
      {/* ================= HEADER ================= */}
      <div className="contact-header">
        <button className="top-connect-btn">
          <Phone size={16} /> Get Connected
        </button>
        <h1>Contact Us</h1>
        <p>
          Need assistance? Our dedicated team and partner institutions are ready
          to help you achieve your educational goals.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="contact-grid">
        {/* LEFT SIDE CONTENT */}
        <div className="left-section">
          {/* SUPPORT CARD */}
          <div className="support-card">
            <div className="support-header">
              <div className="support-icon">?</div>
              <div>
                <h2>EduFinder Support</h2>
                <p>Your Education Partner</p>
              </div>
            </div>

            <div className="support-phone-box">
              <p>Direct Line</p>
              <h1>9032082482</h1>
            </div>

            <div className="support-actions">
              <button className="call-btn">
                <Phone size={16} /> Call Now
              </button>
              <button className="whatsapp-btn">
                <MessageCircle size={16} /> WhatsApp
              </button>
            </div>

            <div className="support-email">
              <Mail size={16} />
              support@edufinder.com
            </div>
          </div>

          {/* SUPPORT HOURS */}
          <div className="support-hours-card">
            <div className="card-title">
              <Clock size={20} /> Support Hours
            </div>

            <div className="hours-row">
              <span>Monday - Friday</span>
              <span className="time green">9am - 7pm</span>
            </div>

            <div className="hours-row">
              <span>Saturday</span>
              <span className="time blue">10am - 5pm</span>
            </div>

            <div className="hours-row">
              <span>Sunday</span>
              <span className="time grey">Closed</span>
            </div>
          </div>

          {/* QUICK RESPONSE */}
          <div className="quick-response-card">
            <div className="qr-icon">!</div>
            <div>
              <h3>Quick Response</h3>
              <p>We respond to all inquiries within 24 hours</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — PARTNER COLLEGES */}
        <div className="partners-section">
          <h2 className="partners-title">
            <MapPin size={20} className="pink-icon" /> Partner Colleges
          </h2>
          <p className="partners-sub">
            Connect directly with our partner institutions
          </p>

          {/* ------- COLLEGE CARD TEMPLATE -------- */}
          {COLLEGES.map((clg, index) => (
            <div className="college-card" key={index}>
              <div className="college-header">
                <div className="college-icon">🎓</div>
                <div>
                  <h3>{clg.name}</h3>
                  <p className="location">{clg.location}</p>
                </div>
              </div>

              <div className="college-info-grid">
                <div className="info-box phone">
                  <Phone size={16} />
                  <p>{clg.phone}</p>
                </div>

                <div className="info-box email">
                  <Mail size={16} />
                  <p>{clg.email}</p>
                </div>
              </div>

              <div className="college-actions">
                <button className="call-btn">
                  <Phone size={16} /> Call Now
                </button>
                <button className="msg-btn">
                  <MessageCircle size={16} /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========== STATIC COLLEGE DATA (Matches your screenshot) ========== */

const COLLEGES = [
  {
    name: "FIITJEE College",
    location: "Delhi, NCR, Hyderabad, Telangana, Chennai",
    phone: "9032082484",
    email: "contact@fiitjee.com",
  },
  {
    name: "Narayana College",
    location: "Bangalore, Karnataka",
    phone: "9032082483",
    email: "info@narayana.edu.in",
  },
  {
    name: "SIMS Junior College",
    location: "Guntur, Andhra Pradesh",
    phone: "9032082485",
    email: "admissions@sims.edu.in",
  },
  {
    name: "Sri Chaitanya College",
    location: "Hyderabad, Telangana, Chennai",
    phone: "9032082482",
    email: "admissions@srichaitanya.edu.in",
  },
  {
    name: "FITZEE",
    location: "Mumbai, Maharashtra",
    phone: "9032082488",
    email: "admissions@fitzee.edu.in",
  },
  {
    name: "NARAYANA",
    location: "Kota, Rajasthan, Chennai",
    phone: "9032082487",
    email: "contact@narayana.edu.in",
  },
];
