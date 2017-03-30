import React from 'react';
import Songs from './Songs';
import Albums from './Albums';
import {Link} from 'react-router';

class Artist extends React.Component{
  constructor(props){
    super();
  }

 componentDidMount () {
  const artistId = this.props.routeParams.artistId; //from the url id#
  const selectArtist = this.props.selectArtist; //function to change app continor state
  selectArtist(artistId);
}

render(){
  const artist = this.props.selectedArtist || {};

  const selectedArtist = this.props.selectedArtist;
const children = this.props.children;
const propsToPassToChildren = Object.assign({}, this.props, {
  albums: artist.albums || [],
  songs: artist.albums || []
});

return (
<div>
  <h3>{ selectedArtist.name }</h3>
  <ul className="nav nav-tabs">
    <li><Link to={`artists/${this.props.routeParams.artistId}/albums`}>ALBUMS</Link></li>
    <li><Link to={`artists/${this.props.routeParams.artistId}/songs`}>SONGS</Link></li>
  </ul>
  { children && React.cloneElement(children, propsToPassToChildren) }
</div>
);

  /*return (
    <div>
    <Albums albums = {artist.albums || []} />
      <Songs
        songs={artist.songs || []}
        currentSong={this.props.currentSong}
        isPlaying={this.props.isPlaying}
        toggleOne={this.props.toggleOne} />
    </div>
  );*/
}
}

export default Artist;
