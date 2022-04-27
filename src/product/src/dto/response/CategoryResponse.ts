import { CategoryModel } from '../../model/CategoryModel'
import { ProductItemResponseDTO } from './ProductItemResponseDTO'

export class CategoryResponseDTO {
  categoria: string;
  imoveis: ProductItemResponseDTO[];

  constructor(data: CategoryModel) {
    this.categoria = data.name;
    this.imoveis = data.product.map((item) => new ProductItemResponseDTO(item));
  }
}
