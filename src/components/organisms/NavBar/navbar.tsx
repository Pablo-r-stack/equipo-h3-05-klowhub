"use client";
import NavIconButton from "@/components/atoms/icons/nav-icon-button";
import SearchForm from "@/components/molecules/form/search-form";
import NavLogo from "@/components/molecules/nav/nav-logo";
import NavMenu from "@/components/molecules/nav/nav-menu";
import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const session = false;
  return (
    <header className="bg-primary_900 sticky top-0 z-50 w-full h-[121px] bg-none border-b flex justify-between items-center px-8 py-5">
      <NavLogo />
      <NavMenu />
      <div className="flex justify-end gap-4 pl-8 border-l">
        <SearchForm />
        <div className="flex items-center justify-center gap-4">
          {session ? (
            <>
              <NavIconButton icon={Bell} label="Notifications" />
              <NavIconButton icon={ShoppingCart} label="Cart" />
              <NavIconButton icon={User} label="Profile" />
            </>
          ) : (
            <>
              <Link href="/auth/sign-in">
                <Button
                  variant="ghost"
                  className="hover:bg-purple-700 hover:text-white primary-btn"
                  aria-label="login"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/auth/sign-up">
              <Button
                  variant="outline"
                  className="text-white  outline-btn"
                  aria-label="login"
                >
                  Registrate
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
