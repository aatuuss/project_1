import axios from "axios";
import { useCallback, useEffect, useReducer, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";
import { data } from "autoprefixer";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../../store/action/ThemeAction";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

export default function Beranda() {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [resto, setResto] = useState();
  // const [hasilCari, setHasilCari] = useState();
  const [cariBaru, setCariBaru] = useSearchParams();

  const theme = useSelector((state) => state.theme.theme);
  const dispatchRedux = useDispatch ();
    console.log(theme);

  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  useEffect(() => {
    ambilResto();
    if (cariBaru.size > 0) {
      ubahCari(cariBaru.get("caribaru"));
    }
  }, []);

  const ubahCari = useCallback(
    async (input) => {
      setCariBaru({ caribaru: input });

      const response = await axios.get(
        "https://restaurant-api.dicoding.dev/search?q=" +
          cariBaru.get("caribaru")
      );

      const data = await response.data;
      // setHasilCari(data);

      dispatch({ type: "SET_FILTER", payload: data });
    },
    [cariBaru]
  );

  const hasilFilter = cariBaru.size > 0 ? state.filterData : state.data;

  console.log(state);
  return (
    <div className="">
      <button onClick={() => dispatchRedux(toogleTheme())}>COBA DISPATCH</button>
    <BerandaView
      cariBaru={cariBaru}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
    </div>
  );
}
