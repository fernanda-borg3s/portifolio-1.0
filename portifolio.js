//////////////////////////// MUDAR PARA DARKMODE
const chk = document.getElementById('chk');
if(localStorage.getItem('data-theme') == 'dark'){
    chk.checked = true;
}
//liga funçao ao checkboK
chk.addEventListener('change', () =>{
    let theme = localStorage.getItem('data-theme');
        if(!chk.checked){
            changeToLight();
        }else{
            changeToDark()
        }
})
const changeToDark = () =>{
    document.documentElement.setAttribute("data-theme","dark");
    localStorage.setItem("data-theme", "dark");
}
const changeToLight = ()=>{
    document.documentElement.setAttribute("data-theme","light");
    localStorage.setItem("data-theme", "light");
}
let theme = localStorage.getItem('data-theme');
if(theme == 'dark') changeToDark();

//////////////////////////// FIM DO MUDAR PARA DARKMODE////////////////

//////////////////////////// BTN BOX-SOBRE (SOBRE, FORMAÇAO, HABILIDADE)////////////////

let btnSobre = document.getElementById('txt-sobre');
let btnFormacao = document.getElementById('box-formacao');
let btnHabilidade = document.getElementById('box-habilidade');

const abrirFormacao = () =>{
    btnSobre.style.display = "none";
    btnHabilidade.style.display = "none";
    btnFormacao.style.display = "block"

}
const abrirHabilidade = () =>{
    btnSobre.style.display = "none";
    btnFormacao.style.display = "none";
    btnHabilidade.style.display = "block";
}
const abrirSobre = () =>{
    btnHabilidade.style.display = "none";
    btnFormacao.style.display = "none";
    btnSobre.style.display = "block";
}
//////////////////////////// FIM ////////////////
////////////////FUNÇAO COLOCAR ATRIBUTOS NOS NOVOS ELEMENTO <A>/////////
const addLinkElemento = () =>{
    let firstLink = document.getElementById('NewElemento1');
    let secondLink = document.getElementById('NewElemento2');
       //adicinar texto aos novos elementos
        const textNode1 = document.createTextNode("Formação");
        const textNode2 = document.createTextNode("Habilidade");
            firstLink.appendChild(textNode1);
            secondLink.appendChild(textNode2);
        //adicionar elemento para funcoes de paginas
            firstLink.setAttribute('onclick', 'abrirFormacao()');
            firstLink.setAttribute('href', 'index.html#sobre');

            secondLink.setAttribute('onclick', 'abrirHabilidade()');
            secondLink.setAttribute('href', 'index.html#sobre');
}
////////////////FIM////////

let elemento =  document.getElementById('menu');
const menuMobile = document.getElementById('btn-mobile');
    const alternaMenu = () =>{
        const nav = document.getElementById('nav');
        nav.classList.toggle('active')//toggle = adiciona caso tenha, nao add caso não tenha
        //criar elemento li - formação -habilidade no menu
        for(let i = 1; i <3; i++){
        let criarItem = document.createElement('li');
        criarItem.classList.add('newElement');
        criarItem.innerHTML = `<a href="#" id="NewElemento${i}" onclick="#"></a>`;
        elemento.insertBefore(criarItem, elemento.children[i+1]);
        }
        addLinkElemento()
        //REMOVE ELEMENTO CRIADOS, NECESSARIO POR CAUSA DO FOR
        let elementoCriado = document.querySelectorAll('li.newElement');
        if(nav.classList != "active"){
            Array.prototype.forEach.call( elementoCriado, function( node ) {
                node.parentNode.removeChild( node );
            });
        } 
    }
menuMobile.addEventListener('click', alternaMenu)

const btnEmail = ()=>{
    location.href = "mailto:fernandaborgesb4@gmail.com";


}
document.getElementById('btn-baixar').addEventListener('click', btnEmail);
document.getElementById('btn-contato-down').addEventListener('click', btnEmail);