import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Plus } from "lucide-react";
import { fn } from "storybook/test";

import { Button } from "@/components/ui/button";

const VARIANT_OPTIONS = [
	"default",
	"destructive",
	"outline",
	"secondary",
	"ghost",
	"link",
] as const;

const SIZE_OPTIONS = [
	"default",
	"sm",
	"lg",
	"icon",
	"icon-sm",
	"icon-lg",
] as const;

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
		asChild: { control: { type: "boolean" } },
		disabled: { control: { type: "boolean" } },
		children: { control: { type: "text" } },
	},
	args: {
		children: "Button",
		variant: "default",
		size: "default",
		disabled: false,
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {};

export const Destructive: Story = {
	args: {
		variant: "destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
	},
};

// export const IconButton: Story = {
// 	args: {
// 		size: "icon",
// 		variant: "secondary",
// 		children: <Plus className="size-4" aria-hidden="true" />,
// 		"aria-label": "Add item",
// 	},
// };
