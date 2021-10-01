// https://reactjs.org/docs/conditional-rendering.html

const Card = (props: any) => {
  return (
    <div className="p-6 mt-6 text-left border w-96 rounded-xl relative">
      <h3 className="text-2xl font-bold">{props.name}</h3>
      <h4 className="absolute top-2 right-3">{props.brewery_type}</h4>
      <ul>
        <li>
          {props.street ? `${props.street}, ` : ""}
          {props.city}, {props.state} {props.postal_code}
        </li>
        <div className="inline-flex mt-6 w-auto space-x-4">
          {props.website_url ? (
            <li>
              <a
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                href={props.website_url}
              >
                Website
              </a>
            </li>
          ) : (
            ""
          )}
          {props.obdb_id ? (
            <li>
              <a
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                href={`https://www.google.com/maps/search/?api=1&query=${props.obdb_id}`}
              >
                Google Maps
              </a>
            </li>
          ) : (
            ""
          )}
        </div>
      </ul>
    </div>
  );
};

export default Card;
