import { ReactElement } from 'react';
import { GitBranchIcon } from './icons';

function Footer(): ReactElement {
  return (
    <footer className="px-2 h-6 flex flex-col content-between bg-primary">
      <a
        href="https://github.com/iramnavarrete/vscode-portfolio"
        target="_blank"
        className=" mx-2 flex flex-row items-center w-max"
        rel="noreferrer"
      >
        <GitBranchIcon size={15} />
        <p className="text-white pl-1">main</p>
      </a>
    </footer>
  );
}

export default Footer;
