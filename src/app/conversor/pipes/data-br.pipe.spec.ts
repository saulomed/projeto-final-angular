import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-04-04 para 04/04/2020',
    () =>{
    const pipe = new DataBrPipe();
    expect(pipe.transform('2020-04-04')).toEqual('04/04/2020');
    })
});
