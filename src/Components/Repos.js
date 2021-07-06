import React,{useEffect,useState} from "react"
import Axios from "axios"
import { ListGroup,ListGroupItem } from "reactstrap"
import "../Css/Repos.css"

const Repos = ({repos_url}) => {
    const [repos,setRepos] = useState([]);
    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }
    useEffect(() => {
        fetchRepos()
    }, [repos_url])
    
    return(
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem className="myListGroup" key={repo.id}>
                    <div className="RepoName">
                        {repo.name}
                    </div>
                    <div className="RepoLang">
                        {repo.language}
                    </div>
                    <div className="RepoDescription">
                        {repo.description}
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
export default Repos;