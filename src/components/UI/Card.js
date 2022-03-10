import './Card.css';
//Children of Card will pass in classnames as props
//Card.css extracts similar formatting across other components such as drop shadow
//props.children is the content available inside of the <Card></Card> component
//by setting const classes, we add the 'card' css to the other components className css
//^this allows us to chain the css together and by reusable
const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;