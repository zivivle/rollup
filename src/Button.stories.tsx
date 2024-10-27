import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outlined", "text"],
    },
    type: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: () => alert("버튼 클릭!"),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solid",
    type: "primary",
    size: "large",
    disabled: false,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "solid",
    type: "secondary",
    size: "large",
    disabled: false,
    children: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    variant: "solid",
    type: "primary",
    size: "large",
    disabled: false,
    children: "Large Button",
  },
};

export const Medium: Story = {
  args: {
    variant: "solid",
    type: "primary",
    size: "medium",
    disabled: false,
    children: "Medium Button",
  },
};

export const Small: Story = {
  args: {
    variant: "solid",
    type: "primary",
    size: "small",
    disabled: false,
    children: "Small Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "solid",
    type: "primary",
    size: "medium",
    disabled: true,
    children: "Disabled Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    type: "primary",
    size: "medium",
    disabled: false,
    children: "Outlined Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    type: "primary",
    size: "medium",
    disabled: false,
    children: "Text Button",
  },
};
