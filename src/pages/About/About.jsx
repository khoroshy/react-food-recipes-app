import React from 'react';
import about from '../../assets/img/about.png'
import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about__info">
        <h2 className="about__heading">Lorem, ipsum dolor.</h2>
        <p className="about__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae tenetur nemo quasi ex, dolorum omnis magni, adipisci esse exercitationem quibusdam eum consequatur ea dolor quo velit explicabo suscipit in?</p>
        <p className="about__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsam sint excepturi dolore, dicta odit voluptatem distinctio, tenetur voluptatum officiis nam. Quae aspernatur voluptate quas officiis velit nulla doloribus quo.
        Nisi eos obcaecati consequatur, hic corporis, architecto mollitia sint id necessitatibus quasi a iure eveniet itaque soluta voluptas quam, nesciunt velit aliquam fugit ut. Aperiam recusandae earum architecto rem beatae.
        Fugit ratione recusandae, rerum commodi debitis doloremque inventore ea, corporis tenetur nostrum quos blanditiis sed provident earum suscipit. A animi, sint pariatur sequi optio quisquam accusantium voluptate nostrum libero illum.</p>
      </div>
      <img src={about} alt="About section" className="about__img" />
    </section>
  )
}

export default About