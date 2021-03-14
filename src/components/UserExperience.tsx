import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import {
  Container,
  ExperienceValues,
  TextExperienceUser,
  ExperienceBar,
  CurrenteExperienceBar,
  Highlighter,
} from "../styles/UserExperience";

export function UserExperience() {
  const [currentExperience, setCurrentExperience] = useState(20);

  return (
    <Container>
      <ExperienceValues>
        <TextExperienceUser>0 xp</TextExperienceUser>
        <TextExperienceUser>1600 xp</TextExperienceUser>
      </ExperienceValues>

      <ExperienceBar>
        <CurrenteExperienceBar
          currentExperience={`${currentExperience}%`}
        ></CurrenteExperienceBar>

        <Highlighter currentExperience={`${currentExperience}%`}>
          <FontAwesome
            name="sort-asc"
            color="#4cd62b"
            size={30}
            style={{ top: -9, left: 0, position: "absolute" }}
          />
          <TextExperienceUser color="#fff">
            {currentExperience} xp
          </TextExperienceUser>
        </Highlighter>
      </ExperienceBar>
    </Container>
  );
}
