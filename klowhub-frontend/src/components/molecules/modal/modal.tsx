import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React, { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  btnDesc: string;
  children: ReactNode;
}

const Modal = ({ isOpen, setOpen, title, btnDesc, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{btnDesc}</Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-[700px] h-auto bg-transparent max-md:w-[350px] text-black border-none bg-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
      <DialogClose asChild>
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          X
        </button>
      </DialogClose>
    </Dialog>
  )
}

export { Modal }