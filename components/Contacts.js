import "./Contact.css";

export default function Contact() {
  const partners = [
    {
      name: "FIITJEE College",
      location: "Delhi, NCR, Hyderabad, Telangana, chennai",
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
      name: "Sri Chaitanya College",
      location: "Hyderabad, chennai",
      phone: "9032082482",
      email: "admissions@srichaithanya.edu.in",
    },
    {
      name: "FITZEE",
      location: "Mumbai, Maharashtra",
      phone: "90320824888",
      email: "admissions@fitzee.edu.in",
    },
    {
      name: "NARAYANA",
      location: "Kota, Rajasthan, chennai",
      phone: "9032082481",
      email: "info@narayana.edu.in",
    },
  ];

  return (
    <div className="contact-page">
      <div className="section-head">
        <button className="connect-btn">📞 Get Connected</button>
        <h1>Contact Us</h1>
        <p>
          Need assistance? Our dedicated team and partner institutions are ready
          to help you achieve your educational goals.
        </p>
      </div>

      <div className="grid">
        <div className="support-card">
          <h2>EduFinder Support</h2>
          <span>Your Education Partner</span>
          <div className="support-big-number">9032082482</div>

          <div className="support-buttons">
            <button className="callnow">Call Now</button>
            <button className="whatsapp">WhatsApp</button>
          </div>

          <div className="support-info">
            <p>support@edufinder.com</p>
            <p>Hyderabad, Telangana</p>
          </div>
        </div>

        <div className="partners">
          <div className="partner-head">
            <h2>Partner Colleges</h2>
            <span>Connect directly with our partner institutions</span>
          </div>

          {partners.map((item, i) => (
            <div key={i} className="partner-card">
              <div className="partner-title">
                <div className="icon">🎓</div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.location}</p>
                </div>
              </div>

              <div className="contact-block">
                <div className="item phone">
                  <span>📞 Phone</span>
                  <b>{item.phone}</b>
                </div>
                <div className="item email">
                  <span>✉️ Email</span>
                  <b>{item.email}</b>
                </div>
              </div>

              <div className="partner-buttons">
                <button>📞 Call Now</button>
                <button>💬 Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

