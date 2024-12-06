import { CurrentCourseCard } from "@/components/molecules/current-course-card/current-course-card";
import { DashboardCardList } from '@/components/molecules/dashboard-card-list/dashboard-card-list';
import React from "react";

const Dashboard = () => {
  const name= "Pedro"
  const course = {
    title: "Arquitectura de información",
    image: "https://s3-alpha-sig.figma.com/img/4740/8bdc/663cfd1e5596c3954fb4cdafa277cf73?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dkfi-rJRtaWj1oCXil9bRKRv0jhK0-yRpr-HiHSOQeiVCQUezQ6e7ySSj0duBBYfVHoVN~nCA4qCX27Wg3XvoMAOKETTENK~xCcFFWJ9zsxrip0dSLTTgJlt1j~8RWZBODKVqVIdJsZymQEJLfBIOU7TXNJIdklaU3VmXKexlm2XAm3PZBowkMV43Nn0~ihwL6NUs3RyEl0ZYb5r8wiSeHGY3OHZ1TpXNJ4Dbz7ID2OOIiGlpV8zVD2d8VWQxjHZMcANF0~4sWdo1cOkvROxyjEKSfiwb4~ISDSzVVExuLTVEASE4nHr5IacV3M8R88DBYsoxliq337l8GPDIDiDeQ__"
  }
  return (
    <section className="container self-center flex flex-col w-full justify-center gap-5 pt-6">
      <DashboardCardList />
      <div className="flex flex-col w-full">
        <h1 className="text-display_2">Hola {name} ¡Que bueno verte!</h1>
        <p className="text-heading_1">Continua Aprendiendo</p>
        <CurrentCourseCard title={course.title} image={course.image} />
      </div>
    </section>
  );
};

export {Dashboard};
