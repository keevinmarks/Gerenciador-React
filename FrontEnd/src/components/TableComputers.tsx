const TableComputers = () => {
    return(
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
              {computers.map((pc) => (
                <tr key={pc.id} className="hover:bg-blue-50/40">
                  <td className="py-3 px-4">{pc.tipo}</td>
                  <td className="py-3 px-4">{pc.nome}</td>
                  <td className="py-3 px-4">{pc.mac}</td>
                  <td className="py-3 px-4">{pc.tombo}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        pc.status === "Ativo"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {pc.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{pc.dataSaida || "N/A"}</td>
                  <td className="py-3 px-4">{pc.motivoSaida || "N/A"}</td>
                  <td className="py-3 px-4">{pc.dataRetorno || "N/A"}</td>
                  <td className="py-3 px-4 text-right flex gap-2 justify-end">
                    <button
                      onClick={() => handleEdit(pc)}
                      className="p-2 rounded-full hover:bg-blue-100"
                    >
                      <Pencil className="w-5 h-5 text-blue-600" />
                    </button>
                    <button
                      onClick={() => setDeleteId(pc.id)}
                      className="p-2 rounded-full hover:bg-red-100"
                    >
                      <Trash className="w-5 h-5 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}

export default TableComputers;