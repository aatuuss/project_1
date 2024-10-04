import React from 'react'
import { Link } from 'react-router-dom';

const BerandaView = ({ubahCari, hasilCari, cariBaru, hasilFilter}) => {
    return (
        <div className="beranda dark:bg-black flex flex-col">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
           
          </label>
          <p>
            Hasil dari : {cariBaru}, ditemukan : {hasilCari?.founded}{" "}
          </p>
    
          <div className="grid grid-cols-3 mx-4 gap-5">
            {hasilFilter?.restaurants?.map((data) => {
              return (
                <div className="card bg-gray-100 dark:bg-stone-700 dark:text-white w-96 shadow-xl" key={data?.name}>
                  <figure>
                    <img
                      src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p className="line-clamp-1">{data.description}</p>
                    <div className="card-actions justify-end">
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
    
                      <Link to={"/detail/" + data.id} className="btn btn-primary">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default BerandaView