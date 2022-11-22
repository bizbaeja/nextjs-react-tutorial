import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        img
        src="../../13.jpeg"
        alt="A first Meetup"
        title="A first Meetup "
        address="군자의 어느 곳"
        description="세상에서 제일 맛있는 블루베리 타르트"
      />

      <Fragment></Fragment>
    </>
  );
}
export async function getStaticPaths() {
  return {
    fallbafck: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "../../13.jpeg",
        title: "A first Meetup ",
        address: "군자의 어느 곳",
        description: "세상에서 제일 맛있는 블루베리 타르트",
      },
    },
  };
}
export default MeetupDetails;
