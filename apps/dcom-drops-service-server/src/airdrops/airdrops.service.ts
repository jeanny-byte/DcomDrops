import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AirdropsServiceBase } from "./base/airdrops.service.base";

@Injectable()
export class AirdropsService extends AirdropsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
