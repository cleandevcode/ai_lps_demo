import "bootstrap/dist/css/bootstrap.css";

export default function PriceCardModal (data)  {
  return (
    <div className="card">
    <div className="card-header">
      Starter Plan
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{data}</li>
      <li className="list-group-item">Plan: Perfect For Your Basic Social Media Needs.</li>

    </ul>
  </div>
  );
};
