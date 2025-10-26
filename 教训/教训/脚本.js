document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("conteudo");
    const categoriaButtons = document.querySelectorAll(".tab-button");
    const modoButtons = document.querySelectorAll(".mode-button");

    let categoriaAtiva = "transportes";
    let modoAtivo = "flashcards";

    function renderizarConteudo() {
        main.innerHTML = "";

        const poucasPalavras = vocabulario[categoriaAtiva].length < 4;
        modoButtons.forEach(btn => {
            if (btn.dataset.mode !== 'flashcards') {
                btn.disabled = poucasPalavras;
                if (poucasPalavras) {
                    btn.title = "Essa categoria precisa de mais 4 palavras para jogos.";
                } else {
                    btn.title = "";
                }
            }
        });

        if (poucasPalavras && modoAtivo !== 'flashcards') {
            modoAtivo = 'flashcards';
            document.querySelector('.mode-button.active').classList.remove('active');
            document.querySelector('.mode-button[data-mode="flashcards"]').classList.add('active');
        }

        switch (modoAtivo) {
            case 'flashcards':
                mostrarFlashcards(categoriaAtiva);
                break;
            case 'quiz-mc':
                iniciarQuizMC(categoriaAtiva);
                break;
            case 'quiz-audio':
                iniciarQuizAudio(categoriaAtiva);
                break;
            case 'memoria':
                iniciarJogoMemoria(categoriaAtiva);
                break;
        }
    }

    categoriaButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoriaButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            categoriaAtiva = btn.dataset.tab;
            renderizarConteudo();
        });
    });

    modoButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            modoButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            modoAtivo = btn.dataset.mode;
            renderizarConteudo();
        });
    });

    function criarFlashcardHtml(item) {
        const imagemHtml = item.imagem ? `<img src="图片/${item.imagem}" alt="${item.significado}" />` : '';

        return `
        <div class="flashcard">
          <div class="flashcard-front">
            <h3>${item.caractere}</h3>
            <p>${item.pinyin}</p>
            <button onclick="event.stopPropagation(); tocarAudio('${item.audio}')">🔊 Ouvir</button>
          </div>
          <div class="flashcard-back">
            ${imagemHtml}
            <p class="significado">${item.significado}</p>
          </div>
        </div>
      `;
    }

    function mostrarFlashcards(categoria) {
        const container = document.createElement("div");
        container.className = "main-container";

        if (categorias_meta[categoria]) {
            const meta = categorias_meta[categoria];
            const cardMeta = document.createElement("div");
            cardMeta.className = "flashcard-container categoria-titulo";
            cardMeta.innerHTML = `
          <div class="flashcard" style="transform: none;"> 
            <div class="flashcard-front">
              ${meta.imagem ? `<img src="图片/${meta.imagem}" alt="${meta.caractere}" style="width:70px; height:70px;" />` : ''}
              <h3>${meta.caractere}</h3>
              <p>${meta.pinyin}</p>
              <p style="font-size: 1.2em; font-weight: bold;">${meta.significado}</p>
              <button onclick="event.stopPropagation(); tocarAudio('${meta.audio}')">🔊 Ouvir</button>
            </div>
          </div>
        `;
            container.appendChild(cardMeta);

            const separador = document.createElement('div');
            separador.style.width = '90%';
            separador.style.height = '0';
            separador.style.margin = '2em 0 1.5em';
            separador.style.borderBottom = '2px dashed #ddd';
            separador.style.flexBasis = '100%';
            container.appendChild(separador);
        }

        const palavras = vocabulario[categoria];
        palavras.forEach(item => {
            const cardContainer = document.createElement("div");
            cardContainer.className = "flashcard-container";
            cardContainer.innerHTML = criarFlashcardHtml(item);

            // Adiciona listener para virar o card
            cardContainer.addEventListener('click', (e) => {
                // Não vira se o clique foi no botão
                if (e.target.tagName.toLowerCase() === 'button') {
                    return;
                }
                e.currentTarget.querySelector('.flashcard').classList.toggle('is-flipped');
            });

            container.appendChild(cardContainer);
        });
        main.appendChild(container);
    }

    let quizPalavras = [];
    let quizIndex = 0;
    let quizScore = 0;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function finalizarQuiz(categoria, score, total) {
        main.innerHTML = `
        <div class="quiz-container">
          <h2>Quiz Concluído!</h2>
          <p class="quiz-score">Sua pontuação final: ${score} de ${total}</p>
          <button id="quiz-voltar-btn" class="mode-button active" style="background: #2ecc71; color: white; border-color: #2ecc71;">Voltar aos Flashcards</button>
        </div>
      `;
        document.getElementById('quiz-voltar-btn').addEventListener('click', () => {
            modoAtivo = 'flashcards';
            document.querySelector('.mode-button.active').classList.remove('active');
            document.querySelector('.mode-button[data-mode="flashcards"]').classList.add('active');
            renderizarConteudo();
        });
    }

    function iniciarQuizMC(categoria) {
        quizPalavras = shuffleArray([...vocabulario[categoria]]);
        quizIndex = 0;
        quizScore = 0;
        main.innerHTML = '<div class="quiz-container"></div>';
        mostrarProximaPerguntaMC(categoria);
    }

    function mostrarProximaPerguntaMC(categoria) {
        const quizContainer = main.querySelector(".quiz-container");
        if (quizIndex >= quizPalavras.length) {
            finalizarQuiz(categoria, quizScore, quizPalavras.length);
            return;
        }

        const itemCorreto = quizPalavras[quizIndex];
        const opcoes = gerarOpcoesMC(itemCorreto, vocabulario[categoria]);

        let opcoesHtml = '';
        opcoes.forEach(opcao => {
            opcoesHtml += `<button class="quiz-opcao" data-caractere="${opcao.caractere}">
          ${opcao.caractere} <span style="font-size: 0.8em; color: #555;">(${opcao.pinyin})</span>
        </button>`;
        });

        quizContainer.innerHTML = `
        <p class="quiz-score">Pontuação: ${quizScore} / ${quizPalavras.length} | Pergunta ${quizIndex + 1}</p>
        <h3 class="quiz-pergunta">Qual é a palavra para: <span>"${itemCorreto.significado}"</span>?</h3>
        <div class="quiz-opcoes">${opcoesHtml}</div>
        <div class="quiz-feedback"></div>
      `;

        quizContainer.querySelectorAll('.quiz-opcao').forEach(button => {
            button.addEventListener('click', (e) => {
                checarRespostaMC(e.currentTarget, itemCorreto.caractere, categoria);
            });
        });
    }

    function gerarOpcoesMC(itemCorreto, todasPalavras) {
        let opcoes = [itemCorreto];
        let palavrasErradas = todasPalavras.filter(p => p.caractere !== itemCorreto.caractere);
        shuffleArray(palavrasErradas);
        for (let i = 0; i < 3 && i < palavrasErradas.length; i++) {
            opcoes.push(palavrasErradas[i]);
        }
        return shuffleArray(opcoes);
    }

    function checarRespostaMC(botaoSelecionado, caractereCorreto, categoria) {
        const feedbackEl = main.querySelector(".quiz-feedback");
        const botoes = main.querySelectorAll('.quiz-opcao');
        botoes.forEach(b => b.disabled = true);

        const selecionado = botaoSelecionado.dataset.caractere;
        const itemCorreto = quizPalavras[quizIndex];

        if (selecionado === caractereCorreto) {
            quizScore++;
            botaoSelecionado.classList.add('correto');
            feedbackEl.innerHTML = `✅ Correto! <strong>${itemCorreto.caractere}</strong> (${itemCorreto.pinyin})`;
            feedbackEl.className = 'quiz-feedback correto';
            tocarAudio(itemCorreto.audio);
        } else {
            botaoSelecionado.classList.add('incorreto');
            feedbackEl.innerHTML = `❌ Incorreto. A resposta era: <strong>${itemCorreto.caractere}</strong> (${itemCorreto.pinyin}).`;
            feedbackEl.className = 'quiz-feedback incorreto';
            const botaoCorreto = main.querySelector(`.quiz-opcao[data-caractere="${caractereCorreto}"]`);
            if (botaoCorreto) {
                botaoCorreto.classList.add('correto');
            }
        }
        quizIndex++;
        setTimeout(() => mostrarProximaPerguntaMC(categoria), 2500);
    }

    function iniciarQuizAudio(categoria) {
        quizPalavras = shuffleArray([...vocabulario[categoria]]);
        quizIndex = 0;
        quizScore = 0;
        main.innerHTML = '<div class="quiz-container"></div>';
        mostrarProximaPerguntaAudio(categoria);
    }

    function mostrarProximaPerguntaAudio(categoria) {
        const quizContainer = main.querySelector(".quiz-container");
        if (quizIndex >= quizPalavras.length) {
            finalizarQuiz(categoria, quizScore, quizPalavras.length);
            return;
        }

        const itemCorreto = quizPalavras[quizIndex];
        const opcoes = gerarOpcoesAudio(itemCorreto, vocabulario[categoria]);

        tocarAudio(itemCorreto.audio);

        let opcoesHtml = '';
        opcoes.forEach(opcao => {
            opcoesHtml += `<button class="quiz-opcao" data-significado="${opcao.significado}">
          ${opcao.significado}
        </button>`;
        });

        quizContainer.innerHTML = `
        <p class="quiz-score">Pontuação: ${quizScore} / ${quizPalavras.length} | Pergunta ${quizIndex + 1}</p>
        <h3 class="quiz-pergunta">Qual palavra você ouviu?</h3>
        <button class="quiz-audio-button" onclick="tocarAudio('${itemCorreto.audio}')">🎧</button>
        <div class="quiz-opcoes">${opcoesHtml}</div>
        <div class="quiz-feedback"></div>
      `;

        quizContainer.querySelectorAll('.quiz-opcao').forEach(button => {
            button.addEventListener('click', (e) => {
                checarRespostaAudio(e.currentTarget, itemCorreto.significado, categoria);
            });
        });
    }

    function gerarOpcoesAudio(itemCorreto, todasPalavras) {
        let opcoes = [itemCorreto];
        let palavrasErradas = todasPalavras.filter(p => p.significado !== itemCorreto.significado);
        shuffleArray(palavrasErradas);
        for (let i = 0; i < 3 && i < palavrasErradas.length; i++) {
            opcoes.push(palavrasErradas[i]);
        }
        return shuffleArray(opcoes);
    }

    function checarRespostaAudio(botaoSelecionado, significadoCorreto, categoria) {
        const feedbackEl = main.querySelector(".quiz-feedback");
        const botoes = main.querySelectorAll('.quiz-opcao');
        botoes.forEach(b => b.disabled = true);

        const selecionado = botaoSelecionado.dataset.significado;
        const itemCorreto = quizPalavras[quizIndex];

        if (selecionado === significadoCorreto) {
            quizScore++;
            botaoSelecionado.classList.add('correto');
            feedbackEl.innerHTML = `✅ Correto! Era <strong>${itemCorreto.significado}</strong> (${itemCorreto.caractere}).`;
            feedbackEl.className = 'quiz-feedback correto';
        } else {
            botaoSelecionado.classList.add('incorreto');
            feedbackEl.innerHTML = `❌ Incorreto. A resposta era: <strong>${itemCorreto.significado}</strong> (${itemCorreto.caractere}).`;
            feedbackEl.className = 'quiz-feedback incorreto';
            const botaoCorreto = main.querySelector(`.quiz-opcao[data-significado="${significadoCorreto}"]`);
            if (botaoCorreto) {
                botaoCorreto.classList.add('correto');
            }
        }
        quizIndex++;
        setTimeout(() => mostrarProximaPerguntaAudio(categoria), 2500);
    }

    function iniciarJogoMemoria(categoria) {
        let palavras = shuffleArray([...vocabulario[categoria]]);
        let pares = palavras.slice(0, 8);

        let cartas = [];
        pares.forEach(item => {
            cartas.push({ tipo: 'caractere', valor: item.caractere, parId: item.caractere });
            cartas.push({ tipo: 'significado', valor: item.significado, parId: item.caractere });
        });
        shuffleArray(cartas);

        const board = document.createElement('div');
        board.className = 'memoria-board';
        main.appendChild(board);

        cartas.forEach(carta => {
            const cardEl = document.createElement('div');
            cardEl.className = 'memoria-card';
            cardEl.dataset.parId = carta.parId;
            cardEl.dataset.tipo = carta.tipo;

            cardEl.innerHTML = `
          <div class="memoria-card-inner">
            <div class="memoria-front">?</div>
            <div class="memoria-back">${carta.valor}</div>
          </div>
        `;
            board.appendChild(cardEl);
        });

        let primeiraCarta = null;
        let segundaCarta = null;
        let lockBoard = false;
        let paresEncontrados = 0;
        let totalPares = pares.length;

        board.querySelectorAll('.memoria-card').forEach(card => {
            card.addEventListener('click', () => {
                if (lockBoard || card.classList.contains('is-flipped') || card.classList.contains('is-matched')) {
                    return;
                }

                if (card === primeiraCarta) {
                    return;
                }

                card.classList.add('is-flipped');

                if (!primeiraCarta) {
                    primeiraCarta = card;
                    return;
                }

                segundaCarta = card;
                lockBoard = true;

                if (primeiraCarta.dataset.parId === segundaCarta.dataset.parId) {
                    paresEncontrados++;
                    primeiraCarta.classList.add('is-matched');
                    segundaCarta.classList.add('is-matched');
                    resetarTurno();

                    if (paresEncontrados === totalPares) {
                        setTimeout(() => {
                            const vitoriaDiv = document.createElement('div');
                            vitoriaDiv.className = 'quiz-container';
                            vitoriaDiv.innerHTML = `<h2>Você venceu!</h2><p>Parabéns, você encontrou todos os ${totalPares} pares!</p>`;
                            main.prepend(vitoriaDiv);
                        }, 1000);
                    }
                } else {
                    setTimeout(() => {
                        primeiraCarta.classList.remove('is-flipped');
                        segundaCarta.classList.remove('is-flipped');
                        resetarTurno();
                    }, 1200);
                }
            });
        });

        function resetarTurno() {
            [primeiraCarta, segundaCarta, lockBoard] = [null, null, false];
        }
    }

    renderizarConteudo();
});

function tocarAudio(nome) {
    if (!nome) return;
    const caminhoAudio = nome.includes('/') ? nome : `声音/${nome}`;
    const audio = new Audio(caminhoAudio);
    audio.play().catch(e => console.error("Erro ao tocar áudio:", e));
}
window.tocarAudio = tocarAudio;