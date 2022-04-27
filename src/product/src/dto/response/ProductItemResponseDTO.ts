import { ProductModel } from '../../model/ProductModel'

export class ProductItemResponseDTO {
  nome: string;
  imagem: string;
  whatsapp: string;
  valor: number;

  constructor(data: ProductModel) {
    this.nome = data.nome;
    this.imagem = data.imagem;
    this.whatsapp = data.whatsapp;
    this.valor = data.valor;
  }
}
