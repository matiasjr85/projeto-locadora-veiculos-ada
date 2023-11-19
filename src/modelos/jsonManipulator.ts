const fs = require('fs');
import Veiculo from './Veiculo';
import Cliente from './Cliente';

class JsonManipulator {
  static lerDados(): { veiculos: Veiculo[]; clientes: Cliente[] } {
    const data = fs.readFileSync('dados.json', 'utf-8');
    return JSON.parse(data) as { veiculos: Veiculo[]; clientes: Cliente[] };
  }
}

export default JsonManipulator;