/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DrinkWhereInput } from "./DrinkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DrinkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DrinkWhereInput,
  })
  @ValidateNested()
  @Type(() => DrinkWhereInput)
  @IsOptional()
  @Field(() => DrinkWhereInput, {
    nullable: true,
  })
  every?: DrinkWhereInput;

  @ApiProperty({
    required: false,
    type: () => DrinkWhereInput,
  })
  @ValidateNested()
  @Type(() => DrinkWhereInput)
  @IsOptional()
  @Field(() => DrinkWhereInput, {
    nullable: true,
  })
  some?: DrinkWhereInput;

  @ApiProperty({
    required: false,
    type: () => DrinkWhereInput,
  })
  @ValidateNested()
  @Type(() => DrinkWhereInput)
  @IsOptional()
  @Field(() => DrinkWhereInput, {
    nullable: true,
  })
  none?: DrinkWhereInput;
}
export { DrinkListRelationFilter as DrinkListRelationFilter };