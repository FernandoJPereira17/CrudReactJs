import React from "react";

export default function ModalRender(props) {

    
    return (
        <>
            <div id="modal" className="hidden fixed w-full h-full top-0 bottom-0 bg-[#00000070] justify-center items-center">
            id:{props.id}

                <div className="flex flex-col gap-2 max-w-fit px-3 py-5 bg-white rounded-md justify-center items-center">

                    <h2 className="uppercase font-bold text-lg">Novo Cliente</h2>

                    <form id="form" className="flex flex-col gap-3 justify-center items-center">
                        <input
                            class="w-72 px-3 py-2 outline-none border border-black rounded-md"
                            type="text"
                            id="nome"
                            placeholder="Nome"
                        ></input>

                        <input
                            className="w-72 px-3 py-2 outline-none border border-black rounded-md"
                            type="text"
                            id="sobrenome"
                            placeholder="Sobrenome"
                        ></input>
                        <input
                            className="w-72 px-3 py-2 outline-none border border-black rounded-md"
                            type="text"
                            id="email"
                            placeholder="E-mail"
                        ></input>
                        <input
                            className="w-72 px-3 py-2 outline-none border border-black rounded-md"
                            type="number"
                            id="telefone"
                            placeholder="Telefone"
                        ></input>
                        <input
                            className="w-72 px-3 py-2 outline-none border border-black rounded-md"
                            type="date"
                            id="data"
                            placeholder="Data Nascimento"
                        ></input>
                        <span
                            id="errorMessage"
                            className="hidden text-center text-red-700 text-sm"
                        >Todos os campos são obrigatórios</span>
                        <button
                            className="w-full py-3 px-4 rounded-md text-white text-lg uppercase bg-sky-900 hover:bg-sky-800"
                            id="send" onClick={()=>handleSubmit()}
                        >
                            Enviar
                        </button>
                        <button
                            className="w-full py-3 px-4 rounded-md text-sky-900 text-lg uppercase bg-yellow-400 hover:bg-yellow-300"
                            id="cancel"
                        >
                            Cancelar
                        </button>
                    </form>
                </div>
            </div>
        </>

    )
}