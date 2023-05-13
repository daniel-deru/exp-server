import { ItemType } from "@prisma/client"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export class ItemDto {
    
    @IsString()
    @IsNotEmpty()
    activityId: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsOptional()
    @IsNumber()
    quantity?: number

    @IsOptional()
    type?: ItemType
  
    @IsOptional()
    @IsString()
    tag?: string

    @IsNumber()
    @IsOptional()
    duration?: number

    @IsOptional()
    @IsString()
    description?: string
  
    
}