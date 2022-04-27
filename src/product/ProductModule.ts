import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryController } from './src/CategoryController'
import { ProductController } from './src/ProductController'
import { CategoryDAO } from './src/service/CategoryDAO'
import { CategoryManager } from './src/service/CategoryManager'
import { ProductDAO } from './src/service/ProductDAO'
import { ProductManager } from './src/service/ProductManager'

@Module({
  imports: [TypeOrmModule.forFeature([ProductDAO, CategoryDAO])],
  controllers: [ProductController, CategoryController],
  providers: [ProductManager, CategoryManager],
})
export class ProductModule {}
