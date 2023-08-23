import React from "react";
import TripItem from "./tripItem";
import {Trip} from '@prisma/client'

const RecommendedTrips = async () =>{

    const data = await fetch('http://localhost:3000/hello').then((res)=> res.json())

    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-primaryLighter"></div>
                <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap text-sm
                ">Destinos Recomendados</h2>
                <div className="w-full h-[1px] bg-primaryLighter"></div>
            </div>

            {/* {
                data.map((trip: Trip)=>{
                    <TripItem key={trip.id} trip={trip} />
                })
            } */}
        </div>
    )
}

export default RecommendedTrips