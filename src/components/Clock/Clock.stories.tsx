import {Clock} from "./Clock";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Clock> = {
  title: 'Components/Clock',
  component: Clock,
};

export default meta;

type Story = StoryObj<typeof Clock>;


export const BaseExample = () => {
  return <Clock/>
}
