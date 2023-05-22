import "./Card.css"

// Here Card component is basically called wrapper or shell components which includes other components inside its opening and closing tags.

// "props.children" is special properties of any component which makes them wrapper component.

function Card(props){
    const classes = 'card ' + props.className; 

    return <div className={classes}>{props.children}</div>;
}

export default Card;