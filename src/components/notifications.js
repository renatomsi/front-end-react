
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toastr from 'toastr'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

const MySwal = withReactContent(Swal)


export function notify(title, text, icon, confirmButton, progressBar, timer, html) {
  MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: timer,
    html: html,
    timerProgressBar: progressBar,
    confirmButtonText: confirmButton
  })
}

export function notifyError(mensagem, titulo) {
  notify(titulo, mensagem, 'error', 'Fechar' )
}

export function notifySuccess(mensagem, titulo ){
  notify(titulo, mensagem, 'success', 'Ok' )
}

export function notifyValidarCampos(mensagem) {
  toastr["error"](mensagem, "Erro ")
}

