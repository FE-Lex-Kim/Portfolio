import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header"; // <-- 수정
import styled from "styled-components";

const meta = {
  title: "Header", // <-- 수정
  component: Header, // <-- 수정
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>; // <-- 수정

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => (
    <JustifyCenter>
      <Header />
    </JustifyCenter>
  ),
};

const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`;
