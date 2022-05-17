import HeadingPic from "./HeadingPic";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Post from "./Post";
import Post2 from "./Post2";
import door from "./doorlock.jpeg";
import ff from "./forestfire.jpeg";
import car from "./ar.jpg";
import data from "./data";
function App() {
  const { news } = data;
  return (
    <div>
      <Navbar />
      <HeadingPic />
      <Navigation />
      <hr/>
      <div className="margini">Noida,India</div>
      <div className="margini">Your Location helps us provide you special...</div>
      {news.map((d) => (
        <Post2
          image={d.image}
          heading={d.heading}
          news={d.news}
          description={d.description}
          name={d.name}
        ></Post2>
      ))}
 
      {/* <div
        style={{
          width: 77,
          height: 18,
          top: 656,
          left: 1019,
          position: "absolute",
          fontFamily: "IBM Plex Sans",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 18,
        }}
      >
        Noida, India
      </div>
      <img
        style={{
          position: "absolute",
          left: 12.5,
          right: 12.49,
          top: 12.49,
          bottom: 12.5,
        }}
        src=""
      />
      <div
        style={{
          width: 500,
          height: 32,
          left: 1020,
          top: 717,
          position: "absolute",
          fontFamily: "IBM Plex Sans",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 15,
        }}
      >
        Your location will help us serve better and extend a personalised
        experience.
      </div> */}
    </div>
  );
}

export default App;
