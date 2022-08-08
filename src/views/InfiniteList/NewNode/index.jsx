import { useState } from "react";

import { useCreateNodeMutation } from "../../../redux/api/node";
import "./index.css";

function NewNode({ OnClose, parentId }) {
  const [createNode] = useCreateNodeMutation();
  const [name, setName] = useState("");

  const handleNodeInput = (event) => {
    setName(event.target.value);
  };

  const handleCreateNode = () => {
    OnClose(false)
    createNode({ name, parentId })
      .unwrap()
      .then((response) => alert(`Elemento creado ${response.name} con id ${response.id}`))
      .catch((error)=>alert(`No se pudo crear el nodo ${error.status}: ${error.data.message}`));
  };

  return (
    <div className="modalBackground">
      <div className="modal-content" id="modalNewNode">
        <div className="modal-title">
          <h2>Agregar elemento</h2>
          <button className="btn-close" onClick={() => OnClose(false)}>X</button>
        </div>
        <form id="formNewNode"onSubmit={handleCreateNode}>
          <label>
            <input
              name="txtNewNode"
              type="text"
              className="form-input"
              placeholder="Elemento de lista"
              required
              value={name}
              onChange={handleNodeInput}
            />
          </label>
          <div className="button-wrapper">
            <button className="btn default" id="btnCancelFormNode" onClick={() => OnClose(false)}>
              Cancelar
            </button>
            <button className="btn info"id="btnAddNewNode">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNode;
