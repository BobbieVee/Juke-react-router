import React from 'react';
import {Link, activeClassName} from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item" activeClassName="active">
          <Link to='/albums' onClick={deselectAlbum}>ALBUMS</Link>
        </h4>
      </section>
      <section>
  <h4 className="menu-item" activeClassName="active">
    <Link to='/artists'>ARTISTS</Link>
  </h4>
</section>
    </sidebar>
  );
}

export default Sidebar;
