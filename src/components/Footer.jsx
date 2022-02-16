import { Link } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footerDiv: {
    backgroundColor: "rgba(21, 114, 161, .1)",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: "right",
    signLink: {
      fontSize: "2px",
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={classes.footerDiv}>
        <Link
          className={classes.signLink}
          href="https://github.com/meandrewandyou"
          underline="hover"
          variant="body1"
          color="black"
        >{`Andrew was here ${year} ©`}</Link>
      </footer>
    </>
  );
};

export default Footer;
