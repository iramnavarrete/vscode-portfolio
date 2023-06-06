import Split from 'react-split';
import Theme from '../../constants/Theme';

function SplitView() {
  return (
    <Split
      className="flex flex-1"
      gutterStyle={() => ({ width: '2px', backgroundColor: Theme.COLORS.BORDER })}
      sizes={[20, 80]}
    >
      <div
        className="border-l-2"
        style={{
          backgroundColor: Theme.COLORS.PRIMARY,
          borderColor: Theme.COLORS.BORDER,
        }}
      >
        Hola
      </div>
      <div className="flex flex-1" style={{ backgroundColor: Theme.COLORS.SECONDARY }}>Hola</div>
    </Split>
  );
}

export default SplitView;
