import { ShoppinglistFactory } from './list-factory';

describe('ListFactory', () => {
  it('should create an instance', () => {
    expect(new ShoppinglistFactory()).toBeTruthy();
  });
});
