const usuInfos = document.querySelectorAll(".form-dados")

console.log(usuInfos)


window.addEventListener("DOMContentLoaded", () => {

    usuInfos.forEach((buttonTag) => {
        console.log(buttonTag.id)
        buttonTag.value = localStorage.getItem(buttonTag.id)
 

    })

})