import type { Meta, StoryObj } from "@storybook/react";
import PersonInfo from "../components/PersonInfo"; // <-- 수정

const meta = {
  title: "PersonInfo", // <-- 수정
  component: PersonInfo, // <-- 수정
} satisfies Meta<typeof PersonInfo>; // <-- 수정

export default meta;
type Story = StoryObj<typeof PersonInfo>;

export const Primary: Story = {
  render: () => <PersonInfo />,
};
