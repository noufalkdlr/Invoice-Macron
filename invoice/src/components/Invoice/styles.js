import { StyleSheet, Font } from "@react-pdf/renderer";

import MontserratSemiBold from "../../assets/fonts/Montserrat-SemiBold.ttf";
import MontserratBold from "../../assets/fonts/Montserrat-Bold.ttf";
import WorkSansRegular from "../../assets/fonts/WorkSans-Regular.ttf";
import WorkSansSemiBold from "../../assets/fonts/WorkSans-SemiBold.ttf";

Font.register({
  family: "Montserrat",
  fonts: [
    { src: MontserratSemiBold, fontWeight: "600" },
    { src: MontserratBold, fontWeight: "bold" },
  ],
});

Font.register({
  family: "Work Sans",
  fonts: [
    { src: WorkSansRegular, fontWeight: "normal" },
    { src: WorkSansSemiBold, fontWeight: "600" }
  ],
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    color: "#2d2d2d",
    fontFamily: "Work Sans",
    fontSize: 12,
    fontWeight: "normal",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  main: {
    // backgroundColor: "#d8d8d8",
    marginHorizontal: 38,
    marginVertical: 35,
    flex: 1,
  },
  logo: {
    width: 190,
    marginBottom: 27,
  },
  CName: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000000",
  },
  CNameInvoice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 27,
  },

  BillTo: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 7,
  },

  InvoiceNoDate: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  InvoiceType: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    color: "#cc0e4e",
    marginBottom: 3,
  },
  Table: {
    marginTop: 27,
  },
  TableHeader: {
    flexDirection: "row",
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    paddingBottom: 8,
  },
  TableBody: {
    borderTop: 0.25,
    borderBottom: 0.25,
    borderColor: "#000",
    paddingTop: 14,
    paddingBottom: 6,
  },
  TableItems: {
    flexDirection: "row",
    marginBottom: 8,
  },
    summaryBox: {
      marginTop:15,
      flexDirection:"row",
      justifyContent:"flex-end",
  },
    summaryRow: {
    width:200,
  },





  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomLine: {
    height: 85,
    // backgroundColor: "#cc0e4e",
    borderTop: 0.25,
    borderColor: "#000",
  },
});
