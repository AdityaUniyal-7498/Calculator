import styles2 from "./mainBox.module.css";
import styles4 from "./buttonsall.module.css";

function MainBox({ onButtonClickHandler }) {
  const buttonNames = [
    "C",
    "*",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "()",
    "0",
    ".",
    "=",
  ];

  return (
    <center className={styles2.mainBox}>
      <div className={styles4.buttonsall}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles4.buttonsall}
            onClick={() => {
              onButtonClickHandler(buttonName);
            }}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </center>
  );
}

export default MainBox;
