export class Tarefa {

  //? indica que o parametro é opcional
  constructor(
    public id ?: number,
    public nome?: string,
    public concluida?: boolean
  ) {
  }
}
