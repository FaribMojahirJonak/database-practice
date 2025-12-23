import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schemas/student.schema';

@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ) {}

    @Post()
    async createStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data);
    }

    @Get()
    async getAllStudent() : Promise<Student[]> {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    async getStudentById(@Param('id') id : string) : Promise<Student | null> {
        return this.studentService.getStudentById(id);
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id : string,
        @Body() data : Partial<Student>
    ) : Promise<Student | null> {
        return this.studentService.updateStudent(id, data);
    }

    @Patch(':id')
    async patchStudent(
        @Param('id') id : string,
        @Body() data : Partial<Student>
    ) : Promise<Student | null> {
        return this.studentService.patchStudent(id, data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id : string) : Promise<Student | null> {
        return this.studentService.deleteStudent(id);
    }
} 
