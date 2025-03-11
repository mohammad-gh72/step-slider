declare module "step-slide" {
  import { ReactNode } from "react";

  export type StepSlideT = {
    setCurrentInd: React.Dispatch<React.SetStateAction<number>>;
    currentInd: number;
    resetScrollLock?: number;
    className: string;
    children: ReactNode;
  };

  const StepSlide: React.FC<StepSlideT>;

  export default StepSlide;
}
