export default function Footer(){
    return(
        <div className="md:ml-10">
            {/* FOOTER (BOTTOM ON MOBILE) */}
            <div className="mt-auto md:mt-6 text-center md:text-left pb-4 md:pb-0">
              <p className="text-zinc-400 text-xs md:text-sm">
                © {new Date().getFullYear()} Tuffsteel Ltd. All rights reserved.
              </p>
            </div>
        </div>
    )
}