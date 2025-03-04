"use client";
import { Button, Form, Modal } from "@/components";
import ModuleForm from "@/components/molecules/form/module-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useAuth } from "@/context/AuthContext";
import { useParams } from "next/navigation";
import React, { useState } from "react";
const ViewCourse = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const { courses } = useAuth();

  const course = courses.find((c) => c.id.toString() === id);

  if (!course) return <h1>No se encontró el curso deseado</h1>;

  const { title, modules } = course;

  return (
    <section>
      <h1>{title}</h1>
      <p>Módulos: {modules.length}</p>
      <Accordion type="single">
        {modules.map((m) => (
          <AccordionItem key={m.id} value={m.id.toString()}>
            <AccordionTrigger>
              {m.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {m.classes && m.classes.length > 0 && m.classes.map((c) => (<li key={c.id}>{c.title}</li>))}
              </ul>
              <Button>Agregar clase</Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Modal isOpen={modalOpen} setOpen={setModalOpen} title={"Agregar Nuevo Modulo"} btnDesc={"Nuevo Modulo"}>
        <ModuleForm courseId={course.id} setOpen={setModalOpen} />
      </Modal>
    </section>
  );
};

export default ViewCourse;