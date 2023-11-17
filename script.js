<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: url('https://drive.google.com/uc?id=17EnuEzhXKgLBhdpAVspFzViDUi3uqLXi') center/cover no-repeat;
        }

        .container {
            text-align: center;
        }

        button {
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            display: block;
            transition: margin 0.5s ease;
        }

        /* Estilos para a animação de neve */
        .snowflake {
            position: absolute;
            color: #fff;
            font-size: 20px;
            line-height: 1;
            display: block;
            opacity: 0;
            animation: fall linear infinite;
        }

        @keyframes fall {
            0% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <button id="botaoGerar" onclick="gerarFrase()">Gerar Frase</button>
        <p id="fraseGerada"></p>
    </div>

    <script>
        const frasesNatal = [
            // ... (suas frases de Natal)
        ];

        function gerarFrase() {
            const indiceAleatorio = Math.floor(Math.random() * frasesNatal.length);
            const fraseGerada = frasesNatal[indiceAleatorio];
            const fraseElement = document.getElementById("fraseGerada");
            const botaoElement = document.getElementById("botaoGerar");

            // Exibe a frase gerada
            fraseElement.textContent = fraseGerada;

            // Esconde o botão por 10 segundos
            botaoElement.style.display = "none";

            // Mostra o botão após 10 segundos
            setTimeout(() => {
                botaoElement.style.display = "block";
            }, 10000);

            // Limpa a frase após 13 segundos
            setTimeout(() => {
                fraseElement.textContent = "";
            }, 10000);

            // Adiciona flocos de neve (pode ajustar a quantidade conforme desejado)
            for (let i = 0; i < 5; i++) {
                criarFlocoDeNeve();
            }
        }

        function criarFlocoDeNeve() {
            const flocoDeNeve = document.createElement("div");
            flocoDeNeve.className = "snowflake";
            flocoDeNeve.innerHTML = "❄";
            document.body.appendChild(flocoDeNeve);

            // Posiciona o floco de neve aleatoriamente no topo da tela
            const leftPosition = Math.random() * window.innerWidth;
            flocoDeNeve.style.left = `${leftPosition}px`;

            // Adiciona a animação de queda
            flocoDeNeve.style.animationDuration = `${Math.random() * 5 + 5}s`;

            // Remove o floco de neve após a animação
            flocoDeNeve.addEventListener("animationend", () => {
                document.body.removeChild(flocoDeNeve);
            });
        }
    </script>
</body>
</html>
