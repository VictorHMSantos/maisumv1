function simularCompra() {
    let qtdTradicional = Number(prompt("Quantos brigadeiros Tradicionais (R$ 3,00) você deseja? Digite 0 se não quiser nenhum."));
    let qtdBeijinho = Number(prompt("Quantos brigadeiros de Beijinho (R$ 3,00) você deseja? Digite 0 se não quiser nenhum."));
    let qtdCoco = Number(prompt("Quantos brigadeiros de Coco (R$ 3,00) você deseja? Digite 0 se não quiser nenhum."));

    if (isNaN(qtdTradicional)) qtdTradicional = 0;
    if (isNaN(qtdBeijinho)) qtdBeijinho = 0;
    if (isNaN(qtdCoco)) qtdCoco = 0;

    if (qtdTradicional === 0 && qtdBeijinho === 0 && qtdCoco === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    const preco = 3.00;
    let totalTradicional = qtdTradicional * preco;
    let totalBeijinho = qtdBeijinho * preco;
    let totalCoco = qtdCoco * preco;
    let totalCompra = totalTradicional + totalBeijinho + totalCoco;

    let resumo = "Resumo do seu pedido:\n\n";
        
    if (qtdTradicional > 0) {
        resumo += `- Tradicional: ${qtdTradicional} x R$ ${preco.toFixed(2)} (R$ ${totalTradicional.toFixed(2)})\n`;
    }
    if (qtdBeijinho > 0) {
        resumo += `- Beijinho: ${qtdBeijinho} x R$ ${preco.toFixed(2)} (R$ ${totalBeijinho.toFixed(2)})\n`;
    }
    if (qtdCoco > 0) {
        resumo += `- Coco: ${qtdCoco} x R$ ${preco.toFixed(2)} (R$ ${totalCoco.toFixed(2)})\n`;
    }
        
    resumo += `\nTotal da Compra: R$ ${totalCompra.toFixed(2)}`;

    alert(resumo);
}