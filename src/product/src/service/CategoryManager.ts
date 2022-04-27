import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryModel } from '../model/CategoryModel'
import { CategoryDAO } from './CategoryDAO'

@Injectable()
export class CategoryManager {
  constructor(
    @InjectRepository(CategoryDAO) private _productDAO: CategoryDAO,
  ) {}

  async sarch(): Promise<CategoryModel[]> {
    return this._productDAO.sarch();
  }

  async findOne(code: number): Promise<CategoryModel> {
    return this._productDAO.findOne(code);
  }
}
