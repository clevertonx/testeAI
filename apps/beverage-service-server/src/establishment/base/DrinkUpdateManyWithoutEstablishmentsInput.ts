/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DrinkWhereUniqueInput } from "../../drink/base/DrinkWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DrinkUpdateManyWithoutEstablishmentsInput {
  @Field(() => [DrinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DrinkWhereUniqueInput],
  })
  connect?: Array<DrinkWhereUniqueInput>;

  @Field(() => [DrinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DrinkWhereUniqueInput],
  })
  disconnect?: Array<DrinkWhereUniqueInput>;

  @Field(() => [DrinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DrinkWhereUniqueInput],
  })
  set?: Array<DrinkWhereUniqueInput>;
}

export { DrinkUpdateManyWithoutEstablishmentsInput as DrinkUpdateManyWithoutEstablishmentsInput };
