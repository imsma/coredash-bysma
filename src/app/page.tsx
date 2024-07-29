"use client";

import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import LineChart from "@/components/Cards/LineChart";
import { TableData } from "@/components/Cards/TableData";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid  gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px] h-[300px] overflow-hidden">
        {/* <Card className="h-[300px]"> */}
        <LineChart />
        {/* </Card> */}
        <Card className="p-[32px] overflow-y-scroll">
          <TableData />
        </Card>
        <Card>Hello World</Card>
      </div>
    </div>
  );
}
