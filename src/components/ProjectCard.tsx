interface ProjectCardProps {
  title: string;
  icon?: string;
  image?: string;
  gradient?: string;
}

export function ProjectCard({
  title,
  icon,
  image,
  gradient = 'from-purple-100 to-pink-200'
}: ProjectCardProps) {
  return (
    <div className={`bg-gradient-to-b ${gradient} rounded-3xl p-6 h-64 flex flex-col`}>
      <h3 className="text-purple-800 text-4xl font-bold mb-4">{title}</h3>
      <div className="flex-1 flex items-center justify-between">
        {icon && (
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img
              src={icon}
              alt="Project icon"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {image && (
          <div className="flex-1 flex justify-end">
            <img
              src={image}
              alt="Project screenshot"
              className="max-h-40 rounded-xl" // ลบ shadow-lg ออกไป
            />
          </div>
        )}
      </div>
    </div>
  );
}
