import { ProductModel } from '../../model/ProductModel'
import { ProductItemResponseDTO } from './ProductItemResponseDTO'

export class ProductResponseDTO {
  categoria: string;
  imoveis: ProductItemResponseDTO[];

  constructor(data: ProductModel[]) {
    this.categoria = 'casa';
    this.imoveis = data.map((product) => new ProductItemResponseDTO(product));
  }
}
