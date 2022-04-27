import { Controller, Get, Param } from '@nestjs/common'
import { CategoryItemResponseDTO } from './dto/response/CategoryItemResponseDTO'
import { CategoryListResponseDTO } from './dto/response/CategoryListResponseDTO '
import { CategoryManager } from './service/CategoryManager'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryManager: CategoryManager) {}

  @Get()
  async sarch(): Promise<CategoryListResponseDTO> {
    return new CategoryListResponseDTO(await this.categoryManager.sarch())
  }

  @Get(':code')
  async findOne(@Param('code') code: number): Promise<CategoryItemResponseDTO> {
    return new CategoryItemResponseDTO(await this.categoryManager.findOne(code))
  }

  async save() {}

  async update() {}

  async delete(): Promise<void> {}
}
