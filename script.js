
    const frasesNatal = [
    "Que o espírito natalino traga alegria e felicidade para o seu lar.",
    "Neste Natal, desejo paz, amor e prosperidade para todos.",
    "Que a magia do Natal ilumine o seu caminho com esperança e bondade.",
    "Feliz Natal! Que os dias vindouros sejam repletos de realizações.",
    "Desejo a você e sua família um Natal cheio de amor e união.",
    "Que a luz do Natal brilhe em cada coração, trazendo harmonia e compaixão.",
    "Natal é tempo de compartilhar sorrisos e cultivar boas lembranças.",
    "Que o verdadeiro significado do Natal esteja presente em cada gesto de gentileza.",
    "Neste Natal, celebre a vida, a gratidão e o amor ao próximo.",
    "Que a magia desta época encante seus dias e renove suas energias.",
    "Feliz Natal! Que a fé e a esperança guiem seus passos no próximo ano.",
    "Que a doçura das tradições natalinas preencha seu coração de alegria.",
    "Natal é tempo de reflexão e gratidão pelas bênçãos recebidas.",
    "Que a alegria do Natal esteja presente em cada abraço e sorriso compartilhado.",
    "Neste Natal, desejo que todos os seus sonhos se realizem.",
    "Que a magia desta noite especial perdure durante todo o ano novo.",
    "Feliz Natal! Que a paz e a felicidade sejam constantes em sua vida.",
    "Que a solidariedade e a generosidade se multipliquem nesta época de Natal.",
    "Natal é tempo de renovar a esperança e fortalecer os laços de amizade.",
    "Que a magia natalina contagie a todos com amor e compaixão.",
    "Desejo um Natal cheio de luz e serenidade para você e sua família.",
    "Que os sentimentos nobres do Natal estejam presentes em cada coração.",
    "Natal é época de celebrar a vida e agradecer pelas dádivas recebidas.",
    "Que a harmonia do Natal transforme seus dias em momentos inesquecíveis.",
    "Feliz Natal! Que o espírito fraterno prevaleça em todos os lares.",
    "Que o Natal traga consigo a renovação da esperança e alegria de viver.",
    "Neste Natal, que a paz interior seja seu presente mais precioso.",
    "Que a magia natalina transforme seus sonhos em realidade.",
    "Feliz Natal! Que a felicidade esteja sempre ao seu lado.",
    "Que a generosidade do Natal se estenda por todo o ano vindouro.",
    "Natal é tempo de celebrar a vida e compartilhar momentos especiais.",
    "Que o brilho das luzes natalinas ilumine seus dias com amor e felicidade.",
    "Desejo um Natal repleto de momentos felizes e memoráveis.",
    "Que a fé e a esperança guiem seus passos no novo ano que se inicia.",
    "Natal é a época perfeita para cultivar o amor e a gratidão.",
    "Que o Natal seja um período de renovação e conquistas para todos.",
    "Que a magia desta noite encantada aqueça seus dias com carinho e paz.",
    "Neste Natal, que a compaixão e a solidariedade prevaleçam em cada gesto.",
    "Feliz Natal! Que a beleza dessa festa ilumine seu coração.",
    "Que a alegria do Natal se estenda por todos os dias do novo ano.",
    "Natal é tempo de reunir a família, celebrar a vida e agradecer.",
    "Que a luz divina do Natal guie seus passos rumo à felicidade plena.",
    "Que a magia do Natal transforme seus sonhos em realidade palpável.",
    "Feliz Natal! Que cada momento seja marcado por amor e harmonia.",
    "Natal é a época de compartilhar sorrisos e fortalecer laços afetivos.",
    "Que a paz e a esperança do Natal estejam presentes em sua jornada.",
    "Neste Natal, que a gratidão ilumine seus dias com muita alegria.",
    "Que a magia natalina renove suas energias e inspire novas conquistas.",
    "Feliz Natal! Que a felicidade seja constante em sua vida.",
    "Que a magia do Natal envolva você em um abraço caloroso de amor.",
    "Natal é tempo de espalhar alegria e cultivar bons sentimentos."

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

    <h2>fraseElement.textContent = fraseGerada;</h2>

    botaoElement.style.display = "none";

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
