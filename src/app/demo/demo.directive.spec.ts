import { DemoDirective } from './demo.directive';

describe('DemoDirective', () => {
  it('should create an instance', () => {
    const directive = new DemoDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
