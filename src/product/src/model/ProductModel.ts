import {
    Column,
    Entity, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm'
import { CategoryModel } from './CategoryModel'

@Entity('product')
export class ProductModel {
  @PrimaryGeneratedColumn()
  code: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  imagem: string;

  @Column({ type: 'varchar' })
  whatsapp: string;

  @Column({ type: 'double' })
  valor: number;

  @ManyToOne(() => CategoryModel, (category) => category.product)
  categoryCode: CategoryModel;
}
