import Split from 'react-split';
import Theme from '../../constants/Theme';

function SplitView() {
  return (
    <Split
      className="flex flex-1"
      gutterStyle={() => ({ width: '2px', backgroundColor: Theme.colors.border })}
      sizes={[20, 80]}
    >
      <div
        className="border-l-2 bg-primary border-border"
      >
        Hola
      </div>
      <div className="flex flex-1 bg-secondary">Hola</div>
    </Split>
  );
}

export default SplitView;
