import React, { useState } from "react";
import "./formulario.component.css";
import EmailJs from "@emailjs/browser";
// import { useToastrHook } from '../../../hooks/toastr/use-toastr.hook';
import { validateEmail } from "../../../validate/validarEmail.validate";
import { ButtonEstilizadoComponent } from "../button/button-estilizado/button.component";

export function FormularioComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const { showToastrSucesso, showToastrFalha } = useToastrHook();

  // function validate() {
  //     if (name === "" || name == null || name == undefined) {
  //         showToastrFalha("Você deve informar seu nome para enviar um email.");
  //         return false;
  //     }
  //     if (email === "" || email == null || email == undefined) {
  //         showToastrFalha("Você deve informar seu email.");
  //         return false;
  //     }
  //     if (!validateEmail(email)) {
  //         showToastrFalha("Informe um email valido.");
  //         return false;
  //     }
  //     if (message === "" || message == null || message == undefined) {
  //         showToastrFalha("Você deve escrever uma mensagem descrevendo a situação da sua maquina.");
  //         return false;
  //     }
  //     return true;
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    if (!validate()) {
      return;
    }

    try {
      // a public key "ep23mfwaxtizuOJQM" foi resetada, colocar a nova key após consertar o bug das rotas em produção.
      //await EmailJs.send("service_jxu4gqt", "template_nwxiwll", templateParams, "ep23mfwaxtizuOJQM")
      setName("");
      setEmail("");
      setMessage("");
      // showToastrSucesso("Email enviado - Envio pausado até corrigir bugs")
    } catch (error) {
      // showToastrFalha("Error: " + error);
    }
  }

  return (
    <div className="formulario">
      <h1>Enviar email</h1>
      <form onSubmit={handleSubmit} className="formulario-container">
        <label className="label-formulario">
          <p>Nome:</p>
          <input
            placeholder="Informe seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="label-formulario">
          <p>Email:</p>
          <input
            placeholder="Informe seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="label-formulario">
          <p>Mensagem:</p>
          <textarea
            placeholder="Descreva sua mensagem aqui"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <div className="div-button-formulario">
          <ButtonEstilizadoComponent texto="Enviar" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
