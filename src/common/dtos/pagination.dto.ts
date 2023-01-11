import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto{

    @IsPositive()
    @IsOptional()
    @Type( ()=> Number)//enableImplicitConversions: true
    limit?: number;

    @IsPositive()
    @IsOptional()
    @Type( ()=> Number)
    offset?: number;

}