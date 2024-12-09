import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React from 'react'

interface TabProps{
    transcription:string,
    material: string,
    notes: string
}

const CourseTabs = ({transcription, material, notes}: TabProps) => {
    return (
        <Tabs defaultValue="transcription" className="flex flex-col gap-8 w-full min-h-[300px] bg-white/50 text-black text-heading_1 p-8 rounded-[10px] mt-6">
            <TabsList className="bg-transparent gap-8 text-heading_1 font-semibold">
                <TabsTrigger value="transcription">Traducción</TabsTrigger>
                <TabsTrigger value="help-material">Material de Apoyo</TabsTrigger>
                <TabsTrigger value="author-notes">Notas</TabsTrigger>
            </TabsList>
            <TabsContent value="transcription">
                <p>{transcription}</p>
            </TabsContent>
            <TabsContent value="help-material">
                <p>{material}</p>
            </TabsContent>
            <TabsContent value="author-notes">
                <p>{notes}</p>
            </TabsContent>
        </Tabs>
    )
}

export  {CourseTabs}