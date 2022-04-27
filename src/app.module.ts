import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/ProductModule'
import { CategoryModel } from './product/src/model/CategoryModel'
import { ProductModel } from './product/src/model/ProductModel'

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nerit',
      password: '',
      database: 'imoveis',
      entities: [ProductModel, CategoryModel],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
