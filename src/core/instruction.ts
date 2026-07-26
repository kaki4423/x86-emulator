import { Opcode } from "./opcode";

export interface Instruction {
    opcode: Opcode;
    imm32: number;
    length: number;
}