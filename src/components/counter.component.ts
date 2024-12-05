import { IComponentOptions } from 'angular';

class CounterController {
  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}

export const CounterComponent: IComponentOptions = {
  template: `
    <div class="counter">
      <h3>Counter: {{ $ctrl.count }}</h3>
      <button ng-click="$ctrl.increment()">+</button>
      <button ng-click="$ctrl.decrement()">-</button>
    </div>
  `,
  controller: CounterController
};