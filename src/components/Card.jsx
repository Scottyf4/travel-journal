export default function Card(props) {
  const locationToUpper = props.item.location.toUpperCase();

  console.log(props);
  return (
    <section className="section">
      <div className="card--body">
        <div>
          <img className="img" src={props.item.imageUrl} />
        </div>
        <div className="card--information">
          <div className="card--location">
            <img
              src="./public/images/location-pin.svg"
              alt="red location pin image"
            />
            <h2 className="card--location--name">{locationToUpper}</h2>
            <a href={props.item.googleMapsUrl} className="card--location--maps">
              View on Google Maps
            </a>
          </div>
          <div>
            <h1 className="card--details--title">{props.item.title}</h1>
            <h3 className="card--details--dates">
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p className="card--details--description">
              {props.item.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
