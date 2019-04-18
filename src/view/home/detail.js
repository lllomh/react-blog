import React from 'react';


class Detail extends React.Component {
    componentDidMount() {
        console.log(121212122)
        console.log(this.props.match.params,34343434343443434);
    }
    render() {
        return (
            <div>
                <h1>detail</h1>
            </div>
        )
    }


}

export default Detail