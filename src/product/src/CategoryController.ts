import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CategorySaveResquestDTO } from './dto/request/CategorySaveResquestDTO'
import { CategoryItemResponseDTO } from './dto/response/CategoryItemResponseDTO'
import { CategoryListResponseDTO } from './dto/response/CategoryListResponseDTO '
import { CategoryManager } from './service/CategoryManager'

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryManager: CategoryManager) { }

    @Get('sarch')
    async sarch(): Promise<CategoryListResponseDTO> {
        return new CategoryListResponseDTO(await this.categoryManager.sarch())
    }

    @Get()
    async findAll(): Promise<CategoryListResponseDTO> {
        return new CategoryListResponseDTO(await this.categoryManager.findAll())
    }

    @Get(':code')
    async findOne(@Param('code') code: number): Promise<CategoryItemResponseDTO> {
        return new CategoryItemResponseDTO(await this.categoryManager.findOne(code))
    }

    @Post()
    async save(@Body() dto: CategorySaveResquestDTO) {
        return new CategoryItemResponseDTO(await this.categoryManager.save(dto))
    }

    @Put(':code')
    async update(@Param('code') code: number, @Body() dto: CategorySaveResquestDTO) {
        return new CategoryItemResponseDTO(await this.categoryManager.update(code, dto))
    }

    @Delete(':code')
    async delete(@Param('code') code: number): Promise<void> {
        this.categoryManager.delete(code)
    }
}
