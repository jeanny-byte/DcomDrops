/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CommentsWhereUniqueInput } from "../../comments/base/CommentsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommentsUpdateManyWithoutAirdropsItemsInput {
  @Field(() => [CommentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentsWhereUniqueInput],
  })
  connect?: Array<CommentsWhereUniqueInput>;

  @Field(() => [CommentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentsWhereUniqueInput],
  })
  disconnect?: Array<CommentsWhereUniqueInput>;

  @Field(() => [CommentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentsWhereUniqueInput],
  })
  set?: Array<CommentsWhereUniqueInput>;
}

export { CommentsUpdateManyWithoutAirdropsItemsInput as CommentsUpdateManyWithoutAirdropsItemsInput };
