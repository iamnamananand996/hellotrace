"use client";

export type LoomVideoProps = {
  videoUrl?: string;
  title?: string;
};

export default function LoomVideo({
  videoUrl = "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F70735c6a44ff4c118a15bbe251f73b6e&display_name=Loom&url=https%3A%2F%2Fwww.loom.com%2Fshare%2F70735c6a44ff4c118a15bbe251f73b6e%3Fsid%3Da3f4e5b8-0946-4943-bc23-c3ef3e93c908&image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F70735c6a44ff4c118a15bbe251f73b6e-1694407767443.gif&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=loom",
  title = "See how Trace operationalizes Metric Trees!",
}: LoomVideoProps) {
  return (
    <div className={"container my-16"}>
      <h2
        className={
          "text-5xl md:text-6xl font-medium text-center tracking-tighter mb-32"
        }
      >
        Visualizes and organizes performance
      </h2>
      <div className="relative w-full max-w-4xl mx-auto px-4 py-8 h-[650px]">
        <div className="h-5 w-full bg-white"></div>
        <iframe
          src={videoUrl}
          frameBorder="0"
          scrolling="no" // Ensure no scrollbars
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_100px_#8c45ff]"
          allow="autoplay; fullscreen; picture-in-picture"
          title={title}
        />
      </div>
    </div>
  );
}
