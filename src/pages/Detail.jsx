import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setData } from "../store/action/detail.Action";

export default function Detail() {
  const { id } = useParams();
  const data = useSelector((state) => state.detail);
  const dispatchRedux = useDispatch();

  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/detail/" + id
    );
    const data = await response.data;
    dispatchRedux(setData(data.restaurant));
  };

  useEffect(() => {
    ambilResto();
  }, []);

  useEffect(() => {
    console.log(data.data);
  }, [data]);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name }</h1>
    // </div>
    <div className="hero bg-base-200 min-h-screen  bg-red-50 dark:bg-slate-800 dark:text-white">
      <div className="hero-content text-center space-y-8 flex-col">
        <img
          src={`https://restaurant-api.dicoding.dev/images/large/${data?.data?.pictureId}`}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{data?.data?.name}</h1>
          <p className="py-6 max-w-[50rem] text-justify">
            {data?.data?.description}
          </p>
          <button className="btn btn-primary dark:btn-dark">Visit</button>
        </div>
      </div>
    </div>
  );
}