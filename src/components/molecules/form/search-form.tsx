import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Form from "next/form";
import React from 'react'

const SearchForm = ({query}: {query?: string}) => {
  // To-Do -> Complete search query function
  return (
    <Form action="#" scroll={false} className="relative">
        <Input
        name="query"
        defaultValue={query}
        className="w-full min-w-[300px] pl-8"
        placeholder="¿Que te gustaría aprender?" />
        <button className="absolute right-2 top-1/2 h4 w-4 -translate-y-1/2 transform text-muted-foreground">
            <Search className="size-5" />
        </button>
    </Form>
  )
}

export default SearchForm