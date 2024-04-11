import type { Meta, StoryObj } from "@storybook/react";
import Main from "../components/Main"; // <-- 수정

const meta = {
  title: "Main", // <-- 수정
  component: Main, // <-- 수정
  parameters: {},
} satisfies Meta<typeof Main>; // <-- 수정

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Main />,
};
