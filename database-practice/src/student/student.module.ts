import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schemas/student.schema';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { CoursesSchema } from './schemas/courses.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Student',
                schema: StudentSchema
            }
        ]),
        MongooseModule.forFeature([
            {
                name: 'Courses',
                schema: CoursesSchema
            }
        ])
    ],
    providers: [StudentService],
    controllers: [StudentController],
})
export class StudentModule {}
