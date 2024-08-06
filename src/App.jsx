import "./App.css";

import styles0 from "./components/ALL.module.css";

import Heading from "./components/Heading.jsx";
import Display from "./components/Display.jsx";
import MainBox from "./components/MainBox.jsx";

import Container from "./components/Container.jsx";
import { useState } from "react";

function App() {
  let [calval, setcalval] = useState([]);
  let event1;
  let newcalval = 0;
  const onButtonClick = (event) => {
    event1 = { event };
    console.log(`${event} : was clicked !`);

    if (event === "C") {
      console.log("Clear all input :");
      setcalval([]);
    } else if (event === "=") {
      console.log("Evaute the expression : ");
      const result = eval(calval);
      setcalval(result);
    } else {
      newcalval = calval + event;
      setcalval(newcalval);
      console.log(calval);
      // <Display passcalval={calval} />;
    }
  };

  return (
    <Container>
      <center className={styles0.ALL}>
        <Heading />
        <Display passcalval={calval} />
        <MainBox onButtonClickHandler={onButtonClick} />
      </center>
    </Container>
  );
}

export default App;
