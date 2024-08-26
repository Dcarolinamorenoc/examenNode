/**
 * Encripta un texto reemplazando ciertas vocales por palabras específicas.
 *
 * @param {string} text - El texto a encriptar.
 * @returns {string} El texto encriptado.
 */
function encrypt(text) {
    let word = text.split(" ");
    let convertion = word.map((value) => {
        value = value.split('');
        return value.map((caracter) => {
            if (caracter == "e") return "enter"
            else if (caracter == "i") return "imes"
            else if (caracter == "a") return "ai"
            else if (caracter == "o") return "ober"
            else if (caracter == "u") return "ufat"
            else return caracter
        }).join("")
    }).join(" ");
    return convertion;
}

/**
 * Desencripta un texto reemplazando palabras específicas por sus vocales correspondientes.
 *
 * @param {string} text - El texto a desencriptar.
 * @returns {string} El texto desencriptado.
 */
function decrypt(text) {
    let word = text.split(" ");
    let convertion = word.map((value) => {
        value = value.replace(/enter/gi, "e");
        value = value.replace(/imes/gi, "i");
        value = value.replace(/ai/gi, "a");
        value = value.replace(/ober/gi, "o");
        value = value.replace(/ufat/gi, "u");
        return value;
    }).join(" ");
    return convertion;
}

/**
 * Controlador para encriptar texto.
 *
 * @param {Object} req - Objeto de solicitud Express.
 * @param {Object} res - Objeto de respuesta Express.
 */
const encriptarTexto = (req, res) => {
    const { text } = req.body;
    const resultado = encrypt(text);
    res.json({ resultado });
};

/**
 * Controlador para desencriptar texto.
 *
 * @param {Object} req - Objeto de solicitud Express.
 * @param {Object} res - Objeto de respuesta Express.
 */
const desencriptarTexto = (req, res) => {
    const { text } = req.body;
    const resultado = decrypt(text);
    res.json({ resultado });
};

module.exports = {
    encriptarTexto,
    desencriptarTexto
};