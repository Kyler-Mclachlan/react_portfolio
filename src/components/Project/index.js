import React, { useState } from 'react';
export default function Project() {
  const ProjectList = ({ projectitem }) => {

    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
    {
    //   title: "FavMates",
    //   image: '../../assets/images/Fav_Mates.PNG',
    //   link: "https://lit-mountain-78827.herokuapp.com/",
    // },
    // {
      title: "SEO Optimization",
      link: "https://github.com/Kyler-Mclachlan/Horiseon-SEO-and-Accessibility-Optimization",
    },
    {
      title: "Concert Scout",
      link: "https://austinslatey.github.io/concert-scout/",
    }
    // {
    //   title: "Note Taker",
    //   image: '../../assets/images/note_taker.PNG',
    //   link: "https://blooming-citadel-90751.herokuapp.com/",
    // },
    // {
    //   title: "PWA",
    //   image: '../../assets/images/PWA.PNG',
    //   link: "https://lychee-cobbler-55273.herokuapp.com/",
    // },
    // {
    //   title: "Tech Blog",
    //   image: '../../assets/images/tech_blog.PNG',
    //   link: "https://afternoon-mountain-91825.herokuapp.com/",
    // }
  ]);
  const currentProjects = Project.filter(project => project.projectitem === projectitem);
  return (
    <div className="flex-row">
    {currentProjects.map((image, i) => (
      <img
        src={require(`../assets/${projectitem}/${i}.jpg`).default}
        alt={image.title}
        key={image.title}
      />
    ))}
  </div>
  );
}};