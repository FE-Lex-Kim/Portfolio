import type { Meta, StoryObj } from "@storybook/react";
import Portfolio from "../components/Portfolio"; // <-- 수정

const meta = {
  title: "Portfolio", // <-- 수정
  component: Portfolio, // <-- 수정
} satisfies Meta<typeof Portfolio>; // <-- 수정

export default meta;
type Story = StoryObj<typeof Portfolio>;

export const Primary: Story = {
  render: () => <Portfolio />,
};
