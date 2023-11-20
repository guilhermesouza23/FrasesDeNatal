const frasesNatal = [
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frases de Natal</title>
</head>
<body>

    <h2>Que o espírito natalino traga alegria e felicidade para o seu lar.</h2>
    <h2>Neste Natal, desejo paz, amor e prosperidade para todos.</h2>
    <h2>Que a magia do Natal ilumine o seu caminho com esperança e bondade.</h2>
    <h2>Feliz Natal! Que os dias vindouros sejam repletos de realizações.</h2>
    <h2>Desejo a você e sua família um Natal cheio de amor e união.</h2>
    <h2>Que a luz do Natal brilhe em cada coração, trazendo harmonia e compaixão.</h2>
    <h2>Natal é tempo de compartilhar sorrisos e cultivar boas lembranças.</h2>
    <h2>Que o verdadeiro significado do Natal esteja presente em cada gesto de gentileza.</h2>
    <h2>Neste Natal, celebre a vida, a gratidão e o amor ao próximo.</h2>
    <h2>Que a magia desta época encante seus dias e renove suas energias.</h2>
    <h2>Feliz Natal! Que a fé e a esperança guiem seus passos no próximo ano.</h2>
    <h2>Que a doçura das tradições natalinas preencha seu coração de alegria.</h2>
    <h2>Natal é tempo de reflexão e gratidão pelas bênçãos recebidas.</h2>
    <h2>Que a alegria do Natal esteja presente em cada abraço e sorriso compartilhado.</h2>
    <h2>Neste Natal, desejo que todos os seus sonhos se realizem.</h2>
    <h2>Que a magia desta noite especial perdure durante todo o ano novo.</h2>
    <h2>Feliz Natal! Que a paz e a felicidade sejam constantes em sua vida.</h2>
    <h2>Que a solidariedade e a generosidade se multipliquem nesta época de Natal.</h2>
    <h2>Natal é tempo de renovar a esperança e fortalecer os laços de amizade.</h2>
    <h2>Que a magia natalina contagie a todos com amor e compaixão.</h2>
    <h2>Desejo um Natal cheio de luz e serenidade para você e sua família.</h2>
    <h2>Que os sentimentos nobres do Natal estejam presentes em cada coração.</h2>
    <h2>Natal é época de celebrar a vida e agradecer pelas dádivas recebidas.</h2>
    <h2>Que a harmonia do Natal transforme seus dias em momentos inesquecíveis.</h2>
    <h2>Feliz Natal! Que o espírito fraterno prevaleça em todos os lares.</h2>
    <h2>Que o Natal traga consigo a renovação da esperança e alegria de viver.</h2>
    <h2>Neste Natal, que a paz interior seja seu presente mais precioso.</h2>
    <h2>Que a magia natalina transforme seus sonhos em realidade.</h2>
    <h2>Feliz Natal! Que a felicidade esteja sempre ao seu lado.</h2>
    <h2>Que a generosidade do Natal se estenda por todo o ano vindouro.</h2>
    <h2>Natal é tempo de celebrar a vida e compartilhar momentos especiais.</h2>
    <h2>Que o brilho das luzes natalinas ilumine seus dias com amor e felicidade.</h2>
    <h2>Desejo um Natal repleto de momentos felizes e memoráveis.</h2>
    <h2>Que a fé e a esperança guiem seus passos no novo ano que se inicia.</h2>
    <h2>Natal é a época perfeita para cultivar o amor e a gratidão.</h2>
    <h2>Que o Natal seja um período de renovação e conquistas para todos.</h2>
    <h2>Que a magia desta noite encantada aqueça seus dias com carinho e paz.</h2>
    <h2>Neste Natal, que a compaixão e a solidariedade prevaleçam em cada gesto.</h2>
    <h2>Feliz Natal! Que a beleza dessa festa ilumine seu coração.</h2>
    <h2>Que a alegria do Natal se estenda por todos os dias do novo ano.</h2>
    <h2>Natal é tempo de reunir a família, celebrar a vida e agradecer.</h2>
    <h2>Que a luz divina do Natal guie seus passos rumo à felicidade plena.</h2>
    <h2>Que a magia do Natal transforme seus sonhos em realidade palpável.</h2>
    <h2>Feliz Natal! Que cada momento seja marcado por amor e harmonia.</h2>
    <h2>Natal é a época de compartilhar sorrisos e fortalecer laços afetivos.</h2>
    <h2>Que a paz e a esperança do Natal estejam presentes em sua jornada.</h2>
    <h2>Neste Natal, que a gratidão ilumine seus dias com muita alegria.</h2>
    <h2>Que a magia natalina renove suas energias e inspire novas conquistas.</h2>
    <h2>Feliz Natal! Que a felicidade seja constante em sua vida.</h2>
    <h2>Que a magia do Natal envolva você em um abraço caloroso de amor.</h2>
    <h2>Natal é tempo de espalhar alegria e cultivar bons sentimentos.</h2>

</body>
</html>


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

    fraseElement.textContent = fraseGerada;

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
