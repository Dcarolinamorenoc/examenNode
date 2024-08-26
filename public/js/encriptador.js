document.addEventListener('DOMContentLoaded', function() {
    let myForm = document.querySelector("#myForm");
    let form_ouput = document.querySelector(".form-ouput");
    let form_ouput__menssage = document.querySelector(".end_message");
    let p = document.querySelector(".end_message p");
    let btn_copy = document.querySelector("#copy");
    let popup = document.querySelector("#popup");
    let popupMessage = document.querySelector("#popup-message");
    let closePopup = document.querySelector("#close-popup");

    function validarTexto(texto) {
        const regex = /^[a-z\s]*$/;
        return regex.test(texto);
    }

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    }

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

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
            form_ouput.classList.remove("active");
            form_ouput__menssage.classList.add("active");
            p.innerHTML = data.resultado;
        })
        .catch((error) => {
            console.error('Error:', error);
            showPopup("Ocurrió un error al procesar su solicitud.");
        });
    });

    btn_copy.addEventListener("click", function(e){
        let range = document.createRange();
        range.selectNode(p);
        let selection = window.getSelection();
        selection.removeAllRanges();  
        selection.addRange(range);
        document.execCommand('copy');  
        selection.removeAllRanges();  
        p.innerHTML = "";
        form_ouput__menssage.classList.remove("active");
        form_ouput.classList.add("active");
        showPopup("Texto copiado al portapapeles");
    });
});