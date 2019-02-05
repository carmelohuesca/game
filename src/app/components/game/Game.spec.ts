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

  it('el juego tiene tres resultados (empate, ganador 1, ganador 2)', () => {
    expect(Game.RESULTS).toBeDefined();
    expect(Game.RESULTS.DRAW).toBeDefined();
    expect(Game.RESULTS.WINNER_ONE).toBeDefined();
    expect(Game.RESULTS.WINNER_TWO).toBeDefined();
  });

  it('se incrementa el número de ronda en cada de tirada', () => {
    expect(game.round).toBeDefined();
    expect(game.play).toBeDefined();
    expect(game.round).toBe(0);
    game.play(Game.OPTIONS.ROCK, Game.OPTIONS.ROCK);
    expect(game.round).toBe(1);
    game.play(Game.OPTIONS.ROCK, Game.OPTIONS.ROCK);
    game.play(Game.OPTIONS.ROCK, Game.OPTIONS.ROCK);
    game.play(Game.OPTIONS.ROCK, Game.OPTIONS.ROCK);
    expect(game.round).toBe(4);
  });

  describe('El resultado', () => {
    it('empatan cuando los dos jugadores eligen la misma opción', () => {
      expect(game.result).toBeDefined();
      game.play(Game.OPTIONS.ROCK, Game.OPTIONS.ROCK);
      game.play(Game.OPTIONS.ROCK, Game.OPTIONS.PAPER);
      expect(game.result).not.toBe(Game.RESULTS.DRAW);
    });

    describe('Gana el jugador 1 cuando:', () => {

      it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', () => {
        game.play(Game.OPTIONS.ROCK, Game.OPTIONS.SCISSORS);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', () => {
        game.play(Game.OPTIONS.PAPER, Game.OPTIONS.ROCK);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', () => {
        game.play(Game.OPTIONS.SCISSORS, Game.OPTIONS.PAPER);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "piedra" y el jugador 2 elige "lagarto"', () => {
        game.play(Game.OPTIONS.ROCK, Game.OPTIONS.LIZARD);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "papel" y el jugador 2 elige "spock"', () => {
        game.play(Game.OPTIONS.PAPER, Game.OPTIONS.SPOCK);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "tijeras" y el jugador 2 elige "lagarto"', () => {
        game.play(Game.OPTIONS.SCISSORS, Game.OPTIONS.LIZARD);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "lagarto" y el jugador 2 elige "spock"', () => {
        game.play(Game.OPTIONS.LIZARD, Game.OPTIONS.SPOCK);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "lagarto" y el jugador 2 elige "papel"', () => {
        game.play(Game.OPTIONS.LIZARD, Game.OPTIONS.PAPER);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "spock" y el jugador 2 elige "piedra"', () => {
        game.play(Game.OPTIONS.SPOCK, Game.OPTIONS.ROCK);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
      it('el jugador 1 elige "spock" y el jugador 2 elige "tijeras"', () => {
        game.play(Game.OPTIONS.SPOCK, Game.OPTIONS.SCISSORS);
        expect(game.result).toBe(Game.RESULTS.WINNER_ONE);
      });
    });


  });
});

