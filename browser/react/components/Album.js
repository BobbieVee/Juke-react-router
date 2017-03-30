import React from 'react';
import Songs from '../components/Songs';





class Album extends React.Component{
  constructor(props){
    super();
    this.state ={album: {}};

  }

 componentDidMount () {
  const albumId = this.props.routeParams.albumId; //from the url id#
  const selectAlbum = this.props.selectAlbum; //function to change app continor state
  selectAlbum(albumId);
}

render(){
  const album = this.props.selectedAlbum || {};
  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={this.props.currentSong}
        isPlaying={this.props.isPlaying}
        toggleOne={this.props.toggleOne} />
    </div>
  );
}
};

// const Album = (props) => {

//   const album = props.album;
//   const currentSong = props.currentSong;
//   const isPlaying = props.isPlaying;
//   const toggleOne = props.toggleOne;

//   return (
//     <div className="album">
//       <div>
//         <h3>{ album.name }</h3>
//         <img src={ album.imageUrl } className="img-thumbnail" />
//       </div>
//       <Songs
//         songs={album.songs}
//         currentSong={currentSong}
//         isPlaying={isPlaying}
//         toggleOne={toggleOne} />
//     </div>
//   );
// }

export default Album;
