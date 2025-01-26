import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Button } from '@/components/ui/button';

const CourseTable = () => {
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
        <TableRow>
          <TableCell>Curso 1</TableCell>
          <TableCell>Desarrollo</TableCell>
          <TableCell>5</TableCell>
          <TableCell>
            <Button variant="primary" color="primary">ver</Button>
            <Button variant="secondary" color="primary">Editar</Button>
            <Button variant="ghost" color="primary">Borrar</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default CourseTable