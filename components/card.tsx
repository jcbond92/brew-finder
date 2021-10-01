import { MapPin, Compass } from "react-feather";
// https://reactjs.org/docs/conditional-rendering.html

const Card = (props: any) => {
  return (
    <div className="p-6 mt-10 text-left border border-gray-100 border-opacity-20 w-96 rounded-xl relative text-gray-300">
      <h3 className="text-2xl font-bold">{props.name}</h3>
      <h4 className="absolute -top-3 right-8 px-3 bg-dark">
        {props.brewery_type}
      </h4>
      <ul>
        <li>
          {props.street ? `${props.street}, ` : ""}
          {props.city}, {props.state} {props.postal_code}
        </li>
        <div className="inline-flex mt-6 w-auto space-x-4">
          {props.website_url ? (
            <li>
              <a
                className="text-gray-200 py-2 px-4 rounded inline-flex border border-1 border-gray-100"
                href={props.website_url}
              >
                <Compass className="pr-2" /> Website
              </a>
            </li>
          ) : (
            ""
          )}
          {props.obdb_id ? (
            <li>
              <a
                className="text-gray-200 py-2 px-4 rounded inline-flex border border-1 border-gray-100"
                href={`https://www.google.com/maps/search/?api=1&query=${props.obdb_id}`}
              >
                <MapPin className="pr-2" /> Directions
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
