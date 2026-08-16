/* =========================================================
   Ashling — utilidades compartilhadas: nav, busca, modal, chips
   ========================================================= */

function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  const page = document.body.dataset.page;
  document.querySelectorAll('.navlinks a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
}

function chipEl(text, cls){
  const s = document.createElement('span');
  s.className = 'chip' + (cls ? ' ' + cls : '');
  s.textContent = text;
  return s;
}

function el(tag, cls, text){
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

/* Simple overlay/modal controller, reused by pages that need a detail view */
function makeModal(){
  const overlay = el('div', 'overlay');
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Fechar">&times;</button>
      <div class="modal-content"></div>
    </div>`;
  document.body.appendChild(overlay);
  const content = overlay.querySelector('.modal-content');
  const close = () => overlay.classList.remove('open');
  overlay.querySelector('.modal-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  return {
    open(renderFn){
      content.innerHTML = '';
      renderFn(content);
      overlay.classList.add('open');
      overlay.scrollTop = 0;
    },
    close
  };
}

function factsheetRow(label, value){
  if (!value) return '';
  return `<div><b>${label}</b><span>${value}</span></div>`;
}

function copyToClipboard(text, btn){
  navigator.clipboard.writeText(text).then(() => {
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = 'Copiado!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1400);
  }).catch(() => {
    if (btn) { btn.textContent = 'Selecione e copie'; }
  });
}

document.addEventListener('DOMContentLoaded', initNav);
