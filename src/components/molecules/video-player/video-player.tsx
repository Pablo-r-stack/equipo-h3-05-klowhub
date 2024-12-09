import React from 'react';

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster = '',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  width = '100%',
  height = 'auto',
  className = '',
  ...props 
}) => (
  <video
    controls={controls}
    autoPlay={autoPlay}
    loop={loop}
    muted={muted}
    width={width}
    height={height}
    poster={poster}
    className={`rounded-lg shadow-lg ${className}`} 
    {...props}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export { VideoPlayer };

