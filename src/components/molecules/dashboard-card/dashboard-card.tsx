import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
}

const DashboardCard = ({ title, icon }: Props) => {
  return (
    <Card
      className="bg-transparent text-white text-[32px] font-semibold h-40 border-4 border-primary_900 rounded-xl hover:scale-110 active:scale-100 transition-transform duration-200 max-md:h-36 overflow-hidden shadow-custom-1"
    >
      <CardContent className="flex items-center justify-center p-4 h-full max-md:flex-col">
        <CardTitle>{title}</CardTitle>
        <div className="justify-center flex-shrink-0 m-4">{icon}</div>
      </CardContent>
    </Card>
  );
};

export {DashboardCard};
