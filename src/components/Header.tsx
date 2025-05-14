import auditoriaLogo from '../assets/auditoria-logo.svg'
function Header() : JSX.Element {
  return (
    <header>
      <div className='mx-8 mb-10 lg:px-[50px] lg:mx-[96px]'>
        <a href="https://www.auditoria.ai/" target="_blank" className="h-[80px] sm:h-[90px] w-auto inline-block">
          <img src={auditoriaLogo} className="h-full w-auto block" alt="Auditoria logo" />
        </a>
      </div>
      {/* <div className='py-10 px-8 text-center bg-black bg-linear-to-r from-[#555FB3] to-[#461770]'>
        <h1 className='text-white text-3xl uppercase px-4'>Invoice Dashboard</h1>
      </div> */}
    </header>
  )
}
export default Header;