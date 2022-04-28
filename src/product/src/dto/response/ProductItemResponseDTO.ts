import { ProductModel } from '../../model/ProductModel'

export class ProductItemResponseDTO {
    code: number
    nome: string
    imagem: string
    whatsapp: string
    valor: number

    constructor(data: ProductModel) {
        this.code = data.code
        this.nome = data.name
        this.imagem = data.image
        this.whatsapp = data.whatsapp
        this.valor = data.value
    }
}
