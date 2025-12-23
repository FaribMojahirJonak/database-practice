import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Address {
    @Prop({ required: true })
    presentAddress: string;

    @Prop( { required: true } )
    permanentAddress: string;
}