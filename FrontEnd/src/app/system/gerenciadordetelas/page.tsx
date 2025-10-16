"use client";
import { useState } from "react";
import { Plus, X, Pencil, Trash } from "lucide-react";
import ModalComputer from "@/components/ModalComputer";

type Computer = {
  id: number;
  tipo: string;
  nome: string;
  mac: string;
  tombo: string;
  status: "Ativo" | "Desativado";
  dataSaida: string | null;
  motivoSaida: string | null;
  dataRetorno: string | null;
};

const ComputerList = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-black mb-6">
        Gerenciamento de Computadores
      </h1>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Lista de Computadores
          </h2>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Adicionar Computador
          </button>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xs overflow-hidden">
            <thead>
              <tr className="bg-blue-50 text-left text-sm text-black">
                <th className="py-3 px-4 border-b">Tipo</th>
                <th className="py-3 px-4 border-b">Nome</th>
                <th className="py-3 px-4 border-b">MAC</th>
                <th className="py-3 px-4 border-b">Tombo</th>
                <th className="py-3 px-4 border-b">Status</th>
                <th className="py-3 px-4 border-b">Data Saída</th>
                <th className="py-3 px-4 border-b">Motivo</th>
                <th className="py-3 px-4 border-b">Data Retorno</th>
                <th className="py-3 px-4 border-b text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200 text-black">
              
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Adição/Edição */}
      {showModal && (<ModalComputer setShowModal={setShowModal}/>)}
    </div>
  );
};

export default ComputerList;
