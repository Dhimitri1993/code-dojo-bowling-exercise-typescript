import { answer } from './bowling';

describe('answer', () => {
  it('first', () => {
    expect(answer('X|X|X|X|X|X|X|X|X|X||XX')).toEqual(300);
  });
  
  it('second', () => {
    expect(answer('9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||')).toEqual(90);
  });
    
  it('third', () => {
    expect(answer('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5')).toEqual(150);
  });    

  it('fourth', () => {
    expect(answer('X|7/|9-|X|-8|8/|-6|X|X|X||81')).toEqual(167);
  });
  
  it('fifth', () => {
    expect(answer('1-|2-|3-|4-|5-|6-|7-|8-|9-|9-||')).toEqual(54);
  });
  
  it('sixth', () => {
    expect(answer('1-|2-|3-|4-|X|X|7-|8-|9-|9-||')).toEqual(87);
  });
});
