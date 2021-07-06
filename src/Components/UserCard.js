import React from "react"
import {Card,CardBody} from "reactstrap"
import "../Css/UserCard.css"
const UserCard  = ({user}) => {
    return(
        <Card className="text-center myFullCard mt-3 mb-4">
            <img src = {user.avatar_url} className = "img-thumbnail ImageSection"/>
            <CardBody>
                <div className="basicInfo">{user.name}</div>
                <div className="basicInfo">{user.location}</div>
                <div className="basicInfo">{user.bio}</div>
                <div className="otherInfo">Availablity for hiring : {user.hireable ? 'YES' : 'NO'}</div>
                <div className="otherInfo">Followers {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;