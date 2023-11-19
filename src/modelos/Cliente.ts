import Veiculo from './Veiculo';

class Cliente {
  nome: string;
  cpf: string;
  tipoCarteira: string;
  veiculoAlugado: Veiculo | null;

  constructor(nome: string, cpf: string, tipoCarteira: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.tipoCarteira = tipoCarteira;
    this.veiculoAlugado = null;
  }
}

export default Cliente;