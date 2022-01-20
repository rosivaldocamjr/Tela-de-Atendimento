var pacientes = []
let inPaciente = document.getElementById("inPaciente")
let outAtendimento = document.getElementById("outAtendimento")
let outLista = document.getElementById("outLista")
let btAdicionar = document.getElementById("btAdicionar")
let btUrgencia = document.getElementById("btUrgencia")
let btAtender = document.getElementById("btAtender")


function adicionarPaciente() {
    let nome = inPaciente.value

    if (nome == "") {
        alert("Informe o nome corretamente.")
        inPaciente.focus()
        return
    }

    pacientes.push(nome)

    let lista = ""

    for (let i = 0; i < pacientes.length; i++ ) {
        lista += `${i+1} - ${pacientes[i]}\n`
    }

    outLista.textContent = lista

    inPaciente.value = ""
    inPaciente.focus()
}
btAdicionar.addEventListener("click", adicionarPaciente)


function adicionarUrgencia() {
    let nome = inPaciente.value

    if (nome == "") {
        alert("Informe o nome corretamente.")
        inPaciente.focus()
        return
    }

    pacientes.unshift(nome)

    let lista = ""

    for (let i = 0; i < pacientes.length; i++ ) {
        lista += `${i+1} - ${pacientes[i]}\n`
    }

    outLista.textContent = lista

    inPaciente.value = ""
    inPaciente.focus()
}
btUrgencia.addEventListener("click", adicionarUrgencia)


function atenderPaciente() {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera.")
        inPaciente.focus()
        return
    }

    let atender = pacientes.shift()

    outAtendimento.textContent = atender

    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i+1} - ${pacientes[i]}\n`
    }

    outLista.textContent = lista
}
btAtender.addEventListener("click", atenderPaciente)