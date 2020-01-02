import FadeIn from './FadeIn';

const DELAY_AMT = 300;

const FadeInGroup = props =>
  props.children.map((node, i) => (
    <FadeIn delay={i * (props.delayAmount || DELAY_AMT)}>{node}</FadeIn>
  ));

export default FadeInGroup;
