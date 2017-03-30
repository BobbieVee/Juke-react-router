import React from 'react';
import Songs from './Songs';
import Albums from './Albums'

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
  return (
    <div>
    <Albums albums = {artist.albums || []} />
      <Songs
        songs={artist.songs || []}
        currentSong={this.props.currentSong}
        isPlaying={this.props.isPlaying}
        toggleOne={this.props.toggleOne} />
    </div>
  );
}
}

export default Artist
