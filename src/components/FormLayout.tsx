import type { ReactNode } from "react";

interface FormLayoutProps {
  children: ReactNode;
}

export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div>
              <p className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-500">
                FORM WIZARD
              </p>
            </div>
          </div>
        </header>
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft">
          <div className="px-5 py-7 sm:px-10 sm:py-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
