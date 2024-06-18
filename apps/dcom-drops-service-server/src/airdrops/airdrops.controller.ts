import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AirdropsService } from "./airdrops.service";
import { AirdropsControllerBase } from "./base/airdrops.controller.base";

@swagger.ApiTags("airdrops")
@common.Controller("airdrops")
export class AirdropsController extends AirdropsControllerBase {
  constructor(
    protected readonly service: AirdropsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
