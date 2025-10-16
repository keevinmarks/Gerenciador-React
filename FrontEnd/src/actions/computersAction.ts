"use server";

import { Computer } from "@/types/types";

export const insertComputer = async (computer:Computer) => {

    try{
        const res = await fetch("http://api:3001/computers", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(computer)
        });

        const json = await res.json();
    }catch(error){
        console.log("Erro ao tentar inserir computador: " + error);
        return {message: "Erro ao tentar inserir computador " + error, success: false}
    }
}

export const getComputers = async () => {
    try{
        const res = await fetch("http://api:3001/computers", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const computers = await res.json();

        return computers;
    }catch(error){
        console.log("Erro ao consultar computadores: " + error);
        return {message: "Erro ao consultar os computadores", success: false}
    }
}