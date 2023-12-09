roundType = "default";

const rounds = [
	{id: 1, duration: 17.51, bloons: [ {type: 'red', count: 20} ] },
	{id: 2, duration: 19, bloons: [ {type: 'red', count: 35} ] },
	{id: 3, duration: 16.71, bloons: [ {type: 'red', count: 25}, {type: 'blue', count: 5} ] },
	{id: 4, duration: 17.31, bloons: [ {type: 'red', count: 35}, {type: 'blue', count: 18} ] },
	{id: 5, duration: 16.5, bloons: [ {type: 'red', count: 5}, {type: 'blue', count: 27} ] },
	{id: 6, duration: 18.7, bloons: [ {type: 'red', count: 15}, {type: 'blue', count: 15}, {type: 'green', count: 4} ] },
	{id: 7, duration: 26.8, bloons: [ {type: 'red', count: 20}, {type: 'blue', count: 20}, {type: 'green', count: 5} ] },
	{id: 8, duration: 28.87, bloons: [ {type: 'red', count: 10}, {type: 'blue', count: 20}, {type: 'green', count: 14} ] },
	{id: 9, duration: 18.95, bloons: [ {type: 'green', count: 30} ] },
	{id: 10, duration: 47.99, bloons: [ {type: 'blue', count: 102} ] },
	
	{id: 11, duration: 19.16, bloons: [ {type: 'red', count: 10}, {type: 'blue', count: 10}, {type: 'green', count: 12}, {type: 'yellow', count: 3} ] },
	{id: 12, duration: 17.39, bloons: [ {type: 'blue', count: 15}, {type: 'green', count: 10}, {type: 'yellow', count: 5} ] },
	{id: 13, duration: 32.21, bloons: [ {type: 'blue', count: 50}, {type: 'green', count: 23} ] },
	{id: 14, duration: 26.63, bloons: [ {type: 'red', count: 49}, {type: 'blue', count: 15}, {type: 'green', count: 10}, {type: 'yellow', count: 9} ] },
	{id: 15, duration: 25, bloons: [ {type: 'red', count: 20}, {type: 'blue', count: 15}, {type: 'green', count: 12}, {type: 'yellow', count: 10}, {type: 'pink', count: 5} ] },
	{id: 16, duration: 16.02, bloons: [ {type: 'green', count: 40}, {type: 'yellow', count: 8} ] },
	{id: 17, duration: 5, bloons: [ {type: 'yellow', count: 12} ] },
	{id: 18, duration: 26.82, bloons: [ {type: 'green', count: 80} ] },
	{id: 19, duration: 15.76, bloons: [ {type: 'green', count: 10}, {type: 'yellow', count: 9}, {type: 'pink', count: 15} ] },
	{id: 20, duration: 5.25, bloons: [ {type: 'black', count: 6} ] },
	
	{id: 21, duration: 18.12, bloons: [ {type: 'yellow', count: 40}, {type: 'pink', count: 14} ] },
	{id: 22, duration: 8, bloons: [ {type: 'white', count: 16} ] },
	{id: 23, duration: 6.82, bloons: [ {type: 'black', count: 7}, {type: 'white', count: 7} ] },
	{id: 24, duration: 9, bloons: [ {type: 'blue', count: 20}, {type: 'green', count: 1} ] },
	{id: 25, duration: 21.14, bloons: [ {type: 'yellow', count: 25}, {type: 'purple', count: 10} ] },
	{id: 26, duration: 14.51, bloons: [ {type: 'pink', count: 23}, {type: 'zebra', count: 4} ] },
	{id: 27, duration: 34.26, bloons: [ {type: 'red', count: 100}, {type: 'blue', count: 60}, {type: 'green', count: 45}, {type: 'yellow', count: 45} ] },
	{id: 28, duration: 5, bloons: [ {type: 'lead', count: 6} ] },
	{id: 29, duration: 15.25, bloons: [ {type: 'yellow', count: 65} ] },
	{id: 30, duration: 13.07, bloons: [ {type: 'lead', count: 9} ] },
	
	{id: 31, duration: 15.91, bloons: [ {type: 'black', count: 8}, {type: 'white', count: 8}, {type: 'zebra', count: 10} ] },
	{id: 32, duration: 27.96, bloons: [ {type: 'purple', count: 10}, {type: 'black', count: 15}, {type: 'white', count: 20} ] },
	{id: 33, duration: 25.34, bloons: [ {type: 'red', count: 20}, {type: 'yellow', count: 13} ] },
	{id: 34, duration: 36, bloons: [ {type: 'yellow', count: 160}, {type: 'zebra', count: 6} ] },
	{id: 35, duration: 33.76, bloons: [ {type: 'pink', count: 35}, {type: 'black', count: 30}, {type: 'white', count: 25}, {type: 'rainbow', count: 5} ] },
	{id: 36, duration: 20.99, bloons: [ {type: 'green', count: 20}, {type: 'pink', count: 140} ] },
	{id: 37, duration: 43.51, bloons: [ {type: 'black', count: 25}, {type: 'white', count: 32}, {type: 'lead', count: 15}, {type: 'zebra', count: 10} ] },
	{id: 38, duration: 29.06, bloons: [ {type: 'pink', count: 42}, {type: 'white', count: 17}, {type: 'lead', count: 14}, {type: 'zebra', count: 10}, {type: 'ceramic', count: 2} ] },
	{id: 39, duration: 37.93, bloons: [ {type: 'black', count: 10}, {type: 'white', count: 10}, {type: 'zebra', count: 20}, {type: 'rainbow', count: 20} ] },
	{id: 40, duration: 1, bloons: [ {type: 'moab', count: 1} ] },
	
	{id: 41, duration: 46.2, bloons: [ {type: 'black', count: 60}, {type: 'zebra', count: 60} ] },
	{id: 42, duration: 11.6, bloons: [ {type: 'rainbow', count: 11} ] },
	{id: 43, duration: 9.26, bloons: [ {type: 'rainbow', count: 10}, {type: 'ceramic', count: 7} ] },
	{id: 44, duration: 23.67, bloons: [ {type: 'zebra', count: 50} ] },
	{id: 45, duration: 53.1, bloons: [ {type: 'pink', count: 180}, {type: 'purple', count: 10}, {type: 'lead', count: 4, fortified: 1}, {type: 'rainbow', count: 25} ] },
	{id: 46, duration: 7, bloons: [ {type: 'ceramic', count: 6, fortified: 1} ] },
	{id: 47, duration: 24.65, bloons: [ {type: 'pink', count: 70}, {type: 'ceramic', count: 12} ] },
	{id: 48, duration: 55.72, bloons: [ {type: 'pink', count: 40}, {type: 'purple', count: 30}, {type: 'rainbow', count: 40}, {type: 'ceramic', count: 3, fortified: 1} ] },
	{id: 49, duration: 50, bloons: [ {type: 'green', count: 343}, {type: 'zebra', count: 20}, {type: 'rainbow', count: 30}, {type: 'ceramic', count: 18} ] },
	{id: 50, duration: 28.98, bloons: [ {type: 'red', count: 20}, {type: 'lead', count: 8, fortified: 1}, {type: 'ceramic', count: 20}, {type: 'moab', count: 2} ] },
	
	{id: 51, duration: 24.14, bloons: [ {type: 'rainbow', count: 10}, {type: 'ceramic', count: 15} ] },
	{id: 52, duration: 20.56, bloons: [ {type: 'rainbow', count: 25}, {type: 'ceramic', count: 10}, {type: 'moab', count: 2} ] },
	{id: 53, duration: 35, bloons: [ {type: 'pink', count: 80}, {type: 'moab', count: 3} ] },
	{id: 54, duration: 19.41, bloons: [ {type: 'ceramic', count: 35}, {type: 'moab', count: 2} ] },
	{id: 55, duration: 29.78, bloons: [ {type: 'ceramic', count: 45}, {type: 'moab', count: 1} ] },
	{id: 56, duration: 16.18, bloons: [ {type: 'rainbow', count: 40}, {type: 'moab', count: 1} ] },
	{id: 57, duration: 26.23, bloons: [ {type: 'rainbow', count: 40}, {type: 'moab', count: 4} ] },
	{id: 58, duration: 43.98, bloons: [ {type: 'ceramic', count: 15}, {type: 'ceramic', count: 10, fortified: 1}, {type: 'moab', count: 5} ] },
	{id: 59, duration: 26.16, bloons: [ {type: 'lead', count: 50}, {type: 'ceramic', count: 30} ] },
	{id: 60, duration: 1, bloons: [ {type: 'bfb', count: 1} ] },

	{id: 61, duration: 20, bloons: [ {type: 'zebra', count: 150}, {type: 'moab', count: 5} ] },
	{id: 62, duration: 48.29, bloons: [ {type: 'purple', count: 250}, {type: 'rainbow', count: 15}, {type: 'moab', count: 5}, {type: 'moab', count: 2, fortified: 1} ] },
	{id: 63, duration: 42.25, bloons: [ {type: 'lead', count: 75}, {type: 'ceramic', count: 122} ] },
	{id: 64, duration: 9.53, bloons: [ {type: 'moab', count: 6}, {type: 'moab', count: 3, fortified: 1} ] },
	{id: 65, duration: 62, bloons: [ {type: 'zebra', count: 100}, {type: 'rainbow', count: 70}, {type: 'ceramic', count: 50}, {type: 'moab', count: 3}, {type: 'bfb', count: 2} ] },
	{id: 66, duration: 22.75, bloons: [ {type: 'moab', count: 8}, {type: 'moab', count: 3, fortified: 1} ] },
	{id: 67, duration: 26.44, bloons: [ {type: 'ceramic', count: 13, fortified: 1}, {type: 'moab', count: 8} ] },
	{id: 68, duration: 8.44, bloons: [ {type: 'moab', count: 4}, {type: 'bfb', count: 1} ] },
	{id: 69, duration: 42.13, bloons: [ {type: 'black', count: 40}, {type: 'lead', count: 40, fortified: 1}, {type: 'ceramic', count: 50} ] },
	{id: 70, duration: 41.14, bloons: [ {type: 'white', count: 120}, {type: 'rainbow', count: 200}, {type: 'moab', count: 4} ] },
	
	{id: 71, duration: 16.55, bloons: [ {type: 'ceramic', count: 30}, {type: 'moab', count: 10} ] },
	{id: 72, duration: 21.7, bloons: [ {type: 'ceramic', count: 38}, {type: 'bfb', count: 2} ] },
	{id: 73, duration: 26.95, bloons: [ {type: 'moab', count: 8}, {type: 'bfb', count: 2} ] },
	{id: 74, duration: 82.39, bloons: [ {type: 'ceramic', count: 50}, {type: 'ceramic', count: 85, fortified: 1}, {type: 'bfb', count: 1} ] },
	{id: 75, duration: 22.59, bloons: [ {type: 'lead', count: 14}, {type: 'lead', count: 14, fortified: 1}, {type: 'moab', count: 3, fortified: 1}, {type: 'bfb', count: 7} ] },
	{id: 76, duration: 1.78, bloons: [ {type: 'ceramic', count: 60} ] },
	{id: 77, duration: 58.92, bloons: [ {type: 'moab', count: 11}, {type: 'bfb', count: 5} ] },
	{id: 78, duration: 90, bloons: [ {type: 'purple', count: 80}, {type: 'rainbow', count: 150}, {type: 'ceramic', count: 147}, {type: 'bfb', count: 1} ] },
	{id: 79, duration: 60, bloons: [ {type: 'rainbow', count: 500}, {type: 'bfb', count: 4}, {type: 'bfb', count: 2, fortified: 1} ] },
	{id: 80, duration: 2, bloons: [ {type: 'zomg', count: 1} ] },
	
	{id: 81, duration: 26.47, bloons: [ {type: 'bfb', count: 17} ] },
	{id: 82, duration: 35.68, bloons: [ {type: 'bfb', count: 10}, {type: 'bfb', count: 5, fortified: 1} ] },
	{id: 83, duration: 60.2, bloons: [ {type: 'ceramic', count: 80}, {type: 'ceramic', count: 40, fortified: 1}, {type: 'moab', count: 30} ] },
	{id: 84, duration: 25, bloons: [ {type: 'moab', count: 50}, {type: 'bfb', count: 10} ] },
	{id: 85, duration: 10, bloons: [ {type: 'zomg', count: 2} ] },
	{id: 86, duration: 20.85, bloons: [ {type: 'bfb', count: 5, fortified: 1} ] },
	{id: 87, duration: 10, bloons: [ {type: 'zomg', count: 4} ] },
	{id: 88, duration: 14.55, bloons: [ {type: 'moab', count: 18}, {type: 'bfb', count: 8}, {type: 'zomg', count: 2} ] },
	{id: 89, duration: 20.74, bloons: [ {type: 'moab', count: 20, fortified: 1}, {type: 'bfb', count: 8, fortified: 1} ] },
	{id: 90, duration: 11.9, bloons: [ {type: 'lead', count: 50, fortified: 1}, {type: 'ddt', count: 3} ] },
	
	{id: 91, duration: 30, bloons: [ {type: 'ceramic', count: 100, fortified: 1}, {type: 'bfb', count: 20} ] },
	{id: 92, duration: 35, bloons: [ {type: 'moab', count: 50, fortified: 1}, {type: 'zomg', count: 4} ] },
	{id: 93, duration: 20, bloons: [ {type: 'bfb', count: 10, fortified: 1}, {type: 'ddt', count: 6} ] },
	{id: 94, duration: 15, bloons: [ {type: 'bfb', count: 25}, {type: 'zomg', count: 6} ] },
	{id: 95, duration: 50.81, bloons: [ {type: 'purple', count: 500}, {type: 'lead', count: 250, fortified: 1}, {type: 'moab', count: 50, fortified: 1}, {type: 'ddt', count: 30} ] },
	{id: 96, duration: 32.12, bloons: [ {type: 'moab', count: 40, fortified: 1}, {type: 'bfb', count: 30}, {type: 'zomg', count: 6} ] },
	{id: 97, duration: 5, bloons: [ {type: 'zomg', count: 2, fortified: 1} ] },
	{id: 98, duration: 30, bloons: [ {type: 'bfb', count: 30, fortified: 1}, {type: 'zomg', count: 8} ] },
	{id: 99, duration: 12, bloons: [ {type: 'moab', count: 60}, {type: 'ddt', count: 9, fortified: 1} ] },
	{id: 100, duration: 0.1, bloons: [ {type: 'bad', count: 1} ] },
	
	{id: 101, duration: 9.5, bloons: [ {type: 'purple', count: 450}, {type: 'ceramic', count: 50, fortified: 1}, {type: 'moab', count: 10, fortified: 1} ] },
	{id: 102, duration: 46.5, bloons: [ {type: 'bfb', count: 3}, {type: 'bfb', count: 3, fortified: 1}, {type: 'zomg', count: 1}, {type: 'zomg', count: 3, fortified: 1}, {type: 'ddt', count: 18}, {type: 'ddt', count: 12, fortified: 1} ] },
	{id: 103, duration: 19, bloons: [ {type: 'purple', count: 198}, {type: 'moab', count: 100}, {type: 'moab', count: 50, fortified: 1}, {type: 'zomg', count: 10, fortified: 1} ] },
	{id: 104, duration: 22, bloons: [ {type: 'purple', count: 200}, {type: 'lead', count: 200, fortified: 1}, {type: 'ceramic', count: 200}, {type: 'moab', count: 25}, {type: 'moab', count: 150, fortified: 1}, {type: 'bfb', count: 25}, {type: 'bfb', count: 14, fortified: 1} ] },
	{id: 105, duration: 9, bloons: [ {type: 'lead', count: 25, fortified: 1}, {type: 'ceramic', count: 100}, {type: 'ceramic', count: 300, fortified: 1}, {type: 'bfb', count: 30} ] },
	{id: 106, duration: 33.5, bloons: [ {type: 'ddt', count: 66}, {type: 'ddt', count: 27, fortified: 1} ] },
	{id: 107, duration: 10, bloons: [ {type: 'purple', count: 444}, {type: 'ceramic', count: 100, fortified: 1}, {type: 'zomg', count: 10, fortified: 1} ] },
	{id: 108, duration: 24, bloons: [ {type: 'zomg', count: 9}, {type: 'zomg', count: 10, fortified: 1} ] },
	{id: 109, duration: 18, bloons: [ {type: 'purple', count: 15}, {type: 'moab', count: 30, fortified: 1}, {type: 'bfb', count: 15}, {type: 'bfb', count: 15, fortified: 1}, {type: 'zomg', count: 15} ] },
	{id: 110, duration: 36, bloons: [ {type: 'bfb', count: 25}, {type: 'ddt', count: 18}, {type: 'ddt', count: 12, fortified: 1} ] },
	
	{id: 111, duration: 18.5, bloons: [ {type: 'zomg', count: 22}, {type: 'zomg', count: 9, fortified: 1} ] },
	{id: 112, duration: 20, bloons: [ {type: 'bfb', count: 27, fortified: 1}, {type: 'ddt', count: 21, fortified: 1} ] },
	{id: 113, duration: 21.5, bloons: [ {type: 'ceramic', count: 42}, {type: 'ceramic', count: 42, fortified: 1}, {type: 'moab', count: 75, fortified: 1}, {type: 'bfb', count: 15, fortified: 1} ] },
	{id: 114, duration: 30, bloons: [ {type: 'moab', count: 24}, {type: 'moab', count: 36, fortified: 1}, {type: 'bfb', count: 12}, {type: 'bfb', count: 8, fortified: 1}, {type: 'zomg', count: 5}, {type: 'zomg', count: 3, fortified: 1}, {type: 'ddt', count: 9}, {type: 'ddt', count: 6, fortified: 1} ] },
	{id: 115, duration: 30, bloons: [ {type: 'moab', count: 24}, {type: 'moab', count: 36, fortified: 1}, {type: 'bfb', count: 12}, {type: 'bfb', count: 8, fortified: 1}, {type: 'zomg', count: 5}, {type: 'zomg', count: 3, fortified: 1}, {type: 'ddt', count: 9}, {type: 'ddt', count: 6, fortified: 1} ] },
	{id: 116, duration: 15, bloons: [ {type: 'purple', count: 400}, {type: 'bfb', count: 18, fortified: 1}, {type: 'zomg', count: 8, fortified: 1} ] },
	{id: 117, duration: 14, bloons: [ {type: 'lead', count: 250}, {type: 'ddt', count: 27}, {type: 'ddt', count: 18, fortified: 1} ] },
	{id: 118, duration: 16, bloons: [ {type: 'zomg', count: 12}, {type: 'ddt', count: 30, fortified: 1} ] },
	{id: 119, duration: 26, bloons: [ {type: 'bad', count: 3} ] },
/*	{id: 120, duration: 51, bloons: [ fmoab: 24, fbfb: 12, zomg: 12} ] },
	
	{id: 121, duration: 15, bloons: [ fmoab: 28, fbfb: 14, fzomg: 6} ] },
	{id: 122, duration: 20, bloons: [ flead: 225, bfb: 40, fbfb: 20} ] },
	{id: 123, duration: 40, bloons: [ moab: 200, fzomg: 8} ] },
	{id: 124, duration: 30, bloons: [ fbfb: 75} ] },
	{id: 125, duration: 40, bloons: [ moab: 63, bfb: 42, zomg: 21} ] },
	{id: 126, duration: 27, bloons: [ flead: 1, ddt: 99} ] },
	{id: 127, duration: 14, bloons: [ moab: 48, bfb: 24} ] },
	{id: 128, duration: 28, bloons: [ fceramic: 200, fddt: 39, bfb: 30} ] },
	{id: 129, duration: 28, bloons: [ purple: 77, flead: 77, ceramic: 77, zomg: 7, fzomg: 7, ddt: 18} ] },
	{id: 130, duration: 40, bloons: [ moab: 84, fmoab: 66, ddt: 48, fddt: 6} ] },
	
	{id: 131, duration: 39, bloons: [ fzomg: 18} ] },
	{id: 132, duration: 41, bloons: [ purple: 200, zomg: 18, fzomg: 6} ] },
	{id: 133, duration: 43, bloons: [ moab: 27, fmoab: 12, bfb: 27, fbfb: 12, zomg: 9, fzomg: 4} ] },
	{id: 134, duration: 24.01, bloons: [ bfb: 28, fbfb: 12} ] },
	{id: 135, duration: 24, bloons: [ fzomg: 14, fddt: 21} ] },
	{id: 136, duration: 45, bloons: [ fmoab: 96, bfb: 24} ] },
	{id: 137, duration: 8.1, bloons: [ moab: 48, bfb: 24, zomg: 18} ] },
	{id: 138, duration: 40, bloons: [ ddt: 45, fddt: 81} ] },
	{id: 139, duration: 45, bloons: [ moab: 181, fmoab: 72} ] },
	{id: 140, duration: 46, bloons: [ bad: 1, fbad: 1} ] } */
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