roundType = "abr";

const rounds = [
	{id: 1, duration: 23, bloons: [ {type: 'blue', count: 10} ] },
	{id: 2, duration: 25, bloons: [ {type: 'red', count: 55} ] },
	{id: 3, duration: 16.71, bloons: [ {type: 'red', count: 15}, {type: 'blue', count: 11} ] },
	{id: 4, duration: 17.31, bloons: [ {type: 'red', count: 10}, {type: 'blue', count: 33} ] },
	{id: 5, duration: 16.5, bloons: [ {type: 'red', count: 13}, {type: 'blue', count: 15}, {type: 'green', count: 3} ] },
	{id: 6, duration: 20.54, bloons: [ {type: 'blue', count: 10}, {type: 'green', count: 13} ] },
	{id: 7, duration: 26.8, bloons: [ {type: 'blue', count: 25}, {type: 'green', count: 6}, {type: 'black', count: 2} ] },
	{id: 8, duration: 28, bloons: [ {type: 'green', count: 15}, {type: 'yellow', count: 10} ] },
	{id: 9, duration: 18.95, bloons: [ {type: 'green', count: 30} ] },
	{id: 10, duration: 44.16, bloons: [ {type: 'blue', count: 22}, {type: 'green', count: 40}, {type: 'lead', count: 2} ] },
	
	{id: 11, duration: 19.16, bloons: [ {type: 'blue', count: 20}, {type: 'green', count: 23} ] },
	{id: 12, duration: 17.39, bloons: [ {type: 'blue', count: 20}, {type: 'green', count: 6}, {type: 'pink', count: 3} ] },
	{id: 13, duration: 32.21, bloons: [ {type: 'blue', count: 50}, {type: 'yellow', count: 18} ] },
	{id: 14, duration: 26.63, bloons: [ {type: 'red', count: 49}, {type: 'blue', count: 10}, {type: 'green', count: 5}, {type: 'yellow', count: 4}, {type: 'black', count: 3}, {type: 'white', count: 1} ] },
	{id: 15, duration: 25, bloons: [ {type: 'blue', count: 20}, {type: 'green', count: 15}, {type: 'yellow', count: 12}, {type: 'pink', count: 10}, {type: 'purple', count: 3} ] },
	{id: 16, duration: 16.02, bloons: [ {type: 'green', count: 55} ] },
	{id: 17, duration: 5, bloons: [ {type: 'pink', count: 12} ] },
	{id: 18, duration: 26.82, bloons: [ {type: 'green', count: 30}, {type: 'yellow', count: 60} ] },
	{id: 19, duration: 15.76, bloons: [ {type: 'blue', count: 10}, {type: 'green', count: 5}, {type: 'pink', count: 15}, {type: 'black', count: 2} ] },
	{id: 20, duration: 5.25, bloons: [ {type: 'black', count: 6} ] },
	
	{id: 21, duration: 18.12, bloons: [ {type: 'red', count: 50}, {type: 'blue', count: 4} ] },
	{id: 22, duration: 8, bloons: [ {type: 'purple', count: 16} ] },
	{id: 23, duration: 9, bloons: [ {type: 'black', count: 7}, {type: 'white', count: 6}, {type: 'lead', count: 4} ] },
	{id: 24, duration: 1, bloons: [ {type: 'lead', count: 1} ] },
	{id: 25, duration: 21.14, bloons: [ {type: 'pink', count: 22}, {type: 'purple', count: 10} ] },
	{id: 26, duration: 18.2, bloons: [ {type: 'black', count: 15}, {type: 'zebra', count: 3}, {type: 'rainbow', count: 2} ] },
	{id: 27, duration: 34.26, bloons: [ {type: 'red', count: 100}, {type: 'blue', count: 60}, {type: 'green', count: 45}, {type: 'yellow', count: 45} ] },
	{id: 28, duration: 5, bloons: [ {type: 'lead', count: 6} ] },
	{id: 29, duration: 15.25, bloons: [ {type: 'pink', count: 50}, {type: 'white', count: 8} ] },
	{id: 30, duration: 13.07, bloons: [ {type: 'lead', count: 9} ] },
	
	{id: 31, duration: 14.71, bloons: [ {type: 'black', count: 8}, {type: 'white', count: 8}, {type: 'zebra', count: 13} ] },
	{id: 32, duration: 26, bloons: [ {type: 'purple', count: 10}, {type: 'rainbow', count: 5}, {type: 'ceramic', count: 3} ] },
	{id: 33, duration: 25.34, bloons: [ {type: 'red', count: 20}, {type: 'blue', count: 13} ] },
	{id: 34, duration: 36, bloons: [ {type: 'green', count: 200}, {type: 'rainbow', count: 6} ] },
	{id: 35, duration: 33.76, bloons: [ {type: 'purple', count: 25}, {type: 'black', count: 30}, {type: 'white', count: 25}, {type: 'ceramic', count: 3} ] },
	{id: 36, duration: 18.99, bloons: [ {type: 'yellow', count: 80}, {type: 'black', count: 10}, {type: 'ceramic', count: 2} ] },
	{id: 37, duration: 43.51, bloons: [ {type: 'black', count: 7}, {type: 'white', count: 50}, {type: 'lead', count: 18}, {type: 'zebra', count: 10} ] },
	{id: 38, duration: 29.06, bloons: [ {type: 'purple', count: 42}, {type: 'black', count: 17}, {type: 'lead', count: 14}, {type: 'rainbow', count: 7}, {type: 'ceramic', count: 1} ] },
	{id: 39, duration: 37.93, bloons: [ {type: 'white', count: 10}, {type: 'zebra', count: 20}, {type: 'rainbow', count: 17} ] },
	{id: 40, duration: 1, bloons: [ {type: 'moab', count: 1, fortified: 1} ] },
	
	{id: 41, duration: 32, bloons: [ {type: 'black', count: 60}, {type: 'zebra', count: 70} ] },
	{id: 42, duration: 10.6, bloons: [ {type: 'rainbow', count: 11} ] },
	{id: 43, duration: 9.26, bloons: [ {type: 'rainbow', count: 10}, {type: 'moab', count: 2} ] },
	{id: 44, duration: 23.67, bloons: [ {type: 'zebra', count: 40}, {type: 'lead', count: 10, fortified: 1} ] },
	{id: 45, duration: 38.08, bloons: [ {type: 'pink', count: 120}, {type: 'purple', count: 10}, {type: 'lead', count: 4, fortified: 1}, {type: 'ceramic', count: 10} ] },
	{id: 46, duration: 7, bloons: [ {type: 'ceramic', count: 8, fortified: 1} ] },
	{id: 47, duration: 24.65, bloons: [ {type: 'pink', count: 70}, {type: 'moab', count: 3} ] },
	{id: 48, duration: 52, bloons: [ {type: 'purple', count: 30}, {type: 'black', count: 80}, {type: 'lead', count: 15, fortified: 1}, {type: 'ceramic', count: 3, fortified: 1} ] },
	{id: 49, duration: 50, bloons: [ {type: 'yellow', count: 300}, {type: 'zebra', count: 10}, {type: 'rainbow', count: 20}, {type: 'ceramic', count: 14} ] },
	{id: 50, duration: 18, bloons: [ {type: 'lead', count: 8, fortified: 1}, {type: 'moab', count: 4}, {type: 'moab', count: 2, fortified: 1} ] },
	
	{id: 51, duration: 21.13, bloons: [ {type: 'zebra', count: 10}, {type: 'ceramic', count: 28, fortified: 1} ] },
	{id: 52, duration: 20.56, bloons: [ {type: 'rainbow', count: 35}, {type: 'ceramic', count: 5}, {type: 'ceramic', count: 5, fortified: 1}, {type: 'moab', count: 1}, {type: 'moab', count: 1, fortified: 1} ] },
	{id: 53, duration: 35, bloons: [ {type: 'pink', count: 120}, {type: 'moab', count: 3, fortified: 1} ] },
	{id: 54, duration: 19.41, bloons: [ {type: 'black', count: 35}, {type: 'moab', count: 1}, {type: 'bfb', count: 1} ] },
	{id: 55, duration: 29.78, bloons: [ {type: 'ceramic', count: 45}, {type: 'moab', count: 1, fortified: 1} ] },
	{id: 56, duration: 20.18, bloons: [ {type: 'purple', count: 40}, {type: 'moab', count: 5} ] },
	{id: 57, duration: 26.23, bloons: [ {type: 'ceramic', count: 25}, {type: 'moab', count: 2, fortified: 1}, {type: 'bfb', count: 1} ] },
	{id: 58, duration: 43.98, bloons: [ {type: 'ceramic', count: 15}, {type: 'ceramic', count: 10, fortified: 1}, {type: 'moab', count: 10} ] },
	{id: 59, duration: 26.16, bloons: [ {type: 'lead', count: 50}, {type: 'rainbow', count: 25}, {type: 'ceramic', count: 20, fortified: 1} ] },
	{id: 60, duration: 1, bloons: [ {type: 'bfb', count: 1, fortified: 1} ] },
	
/*	{id: 61, duration: 24.37, bloons: [ zebra: 50, flead: 15, moab: 15} ] },
	{id: 62, duration: 48.29, bloons: [ purple: 250, flead: 15, fmoab: 5, bfb: 2} ] },
	{id: 63, duration: 42.25, bloons: [ ceramic: 80, fceramic: 30, moab: 5} ] },
	{id: 64, duration: 9.53, bloons: [ fmoab: 6, bfb: 2} ] },
	{id: 65, duration: 40.66, bloons: [ rainbow: 70, fceramic: 50, fmoab: 3, bfb: 3} ] },
	{id: 66, duration: 23.75, bloons: [ moab: 6, bfb: 3} ] },
	{id: 67, duration: 26.44, bloons: [ fceramic: 20, moab: 6, fmoab: 4} ] },
	{id: 68, duration: 8.44, bloons: [ moab: 4, fbfb: 1} ] },
	{id: 69, duration: 42.13, bloons: [ purple: 40, black: 40, ceramic: 50} ] },
	{id: 70, duration: 30, bloons: [ rainbow: 200, fmoab: 6} ] },
	
	{id: 71, duration: 16.55, bloons: [ fceramic: 30, fmoab: 10} ] },
	{id: 72, duration: 21.7, bloons: [ fceramic: 38, bfb: 1, fbfb: 1} ] },
	{id: 73, duration: 26.95, bloons: [ fmoab: 8, fbfb: 2} ] },
	{id: 74, duration: 31.44, bloons: [ black: 100, fceramic: 25, fbfb: 1} ] },
	{id: 75, duration: 22.59, bloons: [ lead: 50, flead: 14, fmoab: 4, bfb: 6, fbfb: 2} ] },
	{id: 76, duration: 10, bloons: [ bfb: 10} ] },
	{id: 77, duration: 58.92, bloons: [ fmoab: 11, fbfb: 5} ] },
	{id: 78, duration: 79.4, bloons: [ purple: 80, zebra: 150, ceramic: 72, fceramic: 60, fbfb: 1} ] },
	{id: 79, duration: 60, bloons: [ rainbow: 500, fbfb: 4, zomg: 1} ] },
	{id: 80, duration: 20, bloons: [ zomg: 2} ] },
	
/*	{id: 81, duration: 26.47, bloons: [ fmoab: 20, bfb: 15} ] },
	{id: 82, duration: 35.68, bloons: [ bfb: 15, fbfb: 8, zomg: 1} ] },
	{id: 83, duration: 60.2, bloons: [ ceramic: 80, fceramic: 40, fmoab: 20} ] },
	{id: 84, duration: 35, bloons: [ moab: 50, fbfb: 15} ] },
	{id: 85, duration: 10, bloons: [ zomg: 3} ] },
	{id: 86, duration: 20.85, bloons: [ fbfb: 8} ] },
	{id: 87, duration: 10, bloons: [ zomg: 5} ] },
	{id: 88, duration: 13.05, bloons: [ fmoab: 15, bfb: 12, ddt: 3} ] },
	{id: 89, duration: 18.15, bloons: [ fmoab: 15, fbfb: 12} ] },
	{id: 90, duration: 11.9, bloons: [ fceramic: 50, ddt: 4} ] },
	
	{id: 91, duration: 30, bloons: [ fceramic: 100, fbfb: 15} ] },
	{id: 92, duration: 35, bloons: [ fmoab: 50, zomg: 4, ddt: 4} ] },
	{id: 93, duration: 20, bloons: [ fbfb: 17, fddt: 7} ] },
	{id: 94, duration: 15, bloons: [ bfb: 25, zomg: 8} ] },
	{id: 95, duration: 40.81, bloons: [ purple: 500, fmoab: 30, ddt: 30} ] },
	{id: 96, duration: 32.12, bloons: [ fmoab: 20, fbfb: 20, zomg: 11, ddt: 10} ] },
	{id: 97, duration: 4.23, bloons: [ fzomg: 2, fddt: 8} ] },
	{id: 98, duration: 20, bloons: [ fbfb: 20, zomg: 11} ] },
	{id: 99, duration: 19.28, bloons: [ moab: 30, fddt: 9, bad: 1} ] },
	{id: 100, duration: 0.1, bloons: [ fbad: 1} ] }*/
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