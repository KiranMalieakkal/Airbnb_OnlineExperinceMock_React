import data from "../data/data";

function Card({
  coverImg,
  stats: { rating, reviewCount },
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} className="card--image" />
      <div className="card--stats">
        <img src="src/assets/star.png" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

function CardStack() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return <div className="cards-list">{cards}</div>;
}

export default CardStack;
