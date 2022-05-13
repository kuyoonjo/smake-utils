import { ICommand, IToolchain } from './Toolchain';

export class Fn implements IToolchain {
  constructor(public id: string, public fn: (opts: any) => Promise<void>) {}
  async generateCommands(_first: boolean, _last: boolean): Promise<ICommand[]> {
    return [
      {
        label: 'Fn ' + this.id,
        command: this.fn,
      },
    ];
  }
}
