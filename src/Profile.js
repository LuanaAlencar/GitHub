import React from 'react'; 



class Profile extends React.Component {
    render() {
    
   return <div>
        
        <div className="row">
            <div className="col-md-3">
                <div className="card border-0" style={{width:'18rem'}}>
                    <img className="card-img-top rounded-circle" src={this.props.user.avatar_url}></img>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item border-0">
                        Repositórios: 
                            <span className="badge badge-success mx-1">{this.props.user.public_repos}</span>
                        </li>
                        <li className="list-group-item border-0">
                        Seguidores:
                            <span className="badge badge-primary mx-1">{this.props.user.followers}</span>
                        </li>
                        <li className="list-group-item">
                        Seguindo:
                            <span className="badge badge-info mx-1">{this.props.user.following}</span>
                        </li>
                    </ul>
                    < div className="card-body ">
                        <a href={`${this.props.user.html_url}`} className="btn btn-primary btn-block ">Perfil</a> 
                        <button className="btn btn-primary btn-block " onClick={this.props.isrepo}>Repositório</button>
                        <button className="btn btn-primary btn-block " onClick={this.props.isstarred}>Starred</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}

export default Profile;