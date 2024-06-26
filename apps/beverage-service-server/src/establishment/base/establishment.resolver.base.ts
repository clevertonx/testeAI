/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Establishment } from "./Establishment";
import { EstablishmentCountArgs } from "./EstablishmentCountArgs";
import { EstablishmentFindManyArgs } from "./EstablishmentFindManyArgs";
import { EstablishmentFindUniqueArgs } from "./EstablishmentFindUniqueArgs";
import { CreateEstablishmentArgs } from "./CreateEstablishmentArgs";
import { UpdateEstablishmentArgs } from "./UpdateEstablishmentArgs";
import { DeleteEstablishmentArgs } from "./DeleteEstablishmentArgs";
import { DrinkFindManyArgs } from "../../drink/base/DrinkFindManyArgs";
import { Drink } from "../../drink/base/Drink";
import { EstablishmentService } from "../establishment.service";
@graphql.Resolver(() => Establishment)
export class EstablishmentResolverBase {
  constructor(protected readonly service: EstablishmentService) {}

  async _establishmentsMeta(
    @graphql.Args() args: EstablishmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Establishment])
  async establishments(
    @graphql.Args() args: EstablishmentFindManyArgs
  ): Promise<Establishment[]> {
    return this.service.establishments(args);
  }

  @graphql.Query(() => Establishment, { nullable: true })
  async establishment(
    @graphql.Args() args: EstablishmentFindUniqueArgs
  ): Promise<Establishment | null> {
    const result = await this.service.establishment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Establishment)
  async createEstablishment(
    @graphql.Args() args: CreateEstablishmentArgs
  ): Promise<Establishment> {
    return await this.service.createEstablishment({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Establishment)
  async updateEstablishment(
    @graphql.Args() args: UpdateEstablishmentArgs
  ): Promise<Establishment | null> {
    try {
      return await this.service.updateEstablishment({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Establishment)
  async deleteEstablishment(
    @graphql.Args() args: DeleteEstablishmentArgs
  ): Promise<Establishment | null> {
    try {
      return await this.service.deleteEstablishment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Drink], { name: "drinks" })
  async findDrinks(
    @graphql.Parent() parent: Establishment,
    @graphql.Args() args: DrinkFindManyArgs
  ): Promise<Drink[]> {
    const results = await this.service.findDrinks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
