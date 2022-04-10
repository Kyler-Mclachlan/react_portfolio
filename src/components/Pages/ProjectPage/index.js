import React, { useState } from 'react';
export default function Project() {

  const [projects] = useState([
    {
      title: "FavMates",
      link: "https://lit-mountain-78827.herokuapp.com/",
      githubLink: "https://github.com/Nate-Huerd/Fav-Mates"
    },
    {
      title: "Concert Scout",
      link: "https://austinslatey.github.io/concert-scout/",
      githubLink: "https://github.com/austinslatey/concert-scout"
    },
    {
      title: "Note Taker",
      link: "https://blooming-citadel-90751.herokuapp.com/",
      githubLink: "https://github.com/Kyler-Mclachlan/NoteTaker"
    },
        {
      title: "Tech Blog",
      link: "https://afternoon-mountain-91825.herokuapp.com/",
      githubLink: "https://github.com/Kyler-Mclachlan/Tech-Blog"
    },
    {
      title: "SEO Optimization",
      link: "https://github.com/Kyler-Mclachlan/Horiseon-SEO-and-Accessibility-Optimization",
      githubLink: "https://github.com/Kyler-Mclachlan/Horiseon-SEO-and-Accessibility-Optimization"
    },
    {
      title: "PWA",
      link: "https://lychee-cobbler-55273.herokuapp.com/",
      githubLink: "https://github.com/Kyler-Mclachlan/Budget-Tracker"
    }
  ]);


  return (
    //method 1
    <div>
    {projects.map((image, i) => (
      <a href={image.link}>
      <img className="projectItem"
        src={require(`../../assets/${i}.PNG`)}
        alt={image.title}
        key={image.title}
        href={image.link}
      />
      <a className='projectTitle' href={image.githubLink}>{image.title}</a>
  </a>
    ))}
  </div>
  );
};