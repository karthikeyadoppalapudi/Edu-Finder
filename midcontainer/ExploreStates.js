import React from "react";
import "./ExploreStates.css";

const states = [
  {
    name: "Andhra Pradesh",
    desc: "Tirumala Temple & Coastal Beauty",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZriDr0t0JugLyNZ8rsa48DJj6O-lvklGH8A&s",
  },
  {
    name: "Telangana",
    desc: "IT Hub & Modern Architecture",
    img: "https://images.unsplash.com/photo-1578897775080-771bb6a1331f",
  },
  {
    name: "Tamil Nadu",
    desc: "Ancient Temples & Cultural Heritage",
    img: "https://www.tourmyindia.com/states/tamilnadu/images/mahabalipuram-beach.jpg",
  },
  {
    name: "Karnataka",
    desc: "Silicon Valley of India",
    img: "https://images.unsplash.com/photo-1593696140826-c15c6d3da683?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Maharashtra",
    desc: "Financial Capital & Bollywood",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kerala",
    desc: "God's Own Country & Backwaters",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExploreStates() {
  return (
    <section className="explore-section">
      <div className="container-inner">
        <div className="explore-header">
          <h2>Explore Colleges By State</h2>
          <button className="explore-find">Find Colleges Across India</button>
        </div>

        <p className="explore-sub">
          Select a state to discover top educational institutions in that
          region.
        </p>

        <div className="states-grid">
          {states.map((s, i) => (
            <div
              className="state-card"
              key={i}
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="card-overlay">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
