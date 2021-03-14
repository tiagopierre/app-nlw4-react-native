import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  margin-top: 10px;
`;

export const ExperienceValues = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextExperienceUser = styled.Text`
  font-size: 18px;
  color: ${(props) => props.color || "#666666"};
`;

export const ExperienceBar = styled.View`
  height: 6px;
  background: #dcdde0;
  border-radius: 6px;
  flex-direction: row;
`;

export const CurrenteExperienceBar = styled.View`
  height: 6px;
  background: #4cd62b;
  border-radius: 6px;
  position: relative;
  width: ${(props) => props.currentExperience || `0%`}};
`;

export const Highlighter = styled.View`
  background: #4cd62b;
  margin-top: 20px;
  position: absolute;
  padding: 5px;
  border-radius: 8px;
  border-top-left-radius: 5px;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.currentExperience || `0%`};
  margin-left: -10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;
