import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Course } from '@/models';
import Link from 'next/link';

interface CourseTableProps{
  courses: Course[];
}

const CourseTable = ({courses}: CourseTableProps) => {
  return (
    <Table>
      <TableCaption>
        Esta es tu lista de cursos
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            Titulo
          </TableHead>
          <TableHead>
            Categoría
          </TableHead>
          <TableHead>
            Modulos
          </TableHead>
          <TableHead>
            Acciones
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course)=>
        <TableRow key={course.id}>
          <TableCell>{course.title}</TableCell>
          <TableCell>{course.categoryId}</TableCell>
          <TableCell>{course.modules.length}</TableCell>
          <TableCell>
            <Button variant="primary" color="primary"><Link href={`/courses/mycourses/${course.id}`}>ver</Link></Button>
            <Button variant="secondary" color="primary">Editar</Button>
            <Button variant="ghost" color="primary">Borrar</Button>
          </TableCell>
        </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default CourseTable