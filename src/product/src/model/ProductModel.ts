import { AddressModel } from 'src/address/src/model/AddressModel'
import {
    Column,
    Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn
} from 'typeorm'
import { CategoryModel } from './CategoryModel'

@Entity('product')
export class ProductModel {

    @PrimaryGeneratedColumn()
    code?: number

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar' })
    image: string

    @Column({ type: 'varchar' })
    whatsapp: string

    @Column({ type: 'double' })
    value: number

    @ManyToOne(() => CategoryModel, (category) => category.product)
    categoryCode: CategoryModel

    @OneToOne(() => AddressModel, { cascade: true })
    @JoinColumn()
    address?: AddressModel

}
