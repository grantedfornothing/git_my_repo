export default function Keyword() {
      return (

            <div style={BlockContainer}>
                  <div style={Block}><div>Keyword</div></div>
                  <div style={Block}><div>Keyword Ranking</div></div>
            </div>)
}


const BlockContainer = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid var(--neutral-20)",
      width: 1039,
      height: 667,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      marginBottom: 108,
}
const BlockContainer2 = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "flex-end",
      backgroundColor: "white",
      border: "1px solid var(--neutral-20)",
      width: 1039,
      height: 667,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      marginBottom: 108,
}
const Block = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid var(--neutral-20)",
      width: 475,
      height: 582,
      borderRadius: 8
}
const Block2 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid var(--neutral-20)",
      width: 475,
      height: 516,
      borderRadius: 8,
      marginBottom: 39,
}