import React from "react";

//components
import Input from "./Input";
import DatePicker from "./DatePicker";
import CurrencyInput from "./CurrencyInput";
import Button from "./Button";


const TripSearch = ()=>{
    return(
        <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
            <h1 className="font-semibold text-2xl text-primaryDark text-center">
                Encontre sua sua <span className="text-primary">viagem!</span>
            </h1>

            <div className="flex flex-col gap-4 mt-5 w-ful">
                <Input placeholder="Onde você quer ir?" className="w-full"/>
                <DatePicker placeholderText="Data de Ida" onChange={()=> {}} className="w-full"/>
                <CurrencyInput placeholder="Orçamento" className="w-full"/>
                <Button>Buscar</Button>
            </div>

           
        </div>

    )
}

export default TripSearch