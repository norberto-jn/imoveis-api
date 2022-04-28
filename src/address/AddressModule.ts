import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AddressController } from "./src/AddressController"
import { AddressDAO } from "./src/service/AddressDAO"
import { AddressManager } from "./src/service/AddressManager"

@Module({
    imports: [TypeOrmModule.forFeature([AddressDAO])],
    controllers: [AddressController],
    providers: [AddressManager]
})

export class AddressModule { }
