// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
const freilauf = require("../assets/Freilauf.jpg");
const training = require("../assets/Training.jpg");
const business = require("../assets/business.jpg");
const freilauftablet = require("../assets/freilauftablet.jpg");
const tutors = require("../assets/tutors.jpg");
const vision = require("../assets/vision.jpg");

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#f9a993",
  quarternary: "#929CBE",
  quinary: "#826447"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={7} fit caps lineHeight={1} textColor="secondary">
            Custom Designs and Mock-Ups
          </Heading>
          <Text margin="40px 0 0" textColor="tertiary" size={1} fit bold>
            when the server is starting up, just play in Photoshop
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="primary" caps>Designs</Heading>
          <img src={freilauf} width="900"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="primary" caps>Designs</Heading>
          <img src={freilauftablet} width="500"/>

        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={6} textColor="primary" caps>Designs</Heading>
          <img src={business} width="900"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Designs</Heading>
          <img src={training} width="900"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="quinary">
          <Heading size={6} textColor="primary" caps>Designs</Heading>
          <img src={vision} width="850"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="quinary">
          <Heading size={6} textColor="primary" caps>Designs</Heading>
          <img src={tutors} width="450"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary" caps><a className="anchor" href="https://www.prolizzard.com/custom">Home</a></Heading>
        </Slide>
      </Deck>
    );
  }
}
