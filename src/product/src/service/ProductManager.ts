import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductModel } from '../model/ProductModel'
import { ProductDAO } from './ProductDAO'

@Injectable()
export class ProductManager {
  constructor(@InjectRepository(ProductDAO) private _productDAO: ProductDAO) {}

  async sarch(): Promise<ProductModel[]> {
    return this._productDAO.find();
  }

  async findOne(code: number): Promise<ProductModel> {
    return this._productDAO.findOne(code);
  }
}
