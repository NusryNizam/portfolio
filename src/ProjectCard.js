let ProjectCard = ({ name, description, link, img }) => {
  return (
    <div class="card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} width="100%" alt="project-thumbnail"/>
      </a>
      <div class="cardInfo">
        <h4>{name}</h4>
        <p>{description}</p>
        <a class="visit" href={link} target="_blank" rel="noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
