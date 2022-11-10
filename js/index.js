const formLogin = document.querySelector(".area-login")
const senhaInput = document.querySelector("#senha")
const usuarioInput = document.querySelector("#usuario")


formLogin.addEventListener("submit", (e) => {
    e.preventDefault()

    if ((usuarioInput.value === localStorage.getItem("usuario")) &&
        (senhaInput.value === localStorage.getItem("senha"))) {
        window.location = "dados.html"
    }

    else {
        alert(" O usuário ou a senha estão incorretos")
    }

})
