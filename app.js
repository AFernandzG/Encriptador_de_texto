const llaves = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

function encriptar() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const regex = new RegExp(Object.keys(llaves).join('|'), 'g');
    const encriptado = inputText.replace(regex, letra => llaves[letra] || letra);
    document.getElementById('output').textContent = encriptado;
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    // Invertir el arreglo para la desencriptacion
    const inverso = {};
    for (const key in llaves) {
        inverso[llaves[key]] = key;
    }
    const regex = new RegExp(Object.values(llaves).join('|'), 'g');
    const desencriptado = inputText.replace(regex, letra => inverso[letra] || letra);
    document.getElementById('output').textContent = desencriptado;
}
