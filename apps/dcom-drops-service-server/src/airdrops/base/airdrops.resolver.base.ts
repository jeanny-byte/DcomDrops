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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Airdrops } from "./Airdrops";
import { AirdropsCountArgs } from "./AirdropsCountArgs";
import { AirdropsFindManyArgs } from "./AirdropsFindManyArgs";
import { AirdropsFindUniqueArgs } from "./AirdropsFindUniqueArgs";
import { CreateAirdropsArgs } from "./CreateAirdropsArgs";
import { UpdateAirdropsArgs } from "./UpdateAirdropsArgs";
import { DeleteAirdropsArgs } from "./DeleteAirdropsArgs";
import { CommentsFindManyArgs } from "../../comments/base/CommentsFindManyArgs";
import { Comments } from "../../comments/base/Comments";
import { AirdropsService } from "../airdrops.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Airdrops)
export class AirdropsResolverBase {
  constructor(
    protected readonly service: AirdropsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Airdrops",
    action: "read",
    possession: "any",
  })
  async _airdropsItemsMeta(
    @graphql.Args() args: AirdropsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Airdrops])
  @nestAccessControl.UseRoles({
    resource: "Airdrops",
    action: "read",
    possession: "any",
  })
  async airdropsItems(
    @graphql.Args() args: AirdropsFindManyArgs
  ): Promise<Airdrops[]> {
    return this.service.airdropsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Airdrops, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Airdrops",
    action: "read",
    possession: "own",
  })
  async airdrops(
    @graphql.Args() args: AirdropsFindUniqueArgs
  ): Promise<Airdrops | null> {
    const result = await this.service.airdrops(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Airdrops)
  @nestAccessControl.UseRoles({
    resource: "Airdrops",
    action: "create",
    possession: "any",
  })
  async createAirdrops(
    @graphql.Args() args: CreateAirdropsArgs
  ): Promise<Airdrops> {
    return await this.service.createAirdrops({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Airdrops)
  @nestAccessControl.UseRoles({
    resource: "Airdrops",
    action: "update",
    possession: "any",
  })
  async updateAirdrops(
    @graphql.Args() args: UpdateAirdropsArgs
  ): Promise<Airdrops | null> {
    try {
      return await this.service.updateAirdrops({
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

  @graphql.Mutation(() => Airdrops)
  @nestAccessControl.UseRoles({
    resource: "Airdrops",
    action: "delete",
    possession: "any",
  })
  async deleteAirdrops(
    @graphql.Args() args: DeleteAirdropsArgs
  ): Promise<Airdrops | null> {
    try {
      return await this.service.deleteAirdrops(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Comments], { name: "commentsItems" })
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "read",
    possession: "any",
  })
  async findCommentsItems(
    @graphql.Parent() parent: Airdrops,
    @graphql.Args() args: CommentsFindManyArgs
  ): Promise<Comments[]> {
    const results = await this.service.findCommentsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
