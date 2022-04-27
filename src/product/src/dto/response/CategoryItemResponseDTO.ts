import { CategoryModel } from '../../model/CategoryModel'
import { ProductItemResponseDTO } from './ProductItemResponseDTO'

export class CategoryItemResponseDTO {
  categoria: string
  imoveis: ProductItemResponseDTO[]

  constructor(data: CategoryModel) {
    this.categoria = data.name
    this.imoveis = data.product.map((item) => new ProductItemResponseDTO(item))
  }
}
