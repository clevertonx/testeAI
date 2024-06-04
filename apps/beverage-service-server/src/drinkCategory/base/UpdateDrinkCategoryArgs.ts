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
import { DrinkCategoryWhereUniqueInput } from "./DrinkCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DrinkCategoryUpdateInput } from "./DrinkCategoryUpdateInput";

@ArgsType()
class UpdateDrinkCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => DrinkCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DrinkCategoryWhereUniqueInput)
  @Field(() => DrinkCategoryWhereUniqueInput, { nullable: false })
  where!: DrinkCategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DrinkCategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => DrinkCategoryUpdateInput)
  @Field(() => DrinkCategoryUpdateInput, { nullable: false })
  data!: DrinkCategoryUpdateInput;
}

export { UpdateDrinkCategoryArgs as UpdateDrinkCategoryArgs };