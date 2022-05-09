import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressModule } from './address/AddressModule'
import { AddressModel } from './address/src/model/AddressModel'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/ProductModule'
import { CategoryModel } from './product/src/model/CategoryModel'
import { ProductModel } from './product/src/model/ProductModel'

@Module({
    imports: [
        ProductModule,
        AddressModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: '',
            password: '',
            database: 'imoveis',
            entities: [ProductModel, CategoryModel, AddressModel],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
