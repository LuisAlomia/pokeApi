import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useDataAxios = (URL) => {
  const [data, setData] = useState();
  const btnPreviousNext = useSelector((state) => state.btnPreviousNext);

  useEffect(() => {
    axios
      .get(URL)
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, [btnPreviousNext]);

  return [data];
};

export default useDataAxios;
