import { CPU } from "./../core/cpu";

export class CPUView {
    private hex(value: number): string {
        return value.toString(16).padStart(8, "0").toUpperCase();
    }

    render(cpu: CPU) {
        document.getElementById("cpu")!.innerHTML = `
            <div>Registers</div>
            <div>--------------</div>
            <div>EAX: ${this.hex(cpu.eax)}</div>
            <div>EBX: ${this.hex(cpu.ebx)}</div>
            <div>ECX: ${this.hex(cpu.ecx)}</div>
            <div>EDX: ${this.hex(cpu.edx)}</div>
            <div>ESP: ${this.hex(cpu.esp)}</div>
            <div>EBP: ${this.hex(cpu.ebp)}</div>
            <div>ESI: ${this.hex(cpu.esi)}</div>
            <div>EDI: ${this.hex(cpu.edi)}</div>
            <div>EIP: ${this.hex(cpu.eip)}</div>
        `;
    }
}