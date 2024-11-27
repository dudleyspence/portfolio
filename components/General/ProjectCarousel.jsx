import { Carousel } from "@material-tailwind/react";
import projects from "../../app/[locale]/projects/projects";

console.log(projects);

export function ProjectCarousel() {
  return (
    <Carousel
      className="rounded-xl"
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
    >
      {projects.map((project) => (
        <img
          src={project.image}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
