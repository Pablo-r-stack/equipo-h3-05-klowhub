"use client"
import { StarBadge } from "@/components/atoms/star-badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "../modal/modal";
import { Clock3, SignalMedium } from "lucide-react";
import { redirect } from "next/navigation";
import { Route } from "@/const";

//to-do -> Change interface to proper model based on the API attributes
interface ICourse {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: string;
  free: boolean;
}

const CourseCard = ({
  id,
  title,
  description,
  price,
  image,
  category,
  rating,
  free
}: ICourse) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddChart = (id: string) => {
    console.log("adding item with id", id);
  }
  return (
    <>
      <Card className="flex flex-col flex-shrink-0 w-[416px] h-[601px] bg-secondary_500 gap-5 rounded-[20px] border-none px-[15px] py-[30px] text-white">
        <CardHeader className="relative w-full h-[231px]">
          <span className="absolute z-10 top-4 left-2 rounded-[10px] px-5 py-2 bg-primary_900 font-semibold text-label_2 ">
            {category}
          </span>
          <Image
            src={image}
            fill
            alt={title}
            className="rounded-xl"
          />
        </CardHeader>
        <CardContent className="flex flex-col w-full p-0 gap-5 flex-grow">
          <div className="flex justify-between items-center">
            <CardTitle className="text-heading_2">{title}</CardTitle>
            <StarBadge rating={rating} />
          </div>
          <CardDescription className="flex flex-col w-full h-full gap-5 grow-1 text-white">
            <p className="text-heading_3 flex-grow overflow-ellipsis">
              {description}
            </p>

            {!free && <span className="text-heading_3 py-3">${price}</span>}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex p-0 justify-between items-center">
          {free ?
            (<Button variant="greenButton"
              className="w-full" onClick={() => setIsModalOpen(true)}>Comienza ahora</Button>)
            :
            (<>
              <Button variant="primary" onClick={() => handleAddChart(id)}>Agregar al Carrito</Button>
              <Button variant="outline_2">Detalles</Button>
            </>)}

        </CardFooter>
      </Card>
      {/* To-Do -> Refactor this into a new Component using Dialog from shadcn */}
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title={title}
      >
        <article className="flex flex-col w-full h-full min-h-[500px] gap-16">
          <div className="flex flex-col bg-secondary_100 gap-8">
            <div className="relative w-full h-[432px] font-semibold">
              <Image
                src={image}
                fill
                alt={title}
              />
            </div>
            <div className="container flex flex-col gap-8 p-5">
            <h1 className="text-heading_1">{title}</h1>
            <span className="text-heading_2">Por: Usuario Apellido</span>
              <ul className="flex items-center gap-4 py-4 justify-between font-semibold text-heading_2  border-b border-b-accent_500">
                <li className="flex items-center gap-2">
                  <Clock3 size={78} className="text-primary_500" />
                  <span>Duración</span>
                </li>
                <li className="flex items-center gap-2">
                  <SignalMedium size={78} className="text-primary_500" />
                  <span>Nivel</span>
                </li>
              </ul>
            <p className="text-heading_2 py-4">{description}</p>
            </div>
          </div>
          {free ?
            (<Button variant="greenButton"
              className="w-full" onClick={()=>redirect(`${Route.Study}/${id}`)}>Comienza ahora</Button>)
            :
            (
          <Button
            variant={"primary"}>Comprar Curso
          </Button>
            )}
        </article>
      </Modal>
    </>
  );
};

export { CourseCard };
