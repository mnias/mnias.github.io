interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "프로젝트 제목",
    description: "프로젝트 설명...",
    imageUrl: "/project1.jpg",
  },
  // 더 많은 프로젝트를 여기에 추가할 수 있습니다
];

export default function Projects() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
