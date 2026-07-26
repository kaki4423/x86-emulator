export class CPU {
    eax = 0;
    ebx = 0;
    ecx = 0;
    edx = 0;

    esp = 0;
    ebp = 0;
    esi = 0;
    edi = 0;

    eip = 0;
    flags = 0;

    reset() {
        this.eax = 0;
        this.ebx = 0;
        this.ecx = 0;
        this.edx = 0;
        this.esp = 0;
        this.ebp = 0;
        this.esi = 0;
        this.edi = 0;
        this.eip = 0;
        this.flags = 0;
    }
}