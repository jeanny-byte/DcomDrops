/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotificationsWhereInput } from "./NotificationsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NotificationsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NotificationsWhereInput,
  })
  @ValidateNested()
  @Type(() => NotificationsWhereInput)
  @IsOptional()
  @Field(() => NotificationsWhereInput, {
    nullable: true,
  })
  every?: NotificationsWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotificationsWhereInput,
  })
  @ValidateNested()
  @Type(() => NotificationsWhereInput)
  @IsOptional()
  @Field(() => NotificationsWhereInput, {
    nullable: true,
  })
  some?: NotificationsWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotificationsWhereInput,
  })
  @ValidateNested()
  @Type(() => NotificationsWhereInput)
  @IsOptional()
  @Field(() => NotificationsWhereInput, {
    nullable: true,
  })
  none?: NotificationsWhereInput;
}
export { NotificationsListRelationFilter as NotificationsListRelationFilter };
