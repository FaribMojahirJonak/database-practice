import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CoursesDocument = Courses & Document;

@Schema()
export class Courses extends Document {
    @Prop({ required: true })
    courseId: string;

    @Prop({ required: true })
    title: string;
}

export const CoursesSchema = SchemaFactory.createForClass(Courses);