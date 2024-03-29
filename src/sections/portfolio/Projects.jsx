import Project from "./Project"

const Projects = ({projects}) => {
  return (
    <div className="portfolio_projects" data-aos="fade-in">
        {
            projects.map(project => (
                <Project key={project.id} project={project} />
            ))
        }
    </div>
  )
}

export default Projects