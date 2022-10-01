import { NextPage } from 'next';
import { Button } from 'components';
import { Transition } from 'components';
import { useToggle } from 'hooks/useToggle';

const TransitionDemo: NextPage = () => {
  const { visible, toggle } = useToggle();
  return (
    <div className='p-4 space-y-2'>
      <Button onClick={toggle}>Toggle</Button>
      <Transition in={visible} timeout={200} animation='zoom-in-left'>
        <div>
          <p className='text-blue-600/100'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/90'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/80'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/70'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/60'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/50'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/40'>The quick brown fox jumps over the lazy dog.</p>
        </div>
      </Transition>
      <Transition in={visible} timeout={200} animation='zoom-in-top' wrapper>
        <Button>Base Button</Button>
      </Transition>
      <Transition in={visible} timeout={200} classNames='alert'>
        <div>
          <p className='text-blue-600/100'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/90'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/80'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/70'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/60'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/50'>The quick brown fox jumps over the lazy dog.</p>
          <p className='text-blue-600/40'>The quick brown fox jumps over the lazy dog.</p>
        </div>
      </Transition>
    </div>
  );
  // const [inProp, setInProp] = useState(false);
  // const nodeRef = useRef(null);
  // return (
  //   <div>
  //     <Button onClick={() => setInProp(!inProp)}>Click to Enter</Button>
  //     {inProp ? 'true' : 'false'}
  //     <CSSTransition
  //       nodeRef={nodeRef}
  //       in={inProp}
  //       timeout={300}
  //       unmountOnExit
  //       classNames='zoom-in-top'
  //     >
  //       <div ref={nodeRef}>
  //         <p className='text-blue-600/100'>The quick brown fox jumps over the lazy dog.</p>
  //         <p className='text-blue-600/90'>The quick brown fox jumps over the lazy dog.</p>
  //         <p className='text-blue-600/80'>The quick brown fox jumps over the lazy dog.</p>
  //         <p className='text-blue-600/70'>The quick brown fox jumps over the lazy dog.</p>
  //         <p className='text-blue-600/60'>The quick brown fox jumps over the lazy dog.</p>
  //         <p className='text-blue-600/50'>The quick brown fox jumps over the lazy dog.</p>
  //         <p className='text-blue-600/40'>The quick brown fox jumps over the lazy dog.</p>
  //       </div>
  //     </CSSTransition>
  //   </div>
  // );
};

export default TransitionDemo;
