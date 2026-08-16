import { invalidPage, pages } from './pagination';

describe('pagination compatibility', () => {
  it('keeps the ASP.NET page boundary rules', () => {
    expect(invalidPage(0, 50)).toBe(
      'O parametro page deve ser maior ou igual a 1.',
    );
    expect(invalidPage(1, 101)).toBe(
      'O parametro pageSize deve estar entre 1 e 100.',
    );
    expect(pages(0, 50)).toBe(0);
    expect(pages(51, 50)).toBe(2);
  });
});
