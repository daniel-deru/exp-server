import { ItemType } from "@prisma/client"
import { IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, isNumberString } from "class-validator"


export class ItemDto {
    
    @IsString()
    @IsOptional()
    activityId: string

    @IsString()
    @IsNotEmpty()
    userId: string

    @IsNotEmpty()
    @IsNumberString()
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

export class EditItemDto {

    @IsOptional()
    @IsString()
    activityId: string

    @IsOptional()
    @IsNumber()
    price?: number

    @IsOptional()
    @IsString()
    name?: string
    
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

    @IsOptional()
    @IsBoolean()
    completed?: boolean
}