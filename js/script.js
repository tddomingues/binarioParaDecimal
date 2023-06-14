const inputInserirNumero = document.querySelector("#inputInserirNumero");
const inputInserirRes = document.querySelector("#resultado");
const binPDec = document.querySelector("#binPDec")
const textoCriterio = document.querySelector("#texto-criterio")
let armazenaNumero = [];


function botaoConv() {      
    armazenaNumero = inputInserirNumero.value;

    let quebraNumero = armazenaNumero.split("");

    let eBinario = quebraNumero.filter((value) => {
        return value === "1" || value === "0";
    });

    if (eBinario.length === quebraNumero.length) {
        if (inputInserirNumero.value != "") {
            let tamanhoNovoArray = quebraNumero.length - 1;

            let soma = 0;

            quebraNumero.map((value) => {
                soma += Number(value) * (2 ** tamanhoNovoArray);
                tamanhoNovoArray = tamanhoNovoArray - 1;
            });
            inputInserirRes.innerHTML = `O binário ${inputInserirNumero.value} em decimal
            é ${soma}.`;
        } else {
            alert("Insira um número!");
        }
    } else {
        alert("Esse número não é um binário!");
    }
    
    
    inputInserirNumero.value = "";
    verificarOpcao()
}
