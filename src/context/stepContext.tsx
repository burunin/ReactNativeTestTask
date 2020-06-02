import { createContext } from "react";

interface IContextProps {
  finishFirst: ({ localstate }: { localstate: object }) => void;
  finishSecond: ({ localstate }: { localstate: object }) => void;
  finishThird: ({ localstate }: { localstate: object }) => void;
  finishFourth: ({ localstate }: { localstate: object }) => void;
  finishFifth: ({ localstate }: { localstate: object }) => void;
  stepperState: object;
  dispatch?: ({ type }: { type: string }) => void;
}
export const StepContext = createContext({} as IContextProps);
