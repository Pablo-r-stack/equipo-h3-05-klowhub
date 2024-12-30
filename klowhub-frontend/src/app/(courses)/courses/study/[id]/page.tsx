import { CourseSidebar, CourseTabs, SidebarProvider, SidebarTrigger } from '@/components';
import { VideoPlayer } from '@/components/molecules/video-player/video-player';
import React from 'react';

const course = {
  id: 1,
  title: 'Power Apps clase 1',
  videoSrc: 'https://res.cloudinary.com/videoapi-demo/video/upload/f_auto,q_auto/v1/samples/man_fashion_puq3sa.mp4',
  posterSrc: 'https://res.cloudinary.com/videoapi-demo/video/upload/f_auto,q_auto/v1/samples/man_fashion_puq3sa.jpg',
  transcription: 'Power Apps clase 1',
  material: 'Aqui va el Material de Apoyo',
  notes: 'Estas son notas del Autor del Curso'
};

// To-do -> integrate courses by fetching course/id, fix sidebar position

async function StudyCoursePage() {
  const { id, title, videoSrc, posterSrc, transcription, material, notes } = await course;

  return (
    <SidebarProvider>
      <CourseSidebar />
      <SidebarTrigger />
      <section className="relative container flex flex-col h-full min-h-[calc(100vh-100px)] font-semibold">
        {/* Main Content */}
        <div className="ml-64 flex-1 flex flex-col p-6">
          <div className="relative w-full max-h-[525px]" style={{ aspectRatio: '16 / 9' }}>
            <VideoPlayer
              src={videoSrc}
              poster={posterSrc}
              loop
              controls
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-display_2 mt-6">{title}</h1>
          <CourseTabs transcription={transcription} material={material} notes={notes}  />
        </div>
      </section>
    </SidebarProvider>
  );
}

export default StudyCoursePage;
