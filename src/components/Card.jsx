function Card(props) {
  // console.log("hh",props)
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  return (

    
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      {/* {!props.openSpots && <div className="card--badge">SOLD OUT</div>} */}
      <img src={`../../images/${props.coverImg}`} className="card--image" alt="img 12"/>
      <div className="card--stats">
        <img src="../../images/Star 1.png" alt="star" />
        <span >{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <h2>{props.title}</h2>
      <p><span className="bold">From ${props.price}</span>/person</p>
    </div>
  );
}

export default Card;
