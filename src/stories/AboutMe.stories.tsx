import type { Meta, StoryObj } from "@storybook/react";
import AboutMe from "../components/AboutMe"; // <-- 수정

const meta = {
  title: "AboutMe", // <-- 수정
  component: AboutMe, // <-- 수정
} satisfies Meta<typeof AboutMe>; // <-- 수정

export default meta;
type Story = StoryObj<typeof AboutMe>;

export const Primary: Story = {
  render: () => <AboutMe />,
};
