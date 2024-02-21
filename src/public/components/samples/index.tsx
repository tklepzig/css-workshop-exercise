import { PropsWithChildren } from "react";
import { AlignBaseline } from "./AlignBaseline";
import { Display } from "./Display";
import { PseudoElementPrint } from "./PseudoElementPrint";

const Sample = ({ children, name }: PropsWithChildren<{ name: string }>) => (
  <section className="grid gap-3 rounded bg-ui-0 shadow-sm">
    <header className="border-b border-solid border-ui-300 p-2 text-center text-xl text-ui-400">
      {name}
    </header>
    <div className="overflow-hidden p-2">{children}</div>
  </section>
);

export const Samples = () => (
  <div className="grid gap-2 p-4">
    <Sample name="Display">
      <Display />
    </Sample>
    <Sample name="PseudoElementPrint">
      <PseudoElementPrint />
    </Sample>
    <Sample name="Align Baseline">
      <AlignBaseline />
    </Sample>
  </div>
);
