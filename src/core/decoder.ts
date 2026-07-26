import { CPU } from "./cpu";
import { Memory } from "./memory";
import type { Instruction } from "./instruction";
import { Opcode } from "./opcode";

export class Decoder {
    decode(cpu: CPU, memory: Memory): Instruction {
        const opcode = memory.read8(cpu.eip);

        switch (opcode) {
            case 0xB8:
                return {
                    opcode: Opcode.MOV,
                    imm32: 0x12345678,
                    length: 5
                };
            default:
                throw new Error('Unknown opcode: ${opcode.toString(16)}');
        }
    }
}