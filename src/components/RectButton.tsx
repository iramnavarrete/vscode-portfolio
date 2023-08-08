interface RectButtonProps {
  icon: React.FC
  text: string
}

function RectButton({ icon: Icon, text }: RectButtonProps) {
  return (
    <button type="button" className="rect-button bg-gradient-to-r from-[#0066b4] to-[#5c2d91] before:bg-[#181818] border-[1px] border-border">
      <span>
        <Icon />
        {' '}
        {text}
      </span>
    </button>
  );
}

export default RectButton;
