# 🍫 Mais Um Brigadeiros

## 👤 Informações do Projeto
- **Projeto:** Tela Inicial - Loja Mais Um Brigadeiros
- **Aluno:** Victor Santos
- **Trilha:** Desenvolvimento Front-End (Básico)

---

## 🏪 Sobre a Loja
A **Mais Um Brigadeiros** é um empreendimento próprio do aluno que utilizou do desafio 1 de sua trilha de desenvolvimento mobile para criar uma possível lojinha online de seus doces artesanais. A loja online da Mais Um é focada em entregar a melhor experiência desde o primeiro clique. O layout foi pensado para ser convidativo, utilizando um esquema de cores aconchegante (tons de marrom e bege) e uma navegação simples baseada em uma única página.

### Produtos e Preços
Atualmente, a vitrine destaca três sabores principais:
- **Tradicional:** R$ 3,00
- **Beijinho:** R$ 3,00
- **Coco:** R$ 3,00

---

## 💻 Tecnologias Utilizadas
- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização, Flexbox para alinhamentos e Media Queries para responsividade.
- **JavaScript (Vanilla):** Lógica de simulação de compra usando funções nativas do navegador (`prompt` e `alert`).

### Como Executar
#### Primeira alternativa (baixando o código fonte)
1. Faça o download ou clone este repositório.
2. Certifique-se de que todos os arquivos (HTML, CSS e imagens SVG/PNG) estão na mesma pasta.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão (Google Chrome, Firefox, Safari, etc). Nenhuma instalação adicional é necessária.

#### Segunda alternativa (navegando pelo site hospedado)
- Clique no link abaixo para navegar diretamente até a primeira versão do site da Mais Um Brigadeiros (coloquei o site no ar usando a Vercel).
https://maisumbrigadeiros.vercel.app/
---

## 📸 Tela Inicial
![Captura de Tela da Página Inicial](.assets/tela-inicial.png)

---

## 🧪 Testes Realizados
- **Teste de Responsividade:** A página foi testada utilizando o DevTools do navegador (F12) simulando telas de celulares (ex: iPhone, Galaxy) para garantir que o Flexbox e as regras de `@media (max-width: 938px)` funcionam corretamente.
- **Teste de Lógica (JavaScript):**
  - Inserção de valores numéricos válidos.
  - Inserção de valores nulos (0) ou vazios, verificando se o sistema lida corretamente sem quebrar o cálculo (tratamento de `NaN`).
  - Verificação do cálculo final somando múltiplos itens.

---

## 🧗 Dificuldades e Aprendizados
**Dificuldade:** 
Uma das principais dificuldades iniciais foi o alinhamento de elementos em tela cheia (Hero Section) e a divisão do rodapé em colunas que se adaptassem bem tanto no computador quanto no celular.

**O que aprendi:** 
Aprendi a dominar o uso do **Flexbox** (`display: flex`, `justify-content` e `align-items`). Além disso, entendi na prática como usar a unidade `vh` (Viewport Height) para criar a primeira seção da tela e como as **Media Queries** são essenciais para transformar um layout horizontal em vertical para dispositivos móveis.

---

## 🤖 Uso de Inteligência Artificial
**Como ajudou:** Utilizei a Inteligência Artificial como um "tutor e avaliador de código" para traduzir o meu design feito no Figma para HTML e CSS reais.
**O que foi adaptado:** A IA sugeriu as estruturas base de CSS e JS. Eu adaptei as cores exatas, os elementos, os tamanhos das fontes, a disposição dos botões para combinar perfeitamente com o meu protótipo e ajustei os textos das mensagens e a lógica do JavaScript.
**Como verifiquei:** Após cada sugestão de código (cabeçalho, vitrine, rodapé e lógica JS), eu aplicava no meu arquivo local, salvava, adaptava/melhorava e recarregava a página no navegador para validar se o comportamento visual e interativo correspondia ao esperado.
