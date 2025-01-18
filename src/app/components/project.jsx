import Image from "next/image";
import Aos from "aos";
import Link from "next/link";


const Projects = () => {
  return (
    <section id="projects" className="bg-black">
      <div className="container min-h-screen mx-auto items-center">

        <div className="text-center bg-black py-9">

          <h3 data-aos="fade-up" className="text-5xl lg:text-6xl font-bold mb-5">Projects</h3>
          <p data-aos="fade-down" className="text-3xl text-gray-400 md:text-4xl lg:text-5xl">Simplifying  Operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 my-10">

          <div data-aos="fade-up-right" className="bg-black shadow-lg rounded-lg">
            <h3 className="text-3xl text-center text-orange-600 font-semibold py-6 lg:text-4xl"></h3>
            <p className="mt-2 text-white"></p>
            <Image src="/images/education.svg" height={200} width={200} className="h-60 min-w-full overflow-auto px-1 pb-5" alt="image discription" />
            <p className="text-lg text-center text-gray-500 px-1 pt-11 pb-11">
              A School Management System
              organize student data.It stores information
              like grades,attendance,and personal details.
              Teachers can use it to track student progress
              and performance.Administrators can manage enrollments,
              schedules and communication.This system improves efficiency
              and accessibility of related data.
            </p>
          </div>

          <div data-aos="fade-up-left" className="bg-black shadow-lg rounded-lg">
            <h3 className="text-3xl text-center text-orange-600 font-semibold py-6 lg:text-4xl"></h3>
            <p className="mt-2 text-white"></p>
            <Image src="/images/library.svg" height={200} width={200} className="h-60 min-w-full overflow-auto px-1 pb-5" alt="image discription" />
            <p className="text-lg text-center text-gray-500 text- px-1 pt-11 pb-11 ">
              A Library Management System helps organize and
              track books and resources.It records information
              such as titles,authors and due dates.Users can
              borrow and return books easily through the system.
              Librarians can monitor overdue items and manage inventory.
              This system streamlines library operations and improves efficiency.
            </p>

          </div>

          <div data-aos="fade-down-left" className="bg-black shadow-lg rounded-lg">
            <h3 className="text-3xl text-center text-orange-600 font-semibold py-6 lg:text-4xl"></h3>
            <p className="mt-2 text-white"></p>
            <Image src="/images/travel.svg" height={200} width={200} className="h-60 min-w-full overflow-auto px-1 pb-5" alt="image discription" />
            <p className="text-lg text-center text-gray-500 px-1 pt-11 pb-11 ">
              A Hotel Management System handles reservations
              and customers check-ins. It tracks room availability
              and manages bookings efficiently. Staff can update
              customers details,billing and payment.It helps manage
              services like housekeeping and room service. The system
              improves overall hotel operations and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Projects;
