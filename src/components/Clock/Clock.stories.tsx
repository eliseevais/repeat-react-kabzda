import {Clock} from "./Clock";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Clock> = {
  title: 'Components/Clock',
  component: Clock,
};

export default meta;

type Story = StoryObj<typeof Clock>;

type PropsType = {
  mode: "digital" | "analog"
}

export const BaseAnalogExample = (props: PropsType) => {
  return <Clock mode={"analog"}/>
}

export const BaseDigitalExample = (props: PropsType) => {
  return <Clock mode={"digital"}/>
}
