import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <adderess>{props.adderess}</adderess>
      <p>{props.description}</p>
    </section>
  );
}
export default MeetupDetail;
