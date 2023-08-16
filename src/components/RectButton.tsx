import { Link } from 'react-router-dom';

interface RectButtonProps {
  icon: React.FC
  text: string
  type: 'button' | 'link' | 'download'
  to?: string
}

function RectButton({
  icon: Icon, text, type, to,
}: RectButtonProps) {
  const className = 'rect-button bg-gradient-to-r from-accent-color to-[#5c2d91] before:bg-[#181818] border-[1px] border-accent-color';

  const buttonContent = () => (
    <span>
      <Icon />
      {' '}
      {text}
    </span>
  );

  const buttonSelected = () => {
    if (type === 'link' && to) {
      return (
        <Link to={to} className={className}>
          {buttonContent()}
        </Link>
      );
    }

    if (type === 'button') {
      return (
        <button type="button" className={className}>
          {buttonContent()}
        </button>
      );
    }

    return (
      <Link to={to || ''} target="_blank" download className={className}>
        {buttonContent()}
      </Link>
    );
  };

  return <>{buttonSelected()}</>;
}

RectButton.defaultProps = {
  to: '',
};

export default RectButton;
