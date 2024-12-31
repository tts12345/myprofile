

const Projects = () => {
  return (
    <section id="projects" className="py-16 mx-5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl text-blue-600 font-semibold">Project 1</h3>
            <p className="mt-2 text-red-600">Student Management System</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl  text-blue-600 font-semibold">Project 2</h3>
            <p className="mt-2  text-red-600">Library Management System</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl   text-blue-600 font-semibold">Project 3</h3>
            <p className="mt-2  text-red-600">Hotel Management System</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
