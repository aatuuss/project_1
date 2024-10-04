import React, { useCallback, useEffect, useReducer, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { data } from "autoprefixer";
import { Link, useSearchParams } from "react-router-dom";
import NegaraView from "./NegaraView";

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
      throw new Error("eror di case");
  }
};

const Negara = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [resto, setResto] = useState();
  // const [hasilCari, setHasilCari] = useState();
  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  const [cari, setCari] = useSearchParams();
  const cariNegara = cari.get("carinegara");

  const ubahCari = useCallback(
    async (input) => {
      setCari({ carinegara: input });
      const response = await axios.get(
        "https://freetestapi.com/api/v1/countries?search=" + cariNegara
      );
      const data = await response.data;
      // setHasilCari(data);
      dispatch({ type: "SET_FILTER", payload: data });
    },
    [cariNegara]
  );

  useEffect(() => {
    if (!cariNegara) {
      ambilNegara();
    } else {
      ubahCari(cariNegara);
    }
  }, [cariNegara]);

  const hasilFilter = cariNegara ? state.filterData : state.data;

  console.log(state);
  return (
    <NegaraView
      cariNegara={cariNegara}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Negara;
