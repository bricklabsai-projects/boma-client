import Link from 'next/link';

const BrandNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#244C93]/15 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/assets/BOMA LOGO-01.png"
            alt="Boma"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
          />
          <span className="sr-only">Boma Home</span>
        </Link>
        <div className="flex-1" />
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/#features" className="text-slate-600 hover:text-[#244C93] transition-colors">
            Features
          </Link>
          <Link href="/#faq" className="text-slate-600 hover:text-[#244C93] transition-colors">
            FAQ
          </Link>
          <Link href="/terms" className="text-slate-600 hover:text-[#244C93] transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-slate-600 hover:text-[#244C93] transition-colors">
            Privacy
          </Link>
        </div>
        {/* <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-[#244C93] hover:bg-[#244C93]/8 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-[#244C93] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#244C93]/20 hover:bg-[#1d3d78] active:translate-y-[1px] transition-all"
          >
            Get started
          </Link>
        </div> */}
      </div>
      <div className="pointer-events-none h-[3px] w-full bg-gradient-to-r from-[#244C93]/0 via-[#244C93]/35 to-[#E27A28]/40" />
    </nav>
  );
};

export default BrandNavbar;
