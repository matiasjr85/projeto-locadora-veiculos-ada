const fs = require('fs');
import Veiculo from './Veiculo';
import Cliente from './Cliente';

class Locadora {
  veiculos: Veiculo[];
  clientes: Cliente[];

  constructor() {
    this.veiculos = [];
    this.clientes = [];
  }

  cadastrarVeiculo(veiculo: Veiculo) {
    if (!this.veiculoComPlacaExistente(veiculo.placa)) {
      this.veiculos.push(veiculo);
      this.salvarDados();
    } else {
      console.log('Veículo com placa já cadastrada.');
    }
  }

  veiculoComPlacaExistente(placa: string): boolean {
    return this.veiculos.some((veiculo) => veiculo.placa === placa);
  }

  listarVeiculos() {
    if (this.veiculos.length === 0) {
      console.log('Nenhum veículo cadastrado.');
    } else {
      console.log('Veículos cadastrados:');
      this.veiculos.forEach((veiculo, index) => {
        console.log(`${index + 1}. Placa: ${veiculo.placa}, Modelo: ${veiculo.modelo}, Alugado: ${veiculo.alugado ? 'Sim' : 'Não'}`);
      });
    }
  }

  private salvarDados() {
    const data = JSON.stringify({ veiculos: this.veiculos, clientes: this.clientes }, null, 2);
    fs.writeFileSync('dados.json', data);
  }
}

export default Locadora;