import useGlobalToastr from "../../context/toastr/toastr.context";

export function useToastrHook() {
  const [, setToastr] = useGlobalToastr();

  function showToastrSucesso(mensagem) {
    setToastr({ texto: mensagem, sucesso: true });
  }

  function showToastrFalha(mensagem) {
    setToastr({ texto: mensagem, sucesso: false });
  }

  return { showToastrSucesso, showToastrFalha };
}
