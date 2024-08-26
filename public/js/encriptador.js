/**
 * Inicializa la funcionalidad del formulario de encriptación/desencriptación cuando el DOM está completamente cargado.
 *
 * @listens DOMContentLoaded
 */

document.addEventListener('DOMContentLoaded', function() {
    let myForm = document.querySelector("#myForm");
    let form_output = document.querySelector(".form-ouput");
    let form_output__message = document.querySelector(".end_message");
    let p = document.querySelector(".end_message p");
    let btn_copy = document.querySelector("#copy");
    let popup = document.querySelector("#popup");
    let popupMessage = document.querySelector("#popup-message");
    let closePopup = document.querySelector("#close-popup");
    let textArea = document.querySelector(".insert_text");

    /**
     * Valida que el texto contenga solo letras minúsculas y espacios.
     *
     * @param {string} texto - El texto a validar.
     * @returns {boolean} True si el texto es válido, false en caso contrario.
     */
    function validarTexto(texto) {
        const regex = /^[a-z\s]*$/;
        return regex.test(texto);
    }

    /**
     * Muestra un popup con un mensaje.
     *
     * @param {string} message - El mensaje a mostrar en el popup.
     */
    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    }

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    /**
     * Maneja el envío del formulario para encriptar o desencriptar el texto.
     *
     * @listens submit
     * @param {Event} e - El evento de envío del formulario.
     */
    myForm.addEventListener("submit", function(e){
        e.preventDefault();
        let btn = e.submitter.dataset.accion;
        let data = Object.fromEntries(new FormData(e.target));
        
        if (!validarTexto(data.chain)) {
            showPopup("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
            return;
        }

        let url = btn == "encrypt" ? '/api/encriptar' : '/api/desencriptar';
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: data.chain}),
        })
        .then(response => response.json())
        .then(data => {
            form_output.classList.remove("active");
            form_output__message.classList.add("active");
            p.innerHTML = data.resultado;
        })
        .catch((error) => {
            console.error('Error:', error);
            showPopup("Ocurrió un error al procesar su solicitud.");
        });
    });

    /**
     * Maneja el evento de clic en el botón de copiar.
     *
     * @listens click
     */
    btn_copy.addEventListener("click", function(e){
        let range = document.createRange();
        range.selectNode(p);
        let selection = window.getSelection();
        selection.removeAllRanges();  
        selection.addRange(range);
        document.execCommand('copy');  
        selection.removeAllRanges();  
        p.innerHTML = "";
        form_output__message.classList.remove("active");
        form_output.classList.add("active");
        showPopup("Texto copiado al portapapeles");
    });

    /**
     * Maneja el evento de entrada en el textarea.
     *
     * @listens input
     */
    textArea.addEventListener("input", function() {
        if (this.value.trim() === "") {
            form_output.classList.add("active");
            form_output__message.classList.remove("active");
            p.innerHTML = "";
        }
    });
});