roundType = "default";

const rounds = [
	{id: 1, duration: 17.51, bloons: {red: {count: 20}}},
	{id: 2, duration: 19, bloons: {red: {count: 35}}},
	{id: 3, duration: 16.71, bloons: {red: {count: 25}, blue: {count: 5}}},
	{id: 4, duration: 17.31, bloons: {red: {count: 35}, blue: {count: 18}}},
	{id: 5, duration: 16.5, bloons: {red: {count: 5}, blue: {count: 27}}},
	{id: 6, duration: 18.7, bloons: {red: {count: 15}, blue: {count: 15}, green: {count: 4}}},
	{id: 7, duration: 26.8, bloons: {red: {count: 20}, blue: {count: 20}, green: {count: 5}}},
	{id: 8, duration: 28.87, bloons: {red: {count: 10}, blue: {count: 20}, green: {count: 14}}},
	{id: 9, duration: 18.95, bloons: {green: {count: 30}}},
	{id: 10, duration: 47.99, bloons: {blue: {count: 102}}},
	
	{id: 11, duration: 19.16, bloons: {red: {count: 10}, blue: {count: 10}, green: {count: 12}, yellow: {count: 3}}},
	{id: 12, duration: 17.39, bloons: {blue: {count: 15}, green: {count: 10}, yellow: {count: 5}}},
	{id: 13, duration: 32.21, bloons: {blue: {count: 50}, green: {count: 23}}},
	{id: 14, duration: 26.63, bloons: {red: {count: 49}, blue: {count: 15}, green: {count: 10}, yellow: {count: 9}}},
	{id: 15, duration: 25, bloons: {red: {count: 20}, blue: {count: 15}, green: {count: 12}, yellow: {count: 10}, pink: {count: 5}}},
	{id: 16, duration: 16.02, bloons: {green: {count: 40}, yellow: {count: 8}}},
	{id: 17, duration: 5, bloons: {yellow: {count: 12}}},
	{id: 18, duration: 26.82, bloons: {green: {count: 80}}},
	{id: 19, duration: 15.76, bloons: {green: {count: 10}, yellow: {count: 9}, pink: {count: 15}}},
	{id: 20, duration: 5.25, bloons: {black: {count: 6}}},
	
	{id: 21, duration: 18.12, bloons: {yellow: {count: 40}, pink: {count: 14}}},
	{id: 22, duration: 8, bloons: {white: {count: 16}}},
	{id: 23, duration: 6.82, bloons: {black: {count: 7}, white: {count: 7}}},
	{id: 24, duration: 9, bloons: {blue: {count: 20}, green: {count: 1}}},
	{id: 25, duration: 21.14, bloons: {yellow: {count: 25}, purple: {count: 10}}},
	{id: 26, duration: 14.51, bloons: {pink: {count: 23}, zebra: {count: 4}}},
	{id: 27, duration: 34.26, bloons: {red: {count: 100}, blue: {count: 60}, green: {count: 45}, yellow: {count: 45}}},
	{id: 28, duration: 5, bloons: {lead: {count: 6}}},
	{id: 29, duration: 15.25, bloons: {yellow: {count: 65}}},
	{id: 30, duration: 13.07, bloons: {lead: {count: 9}}},
	
	{id: 31, duration: 15.91, bloons: {black: {count: 8}, white: {count: 8}, zebra: {count: 10}}},
	{id: 32, duration: 27.96, bloons: {purple: {count: 10}, black: {count: 15}, white: {count: 20}}},
	{id: 33, duration: 25.34, bloons: {red: {count: 20}, yellow: {count: 13}}},
	{id: 34, duration: 36, bloons: {yellow: {count: 160}, zebra: {count: 6}}},
	{id: 35, duration: 33.76, bloons: {pink: {count: 35}, black: {count: 30}, white: {count: 25}, rainbow: {count: 5}}},
	{id: 36, duration: 20.99, bloons: {green: {count: 20}, pink: {count: 140}}},
	{id: 37, duration: 43.51, bloons: {black: {count: 25}, white: {count: 32}, lead: {count: 15}, zebra: {count: 10}}},
	{id: 38, duration: 29.06, bloons: {pink: {count: 42}, white: {count: 17}, lead: {count: 14}, zebra: {count: 10}, ceramic: {count: 2}}},
	{id: 39, duration: 37.93, bloons: {black: {count: 10}, white: {count: 10}, zebra: {count: 20}, rainbow: {count: 20}}},
	{id: 40, duration: 1, bloons: {moab: {count: 1}}},
	
	{id: 41, duration: 46.2, bloons: {black: 60, zebra: 60}},
	{id: 42, duration: 11.6, bloons: {rainbow: 11}},
	{id: 43, duration: 9.26, bloons: {rainbow: 10, ceramic: 7}},
	{id: 44, duration: 23.67, bloons: {zebra: 50}},
	{id: 45, duration: 53.1, bloons: {pink: 180, purple: 10, lead: {count: 4, fortified: 1}, rainbow: 25}},
	{id: 46, duration: 7, bloons: {ceramic: {count: 6, fortified: 1}}},
	{id: 47, duration: 24.65, bloons: {pink: 70, ceramic: 12}},
	{id: 48, duration: 55.72, bloons: {pink: 40, purple: 30, rainbow: 40, ceramic: {count: 3, fortified: 1}}},
	{id: 49, duration: 50, bloons: {green: 343, zebra: 20, rainbow: 30, ceramic: 18}},
	{id: 50, duration: 28.98, bloons: {red: 20, lead: {count: 8, fortified: 1}, ceramic: 20, moab: 2}},
	
	{id: 51, duration: 24.14, bloons: {rainbow: 10, ceramic: 15}},
	{id: 52, duration: 20.56, bloons: {rainbow: 25, ceramic: 10, moab: 2}},
	{id: 53, duration: 35, bloons: {pink: 80, moab: 3}},
	{id: 54, duration: 19.41, bloons: {ceramic: 35, moab: 2}},
	{id: 55, duration: 29.78, bloons: {ceramic: 45, moab: 1}},
	{id: 56, duration: 16.18, bloons: {rainbow: 40, moab: 1}},
	{id: 57, duration: 26.23, bloons: {rainbow: 40, moab: 4}},
	{id: 58, duration: 43.98, bloons: {ceramic: 15, ceramic: {count: 10, fortified: 1}, moab: 5}},
	{id: 59, duration: 26.16, bloons: {lead: 50, ceramic: 30}},
	{id: 60, duration: 1, bloons: {bfb: 1}},
	
	{id: 61, duration: 20, bloons: {zebra: 150, moab: 5}},
	{id: 62, duration: 48.29, bloons: {purple: 250, rainbow: 15, moab: 5, fmoab: 2}},
	{id: 63, duration: 42.25, bloons: {lead: 75, ceramic: 122}},
	{id: 64, duration: 9.53, bloons: {moab: 6, fmoab: 3}},
	{id: 65, duration: 62, bloons: {zebra: 100, rainbow: 70, ceramic: 50, moab: 3, bfb: 2}},
	{id: 66, duration: 22.75, bloons: {moab: 8, fmoab: 3}},
	{id: 67, duration: 26.44, bloons: {fceramic: 13, moab: 8}},
	{id: 68, duration: 8.44, bloons: {moab: 4, bfb: 1}},
	{id: 69, duration: 42.13, bloons: {black: 40, flead: 40, ceramic: 50}},
	{id: 70, duration: 41.14, bloons: {white: 120, rainbow: 200, moab: 4}},
	
	{id: 71, duration: 16.55, bloons: {ceramic: 30, moab: 10}},
	{id: 72, duration: 21.7, bloons: {ceramic: 38, bfb: 2}},
	{id: 73, duration: 26.95, bloons: {moab: 8, bfb: 2}},
	{id: 74, duration: 82.39, bloons: {ceramic: 50, fceramic: 85, bfb: 1}},
	{id: 75, duration: 22.59, bloons: {lead: 14, flead: 14, fmoab: 3, bfb: 7}},
	{id: 76, duration: 1.78, bloons: {ceramic: 60}},
	{id: 77, duration: 58.92, bloons: {moab: 11, bfb: 5}},
	{id: 78, duration: 90, bloons: {purple: 80, rainbow: 150, ceramic: 147, bfb: 1}},
	{id: 79, duration: 60, bloons: {rainbow: 500, bfb: 4, fbfb: 2}},
	{id: 80, duration: 2, bloons: {zomg: 1}},
	
	{id: 81, duration: 26.47, bloons: {bfb: 17}},
	{id: 82, duration: 35.68, bloons: {bfb: 10, fbfb: 5}},
	{id: 83, duration: 60.2, bloons: {ceramic: 80, fceramic: 40, moab: 30}},
	{id: 84, duration: 25, bloons: {moab: 50, bfb: 10}},
	{id: 85, duration: 10, bloons: {zomg: 2}},
	{id: 86, duration: 20.85, bloons: {fbfb: 5}},
	{id: 87, duration: 10, bloons: {zomg: 4}},
	{id: 88, duration: 14.55, bloons: {moab: 18, bfb: 8, zomg: 2}},
	{id: 89, duration: 20.74, bloons: {fmoab: 20, fbfb: 8}},
	{id: 90, duration: 11.9, bloons: {flead: 50, ddt: 3}},
	
	{id: 91, duration: 30, bloons: {fceramic: 100, bfb: 20}},
	{id: 92, duration: 35, bloons: {fmoab: 50, zomg: 4}},
	{id: 93, duration: 20, bloons: {fbfb: 10, ddt: 6}},
	{id: 94, duration: 15, bloons: {bfb: 25, zomg: 6}},
	{id: 95, duration: 50.81, bloons: {purple: 500, flead: 250, fmoab: 50, ddt: 30}},
	{id: 96, duration: 32.12, bloons: {fmoab: 40, bfb: 30, zomg: 6}},
	{id: 97, duration: 5, bloons: {fzomg: 2}},
	{id: 98, duration: 30, bloons: {fbfb: 30, zomg: 8}},
	{id: 99, duration: 12, bloons: {moab: 60, fddt: 9}},
	{id: 100, duration: 0.1, bloons: {bad: 1}},
	
	{id: 101, duration: 9.5, bloons: {purple: 450, fceramic: 50, fmoab: 10}},
	{id: 102, duration: 46.5, bloons: {bfb: 3, fbfb: 3, zomg: 1, fzomg: 3, ddt: 18, fddt: 12}},
	{id: 103, duration: 19, bloons: {purple: 198, moab: 100, fmoab: 50, fzomg: 10}},
	{id: 104, duration: 22, bloons: {purple: 200, flead: 200, ceramic: 200, moab: 25, fmoab: 150, bfb: 25, fbfb: 14}},
	{id: 105, duration: 9, bloons: {flead: 25, ceramic: 100, fceramic: 300, bfb: 30}},
	{id: 106, duration: 33.5, bloons: {ddt: 66, fddt: 27}},
	{id: 107, duration: 10, bloons: {purple: 444, fceramic: 100, fzomg: 10}},
	{id: 108, duration: 24, bloons: {zomg: 9, fzomg: 10}},
	{id: 109, duration: 18, bloons: {purple: 15, fmoab: 30, bfb: 15, fbfb: 15, zomg: 15}},
	{id: 110, duration: 36, bloons: {bfb: 25, ddt: 18, fddt: 12}},
	
	{id: 111, duration: 18.5, bloons: {zomg: 22, fzomg: 9}},
	{id: 112, duration: 20, bloons: {fbfb: 27, fddt: 21}},
	{id: 113, duration: 21.5, bloons: {ceramic: 42, fceramic: 42, fbfb: 15, fmoab: 75}},
	{id: 114, duration: 30, bloons: {moab: 24, fmoab: 36, bfb: 12, fbfb: 8, zomg: 5, fzomg: 3, ddt: 9, fddt: 6}},
	{id: 115, duration: 30, bloons: {moab: 24, fmoab: 36, bfb: 12, fbfb: 8, zomg: 5, fzomg: 3, ddt: 9, fddt: 6}},
	{id: 116, duration: 15, bloons: {purple: 400, fbfb: 18, fzomg: 8}},
	{id: 117, duration: 14, bloons: {lead: 250, ddt: 27, fddt: 18}},
	{id: 118, duration: 16, bloons: {zomg: 12, fddt: 30}},
	{id: 119, duration: 26, bloons: {bad: 3}},
	{id: 120, duration: 51, bloons: {fmoab: 24, fbfb: 12, zomg: 12}},
	
	{id: 121, duration: 15, bloons: {fmoab: 28, fbfb: 14, fzomg: 6}},
	{id: 122, duration: 20, bloons: {flead: 225, bfb: 40, fbfb: 20}},
	{id: 123, duration: 40, bloons: {moab: 200, fzomg: 8}},
	{id: 124, duration: 30, bloons: {fbfb: 75}},
	{id: 125, duration: 40, bloons: {moab: 63, bfb: 42, zomg: 21}},
	{id: 126, duration: 27, bloons: {flead: 1, ddt: 99}},
	{id: 127, duration: 14, bloons: {moab: 48, bfb: 24}},
	{id: 128, duration: 28, bloons: {fceramic: 200, fddt: 39, bfb: 30}},
	{id: 129, duration: 28, bloons: {purple: 77, flead: 77, ceramic: 77, zomg: 7, fzomg: 7, ddt: 18}},
	{id: 130, duration: 40, bloons: {moab: 84, fmoab: 66, ddt: 48, fddt: 6}},
	
	{id: 131, duration: 39, bloons: {fzomg: 18}},
	{id: 132, duration: 41, bloons: {purple: 200, zomg: 18, fzomg: 6}},
	{id: 133, duration: 43, bloons: {moab: 27, fmoab: 12, bfb: 27, fbfb: 12, zomg: 9, fzomg: 4}},
	{id: 134, duration: 24.01, bloons: {bfb: 28, fbfb: 12}},
	{id: 135, duration: 24, bloons: {fzomg: 14, fddt: 21}},
	{id: 136, duration: 45, bloons: {fmoab: 96, bfb: 24}},
	{id: 137, duration: 8.1, bloons: {moab: 48, bfb: 24, zomg: 18}},
	{id: 138, duration: 40, bloons: {ddt: 45, fddt: 81}},
	{id: 139, duration: 45, bloons: {moab: 181, fmoab: 72}},
	{id: 140, duration: 46, bloons: {bad: 1, fbad: 1}}
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