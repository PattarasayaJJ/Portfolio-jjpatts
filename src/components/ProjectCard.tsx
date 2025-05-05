interface ProjectCardProps {
  icon?: string;
  image?: string;
  gradient?: string;
}

export function ProjectCard({
  icon,
  image,
  gradient = 'from-purple-100 to-pink-200'
}: ProjectCardProps) {
  return (
    <div className={`bg-gradient-to-b ${gradient} rounded-3xl p-6 h-64 flex flex-col`}>
<div className="flex-1 flex items-center justify-between gap-4">
{icon && (
          <div className="w-8 h-8 rounded-xl overflow-hidden">
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
              className="max-h-40 rounded-xl" 
            />
          </div>
        )}
      </div>
    </div>
  );
}
