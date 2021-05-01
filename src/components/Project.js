import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags,
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='min-h-screen p-6'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-center py-4'>PROJECTS</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {projectData &&
            projectData.map((project, index) => (
              <article className='shadow-lg rounded-md px-3 py-3 leading-snug border-l-8 border-red-400'>
                <h3 className='text-gray-800 text-2xl font-bold mb-2'>
                  {project.title}
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <span>
                    <strong className='font-bold'>Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-red-500 font-bold hover:unerLin'
                  >
                    Source Code
                  </a>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
