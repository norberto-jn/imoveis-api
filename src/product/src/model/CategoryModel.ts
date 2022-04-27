import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProductModel } from './ProductModel'

@Entity()
export class CategoryModel {
  @PrimaryGeneratedColumn()
  code: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => ProductModel, (product) => product.categoryCode)
  product: ProductModel[];
}
