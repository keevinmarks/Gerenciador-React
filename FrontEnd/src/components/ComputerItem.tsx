import { Pencil, Trash } from "lucide-react"

const ComputerItem = () => {
    return(
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
    )
}