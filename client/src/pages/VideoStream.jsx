import { useParams } from "react-router-dom";
import HLSVideoPlayer from "../components/HLSVideoPlayer";

const VideoStream = () => {
  const { id } = useParams();

  return (
    <main className="flex-grow">
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <HLSVideoPlayer
              videoSrc={`${
                import.meta.env.VITE_BASE_URL
              }/video/play/${id}/output.m3u8`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoStream;
