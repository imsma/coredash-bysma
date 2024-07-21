import {
  Bell,
  Cookie,
  CreditCard,
  icons,
  Inbox,
  Logs,
  Settings,
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

export default function Sidebar() {
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
          link: "/",
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
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((menuItem: any, menuItemKey: number) => (
                  <CommandItem
                    key={menuItemKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {menuItem.icon}
                    {menuItem.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
}
