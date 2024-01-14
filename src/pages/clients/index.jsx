import axios from "axios";
import { Table } from "../../components/table";
import React, { useState } from "react";
import { useEffect } from "react";
import ModalRender from "../../components/ModalRender";


export function Clients() {

  
  const [clientes, setClientes] = useState([]);

  const [cliente, setCliente] = useState({

    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    datadenascimento: ""

  });

  const columns = [
    "Nome",
    "Sobrenome",
    "E-mail",
    "Telefone",
    "Data de Nascimento",
    "Ações"
  ];

  function handleCliente(e) {
    setCliente((prev) => ({
      ...prev,
      [e.target.nome]: e.target.value,
    }));
  }

  async function createCliente() {
    await axios.post(
      "https://6580c89c3dfdd1b11c421714.mockapi.io//clientes",
      cliente
    );
    await fetchClientes();
  }

  function clearFields() {
    cliente.nome = "";
    cliente.sobrenome = "";
    cliente.email = "";
    cliente.datadenascimento = "";

  }

  function handleSubmit(e) {
    e.preventDefault();
    if (cliente.nome.length > 2 && cliente.sobrenome.length >= 8 && cliente.email.length > 2 && cliente.telefone.length > 2 && cliente.dataDeNascimento.length > 2) {
      createCliente();
      clearFields();
      toast.success("Usuário criado com sucesso!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  async function fetchClientes() {
    const response = await axios.get(
      "https://6580c89c3dfdd1b11c421714.mockapi.io/clientes",
    );
    setClientes(response.data);

  }

  async function deleteCliente(id) {
    await axios.delete(
      `https://6580c89c3dfdd1b11c421714.mockapi.io/clientes/${id}`
    );
    toast.success("Usuário criado com sucesso!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
    await fetchClientes();

    useEffect(() => {
      fetchClientes();
    }, []);

    return { cliente, clientes, handleCliente, handleSubmit, deleteCliente }
  }

  const modal = document.getElementById("modal");

  function openModal() {
    modal.classList.remove('hidden');
    modal.cLassList.add('flex');
  }

  function fecharModal(props) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    hiddenErrorMessage();
    // form.reset();
  }

  // function showErrorMessage() {
  //   errorMessage.classList.remove("hidden");
  // }
  function hiddenErrorMessage() {
    errorMessage.classList.add("hidden");
  }

  return (
    <>
      <ModalRender id='{props.id}' />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2>Clientes</h2>
          <button className="hover:bg-sky-600 px-2 py-1 rounded shadow-sm bg-sky-700 text-white uppercase"
            id="novoCliente"
            onClick={() => openModal()}
          >Novo cliente</button>
        </div>
        <Table columns={columns} data={clientes} />
      </div>
    </>
  );
}
