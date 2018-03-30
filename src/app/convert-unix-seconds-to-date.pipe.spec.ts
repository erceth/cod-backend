import { ConvertUnixSecondsToDatePipe } from './convert-unix-seconds-to-date.pipe';

describe('ConvertUnixSecondsToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertUnixSecondsToDatePipe();
    expect(pipe).toBeTruthy();
  });
});
