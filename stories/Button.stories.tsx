import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Plus } from "lucide-react";
import { fn } from "storybook/test";

import { Button } from "@/components/ui/button";

const VARIANT_OPTIONS = [
  "default",
  "primary",
  "secondary",
  "neutral",
  "accent",
  "ghost",
  "error",
  "success",
  "warning",
  "info",
  "link",
  "nav",
  "icon",
] as const;

const SIZE_OPTIONS = ["default", "xs", "sm", "md", "lg", "xl", "nav", "icon"] as const;
const SHAPE_OPTIONS = ["circle", "square", "wide", "block"] as const;

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: VARIANT_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "inline-radio" },
    },
    shape: {
      options: [undefined, ...SHAPE_OPTIONS],
      control: { type: "select" },
    },
    outline: { control: { type: "boolean" } },
    dash: { control: { type: "boolean" } },
    soft: { control: { type: "boolean" } },
    ghost: { control: { type: "boolean" } },
    link: { control: { type: "boolean" } },
    active: { control: { type: "boolean" } },
    asChild: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    children: { control: { type: "text" } },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    shape: undefined,
    outline: false,
    dash: false,
    soft: false,
    ghost: false,
    link: false,
    active: false,
    disabled: false,
    asChild: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => {
    const { children: _children, ...restArgs } = args;
    const examples = [
      { key: "default", label: "Default", props: { variant: "default" as const } },
      { key: "primary", label: "Primary", props: { variant: "primary" as const } },
      { key: "secondary", label: "Secondary", props: { variant: "secondary" as const } },
      { key: "neutral", label: "Neutral", props: { variant: "neutral" as const } },
      { key: "accent", label: "Accent", props: { variant: "accent" as const } },
      { key: "ghost", label: "Ghost", props: { variant: "ghost" as const } },
      { key: "error", label: "Error", props: { variant: "error" as const } },
      { key: "success", label: "Success", props: { variant: "success" as const } },
      { key: "warning", label: "Warning", props: { variant: "warning" as const } },
      { key: "info", label: "Info", props: { variant: "info" as const } },
      { key: "link", label: "Link", props: { variant: "link" as const } },
      {
        key: "nav",
        label: "Nav",
        props: { variant: "nav" as const, size: "nav" as const, children: "Nav link" },
      },
      {
        key: "icon",
        label: "Icon",
        props: {
          variant: "icon" as const,
          size: "icon" as const,
          "aria-label": "Add item",
          children: <Plus className="size-4" aria-hidden="true" />,
        },
      },
    ];

    return (
      <div className="flex flex-wrap gap-3">
        {examples.map(({ key, label, props }) => (
          <Button key={key} {...restArgs} {...props}>
            {props.children ?? label}
          </Button>
        ))}
      </div>
    );
  },
  parameters: {
    controls: {
      exclude: ["children", "variant", "size", "shape"],
    },
  },
};

export const Sizes: Story = {
  render: (args) => {
    const { children: _children, ...restArgs } = args;

    return (
      <div className="flex flex-wrap gap-3">
        {SIZE_OPTIONS.map((size) => (
          <Button
            key={size}
            {...restArgs}
            size={size}
            variant={size === "nav" ? "nav" : size === "icon" ? "icon" : args.variant}
            aria-label={size === "icon" ? "Icon button" : undefined}
          >
            {size === "icon" ? <Plus className="size-4" aria-hidden="true" /> : `${size} size`}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    variant: "primary",
  },
  parameters: {
    controls: {
      exclude: ["children", "size"],
    },
  },
};

export const ShapesAndStates: Story = {
  render: (args) => {
    const { children: _children, variant: _variant, size: _size, shape: _shape, ...restArgs } =
      args;

    return (
      <div className="flex flex-wrap gap-3">
        {SHAPE_OPTIONS.map((shape) => (
          <Button key={shape} {...restArgs} shape={shape}>
            {shape}
          </Button>
        ))}
        <Button {...restArgs} outline>
          Outline
        </Button>
        <Button {...restArgs} dash>
          Dash
        </Button>
        <Button {...restArgs} soft>
          Soft
        </Button>
        <Button {...restArgs} ghost>
          Ghost (flag)
        </Button>
        <Button {...restArgs} link>
          Link (flag)
        </Button>
        <Button {...restArgs} active>
          Active
        </Button>
        <Button {...restArgs} disabled>
          Disabled
        </Button>
      </div>
    );
  },
  args: {
    variant: "secondary",
    size: "md",
  },
  parameters: {
    controls: {
      exclude: ["children", "shape"],
    },
  },
};
