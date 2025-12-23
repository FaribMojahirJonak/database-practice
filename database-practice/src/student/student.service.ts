import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { Model } from 'mongoose';
import { Courses } from './schemas/courses.schema';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
        @InjectModel(Courses.name) private courseModel: Model<Courses>,
    ) {}

    async createStudent(data: Partial<Student>) : Promise<Student> {
        // Create two courses
        const course1 = await new this.courseModel({
            courseId: 'C001',
            title: 'Mathematics'
        }).save();
        const course2 = await new this.courseModel({
            courseId: 'C002',
            title: 'Physics'
        }).save();
        
        const newStudent = new this.studentModel({
            ...data,
            courses : [course1._id, course2._id]
        });
        return newStudent.save();
    }

    async getAllStudents() : Promise<Student[]> {
        return this.studentModel.find().populate('courses').exec();
    }

    async getStudentById(id : string) : Promise<Student | null> {
        return this.studentModel.findById(id).populate('courses').exec();
    }

    async updateStudent(id : string, data : Partial<Student>) : Promise<Student | null> {
        const updated = await this.studentModel.findByIdAndUpdate(id, 
            {
            name: data.name ?? null,
            age: data.age ?? null,
            grade: data.grade ?? null,
            email: data.email ?? null
        }, {overwrite: true, new: true}).exec();
        return updated;
    }

    async patchStudent(id: string, data : Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteStudent(id : string) : Promise<Student | null> {
        return this.studentModel.findByIdAndDelete(id).exec();  
    }
}