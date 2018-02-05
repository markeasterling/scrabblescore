import { fetchTiles, FETCH_TILES } from './index';


describe('fetchin tiles', () => {
 it('should fetch some tiles', () =>{
    expect(fetchTiles().type).toEqual(FETCH_TILES);
    expect(fetchTiles().payload.length).toEqual(7);
 })
})
