import { ICommand, IToolchain } from './Toolchain';

export class Shell implements IToolchain {
  constructor(
    public id: string,
    public shell: string,
    public args?: string[]
  ) {}
  async generateCommands(_first: boolean, _last: boolean): Promise<ICommand[]> {
    return [
      {
        label: 'Shell ' + this.id,
        command: [this.shell, this.args || []],
      },
    ];
  }
}
