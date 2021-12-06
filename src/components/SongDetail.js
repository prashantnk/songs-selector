import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {

    render() {
        if (!this.props.song) {
            return (
                <h3>Select Any Song !</h3>
            );
        }
        return (
            <div>
                <h3>Song Detail :</h3>
                <p>Title : {this.props.song.title}</p>
                <p>Duration : {this.props.song.duration}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProps, {})(SongDetail);