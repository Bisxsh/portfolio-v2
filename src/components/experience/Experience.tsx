import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { EnterWithFade } from "../../util/FramerMotion";
import ExperienceListing from "./components/ExperienceListing";

const ExperienceContainer = styled.div`
  padding: 0 max(5vw, 20px);
  margin-top: 10vh;
  h2 {
    text-align: center;
    margin-bottom: 5vh;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <motion.div {...EnterWithFade(0)}>
        <h2>Experience</h2>
        <ExperienceListing
          companyName="AvcoSystems"
          jobTitle="Placement Software Engineer"
          dates="Jun. 2023 - Jun. 2024"
          description={[
            "Updated an existing API endpoint in Go to incorporate newly established client requirements",
            "Created unit and system tests to maintain code robustness, maintaining over 70% unit test coverage across issues",
            "Adhered to company standards, utilising a CI/CD pipeline and merge requests to address project issues",
            "Integrated new back-end features with the React front-end, ensuring new UIs aligned with the existing design",
          ]}
        />
        <br />
        <br />
        <ExperienceListing
          companyName="Shmeeb Inc."
          jobTitle="Junior Software Developer"
          dates="Nov 2021 - Mar. 2023"
          description={[
            "Created and maintained Java plugins for a network of Minecraft servers with over 500 concurrent players",
            "Managed a Discord server with over 85,000 users",
            "Internationally collaborated with other developers using Git",
            "Implemented plugins both individually and as part of a team to create unique selling points to distinguish the network from its competition",
            "Assisted in the creation of a centralised, private API to facilitate quicker and more standardised development",
          ]}
        />
      </motion.div>
    </ExperienceContainer>
  );
};

export default Experience;
