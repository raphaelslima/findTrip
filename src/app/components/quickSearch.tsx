import React from "react";

import Image from 'next/image'

const QuickSearch = ()=> {
    return (
        <div className="container mx-auto px-5">
        <div className="flex items-center">
            <div className="w-full h-[1px] bg-grayLighter"></div>
            <h2 className="font-medium text-grayPrimary whitespace-nowrap px-5">Tente pesquisar por</h2>
            <div className="w-full h-[1px] bg-grayLighter"></div>
        </div>

        <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='/hotel-icon.png' alt="Hotel"/>
                <p className="text-sm text-grayPrimary">Hotel</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='/farm-icon.png' alt="Fazenda"/>
                <p className="text-sm text-grayPrimary">Fazenda</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='/inn-icon.png' alt="Pousada"/>
                <p className="text-sm text-grayPrimary">Pousada</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='/cottage-icon.png' alt="Chalé"/>
                <p className="text-sm text-grayPrimary">Chalé</p>
            </div>
        </div>
    </div>
    )
}

export default QuickSearch