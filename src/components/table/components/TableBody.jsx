import ModalRender from "../../ModalRender";

export function TableBody({ rows, deleteCliente }) {
  return (
    <tbody>
      {rows &&
        rows.map((row) => {
          return (
            <tr key={row.id}>
              <td>{row.nome}</td>
              <td>{row.sobrenome}</td>
              <td>{row.email}</td>
              <td>{row.telefone}</td>
              <td>{row.datadenascimento}</td>
              <td>
                <div className="flex gap-1 items-center">
                  <button>Editar</button>
                  <button onClick={()=> deleteCliente(cliente.id)}>Deletar</button>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
