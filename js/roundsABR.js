roundType = "abr";

const rounds = [
	{id: 1, duration: 23, bloons: [ {name: 'blue', count: 10} ] },
	{id: 2, duration: 25, bloons: [ {name: 'red', count: 55} ] },
	{id: 3, duration: 16.71, bloons: [ {name: 'red', count: 15}, {name: 'blue', count: 6}, {name: 'blue', count: 5, regrow: true} ] },
	{id: 4, duration: 17.31, bloons: [ {name: 'red', count: 10}, {name: 'blue', count: 33} ] },
	{id: 5, duration: 16.5, bloons: [ {name: 'red', count: 12, camo: true}, {name: 'red', count: 1, camo: true, regrow: true}, {name: 'blue', count: 15, regrow: true}, {name: 'green', count: 3} ] },
	{id: 6, duration: 20.54, bloons: [ {name: 'blue', count: 10}, {name: 'green', count: 8}, {name: 'green', count: 5, regrow: true} ] },
	{id: 7, duration: 26.8, bloons: [ {name: 'blue', count: 15, camo: true}, {name: 'blue', count: 10, regrow: true}, {name: 'green', count: 6}, {name: 'black', count: 2} ] },
	{id: 8, duration: 28, bloons: [ {name: 'green', count: 12}, {name: 'green', count: 3, regrow: true}, {name: 'yellow', count: 10} ] },
	{id: 9, duration: 18.95, bloons: [ {name: 'green', count: 30, regrow: true} ] },
	{id: 10, duration: 44.16, bloons: [ {name: 'blue', count: 22}, {name: 'green', count: 40}, {name: 'lead', count: 2} ] },
	
	{id: 11, duration: 19.16, bloons: [ {name: 'blue', count: 10}, {name: 'blue', count: 10, regrow: true}, {name: 'green', count: 20}, {name: 'green', count: 3, camo: true} ] },
	{id: 12, duration: 17.39, bloons: [ {name: 'blue', count: 20}, {name: 'green', count: 6, regrow: true}, {name: 'pink', count: 3} ] },
	{id: 13, duration: 32.21, bloons: [ {name: 'blue', count: 50}, {name: 'yellow', count: 18} ] },
	{id: 14, duration: 26.63, bloons: [ {name: 'red', count: 49}, {name: 'blue', count: 10, regrow: true}, {name: 'green', count: 5, camo: true, regrow: true}, {name: 'yellow', count: 4, regrow: true}, {name: 'black', count: 3}, {name: 'white', count: 1} ] },
	{id: 15, duration: 25, bloons: [ {name: 'blue', count: 20}, {name: 'green', count: 15}, {name: 'yellow', count: 12}, {name: 'pink', count: 10}, {name: 'purple', count: 3} ] },
	{id: 16, duration: 16.02, bloons: [ {name: 'green', count: 15}, {name: 'green', count: 20, camo: true}, {name: 'green', count: 20, regrow: true} ] },
	{id: 17, duration: 5, bloons: [ {name: 'pink', count: 12} ] },
	{id: 18, duration: 26.82, bloons: [ {name: 'green', count: 30}, {name: 'yellow', count: 60} ] },
	{id: 19, duration: 15.76, bloons: [ {name: 'blue', count: 10}, {name: 'green', count: 5, regrow: true}, {name: 'pink', count: 15}, {name: 'black', count: 2} ] },
	{id: 20, duration: 5.25, bloons: [ {name: 'black', count: 6, regrow: true} ] },
	
	{id: 21, duration: 18.12, bloons: [ {name: 'red', count: 50}, {name: 'blue', count: 4} ] },
	{id: 22, duration: 8, bloons: [ {name: 'purple', count: 16} ] },
	{id: 23, duration: 9, bloons: [ {name: 'black', count: 7}, {name: 'white', count: 6}, {name: 'lead', count: 4} ] },
	{id: 24, duration: 1, bloons: [ {name: 'lead', count: 1, camo: true} ] },
	{id: 25, duration: 21.14, bloons: [ {name: 'pink', count: 22, regrow: true}, {name: 'purple', count: 10, regrow: true} ] },
	{id: 26, duration: 18.2, bloons: [ {name: 'black', count: 15}, {name: 'zebra', count: 3}, {name: 'rainbow', count: 2} ] },
	{id: 27, duration: 34.26, bloons: [ {name: 'red', count: 100, camo: true}, {name: 'blue', count: 60, camo: true}, {name: 'green', count: 45, camo: true}, {name: 'yellow', count: 45, camo: true} ] },
	{id: 28, duration: 5, bloons: [ {name: 'lead', count: 6, regrow: true} ] },
	{id: 29, duration: 15.25, bloons: [ {name: 'pink', count: 50, regrow: true}, {name: 'white', count: 8} ] },
	{id: 30, duration: 13.07, bloons: [ {name: 'lead', count: 9, camo: true} ] },
	
	{id: 31, duration: 14.71, bloons: [ {name: 'black', count: 8}, {name: 'white', count: 8}, {name: 'zebra', count: 10}, {name: 'zebra', count: 3, regrow: true} ] },
	{id: 32, duration: 26, bloons: [ {name: 'purple', count: 10}, {name: 'rainbow', count: 5}, {name: 'ceramic', count: 3} ] },
	{id: 33, duration: 25.34, bloons: [ {name: 'red', count: 20, camo: true}, {name: 'blue', count: 13, camo: true} ] },
	{id: 34, duration: 36, bloons: [ {name: 'green', count: 200}, {name: 'rainbow', count: 6} ] },
	{id: 35, duration: 33.76, bloons: [ {name: 'purple', count: 25}, {name: 'black', count: 30, camo: true}, {name: 'white', count: 25, regrow: true}, {name: 'ceramic', count: 3} ] },
	{id: 36, duration: 18.99, bloons: [ {name: 'yellow', count: 80, camo: true, regrow: true}, {name: 'black', count: 10}, {name: 'ceramic', count: 2} ] },
	{id: 37, duration: 43.51, bloons: [ {name: 'black', count: 7, regrow: true}, {name: 'white', count: 25}, {name: 'white', count: 25, regrow: true}, {name: 'lead', count: 18}, {name: 'zebra', count: 10} ] },
	{id: 38, duration: 29.06, bloons: [ {name: 'purple', count: 42}, {name: 'black', count: 17}, {name: 'lead', count: 14}, {name: 'rainbow', count: 7}, {name: 'ceramic', count: 1, regrow: true} ] },
	{id: 39, duration: 37.93, bloons: [ {name: 'white', count: 10, camo: true, regrow: true}, {name: 'zebra', count: 20}, {name: 'rainbow', count: 15}, {name: 'rainbow', count: 2, camo: true} ] },
	{id: 40, duration: 1, bloons: [ {name: 'm.o.a.b.', count: 1, fortified: true} ] },
	
	{id: 41, duration: 32, bloons: [ {name: 'black', count: 60}, {name: 'zebra', count: 70} ] },
	{id: 42, duration: 10.6, bloons: [ {name: 'rainbow', count: 11, camo: true, regrow: true} ] },
	{id: 43, duration: 9.26, bloons: [ {name: 'rainbow', count: 10}, {name: 'm.o.a.b.', count: 2} ] },
	{id: 44, duration: 23.67, bloons: [ {name: 'zebra', count: 40}, {name: 'lead', count: 10, fortified: true} ] },
	{id: 45, duration: 38.08, bloons: [ {name: 'pink', count: 120}, {name: 'purple', count: 10, camo: true}, {name: 'lead', count: 4, fortified: true}, {name: 'ceramic', count: 10} ] },
	{id: 46, duration: 7, bloons: [ {name: 'ceramic', count: 8, fortified: true} ] },
	{id: 47, duration: 24.65, bloons: [ {name: 'pink', count: 70, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 3} ] },
	{id: 48, duration: 52, bloons: [ {name: 'purple', count: 30, camo: true, regrow: true}, {name: 'black', count: 80, regrow: true}, {name: 'lead', count: 15, fortified: true, regrow: true}, {name: 'ceramic', count: 3, fortified: true} ] },
	{id: 49, duration: 50, bloons: [ {name: 'yellow', count: 300, regrow: true}, {name: 'zebra', count: 10, camo: true}, {name: 'rainbow', count: 10, camo: true}, {name: 'rainbow', count: 10, regrow: true}, {name: 'ceramic', count: 14, regrow: true} ] },
	{id: 50, duration: 18, bloons: [ {name: 'lead', count: 8, fortified: true, regrow: true}, {name: 'm.o.a.b.', count: 4}, {name: 'm.o.a.b.', count: 2, fortified: true} ] },
	
	{id: 51, duration: 21.13, bloons: [ {name: 'zebra', count: 10}, {name: 'ceramic', count: 28, fortified: true, camo: true} ] },
	{id: 52, duration: 20.56, bloons: [ {name: 'rainbow', count: 35}, {name: 'ceramic', count: 5, regrow: true}, {name: 'ceramic', count: 5, fortified: true}, {name: 'm.o.a.b.', count: 1}, {name: 'm.o.a.b.', count: 1, fortified: true} ] },
	{id: 53, duration: 35, bloons: [ {name: 'pink', count: 120, camo: true}, {name: 'm.o.a.b.', count: 3, fortified: true} ] },
	{id: 54, duration: 19.41, bloons: [ {name: 'black', count: 35, regrow: true}, {name: 'm.o.a.b.', count: 1}, {name: 'b.f.b.', count: 1} ] },
	{id: 55, duration: 29.78, bloons: [ {name: 'ceramic', count: 20}, {name: 'ceramic', count: 25, camo: true}, {name: 'm.o.a.b.', count: 1, fortified: true} ] },
	{id: 56, duration: 20.18, bloons: [ {name: 'purple', count: 40, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 5} ] },
	{id: 57, duration: 26.23, bloons: [ {name: 'ceramic', count: 25}, {name: 'm.o.a.b.', count: 2, fortified: true}, {name: 'b.f.b.', count: 1} ] },
	{id: 58, duration: 43.98, bloons: [ {name: 'ceramic', count: 15}, {name: 'ceramic', count: 10, fortified: true, regrow: true}, {name: 'm.o.a.b.', count: 10} ] },
	{id: 59, duration: 26.16, bloons: [ {name: 'lead', count: 50, camo: true, regrow: true}, {name: 'rainbow', count: 25}, {name: 'ceramic', count: 20, fortified: true, camo: true} ] },
	{id: 60, duration: 1, bloons: [ {name: 'b.f.b.', count: 1, fortified: true} ] },
	
	{id: 61, duration: 24.37, bloons: [ {name: 'zebra', count: 50, regrow: true}, {name: 'lead', count: 15, fortified: true}, {name: 'm.o.a.b.', count: 15} ] },
	{id: 62, duration: 48.29, bloons: [ {name: 'purple', count: 250}, {name: 'lead', count: 15, fortified: true, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 5, fortified: true}, {name: 'b.f.b.', count: 2} ] },
	{id: 63, duration: 42.25, bloons: [ {name: 'ceramic', count: 40}, {name: 'ceramic', count: 40, camo: true}, {name: 'ceramic', count: 30, fortified: true}, {name: 'm.o.a.b.', count: 5} ] },
	{id: 64, duration: 9.53, bloons: [ {name: 'm.o.a.b.', count: 6, fortified: true}, {name: 'b.f.b.', count: 2} ] },
	{id: 65, duration: 40.66, bloons: [ {name: 'rainbow', count: 70}, {name: 'ceramic', count: 50, fortified: true}, {name: 'm.o.a.b.', count: 3, fortified: true}, {name: 'b.f.b.', count: 3} ] },
	{id: 66, duration: 23.75, bloons: [ {name: 'm.o.a.b.', count: 6}, {name: 'b.f.b.', count: 3} ] },
	{id: 67, duration: 26.44, bloons: [ {name: 'ceramic', count: 20, fortified: true, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 6}, {name: 'm.o.a.b.', count: 4, fortified: true} ] },
	{id: 68, duration: 8.44, bloons: [ {name: 'm.o.a.b.', count: 4}, {name: 'b.f.b.', count: 1, fortified: true} ] },
	{id: 69, duration: 42.13, bloons: [ {name: 'purple', count: 40, camo: true, regrow: true}, {name: 'black', count: 40, camo: true, regrow: true}, {name: 'ceramic', count: 50, camo: true} ] },
	{id: 70, duration: 30, bloons: [ {name: 'rainbow', count: 200}, {name: 'm.o.a.b.', count: 6, fortified: true} ] },
	
	{id: 71, duration: 16.55, bloons: [ {name: 'ceramic', count: 30, fortified: true, regrow: true}, {name: 'm.o.a.b.', count: 10, fortified: true} ] },
	{id: 72, duration: 21.7, bloons: [ {name: 'ceramic', count: 38, fortified: true}, {name: 'b.f.b.', count: 1}, {name: 'b.f.b.', count: 1, fortified: true} ] },
	{id: 73, duration: 26.95, bloons: [ {name: 'm.o.a.b.', count: 8, fortified: true}, {name: 'b.f.b.', count: 2, fortified: true} ] },
	{id: 74, duration: 31.44, bloons: [ {name: 'black', count: 100, regrow: true}, {name: 'ceramic', count: 25, fortified: true, camo: true, regrow: true}, {name: 'b.f.b.', count: 1, fortified: true} ] },
	{id: 75, duration: 22.59, bloons: [ {name: 'lead', count: 50}, {name: 'lead', count: 14, fortified: true}, {name: 'm.o.a.b.', count: 4, fortified: true}, {name: 'b.f.b.', count: 6}, {name: 'b.f.b.', count: 2, fortified: true} ] },
	{id: 76, duration: 10, bloons: [ {name: 'b.f.b.', count: 10} ] },
	{id: 77, duration: 58.92, bloons: [ {name: 'm.o.a.b.', count: 11, fortified: true}, {name: 'b.f.b.', count: 5, fortified: true} ] },
	{id: 78, duration: 79.4, bloons: [ {name: 'purple', count: 80}, {name: 'zebra', count: 150}, {name: 'ceramic', count: 72, camo: true}, {name: 'ceramic', count: 60, fortified: true}, {name: 'b.f.b.', count: 1, fortified: true} ] },
	{id: 79, duration: 60, bloons: [ {name: 'rainbow', count: 500, camo: true}, {name: 'b.f.b.', count: 4, fortified: true}, {name: 'z.o.m.g.', count: 1} ] },
	{id: 80, duration: 20, bloons: [ {name: 'z.o.m.g.', count: 2} ] },
	
	{id: 81, duration: 26.47, bloons: [ {name: 'm.o.a.b.', count: 20, fortified: true}, {name: 'b.f.b.', count: 15} ] },
	{id: 82, duration: 35.68, bloons: [ {name: 'b.f.b.', count: 15}, {name: 'b.f.b.', count: 8, fortified: true}, {name: 'z.o.m.g.', count: 1} ] },
	{id: 83, duration: 60.2, bloons: [ {name: 'ceramic', count: 40, camo: true}, {name: 'ceramic', count: 40, regrow: true}, {name: 'ceramic', count: 40, fortified: true, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 20, fortified: true} ] },
	{id: 84, duration: 35, bloons: [ {name: 'm.o.a.b.', count: 50}, {name: 'b.f.b.', count: 15, fortified: true} ] },
	{id: 85, duration: 10, bloons: [ {name: 'z.o.m.g.', count: 3} ] },
	{id: 86, duration: 20.85, bloons: [ {name: 'b.f.b.', count: 8, fortified: true} ] },
	{id: 87, duration: 10, bloons: [ {name: 'z.o.m.g.', count: 5} ] },
	{id: 88, duration: 13.05, bloons: [ {name: 'm.o.a.b.', count: 15, fortified: true}, {name: 'b.f.b.', count: 12}, {name: 'd.d.t.', count: 3} ] },
	{id: 89, duration: 18.15, bloons: [ {name: 'm.o.a.b.', count: 15, fortified: true}, {name: 'b.f.b.', count: 12, fortified: true} ] },
	{id: 90, duration: 11.9, bloons: [ {name: 'ceramic', count: 50, fortified: true, regrow: true}, {name: 'd.d.t.', count: 4} ] },
	
	{id: 91, duration: 30, bloons: [ {name: 'ceramic', count: 100, fortified: true}, {name: 'b.f.b.', count: 15, fortified: true} ] },
	{id: 92, duration: 35, bloons: [ {name: 'm.o.a.b.', count: 50, fortified: true}, {name: 'z.o.m.g.', count: 4}, {name: 'd.d.t.', count: 4} ] },
	{id: 93, duration: 20, bloons: [ {name: 'b.f.b.', count: 17, fortified: true}, {name: 'd.d.t.', count: 7, fortified: true} ] },
	{id: 94, duration: 15, bloons: [ {name: 'b.f.b.', count: 25}, {name: 'z.o.m.g.', count: 8} ] },
	{id: 95, duration: 40.81, bloons: [ {name: 'purple', count: 500, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 30, fortified: true}, {name: 'd.d.t.', count: 30} ] },
	{id: 96, duration: 32.12, bloons: [ {name: 'm.o.a.b.', count: 20, fortified: true}, {name: 'b.f.b.', count: 20, fortified: true}, {name: 'z.o.m.g.', count: 11}, {name: 'd.d.t.', count: 10} ] },
	{id: 97, duration: 4.23, bloons: [ {name: 'z.o.m.g.', count: 2, fortified: true}, {name: 'd.d.t.', count: 8, fortified: true} ] },
	{id: 98, duration: 20, bloons: [ {name: 'b.f.b.', count: 20, fortified: true}, {name: 'z.o.m.g.', count: 11} ] },
	{id: 99, duration: 19.28, bloons: [ {name: 'm.o.a.b.', count: 30}, {name: 'd.d.t.', count: 9, fortified:1 }, {name: 'b.a.d.', count: 1} ] },
	{id: 100, duration: 0.1, bloons: [ {name: 'b.a.d.', count: 1, fortified: true} ] }
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