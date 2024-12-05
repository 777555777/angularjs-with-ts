import * as angular from 'angular';
import { GreetingComponent } from './components/greeting.component';
import { CounterComponent } from './components/counter.component';

angular
  .module('myApp', [])
  .component('greetingComponent', GreetingComponent)
  .component('counterComponent', CounterComponent);