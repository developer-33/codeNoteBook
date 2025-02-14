import { useState } from "react";

const MediaGallery = () => {
  // Sample media data (replace with database fetch)
  const [media, setMedia] = useState([
    { type: "image", src: "../../assets/car2.jpg", title: "Livery Design #1" },
    { type: "image", src: "/livery2.jpg", title: "Custom Supra Wrap" },
    { type: "video", src: "/drift-clip.mp4", title: "Epic Drift Run" },
  ]);

  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Media Gallery</h2>

      {/* Media Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-32 object-cover"
              />
            ) : (
              <video className="w-full h-32 object-cover" muted>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-1 w-full text-center">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Media Preview Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedMedia(null)}
            >
              ✖
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video controls className="w-full h-auto rounded-lg">
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            )}
            <p className="mt-2 text-center font-semibold">
              {selectedMedia.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
