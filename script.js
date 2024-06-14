function atualizarNome() {
    const nome = document.getElementById('nome').value.trim();
    const nivel = parseInt(document.getElementById('nivel').value);
    let nomeAtualizado = nome;
    if (nivel <= 5) {
        nomeAtualizado += " [INICIANTE]";
    } else {
        nomeAtualizado += " [VETERANO]";
    }
    document.getElementById('nomeAtualizado').value = nomeAtualizado;
}

function atualizarPoderAtaque() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const forca = parseInt(document.getElementById('forca').value);
    const poderAtaque = (forca - 10) / 2 + nivel / 2;
    document.getElementById('poderAtaque').value = poderAtaque.toFixed(2);
}

function atualizarPoderMagico() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const inteligencia = parseInt(document.getElementById('inteligencia').value);
    const poderMagico = (inteligencia - 10) / 2 + nivel / 2;
    document.getElementById('poderMagico').value = poderMagico.toFixed(2);
}

function atualizarDefesa() {
    const agilidade = parseInt(document.getElementById('agilidade').value);
    const armadura = parseInt(document.getElementById('armadura').value);
    const defesa = agilidade + armadura;
    document.getElementById('defesa').value = defesa;
}

function atualizarVida() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const constituicao = parseInt(document.getElementById('constituicao').value);
    const vida = constituicao * nivel;
    document.getElementById('vida').value = vida;
}

function atualizarMana() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const inteligencia = parseInt(document.getElementById('inteligencia').value);
    const sabedoria = parseInt(document.getElementById('sabedoria').value);
    const mana = (inteligencia + sabedoria) * nivel;
    document.getElementById('mana').value = mana;
}

function rolarDados() {
    function rolarD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    const forca = rolarD20() + rolarD20();
    const agilidade = rolarD20() + rolarD20();
    const armadura = rolarD20() + rolarD20();
    const inteligencia = rolarD20() + rolarD20();
    const sabedoria = rolarD20() + rolarD20();
    const constituicao = rolarD20() + rolarD20();

    document.getElementById('forca').value = forca;
    document.getElementById('agilidade').value = agilidade;
    document.getElementById('armadura').value = armadura;
    document.getElementById('inteligencia').value = inteligencia;
    document.getElementById('sabedoria').value = sabedoria;
    document.getElementById('constituicao').value = constituicao;

    atualizarAtributos();
}

function atualizarAtributos() {
    atualizarPoderAtaque();
    atualizarPoderMagico();
    atualizarDefesa();
    atualizarVida();
    atualizarMana();
}

atualizarNome();
atualizarAtributos();
