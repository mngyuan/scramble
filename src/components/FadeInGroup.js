import FadeIn from './FadeIn';

const DELAY_STEP = 300;

const FadeInGroup = (props) => {
  let curDelay = 0;
  return props.children.map((node, i) => {
    curDelay += node.props.delayInit || props.delayStep || DELAY_STEP;
    return (
      <FadeIn delay={(props.delayInit || 0) + curDelay} key={i}>
        {node}
      </FadeIn>
    );
  });
};

export default FadeInGroup;
