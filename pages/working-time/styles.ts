/**
 * Styling with MUI.
 * if you need documentation you can refer
 * https://mui.com/system/getting-started/usage/#performance-tradeoffs
 */

export const styled = {
  container: {
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to top,#f06aaf,#7667ff)",
  },
  containerBox: {
    width: "20vw",
    padding: 1,
    borderRadius: 1,
    border: "1px solid gray",
    backgroundImage:
      "linear-gradient(236deg,#525d95,#505a91 5%,#4b5488 15%,#464f80 23%,#30365d 48%,#262a44 74%,#20233a);",
    color: "white",
  },
  containerInput: {
    color: "white",
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  modalContentContainer: {
    background: "#ff0000",
    mx: 2,
    borderRadius: 2,
    height: "200px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalContent: {
    padding: "12px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 1,
  },
  modalContentText: {
    color: "white",
    fontWeight: "bold",
  },
};
