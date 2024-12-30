import { Dialog, DialogClose, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import React, { ReactNode } from 'react'

interface ModalProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    children: ReactNode;
  }

const Modal = ({ isOpen, setOpen, title, children }: ModalProps) => {
  return (
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="p-0 w-[700px] h-auto bg-transparent max-md:w-[350px] text-black border-none">
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

export {Modal}