import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProductSaveResquestDTO } from './dto/request/ProductSaveResquestDTO'
import { ProductUpdateResquestDTO } from './dto/request/ProductUpdateResquestDTO'
import { ProductItemResponseDTO } from './dto/response/ProductItemResponseDTO'
import { ProductResponseDTO } from './dto/response/ProductResponseDTO'
import { ProductManager } from './service/ProductManager'

@Controller('product')
export class ProductController {
    constructor(private readonly productManager: ProductManager) { }

    @Get()
    async sarch() {
        return new ProductResponseDTO(await this.productManager.sarch())
    }

    @Get(':code')
    async findOne(@Param('code') code: number) {
        return await this.productManager.findOne(code)
    }

    @Post()
    async save(@Body() dto: ProductSaveResquestDTO): Promise<ProductItemResponseDTO> {
        return new ProductItemResponseDTO(await this.productManager.save(dto))
    }

    @Put(':code')
    async update(@Param('code') code: number, @Body() dto: ProductUpdateResquestDTO): Promise<ProductItemResponseDTO> {
        return new ProductItemResponseDTO(await this.productManager.update(code, dto))
    }

    @Delete(':code')
    async delete(): Promise<void> { }
}
