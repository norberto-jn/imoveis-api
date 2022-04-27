import { Controller, Get, Param } from '@nestjs/common'
import { CategoryResponseDTO } from './dto/response/CategoryResponse'
import { CategoryManager } from './service/CategoryManager'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryManager: CategoryManager) {}

  @Get()
  async sarch() {
    const categoryModel = await this.categoryManager.sarch();
    return categoryModel.map((item) => new CategoryResponseDTO(item));
  }

  @Get(':code')
  async findOne(@Param('code') code: number) {
    return await this.categoryManager.findOne(code);
  }

  async save() {}

  async update() {}

  async delete(): Promise<void> {}
}
