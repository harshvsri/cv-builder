import Form from "./Form";

interface Props {
  data: Form;
}

function Card({ data }: Props) {
  return (
    <>
      <div className="card m-5">
        <ul className="list-group list-group-flush">
          <li className="list-group-item h3">
            <span className="mb-0 ">DETAILS</span>
          </li>
          <li className="list-group-item">{data.fname}</li>
          <li className="list-group-item">{data.lname}</li>
          <li className="list-group-item">{data.email}</li>
          <li className="list-group-item">{data.password}</li>
          <li className="list-group-item">{data.address}</li>
        </ul>
      </div>
    </>
  );
}

export default Card;
