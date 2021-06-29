import React, {Component} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Repo from "./Repo";


class App extends Component{
  constructor(){
    super();
    this.state = {
      github:{
        url: "https://api.github.com/users",
        client_id:"5e27f4c6d87f433bebc0",
        client_secret: "a25178ec619c2e720adede8a146d5be311206eb8",
        count: 7,
        sort: "created: asc"
      },
      user:[],
      repos:[],
      starred:[],
      isrepo:false,
      isstarred:false

    };
  }

  getUser = (e) =>{
    const user = e.target.value;

    const {url, client_id, client_secret, count, sort} = this.state.github;
      axios
         .get(
           `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
         )
         .then (({data}) => this.setState({user: data}));
      axios
         .get(
           `${url}/${user}/repos?per_page=${count}&sort=${sort}&cliente_id=${client_id}&
           client_secret=${client_secret}`
         )
         .then (({data}) => this.setState({repos: data}));

      axios
         .get(
           `${url}/${user}/starred?per_page=${count}&sort=${sort}&cliente_id=${client_id}&
           client_secret=${client_secret}`
         )
         .then (({data}) => this.setState({starred: data}));
  };

 
   
  renderProfile = () =>{
    const{user, repos, isrepo, isstarred, starred } = this.state;
    console.log(repos)

   const changerepo = ()=>{
      this.setState({isrepo:true,isstarred:false})
    }

   const changestarred = ()=>{
      this.setState({isrepo:false,isstarred:true})
    }

    return(
      <div className="row">
        <div className="col-md-4">
           <Profile user={user} isrepo={()=>changerepo()} isstarred={()=>changestarred()}/>   
        </div>
        <div className="col-md-8">
           {isrepo && repos.map(repo => <Repo key={repo.name} repo={repo} />)}
           {isstarred && starred.map(starred => <Repo key={starred.name} repo={starred} />)}
        </div>
      </div>
      
    )
  }

  render(){
    
    return (
      <div className="App">
      <Navbar/>


        <div className="container">
        <div className="card card-body mb-3 ">
          <img></img>
          <h1>Pesquisar Usuários do GitHub</h1>
          <p className="lead">Digite um nome para encontrar usuários e repositórios</p>
          <input onChange={this.getUser} id="search" type="text" className="form-control" required/>
        </div>
        {this.state.user.length !== 0 ? this.renderProfile() : null}
      </div>
      </div>
     
     
   );
  }
}
export default App;
 