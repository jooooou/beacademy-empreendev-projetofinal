
// Botões
function openNav(){
    document.getElementById("myNav").style.width='100%';
    document.getElementById("footer").style.visibility='hidden';
}

function closeNav(){
    document.getElementById("myNav").style.width='0';
    document.getElementById("footer").style.visibility='visible';

}

// carrossel

const controls = document.querySelectorAll('.control')
let currentItem = 0;
const items = document.querySelectorAll('.item')
const maxItems = items.length;
controls.forEach(control => {
    control.addEventListener('click',()=>{
        const isLeft = control.classList.contains('arrow-left')

    if(isLeft){
        currentItem -= 1;
    } else{
        currentItem += 1;
    }

    if (currentItem >= maxItems){
        currentItem = 0
    }

    if (currentItem < 0){
        currentItem = maxItems -1;
    }


    items.forEach(items => items.classList.remove('current-item'))
    items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    })

    items[currentItem].classList.add('current-item');
})
})

// alerta de vendido
function alerta(){
    alert("mystery box indisponível")
}

// botao e modal
var botaoAbrirModal = document.getElementById("abrir-modal");
var modal = document.getElementById("modal");
function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

// abrir modal
botaoAbrirModal.onclick = function() {
  modal.style.display = "block";
  unloadScrollBars()
}

// fechar modal
var botaoFecharModal = document.getElementsByClassName("fechar")[0];
botaoFecharModal.onclick = function() {
  modal.style.display = "none";
  reloadScrollBars()
  
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    reloadScrollBars()
  }
}

// selecionar e fechar
var botoesSelecionar = document.getElementsByClassName("selecionar");
for (var i = 0; i < botoesSelecionar.length; i++) {
  botoesSelecionar[i].onclick = function() {
    var valorProduto = this.getAttribute("data-valor");
    document.getElementById("valor-produto").value = valorProduto;
    modal.style.display = "none";
    reloadScrollBars()
  }
}

// dropdown list

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        if(!faq.classList.contains("active")){
            faqs.forEach(faq =>{
                faq.classList.remove("active");
            })
        }
        faq.classList.toggle("active")
    })
})