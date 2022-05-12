import { ITargetGroup, Target } from './Target';
import { IToolchain } from './Toolchain';

export function findKey(t: IToolchain, targets: Target[], prefix = ''): string {
  for (const _t of targets) {
    if (t === _t) return prefix + t.id;
    else if ((_t as any as ITargetGroup).targets) {
      const __t = _t as any as ITargetGroup;
      const k = findKey(t, __t.targets, prefix + __t.name + ':');
      if (k) return k;
    }
  }
  return '';
}
