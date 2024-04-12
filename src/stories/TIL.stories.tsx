import type { Meta, StoryObj } from "@storybook/react";
import TIL from "../components/TIL"; // <-- 수정

const meta = {
  title: "TIL", // <-- 수정
  component: TIL, // <-- 수정
} satisfies Meta<typeof TIL>; // <-- 수정

export default meta;
type Story = StoryObj<typeof TIL>;

export const Primary: Story = {
  render: () => <TIL />,
};
