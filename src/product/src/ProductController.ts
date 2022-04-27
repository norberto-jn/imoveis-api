import { Controller, Get, Param } from '@nestjs/common'
import { ProductResponseDTO } from './dto/response/ProductResponseDTO'
import { ProductManager } from './service/ProductManager'

@Controller('product')
export class ProductController {
  constructor(private readonly productManager: ProductManager) {}

  @Get()
  async sarch() {
    return new ProductResponseDTO(await this.productManager.sarch())
  }

  @Get(':code')
  async findOne(@Param('code') code: number) {
    return await this.productManager.findOne(code)
  }

  async save() {}

  async update() {}

  async delete(): Promise<void> {}
}
