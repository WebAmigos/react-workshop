import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Generator } from "./Generator";

const meta = {
  title: "Components/Generator",
  component: Generator,
  // tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Generator: Story = {};
