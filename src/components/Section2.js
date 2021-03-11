import React from 'react';
import './Section2.css'
import img1 from '../img/brush.svg'
import img2 from '../img/object-select.svg'
import img3 from '../img/megaphone.svg'
import img4 from '../img/globe-line.svg'

const Section2 = () => {
  return (
    <section id="section2">
      <article>
        <img src={img1} alt="" />
        <div>
          <h4>Brand Identity</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas quo dolor odio ipsum reprehenderit odit eligendi quis perspiciatis suscipit. Fugit laborum earum ipsa, iusto quas est aspernatur consequatur error aliquam nesciunt nemo quo sint voluptates nihil, possimus dolorum. Reiciendis.</p>
        </div>
      </article>
      <article>
        <img src={img2} alt="" />
        <div>
          <h4>Illustration</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas quo dolor odio ipsum reprehenderit odit eligendi quis perspiciatis suscipit. Fugit laborum earum ipsa, iusto quas est aspernatur consequatur error aliquam nesciunt nemo quo sint voluptates nihil, possimus dolorum. Reiciendis.</p>
        </div>
      </article>
      <article>
        <img src={img3} alt="" />
        <div>
          <h4>Marketing</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas quo dolor odio ipsum reprehenderit odit eligendi quis perspiciatis suscipit. Fugit laborum earum ipsa, iusto quas est aspernatur consequatur error aliquam nesciunt nemo quo sint voluptates nihil, possimus dolorum. Reiciendis.</p>
        </div>
      </article>
      <article>
        <img src={img4} alt="" />
        <div>
          <h4>Web Design</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas quo dolor odio ipsum reprehenderit odit eligendi quis perspiciatis suscipit. Fugit laborum earum ipsa, iusto quas est aspernatur consequatur error aliquam nesciunt nemo quo sint voluptates nihil, possimus dolorum. Reiciendis.</p>
        </div>
      </article>
    </section>
  );
}

export default Section2;
