import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { BookOpen, ChevronDown, Play } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// To-do-> Change this with the api values, FIX absolute position to fit into its container
const modules = [
  {
    id: 1,
    title: "Modulo 1",
    classes: [
      {id:1, title: "Titulo", type: "video"},
      {id:2, title: "Titulo", type: "video"},
    ]
  },
  {
    id: 2,
    title: "Modulo 2",
    classes: [
      { id: 1, title: "Titulo", type: "video" },
      { id: 2, title: "Titulo", type: "reading" },
      { id: 3, title: "Titulo", type: "video" },
      { id: 4, title: "Titulo", type: "video" },
    ]
  },
]

const CourseSidebar = () => {
  return (
    <Sidebar
      variant="sidebar"
      className="bg-white/30 !absolute mt-[320px] border-none rounded-lg">
      {modules.map((module) => (
          <Collapsible key={module.id}>
            <SidebarGroup>
              <SidebarGroupLabel>
                <CollapsibleTrigger className="flex w-full items-center text-white text-heading_2">
                  {module.title}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {module.classes.map((class_) => (
                      <SidebarMenuItem key={class_.id}>
                        <SidebarMenuButton asChild >
                          <Link href="#" className="flex items-center gap-2 text-black !text-heading_3">
                            {class_.type === 'video' ? (
                              <Play className="h-4 w-4" />
                            ) : (
                              <BookOpen className="h-4 w-4" />
                            )}
                            {class_.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
    </Sidebar>
  )
}

export { CourseSidebar }