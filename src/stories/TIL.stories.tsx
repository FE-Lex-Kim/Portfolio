import type { Meta, StoryObj } from "@storybook/react";
import Resume from "../components/Resume"; // <-- 수정

const meta = {
  title: "Resume", // <-- 수정
  component: Resume, // <-- 수정
} satisfies Meta<typeof Resume>; // <-- 수정

export default meta;
type Story = StoryObj<typeof Resume>;

export const Primary: Story = {
  render: () => <Resume />,
};
