import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/context/AuthContext'
import { ModuleSchema } from '@/schemas/module.schema'
import { createNewModule } from '@/useCases/moduleUseCase'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface Props{
    courseId: number,
    setOpen: (open: boolean)=> void
}

const ModuleForm = ({ courseId, setOpen }: Props) => {
    const { fetchCourses } = useAuth();
    const form = useForm<z.infer<typeof ModuleSchema>>({
        resolver: zodResolver(ModuleSchema),
        defaultValues: {
            title: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof ModuleSchema>) =>{
        try {
            const created = await createNewModule({ courseId, data });
            if (created) {
                await fetchCourses(); // Actualiza la lista de cursos
                form.reset(); // Limpia el formulario
                setOpen(false);
                alert("Módulo creado correctamente");

            } else {
                alert("Error al crear el módulo");
            }
        } catch (error) {
            console.error("Error al crear el módulo", error);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Título del curso" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    <Button type="submit" className="mt-4 w-full">
                        Crear
                    </Button>
            </form>
        </Form>
    )
}

export default ModuleForm