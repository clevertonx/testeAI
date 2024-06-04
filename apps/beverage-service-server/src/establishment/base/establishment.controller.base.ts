/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EstablishmentService } from "../establishment.service";
import { EstablishmentCreateInput } from "./EstablishmentCreateInput";
import { Establishment } from "./Establishment";
import { EstablishmentFindManyArgs } from "./EstablishmentFindManyArgs";
import { EstablishmentWhereUniqueInput } from "./EstablishmentWhereUniqueInput";
import { EstablishmentUpdateInput } from "./EstablishmentUpdateInput";
import { DrinkFindManyArgs } from "../../drink/base/DrinkFindManyArgs";
import { Drink } from "../../drink/base/Drink";
import { DrinkWhereUniqueInput } from "../../drink/base/DrinkWhereUniqueInput";

export class EstablishmentControllerBase {
  constructor(protected readonly service: EstablishmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Establishment })
  async createEstablishment(
    @common.Body() data: EstablishmentCreateInput
  ): Promise<Establishment> {
    return await this.service.createEstablishment({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Establishment] })
  @ApiNestedQuery(EstablishmentFindManyArgs)
  async establishments(
    @common.Req() request: Request
  ): Promise<Establishment[]> {
    const args = plainToClass(EstablishmentFindManyArgs, request.query);
    return this.service.establishments({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Establishment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async establishment(
    @common.Param() params: EstablishmentWhereUniqueInput
  ): Promise<Establishment | null> {
    const result = await this.service.establishment({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Establishment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEstablishment(
    @common.Param() params: EstablishmentWhereUniqueInput,
    @common.Body() data: EstablishmentUpdateInput
  ): Promise<Establishment | null> {
    try {
      return await this.service.updateEstablishment({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
          owner: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Establishment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEstablishment(
    @common.Param() params: EstablishmentWhereUniqueInput
  ): Promise<Establishment | null> {
    try {
      return await this.service.deleteEstablishment({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
          owner: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/drinks")
  @ApiNestedQuery(DrinkFindManyArgs)
  async findDrinks(
    @common.Req() request: Request,
    @common.Param() params: EstablishmentWhereUniqueInput
  ): Promise<Drink[]> {
    const query = plainToClass(DrinkFindManyArgs, request.query);
    const results = await this.service.findDrinks(params.id, {
      ...query,
      select: {
        category: true,
        createdAt: true,

        establishment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/drinks")
  async connectDrinks(
    @common.Param() params: EstablishmentWhereUniqueInput,
    @common.Body() body: DrinkWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      drinks: {
        connect: body,
      },
    };
    await this.service.updateEstablishment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/drinks")
  async updateDrinks(
    @common.Param() params: EstablishmentWhereUniqueInput,
    @common.Body() body: DrinkWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      drinks: {
        set: body,
      },
    };
    await this.service.updateEstablishment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/drinks")
  async disconnectDrinks(
    @common.Param() params: EstablishmentWhereUniqueInput,
    @common.Body() body: DrinkWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      drinks: {
        disconnect: body,
      },
    };
    await this.service.updateEstablishment({
      where: params,
      data,
      select: { id: true },
    });
  }
}
