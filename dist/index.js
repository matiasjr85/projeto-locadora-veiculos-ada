"use strict";
const promptSync = require("prompt-sync")();
function menu() {
    let opcao;
    while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1. Cadastrar veículo");
        console.log("2. Alugar veículo");
        console.log("3. Devolver veículo");
        console.log("4. Listar veículos disponiveis");
        console.log("5. Listar veículos alugados");
        console.log("6. Reiniciar programa");
        console.log("7. Sair");
        console.log("");
        opcao = parseInt(promptSync('Digite o número de uma das opções acima: '));
        switch (opcao) {
            case 1:
                // adicionarTarefa();
                break;
            case 2:
                // editarTarefa();
                break;
            case 3:
                // removerTarefa();
                break;
            case 4:
                // listarTarefas();
                break;
            case 5:
                // obterId();
                break;
            case 6:
                // reiniciarPrograma();
                break;
            case 7:
                console.log("Projeto desenvolvido por:");
                console.log("Bruno Lopes, Christiane Barbosa, João Marcos, Marília Oliveira e Patrick Farias");
                console.log('\nFinalizando a aplicação.');
                // sair();
                break;
            default:
                console.log('\nOpção Inválida. Digite o número de uma das opções da lista.');
        }
    }
}
menu();
