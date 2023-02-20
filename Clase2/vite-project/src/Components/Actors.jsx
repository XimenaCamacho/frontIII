
const Actors = props => {
    return (
        <div>
            <h3> {props.title} </h3>
            <ul> {props.children} </ul> 
        </div>
    )
}

export default Actors;