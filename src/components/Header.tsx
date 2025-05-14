import type { JSX } from 'react';
import auditoriaLogo from '../assets/auditoria-logo.svg'
function Header() : JSX.Element {
  return (
    <header>
      <div className='mx-8 mb-10 lg:px-[50px] lg:mx-[96px]'>
        <a href="https://www.auditoria.ai/" target="_blank" className="h-[80px] sm:h-[90px] w-auto inline-block">
          <img src={auditoriaLogo} className="h-full w-auto block" alt="Auditoria logo" />
        </a>
      </div>
    </header>
  )
}
export default Header;