const calculatorControls = {
    handlerChange: (value) => {
        document.getElementById('calc').value += value
    },
    clear: () => {
        document.getElementById('calc').value = ""
        document.getElementById('historic').innerHTML = ""
    },
    clearExpression: () => {
        document.getElementById('calc').value = ""
    },
    calc: () => {
        const input = document.getElementById('calc')
        const calculed = eval(input.value)
        document.getElementById('historic').innerHTML += `<div>${input.value} = ${calculed}</div>`
        input.value = calculed
    },
    onkeypress: e => {
        if (e.keyCode === 13) {
            calculatorControls.calc()
        }
    }
}


function init() {
    const { clear, onkeypress } = calculatorControls
    clear()
    document.getElementById('calc').addEventListener('keypress', onkeypress)
}


document.addEventListener("DOMContentLoaded", init, false);