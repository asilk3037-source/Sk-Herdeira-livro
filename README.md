# Herdeira das Cinzas — Bíblia da Saga

Site de referência para a saga *Herdeira das Cinzas* (Ashling): fichas de
personagens e feras, sistema de magia, genealogia, povos e lugares, linha do
tempo, cânone cravado, fios abertos, progresso de escrita capítulo a capítulo
e uma galeria de prompts visuais.

Site estático (HTML/CSS/JS puro, sem build), pronto para publicar no GitHub
Pages: basta ativar o Pages apontando para a branch/pasta raiz deste
repositório.

## Estrutura

- `index.html` — painel inicial com panorama da saga
- `personagens.html` — fichas de personagens e feras
- `mundo.html` — magia, genealogia, povos e lugares
- `linha-do-tempo.html` — cronologia e outline por capítulo (Livro 1 e 2)
- `canone.html` — decisões de cânone já fechadas, pesquisáveis
- `fios-abertos.html` — ganchos e pendências ainda não resolvidos
- `progresso.html` — progresso de escrita com contagem de palavras real e
  marcação de revisão (salva no navegador)
- `galeria.html` — prompts de geração de imagem para personagens e lugares
- `assets/js/data.js` — todo o conteúdo estruturado da bíblia da história
- `assets/js/chapters.js` — contagem de palavras e teaser por capítulo,
  gerado a partir dos manuscritos de progresso
- `assets/css/styles.css` — sistema visual (tema escuro de fantasia)

## Como abrir localmente

Basta abrir `index.html` num navegador, ou servir a pasta com qualquer
servidor estático, por exemplo:

```
python3 -m http.server 8000
```
