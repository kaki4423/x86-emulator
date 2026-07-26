import { CPU } from "./cpu"
import { Memory } from "./memory"
import type { Instruction } from "./instruction"
import { Opcode } from "./opcode"

export class Executor {
    execute(cpu: CPU, memory: Memory, instruction: Instruction) {
        switch (instruction.opcode) {
            case Opcode.MOV:
                cpu.eax = instruction.imm32;
                cpu.eip += instruction.length;
                break;
        }
    }
}