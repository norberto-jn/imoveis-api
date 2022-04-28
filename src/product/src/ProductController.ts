import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProductSaveResquestDTO } from './dto/request/ProductSaveResquestDTO'
import { ProductUpdateResquestDTO } from './dto/request/ProductUpdateResquestDTO'
import { ProductItemResponseDTO } from './dto/response/ProductItemResponseDTO'
import { ProductListResponseDTO } from './dto/response/ProductListResponseDTO'
import { ProductManager } from './service/ProductManager'

@Controller('product')
export class ProductController {
    constructor(private readonly productManager: ProductManager) { }

    @Get()
    async sarch(): Promise<ProductListResponseDTO> {
        return new ProductListResponseDTO(await this.productManager.sarch())
    }

    @Get(':code')
    async findOne(@Param('code') code: number): Promise<ProductItemResponseDTO> {
        return new ProductItemResponseDTO(await this.productManager.findOne(code))
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
    async delete(@Param('code') code: number): Promise<void> {
        await this.productManager.delete(code)
    }
}
