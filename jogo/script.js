let pontos = 0;
let xp = 0;
let nivel = 1;

const pontosEl = document.getElementById('pontos');
const xpEl = document.getElementById('xp');
const nivelEl = document.getElementById('nivel');
const logEl = document.getElementById('log');

function realizarTarefa(tarefa, pontosGanhos, xpGanho) {
  pontos += pontosGanhos;
  xp += xpGanho;
  log(`Você completou "${tarefa}" e ganhou ${pontosGanhos} pontos e ${xpGanho} XP.`);

  if (xp >= nivel * 100) {
    xp -= nivel * 100;
    nivel++;
    log(`🎉 Parabéns! Você subiu para o nível ${nivel}!`);
  }

  atualizarStatus();
}

function atualizarStatus() {
  pontosEl.textContent = pontos;
  xpEl.textContent = xp;
  nivelEl.textContent = nivel;
}

function log(mensagem) {
  logEl.innerHTML = `<p>${mensagem}</p>` + logEl.innerHTML;
}
