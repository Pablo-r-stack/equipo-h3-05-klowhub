import { buttonVariants } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Route } from '@/const'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const resources = [
  {
    title: 'Documentación',
    href: Route.Docs
  },
  {
    title: 'Guías',
    href: Route.Guides
  },
  {
    title: 'Blog',
    href: Route.Blog
  }
]

const SheetNavMenu = () => {
  return (
    <NavigationMenu className='pt-10 md:flex font-sans font-semibold text-xl'>
      <NavigationMenuList className='flex flex-col'>
        <NavigationMenuItem className='w-full'>
          <NavigationMenuLink className={cn(buttonVariants({ variant: 'link' }), 'p-0')} href={Route.Courses}>
            Aprende
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='w-full'>
          <NavigationMenuTrigger
            className={cn(buttonVariants({ variant: 'link' }), 'p-0 hover:!bg-transparent focus:!bg-transparent')}
          >
            Recursos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[200px] gap-1 p-4'>
              {resources.map((resource) => (
                <li key={resource.href}>
                  <NavigationMenuLink asChild>
                    <Link href={resource.href} className={cn(buttonVariants({ variant: 'link' }))}>
                      {resource.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='w-full'>
          <Link href='#' legacyBehavior passHref>
            <NavigationMenuLink className={cn(buttonVariants({ variant: 'link' }), 'p-0 hover:!bg-transparent')}>
              Suscripciones
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { SheetNavMenu }
