import React, { useState } from 'react';
import pic from "../../assets/0.PNG";
// import photo from '../../assets'
export default function Project() {

  const [projects] = useState([
    {
    //   title: "FavMates",
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
    //   link: "https://blooming-citadel-90751.herokuapp.com/",
    // },
    // {
    //   title: "PWA",
    //   link: "https://lychee-cobbler-55273.herokuapp.com/",
    // },
    // {
    //   title: "Tech Blog",
    //   link: "https://afternoon-mountain-91825.herokuapp.com/",
    // }
  ]);


  return (
    //method 1
    <div className="project">
    {projects.map((image, i) => (
      <img
        src={require(`../../assets/${i}.PNG`)}
        alt={image.title}
        key={image.title}
      />
    ))}
    {/* method 2 */}
  </div>
  );
};