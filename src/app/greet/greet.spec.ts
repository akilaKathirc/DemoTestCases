import { greet } from './greet';

describe('AppComponent', () => { 

    it('should greet return Akila', () => { 
        expect(greet('Akila')).toContain('Welcome Akila')
     });

 });

