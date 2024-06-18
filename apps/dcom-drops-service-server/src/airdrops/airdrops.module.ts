import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AirdropsModuleBase } from "./base/airdrops.module.base";
import { AirdropsService } from "./airdrops.service";
import { AirdropsController } from "./airdrops.controller";
import { AirdropsResolver } from "./airdrops.resolver";

@Module({
  imports: [AirdropsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AirdropsController],
  providers: [AirdropsService, AirdropsResolver],
  exports: [AirdropsService],
})
export class AirdropsModule {}
