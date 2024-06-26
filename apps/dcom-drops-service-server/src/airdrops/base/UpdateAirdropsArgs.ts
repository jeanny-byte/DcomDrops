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
import { AirdropsWhereUniqueInput } from "./AirdropsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AirdropsUpdateInput } from "./AirdropsUpdateInput";

@ArgsType()
class UpdateAirdropsArgs {
  @ApiProperty({
    required: true,
    type: () => AirdropsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AirdropsWhereUniqueInput)
  @Field(() => AirdropsWhereUniqueInput, { nullable: false })
  where!: AirdropsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AirdropsUpdateInput,
  })
  @ValidateNested()
  @Type(() => AirdropsUpdateInput)
  @Field(() => AirdropsUpdateInput, { nullable: false })
  data!: AirdropsUpdateInput;
}

export { UpdateAirdropsArgs as UpdateAirdropsArgs };
