import "./BenefitCard.css";

function BenefitCard({ icon, title, description, topColor }) {
  return (
    <div className="benefit-card">
      <div
        className="benefit-top-bar"
        style={{ backgroundColor: topColor }}
      ></div>
      <div className="benefit-icon">{icon}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-desc">{description}</p>
    </div>
  );
}

export default BenefitCard;
