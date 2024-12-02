import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface CardProps {
  title: string;
  image: string;
}

const CurrentCourseCard = ({ title, image }: CardProps) => {
  return (
    <Card className="text-white bg-transparent border-none w-full max-w-[752px] min-h-[510px] flex flex-col">
      <CardHeader className="text-heading_2 p-0 py-4">
        {title}
      </CardHeader>
      <CardContent className="flex-1 p-0 relative h-[300px] ">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-md"
          priority
        />
      </CardContent>
      <CardFooter className="pt-4 px-0">
        <Button
          variant="primary"
          className="w-full"
          aria-label="Continue"
        >
          <Link href="#" className="w-full">
            Continuar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CurrentCourseCard;
