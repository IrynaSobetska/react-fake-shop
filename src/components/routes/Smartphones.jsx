import "./Smartphones.css";
import { useEffect, useState } from "react";
import getData from "../../utils/getData";

import Loading from "../Loading";
import Card from "../Card";

const Smartphones = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const src = "https://dummyjson.com/products/category/smartphones";

  useEffect(() => {
    getData(src, setData, setError, setLoading);
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      <div className="list">
        {!error && data.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default Smartphones;
