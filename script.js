const frasesNatal = [
  "Aceite a responsabilidade pela sua vida! É você quem cria a sua realidade!",
  "Acorde todos os dias se sentindo BEM! Confie na Inteligência Inata que criou todas as coisas!",
  "Sempre pense de maneira positiva! Deixe ir qualquer resistência a este sentimento.",
  "Você é a única e perfeita energia neste lugar! Lembre-se sempre desta afirmação!",
  "Tudo é perfeito!",
  "Você se torna aquilo que você pensa na maior parte do tempo.",
  "Esteja aberta(o) e disposta(o) e pronta(o) para iniciar mais uma aventura da sua alma!",
  "Abra mão da necessidade de controlar todas as circunstâncias da sua vida. Você só tem controle sobre as suas atitudes.",
  "Clame de volta a sua energia de todos os meus apegos. Lembre-se que a saída é sempre para dentro. Tudo acontece dentro de você!",
  "Convide a paz a retornar a sua presença!",
  "Eu sei que tudo está BEM! Use esta frase como um mantra diário.",
  "Descanse na sabedoria de que todo fim é um novo começo.",
  "Durma em paz e desperte com energias renovadas e o coração cheio de esperança.",
  "A mudança sempre acontece dentro de você. Lembre-se que a saída é para dentro!",
  "A energia não pode ser criada e nem destruída. Ela só pode mudar de forma.",
  "Tudo acontece dentro de você... portanto se não está gostando do que você anda manifestando, mude os estímulos e crie uma nova realidade.",
  "Você sempre cria a sua realidade a partir dos seus pensamentos e suas emoções.",
  "Você sempre cria a sua realidade em conjunto com a Inteligência Inata. Isso se chama co-criação.",
  "A intuição das mulheres é algo divinamente profundo e precisa ser respeitada.",
  "Nossa vida é composta por encontros divinamente combinados.",
  "Todas as pessoas que cruzam o nosso caminho têm sempre um propósito.",
  "Nada acontece por acaso. Tudo tem a sua hora!",
  "Você tem um corpo, mas você não é um corpo. Você é um conjunto de corpos.",
  "Você sempre é responsável pelas suas escolhas.",
  "Que as suas palavras sejam amorosas. Escolha viver em AMOR.",
  "Seja o AMOR! Escolha viver em AMOR! Que as suas ações reflitam isso!",
  "Comece o seu dia com o coração aberto. E que as suas palavras sejam de otimismo.",
  "Seja sempre otimista! Que você encontre o ouro em todas as situações.",
  "Eu procuro milagres em minha vida. Eu encontro milagres em minha vida!",
  "Você nunca está só. Saiba que existe Algo Maior que você, operando.",
  "Você nunca está só! Descanse na sabedoria de que tudo está BEM!",
  "O poder de pensar como você deseja pensar é o único sobre o qual você tem poder absoluto!",
  "Se deseja algo, cultive um desejo ardente e trabalhe as suas emoções. E assim inicia-se uma manifestação.",
  "A sua alma sempre sabe o caminho perfeito para cada necessidade.",
  "Você sempre tem escolha. A sua vida é criada a partir das suas escolhas.",
  "Resgate o seu poder e crie a sua realidade de maneira consciente.",
  "Tudo o que a mente do homem pode conceber, ela pode realizar!",
  "Na dúvida, ouça o seu coração! Ele nunca erra!",
  "O pensamento é um sinal. A emoção magnetiza. Os dois juntos criam a sua realidade.",
  "Se você está reativo(a), você está vivendo sem escolhas. Relaxe os seus pensamentos e emoções e crie a sua realidade.",
  "Quanto mais alinhado(a) você estiver, mais as coisas vão fluir e cada vez mais você vai se sentir BEM!",
  "Onde está a sua atenção, está a sua energia!",
  "O medo trava! Aprenda a respirar corretamente e a liberar suas emoções.",
  "Lembre-se de honrar mais os seus sonhos e menos os seus medos!",
  "Você nunca está só! Entregue, confie, aceite e agradeça sempre!",
  "Não rotule nem conclua tudo de imediato. Assim você vai limitar as suas ações. Deixe fluir...",
  "Ouça, respeite e aceite as suas emoções. Todas têm o seu valor."
];


document.getElementById("botaoGerar").addEventListener("click", function () {
    gerarFrase();
    criarFogosDeArtificio();
});

function criarFogosDeArtificio() {
    const fogosContainer = document.getElementById("fogosContainer");

    fogosContainer.innerHTML = "";

    // Ajuste o número de fogos (aumente ou diminua conforme necessário)
    const numeroFogos = 50;

    for (let i = 0; i < numeroFogos; i++) {
        const fogo = document.createElement("div");
        fogo.className = "fogo";
        fogosContainer.appendChild(fogo);

        animarFogo(fogo);
    }

    // Aumentando o tempo para 15 segundos
    setTimeout(function () {
        fogosContainer.innerHTML = "";
    }, 10000);
}

function animarFogo(fogo) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const xPos = Math.random() * screenWidth;
    const yPos = Math.random() * screenHeight;

    const color = getRandomColor();

    fogo.style.left = xPos + "px";
    fogo.style.top = yPos + "px";
    fogo.style.backgroundColor = color;

    // Tempo total da animação dos fogos
    const animationTime = 10000;

    // Ajuste a opacidade para piscar
    fogo.style.animation = `fogoAnimation ${animationTime / 2}ms linear infinite`;

    setTimeout(function () {
        fogo.parentNode.removeChild(fogo);
    }, animationTime);
}

function gerarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frasesNatal.length);
    const fraseGerada = frasesNatal[indiceAleatorio];
    const fraseElement = document.getElementById("fraseGerada");
    const botaoElement = document.getElementById("botaoGerar");
    const containerElement = document.querySelector(".container");
    const h1Element = document.querySelector("h1");

    fraseElement.textContent = fraseGerada;

    // Aplicar estilo ao parágrafo
    fraseElement.style.fontSize = "2rem";
    fraseElement.style.fontWeight = "bold";
    fraseElement.style.color = "#ffffff";

    // Aplicar estilo ao botão
    botaoElement.style.display = "none";

    // Aplicar estilo ao contêiner para mover para o canto direito
    containerElement.style.textAlign = "right";
    containerElement.style.marginRight = "20px"; // Ajuste conforme necessário

    // Aplicar estilo ao título (h1) para mover para a direita
    h1Element.style.marginRight = "20px"; // Ajuste conforme necessário

    setTimeout(() => {
        botaoElement.style.display = "block";
    }, 10000);

    setTimeout(() => {
        fraseElement.textContent = "";
    }, 10000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
