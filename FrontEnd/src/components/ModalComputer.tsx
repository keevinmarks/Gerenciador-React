"use client"
import { Computer } from "@/types/types";
import { Plus, X, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { insertComputer } from "@/actions/computersAction";
type Props = {
    setShowModal: (value: boolean) => void;
}
const ModalComputer = ({setShowModal}:Props) => {
    
    const [option, setOption] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [mac, setMac] = useState<string>("");
    const [assetNumber, setAssetNumber] = useState<number>();
    const [status, setStatus] = useState<string>("");
    const [exitDate, setExitDate] = useState<string>("*");
    const [reason, setReason] = useState<string>("");
    const [returnDate, setReturnDate] = useState("*");

    const handleSaveButton = async () => {
        const computer:Computer = {
          name_computer: name,
          type_computer: option,
          mac_computer: mac,
          asset_number: Number(assetNumber),
          status_computer: status,
          exit_date: exitDate,
          reason: reason,
          return_date: returnDate
        }

        console.log(computer);

        const values = Object.values(computer);
        const hasEmptyField = values.some(value => value === null || value === undefined || value === "");

        if(hasEmptyField){
          alert("Preencha todos os campos");
          return;
        }

        await insertComputer(computer);
        alert("Computador cadastrado com sucesso");
    }

    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-blue-700">
                {"Adicionar Computador"}
              </h3>
              <button onClick={() => {setShowModal(false);}} className="hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <select
                name="tipo"
                value={option}
                onChange={e => {setOption(e.target.value)}}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Tipo</option>
                <option value="Positivo">Positivo</option>
                <option value="Compaq">Compaq</option>
              </select>

              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />

              <input
                type="text"
                name="mac"
                placeholder="MAC Address"
                value={mac}
                onChange={e => setMac(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />

              <input
                type="number"
                name="tombo"
                placeholder="Tombo"
                value={assetNumber}
                onChange={e => setAssetNumber(Number(e.target.value))}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />

              <select
                name="status"
                value={status}
                onChange={e => setStatus(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Status</option>
                <option value="Ativo">Ativo</option>
                <option value="Desativado">Desativado</option>
              </select>

              <input
                type="date"
                name="dataSaida"
                value={exitDate}
                onChange={e => setExitDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="text"
                name="motivoSaida"
                placeholder="Motivo da saída"
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="date"
                name="dataRetorno"
                value={returnDate}
                onChange={e => setReturnDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <div className="flex justify-end gap-3 text-black">
                <button type="button" onClick={() => {setShowModal(false);}} className="px-4 py-2 border rounded-md text-black cursor-pointer">
                  Cancelar
                </button>
                <button onClick={handleSaveButton} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors cursor-pointer">
                  {"Salvar"}
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ModalComputer;