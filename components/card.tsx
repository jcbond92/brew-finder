const Card = (props:any) => {
  return (
    <div
      className="p-6 mt-6 text-left border w-96 rounded-xl relative"
    >
      <h3 className="text-2xl font-bold">{props.name}</h3>
      <h4 className="absolute top-2 right-3">{props.brewery_type}</h4>
      <ul>
        <li>{props.street}, {props.city}, {props.state} {props.postal_code}</li>
        <li><a className="hover:text-blue-600 focus:text-blue-600" href={props.website_url}>
          Website
          </a></li>
        <li><a className="hover:text-blue-600 focus:text-blue-600" target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${props.obdb_id}`}>
          Google Maps
          </a></li>
      </ul>
    </div>
  );
};

export default Card;