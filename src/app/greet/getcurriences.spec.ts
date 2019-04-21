import { currencies } from './getcurriences';

describe('AppComponent', () => { 

    it('should greet return USD', () => { 
        const result = currencies();
        expect(result).toContain('USD');
     });

     it('should greet return USD', () => { 
        const result = currencies();
        const list = ['USD','AUD','rupees'];
        expect(result).toEqual(list);
     });

 });

