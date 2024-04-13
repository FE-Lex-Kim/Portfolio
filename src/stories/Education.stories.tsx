import type { Meta, StoryObj } from "@storybook/react";
import Education from "../components/Education"; // <-- 수정

const meta = {
  title: "Education", // <-- 수정
  component: Education, // <-- 수정
} satisfies Meta<typeof Education>; // <-- 수정

export default meta;
type Story = StoryObj<typeof Education>;

export const Primary: Story = {
  render: () => <Education />,
};
