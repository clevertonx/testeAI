/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Drink as PrismaDrink,
  Establishment as PrismaEstablishment,
} from "@prisma/client";

export class DrinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DrinkCountArgs, "select">): Promise<number> {
    return this.prisma.drink.count(args);
  }

  async drinks<T extends Prisma.DrinkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkFindManyArgs>
  ): Promise<PrismaDrink[]> {
    return this.prisma.drink.findMany<Prisma.DrinkFindManyArgs>(args);
  }
  async drink<T extends Prisma.DrinkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkFindUniqueArgs>
  ): Promise<PrismaDrink | null> {
    return this.prisma.drink.findUnique(args);
  }
  async createDrink<T extends Prisma.DrinkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkCreateArgs>
  ): Promise<PrismaDrink> {
    return this.prisma.drink.create<T>(args);
  }
  async updateDrink<T extends Prisma.DrinkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkUpdateArgs>
  ): Promise<PrismaDrink> {
    return this.prisma.drink.update<T>(args);
  }
  async deleteDrink<T extends Prisma.DrinkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkDeleteArgs>
  ): Promise<PrismaDrink> {
    return this.prisma.drink.delete(args);
  }

  async getEstablishment(
    parentId: string
  ): Promise<PrismaEstablishment | null> {
    return this.prisma.drink
      .findUnique({
        where: { id: parentId },
      })
      .establishment();
  }
  async FilterByCategory(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FilterByDistance(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FilterByPrice(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
