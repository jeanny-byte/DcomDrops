import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AirdropsResolverBase } from "./base/airdrops.resolver.base";
import { Airdrops } from "./base/Airdrops";
import { AirdropsService } from "./airdrops.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Airdrops)
export class AirdropsResolver extends AirdropsResolverBase {
  constructor(
    protected readonly service: AirdropsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
