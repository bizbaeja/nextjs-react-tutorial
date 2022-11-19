import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup ",
    image: "../13.jpeg",
    address: "군자의 어느 곳",
    description: "세상에서 제일 맛있는 블루베리 타르트",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "../flower.jpeg",
    address: "우리집",
    description: "사진이 잘 찍혔다. ",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image: "../teapot.jpeg",
    address: "우리집 내 방",
    description: "감성샷",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect((props) => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
}
export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
