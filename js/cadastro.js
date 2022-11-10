const formCadastro = document.querySelector(".area-cadastro")

const inputs = document.querySelectorAll(".form-cadastro")

console.log(inputs)

function checkPassword() {
    const pass1 = document.querySelector("#senha")
    const pass2 = document.querySelector("#confirmesenha")

    if (pass1.value != pass2.value) {
        alert("Senha incorreta")
    } else {
        inputs.forEach((input) => {
            localStorage.setItem(input.id, input.value)
        })
        
        window.location = "index.html"
    }
}

formCadastro.addEventListener("submit", (e) => {
    e.preventDefault()

    checkPassword()
})


