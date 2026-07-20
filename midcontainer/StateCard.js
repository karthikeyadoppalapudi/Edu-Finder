import "./StateCard.css";

export default function StateCard({ name, desc, img }) {
  return (
    <div className="state-card">
      <img src={img} alt={name} className="state-img" />
      <div className="state-info">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
