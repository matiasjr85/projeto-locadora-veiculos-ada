const promptSync = require("prompt-sync")();
import Veiculo from './modelos/Veiculo';
import Locadora from './modelos/Locadora';
const locadora = new Locadora();


function cadastrarVeiculo() {
    const placa: string | null = promptSync('Digite a placa do veículo: ');
    const modelo: string | null = promptSync('Digite o modelo do veículo: ');

    if (placa && modelo) {
        const novoVeiculo = new Veiculo(placa, modelo);
        locadora.cadastrarVeiculo(novoVeiculo);
    } else {
        console.log('Placa e modelo são obrigatórios.');
    }
}

function listarVeiculos() {
    locadora.listarVeiculos();
}


function menu() {
    let opcao: number;
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
                cadastrarVeiculo();
                break;
            case 2:
                // Alugar veículo();
                break;
            case 3:
                // Devolver veículo();
                break;
            case 4:                
                listarVeiculos();
                break;
            case 5:
                // Listar veículos alugados();
                break;
            case 6:
                // reiniciarPrograma();
                break;
            case 7:
                console.log("Projeto desenvolvido por:");
                console.log("Edmilson Matias, Jobson Andreson, Rodrigo Willians, Mateus Lannes");
                console.log('\nFinalizando a aplicação.');
                process.exit();
                break;
            default:
                console.log('\nOpção Inválida. Digite o número de uma das opções da lista.');
        }
    }
  }

  menu();