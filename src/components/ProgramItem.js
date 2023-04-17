import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
  useProgram
} from "planby";
import "./styleitem.css"
export const ProgramItem = ({ program, ...rest }) => {
  console.log('inside program item')
  const {
    styles,
    formatTime,
    set12HoursTimeFormat,
    isLive,
    isMinWidth
  } = useProgram({
    program,
    ...rest
  });

  const { data } = program;
  const { image, title, since, till, description, caption } = data;

  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();
  // console.log(styles, "program box")
  return (

    //      <ProgramBox width={styles.width} style={styles.position}>
    //  <ProgramContent width={styles.width} isLive={isLive}>
    <div style={{ position: "absolute", overflow: "hidden", padding: styles.width === 0 ? 0 : 4, top: `${styles.position.top}px`, height: "80px", left: `${styles.position.left}px`, width: styles.width }}>


      <div className="program-div" style={{ position: "relative", display: "flex", fontSize: "14px", height: "100%", borderRadius: "8px", cursor: "pointer", overflow: "hidden", transition: "all 0.4s ease-in-out", padding: `10px${styles.width < 30 ? 4 : 20}px`, zIndex: 1, alignItems: "center", margin: "0px" }}>
        <ProgramFlex>
          {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
          <ProgramStack>
            {/* <ProgramTitle>{title}</ProgramTitle> */
            }
            <p style={{ fontSize: "14px", textAlign: "left", margin: "0", marginBottom: "5px", fontWeight: "300", color: "#FFFFFFDD", letterSpacing: "0.53px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</p>
            {/* <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText> */}
            <p style={{ fontSize: "14px", display: "flex", fontWeight: "400", color: "#FFFFFF99", textAlign: "left", letterSpacing: "0.53px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: "0px" }}>{caption}</p>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>


      </div>
    </div>



  );
};
