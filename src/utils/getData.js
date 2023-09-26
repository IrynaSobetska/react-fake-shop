import axios from "axios";

const getData = async (src, setData, setError, setLoading) => {
  try {
    const res = await axios.get(src);

    if (res.status === 200) {
      setData(res.data.products);
    } else {
      throw new Error(`Failed to fetch data with status: ${res.status}`);
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export default getData;
