import React from 'react'

const Grid = ({ resto }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                {
                    resto?.restaurants?.map((dataResto) => {
                        return (
                            <>

                                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className='flex flex-col'>
                                        <img className="object-cover self-center w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={'https://restaurant-api.dicoding.dev/images/medium/' + dataResto.pictureId} alt="" />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <div className='flex flex-col'>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dataResto.name}</h5>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dataResto.description}.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* <div>{dataResto.name}</div>
                                <img src={'https://restaurant-api.dicoding.dev/images/medium/' + dataResto.pictureId} /> */}
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Grid