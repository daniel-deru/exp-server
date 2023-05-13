import { Item } from "@prisma/client"
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"


export class CreateActivityDto {

    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsString()
    @IsOptional()
    venue?: string

    @IsDate()
    @IsOptional()
    datePlanned? : Date

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    location?: string

    @IsString()
    @IsOptional()
    tag?: string
}