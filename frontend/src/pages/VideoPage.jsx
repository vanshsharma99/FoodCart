import React, { useRef } from "react";

const videos = [
{
id: 1,
src: "https://www.w3schools.com/html/mov_bbb.mp4",
description: "Fresh homemade meals delivered to your doorstep every day.",
storeUrl: "/store/1",
},
{
id: 2,
src: "https://www.w3schools.com/html/movie.mp4",
description: "Healthy diet plans customized just for you.",
storeUrl: "/store/2",
},
];
export const VideoPage = () => {
  const containerRef = useRef(null);
  return (
   <div
ref={containerRef}
className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
>
{videos.map((video) => (
<div
key={video.id}
className="h-screen w-full snap-start relative"
>
{/* Video */}
<video
src={video.src}
className="h-full w-full object-cover"
autoPlay
muted
loop
playsInline
/>


{/* Overlay */}
<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
{/* Description */}
<p className="text-white text-sm mb-3 line-clamp-2 max-w-[90%]">
{video.description}
</p>
{/* Visit Store Button */}
<button
onClick={() => (window.location.href = video.storeUrl)}
className="w-fit bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition"
>
Visit Store
</button>
</div>
</div>
))}
</div>
  )
}

export default VideoPage;