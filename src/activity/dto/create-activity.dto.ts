import { Item } from "@prisma/client"
import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"


export class CreateActivityDto {

    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsString()
    @IsOptional()
    venue?: string

    @IsDateString()
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