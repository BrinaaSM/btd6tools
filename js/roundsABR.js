roundType = "abr";

const rounds = [
	{id: 1, duration: 23, bloons: {blue: 10}},
	{id: 2, duration: 25, bloons: {red: 55}},
	{id: 3, duration: 16.71, bloons: {red: 15, blue: 11}},
	{id: 4, duration: 17.31, bloons: {red: 10, blue: 33}},
	{id: 5, duration: 16.5, bloons: {red: 13, blue: 15, green: 3}},
	{id: 6, duration: 20.54, bloons: {blue: 10, green: 13}},
	{id: 7, duration: 26.8, bloons: {blue: 25, green: 6, black: 2}},
	{id: 8, duration: 28, bloons: {green: 15, yellow: 10}},
	{id: 9, duration: 18.95, bloons: {green: 30}},
	{id: 10, duration: 44.16, bloons: {blue: 22, green: 40, lead: 2}},
	
	{id: 11, duration: 19.16, bloons: {blue: 20, green: 23}},
	{id: 12, duration: 17.39, bloons: {blue: 20, green: 6, pink: 3}},
	{id: 13, duration: 32.21, bloons: {blue: 50, yellow: 18}},
	{id: 14, duration: 26.63, bloons: {red: 49, blue: 10, green: 5, yellow: 4, black: 3, white: 1}},
	{id: 15, duration: 25, bloons: {blue: 20, green: 15, yellow: 12, pink: 10, purple: 3}},
	{id: 16, duration: 16.02, bloons: {green: 55}},
	{id: 17, duration: 5, bloons: {pink: 12}},
	{id: 18, duration: 26.82, bloons: {green: 30, yellow: 60}},
	{id: 19, duration: 15.76, bloons: {blue: 10, green: 5, pink: 15, black: 2}},
	{id: 20, duration: 5.25, bloons: {black: 6}},
	
	{id: 21, duration: 18.12, bloons: {red: 50, blue: 4}},
	{id: 22, duration: 8, bloons: {purple: 16}},
	{id: 23, duration: 9, bloons: {black: 7, white: 6, lead: 4}},
	{id: 24, duration: 1, bloons: {lead: 1}},
	{id: 25, duration: 21.14, bloons: {pink: 22, purple: 10}},
	{id: 26, duration: 18.2, bloons: {black: 15, zebra: 3, rainbow: 2}},
	{id: 27, duration: 34.26, bloons: {red: 100, blue: 60, green: 45, yellow: 45}},
	{id: 28, duration: 5, bloons: {lead: 6}},
	{id: 29, duration: 15.25, bloons: {pink: 50, white: 8}},
	{id: 30, duration: 13.07, bloons: {lead: 9}},
	
	{id: 31, duration: 14.71, bloons: {black: 8, white: 8, zebra: 13}},
	{id: 32, duration: 26, bloons: {purple: 10, rainbow: 5, ceramic: 3}},
	{id: 33, duration: 25.34, bloons: {red: 20, blue: 13}},
	{id: 34, duration: 36, bloons: {green: 200, rainbow: 6}},
	{id: 35, duration: 33.76, bloons: {purple: 25, black: 30, white: 25, ceramic: 3}},
	{id: 36, duration: 18.99, bloons: {yellow: 80, black: 10, ceramic: 2}},
	{id: 37, duration: 43.51, bloons: {black: 7, white: 50, lead: 18, zebra: 10}},
	{id: 38, duration: 29.06, bloons: {purple: 42, black: 17, lead: 14, rainbow: 7, ceramic: 1}},
	{id: 39, duration: 37.93, bloons: {white: 10, zebra: 20, rainbow: 17}},
	{id: 40, duration: 1, bloons: {fmoab: 1}},
	
	{id: 41, duration: 32, bloons: {black: 60, zebra: 70}},
	{id: 42, duration: 10.6, bloons: {rainbow: 11}},
	{id: 43, duration: 9.26, bloons: {rainbow: 10, moab: 2}},
	{id: 44, duration: 23.67, bloons: {zebra: 40, flead: 10}},
	{id: 45, duration: 38.08, bloons: {pink: 120, purple: 10, flead: 4, ceramic: 10}},
	{id: 46, duration: 7, bloons: {fceramic: 8}},
	{id: 47, duration: 24.65, bloons: {pink: 70, moab: 3}},
	{id: 48, duration: 52, bloons: {purple: 30, black: 80, flead: 15, fceramic: 3}},
	{id: 49, duration: 50, bloons: {yellow: 300, zebra: 10, rainbow: 20, ceramic: 14}},
	{id: 50, duration: 18, bloons: {flead: 8, moab: 4, fmoab: 2}},
	
	{id: 51, duration: 21.13, bloons: {zebra: 10, fceramic: 28}},
	{id: 52, duration: 20.56, bloons: {rainbow: 35, ceramic: 5, fceramic: 5, moab: 1, fmoab: 1}},
	{id: 53, duration: 35, bloons: {pink: 120, fmoab: 3}},
	{id: 54, duration: 19.41, bloons: {black: 35, moab: 1, bfb: 1}},
	{id: 55, duration: 29.78, bloons: {ceramic: 45, fmoab: 1}},
	{id: 56, duration: 20.18, bloons: {purple: 40, moab: 5}},
	{id: 57, duration: 26.23, bloons: {ceramic: 25, fmoab: 2, bfb: 1}},
	{id: 58, duration: 43.98, bloons: {ceramic: 15, fceramic: 10, moab: 10}},
	{id: 59, duration: 26.16, bloons: {lead: 50, rainbow: 25, fceramic: 20}},
	{id: 60, duration: 1, bloons: {fbfb: 1}},
	
	{id: 61, duration: 24.37, bloons: {zebra: 50, flead: 15, moab: 15}},
	{id: 62, duration: 48.29, bloons: {purple: 250, flead: 15, fmoab: 5, bfb: 2}},
	{id: 63, duration: 42.25, bloons: {ceramic: 80, fceramic: 30, moab: 5}},
	{id: 64, duration: 9.53, bloons: {fmoab: 6, bfb: 2}},
	{id: 65, duration: 40.66, bloons: {rainbow: 70, fceramic: 50, fmoab: 3, bfb: 3}},
	{id: 66, duration: 23.75, bloons: {moab: 6, bfb: 3}},
	{id: 67, duration: 26.44, bloons: {fceramic: 20, moab: 6, fmoab: 4}},
	{id: 68, duration: 8.44, bloons: {moab: 4, fbfb: 1}},
	{id: 69, duration: 42.13, bloons: {purple: 40, black: 40, ceramic: 50}},
	{id: 70, duration: 30, bloons: {rainbow: 200, fmoab: 6}},
	
	{id: 71, duration: 16.55, bloons: {fceramic: 30, fmoab: 10}},
	{id: 72, duration: 21.7, bloons: {fceramic: 38, bfb: 1, fbfb: 1}},
	{id: 73, duration: 26.95, bloons: {fmoab: 8, fbfb: 2}},
	{id: 74, duration: 31.44, bloons: {black: 100, fceramic: 25, fbfb: 1}},
	{id: 75, duration: 22.59, bloons: {lead: 50, flead: 14, fmoab: 4, bfb: 6, fbfb: 2}},
	{id: 76, duration: 10, bloons: {bfb: 10}},
	{id: 77, duration: 58.92, bloons: {fmoab: 11, fbfb: 5}},
	{id: 78, duration: 79.4, bloons: {purple: 80, zebra: 150, ceramic: 72, fceramic: 60, fbfb: 1}},
	{id: 79, duration: 60, bloons: {rainbow: 500, fbfb: 4, zomg: 1}},
	{id: 80, duration: 20, bloons: {zomg: 2}},
	
	{id: 81, duration: 26.47, bloons: {fmoab: 20, bfb: 15}},
	{id: 82, duration: 35.68, bloons: {bfb: 15, fbfb: 8, zomg: 1}},
	{id: 83, duration: 60.2, bloons: {ceramic: 80, fceramic: 40, fmoab: 20}},
	{id: 84, duration: 35, bloons: {moab: 50, fbfb: 15}},
	{id: 85, duration: 10, bloons: {zomg: 3}},
	{id: 86, duration: 20.85, bloons: {fbfb: 8}},
	{id: 87, duration: 10, bloons: {zomg: 5}},
	{id: 88, duration: 13.05, bloons: {fmoab: 15, bfb: 12, ddt: 3}},
	{id: 89, duration: 18.15, bloons: {fmoab: 15, fbfb: 12}},
	{id: 90, duration: 11.9, bloons: {fceramic: 50, ddt: 4}},
	
	{id: 91, duration: 30, bloons: {fceramic: 100, fbfb: 15}},
	{id: 92, duration: 35, bloons: {fmoab: 50, zomg: 4, ddt: 4}},
	{id: 93, duration: 20, bloons: {fbfb: 17, fddt: 7}},
	{id: 94, duration: 15, bloons: {bfb: 25, zomg: 8}},
	{id: 95, duration: 40.81, bloons: {purple: 500, fmoab: 30, ddt: 30}},
	{id: 96, duration: 32.12, bloons: {fmoab: 20, fbfb: 20, zomg: 11, ddt: 10}},
	{id: 97, duration: 4.23, bloons: {fzomg: 2, fddt: 8}},
	{id: 98, duration: 20, bloons: {fbfb: 20, zomg: 11}},
	{id: 99, duration: 19.28, bloons: {moab: 30, fddt: 9, bad: 1}},
	{id: 100, duration: 0.1, bloons: {fbad: 1}}
	];
	
	
function getDuration(round) {
  for (var i = 0; i < rounds.length; i++) {
    if (parseInt(rounds[i].id) === parseInt(round)) {
		return rounds[i].duration;
	}
  }
}

function getBloons(round) {
  for (var i = 0; i < rounds.length; i++) {
    if (parseInt(rounds[i].id) === parseInt(round)) {
		return rounds[i].bloons;
	}
  }
}