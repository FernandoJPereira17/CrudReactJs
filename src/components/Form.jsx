import React from "react";

export default function Form({cliente, handleSubmit, handleCliente }) {
    return (
        <>
        <form
            onSubmit={handleSubmit} className="flex flex-col gap-2 px-4 py-3 
            border rounded-md justify-center items-center bg-white shadow"
        > 
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="outline-none border border-black rounded px-2 py-1"
              placeholder="Seu nome aqui"
              id="nome"
              name="nome"
              value={cliente.name}
              onChange={handleCliente}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              className="outline-none border border-black rounded px-2 py-1"
              placeholder="Seu sobrenome aqui"
              id="sobrenome"
              name="sobrenome"
              value={cliente.sobrenome}
              onChange={handleCliente}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastName">E-mail</label>
            <input
              type="email"
              className="outline-none border border-black rounded px-2 py-1"
              placeholder="Seu sobrenome aqui"
              id="email"
              name="email"
              value={cliente.email}
              onChange={handleCliente}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastName">Telefone</label>
            <input
              type="number"
              className="outline-none border border-black rounded px-2 py-1"
              placeholder="Seu sobrenome aqui"
              id="telefone"
              name="telefone"
              value={cliente.telefone}
              onChange={handleCliente}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastName">Data de Nascimento</label>
            <input
              type="date"
              className="outline-none border border-black rounded px-2 py-1"
              placeholder="Seu sobrenome aqui"
              id="email"
              name="email"
              value={cliente.email}
              onChange={handleCliente}
            />
          </div>
          <button className="w-full h-10 flex justify-center items-center text-white bg-sky-950 rounded-md shadow">
            Enviar
          </button>
        </form>
        </>
      );
}
