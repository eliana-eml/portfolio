//NAV BAR MOBILE

function openNav() {
    document.getElementById("nav-mobile-lista").style.width = "270px";
}

function closeNav() {
    document.getElementById("nav-mobile-lista").style.width = "0";
}


/* DESENVOLVIMENTO */
function mostraListaFront() {
    if (document.getElementById('front-list').style.display == 'block') {
        document.getElementById('front-list').style.display = 'none';
    } else { document.getElementById('front-list').style.display = 'block' }
}

function mostraListaBack() {
    if (document.getElementById('back-list').style.display == 'block') {
        document.getElementById('back-list').style.display = 'none';
    } else { document.getElementById('back-list').style.display = 'block' }
}

function mostraListaFerr() {
    if (document.getElementById('ferramentas-list').style.display == 'block') {
        document.getElementById('ferramentas-list').style.display = 'none';
    } else { document.getElementById('ferramentas-list').style.display = 'block' }
}

function mostraListaServ() {
    if (document.getElementById('servicos-list').style.display == 'block') {
        document.getElementById('servicos-list').style.display = 'none';
    } else { document.getElementById('servicos-list').style.display = 'block' }
}

//PROJETOS 


/* FRONT-END */

var projetos = JSON.parse('[{"id": 1,"titulo": "WeatherDash","imagem": "../img/wdSol.PNG", "linkProjeto": "https://eliana-eml.github.io/weather-dash/", "descricao": "WeatherDash é uma interface que consome uma API de clima e que mostra, em tempo real, o clima de diversas cidades do mundo todo. Não só a previsão do dia, mas semanalmente e também informações sobre o nascer e pôr do sol e lua, a umidade e velocidade do vento e muito mais! "},{"id": 2, "titulo": "Jogo da Memória","imagem": "./img/jogoMemo2.PNG", "linkProjeto": "https://eliana-eml.github.io/jogo-da-memoria/", "descricao": "Jogo da Memória criado com diversos temas e dificuldades diferentes. Nele você encontrará um ótimo passa-tempo para as horas vagas! Jogue Agora!"},{"id": 3, "titulo": "Baratie Frutos do Mar","imagem": "./img/baratie.PNG", "linkProjeto": "https://eliana-eml.github.io/baratie-frutos-do-mar/", "descricao": "Restaurante Baratie Frutos do Mar. Um dos meus primeiros projetos em HTML e CSS, ele é uma interface de cardápio de um restaurante de frutos do mar. Confira agora!"}]');
var slides = document.getElementById("slidesFront");

projetos.forEach(function (proj) {

    slides.innerHTML += `
    <div class="tituloSlides">
        <h4 class="tituloProj">${proj.titulo}</h4>
    </div>
    <div class="slidesgrid">
        <a href="${proj.linkProjeto}"><img class="imgProjeto" src="${proj.imagem}"></a>
    <div class="descricao">
        <p>${proj.descricao}</p>
    </div>
    `
});


var slideIndex = 1; //Define o index e o inicia como sendo 1.
showFront(slideIndex); //Função que receberá o index da imagem e a exibirá em tela.

function plusFront(n) {  //Função de incremento e decremento das setas para passar pelo array de imagens. Recebe o número/n(incremento).
    showFront(slideIndex += n);
    //Essa função irá receber o index e o número e vai adicioná-los: showDivs(slideIndex = slideIndex + n). Se receber +1 pelo n vai adicionar 1 ao index. Se receber -1 pelo n vai decrementar -1 ao index. 
}

function slideAtual(n) {
    showFront(slideIndex = n);
}

function showFront(n) {
    let i;
    let pontos = document.getElementsByClassName("ponto");
    let img = document.getElementsByClassName("imgProjeto"); //x vai ser o nosso array de imagens por todas terem a mesma class.
    let desc = document.getElementsByClassName("descricao");
    let title = document.getElementsByClassName("tituloProj");

    if (n > img.length) {
        slideIndex = 1; // Se o número do plusFront for maior que o número do tamanho do array de imagens, ele retornará para a primeira img o index 1.
    }
    if (n < 1) {
        slideIndex = img.length //Se o n for menor que 1 o index dos slides vai receber o array de imgs. 'Entregar' o array para a função.
        slideIndex = title.length
        slideIndex = desc.length
    }
    for (i = 0; i < img.length; i++) {  //for básico: o index começa igual a 0; se o index for menor que o tamanho do array então; index incrementa o seu valor adicionando 1.
        img[i].style.display = "none"; //E conforme esse for acontece, a cada nova imagem ele pega o index e coloca o display dela como none.
        desc[i].style.display = "none";
        title[i].style.display = "none";
    }
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }

    img[slideIndex - 1].style.display = "block"; //o vetor de imagens x recebe o [index -1] e muda seu display para block para aparecer a img.
    desc[slideIndex - 1].style.display = "block";
    title[slideIndex - 1].style.display = "block";
    pontos[slideIndex - 1].className += " active";


}


/* BACK-END */

var projetos = JSON.parse('[{"id": 1,"titulo": "Nota Fiscal","imagem": "./img/nota-fiscal.PNG", "linkProjeto": "https://github.com/eliana-eml/rest-jdbc-project-nota-fiscal", "descricao": "Projeto Java feito utilizando a framework Spring Boot. O projeto foi feito para um trabalho do meu curso de Desenvolvimento de Sistemas no SENAI-SP. O seu objetivo era criar uma REST API de Cadastro de Notas Fiscais e seus Itens, utilizando a framework Spring JDBC e Banco de Dados Relacional MySQL.  Um CRUD (CREATE, READ, UPDATE, DELETE) completo."},{"id": 2, "titulo": "Cadastro de Clientes","imagem": "./img/cadClientes.PNG", "linkProjeto": "https://github.com/eliana-eml/java-web-servlet-project-cadastro-de-clientes", "descricao": "Projeto Java Web Servlet. O projeto foi feito para um trabalho do meu curso de Desenvolvimento de Sistemas no SENAI-SP. O objetivo do projeto era criar um projeto Web com Servlets para Cadastro de Clientes e registrá-los num Banco de Dados Relacional."},{"id": 3, "titulo": "Cadastro de Produtos","imagem": "./img/cadProdutos.PNG","linkProjeto": "https://github.com/eliana-eml/rest-jdbc-project-cadastro-de-produtos", "descricao": "Projeto Java feito utilizando a framework Spring Boot. O projeto foi feito para um trabalho do meu curso de Desenvolvimento de Sistemas no SENAI-SP. O seu objetivo era criar uma REST API de Cadastro de Produtos, um CRUD (CREATE, READ, UPDATE, DELETE) utilizando a framework Spring JDBC e registrá-los num Banco de Dados Relacional MySQL."}]');
var slides = document.getElementById("slidesBack");

projetos.forEach(function (proj) {

    slides.innerHTML += `
    <div class="tituloSlides">
        <h4 class="tituloProj2">${proj.titulo}</h4>
    </div>
    <div class="slidesgrid">
        <a href="${proj.linkProjeto}"><img class="imgProjeto2" src="${proj.imagem}"></a>
    <div class="descricao2">
        <p>${proj.descricao}</p>
    </div>
    `
});

var slideIndex = 1; 
showBack(slideIndex);

function plusBack(n) {  
    showBack(slideIndex += n);
}

function slideAtual2(n) {
    showBack(slideIndex = n);
}

function showBack(n) {
    let i;
    let pontos = document.getElementsByClassName("ponto2");
    let img = document.getElementsByClassName("imgProjeto2"); //x vai ser o nosso array de imagens por todas terem a mesma class.
    let desc = document.getElementsByClassName("descricao2");
    let title = document.getElementsByClassName("tituloProj2");

    if (n > img.length) {
        slideIndex = 1; // Se o número do plusFront for maior que o número do tamanho do array de imagens, ele retornará para a primeira img o index 1.
    }
    if (n < 1) {
        slideIndex = img.length //Se o n for menor que 1 o index dos slides vai receber o array de imgs. 'Entregar' o array para a função.
        slideIndex = title.length
        slideIndex = desc.length
    }
    for (i = 0; i < img.length; i++) {  //for básico: o index começa igual a 0; se o index for menor que o tamanho do array então; index incrementa o seu valor adicionando 1.
        img[i].style.display = "none"; //E conforme esse for acontece, a cada nova imagem ele pega o index e coloca o display dela como none.
        desc[i].style.display = "none";
        title[i].style.display = "none";
    }
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }

    img[slideIndex - 1].style.display = "block"; //o vetor de imagens x recebe o [index -1] e muda seu display para block para aparecer a img.
    desc[slideIndex - 1].style.display = "block";
    title[slideIndex - 1].style.display = "block";
    pontos[slideIndex - 1].className += " active";


}

// Links de Contato

var contato = JSON.parse('[{"github":"https://github.com/eliana-eml", "linkedin": "https://www.linkedin.com/in/eliana-lima-122a8420a/", "email": "mailto:eml.eliana57@hotmail.com"}]');
var listaContato = document.getElementById("contatoContainer");

contato.forEach( function contatoLink(cont)  {
    listaContato.innerHTML += `
    <ul class="contatoLink">
        <li>
            <a href="${cont.github}">
                <i class='bx bxl-github'></i>
                <p>GitHub</p>
            </a>
        </li>
        <li>
            <a href="${cont.linkedin}">
                <i class='bx bxl-linkedin'></i>
                <p>LinkedIn</p>
            </a>
        </li>
        <li>
            <a href="${cont.email}">
                <i class='bx bx-mail-send'></i>
                <p>Email</p>
            </a>
        </li>
    </ul>
    `
});
