import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    textTransform: "none",
    color: "#eef7ff",
    backgroundColor: "#448FD4",
    fontSize: "17px",
    fontWeight: 700,
    borderRadius: "32px",
    padding: theme.spacing(1, 3),
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#1E79CB",
      boxShadow: "none",
    },
  },
}));

interface ProductItemProps {
  id: number;
  imgPath: string;
  title: string;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  imgPath,
  title,
  description,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const productImage = (
    <Box
      style={{
        width: isSmallScreen ? "100%" : "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(8),
      }}
    >
      <img
        src={imgPath}
        alt={title}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );

  const productDetails = (
    <Box
      style={{
        width: isSmallScreen ? "100%" : "50%",
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant="h5"
        style={{
          backgroundColor: "#448FD4",
          color: "#eef7ff",
          width: "80px",
          borderRadius: "20px",
          padding: theme.spacing(0.5, 1),
          textAlign: "center",
          fontSize: "0.8rem",
          fontWeight: 500,
          marginBottom: theme.spacing(1),
        }}
      >
        Product
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "32px",
          fontWeight: 700,
          textAlign: "left",
          color: "#448FD4",
        }}
      >
        {title.split(" ").slice(0, -1).join(" ")}{" "}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "32px",
          fontWeight: 700,
          textAlign: "left",
          color: "#3D3B40",
        }}
      >
        {title.split(" ").slice(-1)}
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontSize: "20px",
          fontWeight: 300,
          textAlign: "left",
          color: "#3D3B40",
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        }}
      >
        {description}
      </Typography>
      <Box style={{ textAlign: "center" }}>
        <Button variant="contained" className={classes.buttonStyle}>
          Discover more <ArrowRightAltIcon />
        </Button>
        <Button
          variant="contained"
          size="large"
          className={classes.buttonStyle}
        >
          Start monitoring
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      id="productsSection"
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        width: "75%",
        borderRadius: "2px",
        overflow: "hidden",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      }}
    >
      {isSmallScreen || id % 2 === 0 ? (
        <>
          {productImage}
          {productDetails}
        </>
      ) : (
        <>
          {productDetails}
          {productImage}
        </>
      )}
    </Box>
  );
};

export default ProductItem;
