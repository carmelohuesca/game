import { Game } from './Game';
describe('Especificaciones del juego SpockGame:', () => {

  let game: Game;
  const PLAYER_ONE = 'PLAYER1';
  const PLAYER_TWO = 'PLAYER2';


  beforeEach(() => {
    game = new Game(PLAYER_ONE, PLAYER_TWO);
  });

  it('existe la instancia', () => {
    expect(game).toBeDefined();
  });

  it('el juego se inicia con dos jugadores', () => {
    expect(game.playerOne).toBeDefined();
    expect(game.playerTwo).toBeDefined();
    expect(game.playerOne).toBe(PLAYER_ONE);
    expect(game.playerTwo).toBe(PLAYER_TWO);
  });

  it('el juego tiene cinco opciones iniciales (piedra, papel, tijera, lagarto, spock)', () => {
    expect(Game.OPTIONS).toBeDefined();
    expect(Game.OPTIONS.ROCK).toBeDefined();
    expect(Game.OPTIONS.PAPER).toBeDefined();
    expect(Game.OPTIONS.SCISSORS).toBeDefined();
    expect(Game.OPTIONS.LIZARD).toBeDefined();
    expect(Game.OPTIONS.SPOCK).toBeDefined();
  });

});

  // it('el juego tiene tres resultados (empate, ganador 1, ganador 2)', () => {
  // });
  // it('se incrementa el número de ronda en cada de tirada', () => {
  // });




