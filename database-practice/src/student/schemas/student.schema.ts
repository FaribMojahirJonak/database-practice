import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { timestamp } from "rxjs";
import { Address } from "./address.schema";
import { Courses } from "./courses.schema";

export type StudentDocument = Student & Document;

@Schema( { timestamps: true } )
export class Student {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    grade: string;

    @Prop()
    email? : string;

    @Prop( { type : Address})
    address : Address;

    @Prop( { type : [MongooseSchema.Types.ObjectId], ref : 'Courses' } )
    courses : Courses[];
}
export const StudentSchema = SchemaFactory.createForClass(Student);