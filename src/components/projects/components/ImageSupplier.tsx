import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const ImageSupplier = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 444
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  return allFile.edges;
};