import React from "react";
import { Box, Typography } from "@material-ui/core";
import { products } from "../constants/products";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  imgPath: string;
  title: string;
  description: string;
}

export default function Products() {
  return (
    <Box
      style={{
        width: "100vw",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: "96px", // 12 * 8
        paddingBottom: "96px", // 12 * 8
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{
          fontSize: "32px",
          color: "#3D3B40",
          fontWeight: 600,
        }}
      >
        We are the{" "}
        <Typography
          variant="h4"
          component="span"
          gutterBottom
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#448FD4",
          }}
        >
          complete
        </Typography>{" "}
        monitoring solution
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        style={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#3D3B40",
          marginTop: "8px", // 1 * 8
          marginBottom: "8px", // 1 * 8
          paddingLeft: "16px", // 2 * 8
          paddingRight: "16px", // 2 * 8
        }}
      >
        Get notified right away with instant and customizable alerting, straight
        to the channel of your choice! Never miss critical downtime ever again.
      </Typography>
      {products.map((product: Product) => (
        <ProductItem key={product.id} {...product} />
      ))}
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        style={{
          fontSize: "20px",
          fontWeight: 400,
          marginTop: "16px",
          marginBottom: "16px",
          paddingLeft: "32px",
          paddingRight: "32px",
          color: "#3D3B40",
        }}
      >
        We have got lots of other products and tools available, check out all of
        our products and free tools, start monitoring today.
      </Typography>
    </Box>
  );
}
