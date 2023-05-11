export const title = {
  fontSize: "1.5rem",
  color: "rgb(255, 255, 255)",
  "@media (min-width: 672px)": {
    margin: "-48px 0px 8px",
    fontFamily: '"Roboto Slab", sans-serif',
    fontSize: "3rem",
    lineHeight: 1.25,
    fontWeight: 700,
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    letterSpacing: "-0.125px",
  },
};

export const landingBGImage = {
  width: "100%",
  height: "50%",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  "@media (min-width: 672px)": {
    height: "100vh",
  },
};

export const titleContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70%",
  backgroundImage: "url('src/assets/images/bgFull.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  "@media (min-width: 672px)": {
    position: "relative",
    flexDirection: "column",
  },
};

export const mainSubtitle = {
  margin: "8px 0px 0px",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: "1.625",
  textAlign: "center",
  paddingLeft: "48px",
  paddingRight: "48px",
  opacity: 1,
  textTransform: "none",
  verticalAlign: "unset",
  textDecoration: "none",
  color: "rgb(255, 255, 255)",
  letterSpacing: "-0.125px",
};

export const gridTextContainer = {
  borderRadius: "5px",
  width: "100vw",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  "@media (min-width: 672px)": {
    position: "absolute",
    bottom: "-40%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

export const mainDescriptiveBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 672px)": {
    gap: 1,
    justifyContent: "center",
    width: "20%",
  },
};

export const mainDescriptiveText = {
  width: "90%",
  "@media (min-width: 672px)": {
    wordWrap: "break-word",
    textAlign: "center",
  },
};

export const footerContainer = {
  borderTop: "1px solid gray",
  borderRadius: "5px",
  height: "9.25rem",
  width: "100%",
  "@media (min-width: 672px)": {
    height: "7.25rem",
    marginTop: "70px",
    paddingTop: "20px",
  },
};

export const footerItem = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 1,
  width: "100%",
  "@media (min-width: 672px)": {
    flexDirection: "row",
  },
};
