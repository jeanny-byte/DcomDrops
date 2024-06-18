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
import { NotificationsCreateInput } from "./NotificationsCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateNotificationsArgs {
  @ApiProperty({
    required: true,
    type: () => NotificationsCreateInput,
  })
  @ValidateNested()
  @Type(() => NotificationsCreateInput)
  @Field(() => NotificationsCreateInput, { nullable: false })
  data!: NotificationsCreateInput;
}

export { CreateNotificationsArgs as CreateNotificationsArgs };
