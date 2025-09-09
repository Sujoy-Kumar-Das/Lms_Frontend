import { FaPlay } from "react-icons/fa";

export default function LectureVideo({ video }: { video: string }) {
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md mb-6">
      <div className="aspect-video bg-background">
        {video ? (
          <iframe
            className="w-full h-full"
            src={getEmbedUrl(video)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-background text-text-primary ">
            <div className="text-center">
              <FaPlay className="text-5xl mx-auto mb-4" />
              <p className="text-lg font-medium">Video content coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
