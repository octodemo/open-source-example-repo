const { greet } = require('./index');

describe('greet', () => {
  it('should return a greeting with the person\'s name', () => {
    const result = greet('Alice');
    expect(result).toEqual('Hello Alice');
  });

  it('should handle empty input', () => {
    const result = greet('');
    expect(result).toEqual('Hello ');
  });

  it('should handle null input', () => {
    const result = greet(null);
    expect(result).toEqual('Hello null');
  });

  it('should handle undefined input', () => {
    const result = greet(undefined);
    expect(result).toEqual('Hello undefined');
  });
});
