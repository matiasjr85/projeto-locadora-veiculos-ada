class Veiculo {
    placa: string;
    modelo: string;
    alugado: boolean;
  
    constructor(placa: string, modelo: string) {
      this.placa = placa;
      this.modelo = modelo;
      this.alugado = false;
    }
  }
  
  export default Veiculo;