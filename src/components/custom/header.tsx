import { ModeToggle } from './mode-theme-togle';

function Header() {

  return (
    <div className="relative min-h-20 p-5">
        <div className='flex justify-end'>
          <ModeToggle />
        </div>
    </div>
  );
}

export default Header;
