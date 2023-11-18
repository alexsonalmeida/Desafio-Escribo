function calculaSomatorioDe3Ou5(n) {
    let soma = 0;

    // Percorre até o antecessor do número e verifica se cada valor é divisível por 3 ou 5 
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i
        }
    }

    console.log(soma)
    return soma;
}

function chamaCalculo() {
    const inputElement = document.getElementById("inputNumber")
    const result = calculaSomatorioDe3Ou5(parseInt(inputElement.value))
    const conteiner = document.getElementById("conteiner")
    const existeParagrafo = conteiner.querySelector("p")

    if (existeParagrafo) {
        existeParagrafo.innerHTML  = result.toString()
    } else {
        const p = document.createElement('p')
        p.innerHTML = result.toString()
        conteiner.appendChild(p)
    }
    
}

calculaSomatorioDe3Ou5(10)