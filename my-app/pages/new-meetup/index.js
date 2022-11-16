import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddmeetup={addMeetupHandler} />;
}

export default NewMetupPage;
