

export class DispositivoModel {
  usuario;
  modelo;
  mac;

  adicionarDispositivo(usuario, modelo, mac) {
    this.usuario = usuario;
    this.modelo = modelo;
    this.mac = mac;
  }

}
