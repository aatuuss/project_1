import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [negara, setNegara] = useState();
  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries/" + id
    );
    const data = await response.data;
    setNegara(data);
  };

  useEffect(() => {
    // ambilData()
    ambilNegara();
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen  bg-gray-100">
      <div className="hero-content text-center space-y-8 flex-col">
        <img src={negara?.flag} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{negara?.name}</h1>
          <p className="py-6 max-w-[50rem] text-center">{negara?.currency}</p>
          <Link to="/negara" className="btn btn-primary">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
