// import PropTypes from 'prop-types';

function Stuff({name= "John Doe",
    title = "Worker"
}){
    return(
        <div className="myCard">
            <img className="cardPic" src="https://placehold.co/180x180"></img>
        <h1>{name}</h1>
        <p> {title}</p>
        </div>

    );
}


export default Stuff