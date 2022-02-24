
import { getGifs } from '../getGifs';

describe('getGifs helper', () => {
    test('Should get 10 elements from api', async () => {
        const gifs = await getGifs('pikachu');

        expect(gifs.length).toBe(10);
    })

    test('Should get empty array when not passing argument', async () => {
        const gifs = await getGifs();
        
        expect(gifs.length).toBe(0);
    })
});