"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notifications",
      date: "2/2/2024",
      read: true,
    },
    {
      text: "This is another notifications",
      date: "5/2/2024",
      read: false,
    },
  ]);

  return (
    <div className=" grid grid-cols-2  border-r p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={`absolute -top-1 -right-1 h-3 w-3 min-h-3 min-w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 cursor-pointer hover:bg-neutral-50 transition
                flex items-start gap-2"
              >
                <div
                  className={`h-4 w-4 min-h-4 min-w-4 rounded-full my-1 ${
                    item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
