import { IComponentOptions } from 'angular';

class GreetingController {
  message: string = 'Hello from AngularJS + TypeScript!';
}

export const GreetingComponent: IComponentOptions = {
  template: `
    <div class="greeting">
      <h2>{{ $ctrl.message }}</h2>
    </div>
  `,
  controller: GreetingController
};