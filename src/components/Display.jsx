import styles from "./Display.module.css";

let Display = ({ passcalval }) => {
  return (
    <input
      type="text"
      name=""
      id="iinput"
      className={styles.display}
      placeholder="0"
      value={passcalval}
      readOnly
    />
  );
};
export default Display;
