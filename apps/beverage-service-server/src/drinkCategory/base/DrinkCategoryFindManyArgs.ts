/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DrinkCategoryWhereInput } from "./DrinkCategoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DrinkCategoryOrderByInput } from "./DrinkCategoryOrderByInput";

@ArgsType()
class DrinkCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DrinkCategoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DrinkCategoryWhereInput, { nullable: true })
  @Type(() => DrinkCategoryWhereInput)
  where?: DrinkCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [DrinkCategoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DrinkCategoryOrderByInput], { nullable: true })
  @Type(() => DrinkCategoryOrderByInput)
  orderBy?: Array<DrinkCategoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DrinkCategoryFindManyArgs as DrinkCategoryFindManyArgs };