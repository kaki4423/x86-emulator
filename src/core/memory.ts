export class Memory {
    private data = new Uint8Array(1024 * 1024); // 1MB

    read8(addr: number): number {
        return this.data[addr];
    }

    write8(addr: number, value: number): void {
        this.data[addr] = value & 0xff;
    }
}