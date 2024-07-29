"use client";

import {
  Bell,
  Cookie,
  CreditCard,
  icons,
  Inbox,
  Logs,
  Settings,
  Share2,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import UserItem from "./UserItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const router = useRouter();

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <User />,
        },
        {
          link: "/inbox",
          text: "Inbox",
          icon: <Inbox />,
        },
        {
          link: "/",
          text: "Billing",
          icon: <CreditCard />,
        },

        {
          link: "/",
          text: "Notifications",
          icon: <Bell />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings />,
        },
        {
          link: "/",
          text: "Privacy",
          icon: <Cookie />,
        },
        {
          link: "/",
          text: "Logs",
          icon: <Logs />,
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-2 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>

      <div
        data-collapsed={false}
        className=" grow group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {menuList.map((menu: any, key: number) => (
            <div key={key}>
              {menu.items.map((menuItem: any, menuItemKey: number) => (
                <Link
                  key={menuItemKey}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "flex items-center justify-start gap-2"
                  )}
                  href={menuItem.link}
                >
                  {menuItem.icon}
                  {menuItem.text}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div>Settings / Notifications</div>
    </div>
  );
}
