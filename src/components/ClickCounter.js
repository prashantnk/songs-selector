import React from "react";
import { connect } from "react-redux";
import { changeCount } from "../actions";

const ClickCounter = (props) => {
    return (
        <div className="item">
            <div className="ui content">
                <div className="ui header">Current Count : {props.count}</div>
            </div>
            <div className="ui button" onClick={() => props.changeCount(1)}>
                Increment
            </div>
            <div className="ui button" onClick={() => props.changeCount(-1)}>
                Decrement
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps, {
    changeCount
})(ClickCounter);
