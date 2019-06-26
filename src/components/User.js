import React, {Component} from 'react';


class User extends Component {
    render(){
        return (
            <div className="user">
                <div className="nome">
                    Nome: {this.props.name}
                </div>
                <div>
                    Foto: <img  alt={this.props.name} src={this.props.img} />
                </div>
            </div>
        );
    }
}


export default User;
