import { CPUView } from "./ui/cpuView";
import { CPU } from "./core/cpu"
import { Memory } from "./core/memory";
import { Decoder } from "./core/decoder";
import { Executor } from "./core/executor";

const app = document.getElementById("app")!;

app.innerHTML = `
    <div id="cpu"></div>
`;

const cpu = new CPU();
const memory = new Memory();
const decoder = new Decoder();
const executor = new Executor();

memory.write8(0, 0x9A);
memory.write8(1, 0x78);
memory.write8(2, 0x56);
memory.write8(3, 0x34);
memory.write8(4, 0x12);

const instruction = decoder.decode(cpu, memory);
executor.execute(cpu, memory, instruction);

console.log(cpu.eax);
console.log(cpu.eip);

const cpuView = new CPUView();
cpuView.render(cpu);