import { IsNotEmpty } from "class-validator"

export class ProductSaveResquestDTO {

    @IsNotEmpty()
    name: string
  
    @IsNotEmpty()
    image: string
  
    @IsNotEmpty()
    whatsapp: string
  
    @IsNotEmpty()
    value: number
  
    @IsNotEmpty()
    categoryCode: number
}