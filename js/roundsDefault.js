roundType = "default";

const rounds = [
	{id: 1, duration: 17.51, bloons: [{name: 'red', count: 20} ] },
	{id: 2, duration: 19, bloons: [ {name: 'red', count: 35} ] },
	{id: 3, duration: 16.71, bloons: [ {name: 'red', count: 25}, {name: 'blue', count: 5} ] },
	{id: 4, duration: 17.31, bloons: [ {name: 'red', count: 35}, {name: 'blue', count: 18} ] },
	{id: 5, duration: 16.5, bloons: [ {name: 'red', count: 5}, {name: 'blue', count: 27} ] },
	{id: 6, duration: 18.7, bloons: [ {name: 'red', count: 15}, {name: 'blue', count: 15}, {name: 'green', count: 4} ] },
	{id: 7, duration: 26.8, bloons: [ {name: 'red', count: 20}, {name: 'blue', count: 20}, {name: 'green', count: 5} ] },
	{id: 8, duration: 28.87, bloons: [ {name: 'red', count: 10}, {name: 'blue', count: 20}, {name: 'green', count: 14} ] },
	{id: 9, duration: 18.95, bloons: [ {name: 'green', count: 30} ] },
	{id: 10, duration: 47.99, bloons: [ {name: 'blue', count: 102} ] },
	
	{id: 11, duration: 19.16, bloons: [ {name: 'red', count: 10}, {name: 'blue', count: 10}, {name: 'green', count: 12}, {name: 'yellow', count: 3} ] },
	{id: 12, duration: 17.39, bloons: [ {name: 'blue', count: 15}, {name: 'green', count: 10}, {name: 'yellow', count: 5} ] },
	{id: 13, duration: 32.21, bloons: [ {name: 'blue', count: 50}, {name: 'green', count: 23} ] },
	{id: 14, duration: 26.63, bloons: [ {name: 'red', count: 49}, {name: 'blue', count: 15}, {name: 'green', count: 10}, {name: 'yellow', count: 9} ] },
	{id: 15, duration: 25, bloons: [ {name: 'red', count: 20}, {name: 'blue', count: 15}, {name: 'green', count: 12}, {name: 'yellow', count: 10}, {name: 'pink', count: 5} ] },
	{id: 16, duration: 16.02, bloons: [ {name: 'green', count: 40}, {name: 'yellow', count: 8} ] },
	{id: 17, duration: 5, bloons: [ {name: 'yellow', count: 12, regrow: true} ] },
	{id: 18, duration: 26.82, bloons: [ {name: 'green', count: 80} ] },
	{id: 19, duration: 15.76, bloons: [ {name: 'green', count: 10}, {name: 'yellow', count: 4}, {name: 'yellow', count: 5, regrow: true}, {name: 'pink', count: 15} ] },
	{id: 20, duration: 5.25, bloons: [ {name: 'black', count: 6} ] },
	
	{id: 21, duration: 18.12, bloons: [ {name: 'yellow', count: 40}, {name: 'pink', count: 14} ] },
	{id: 22, duration: 8, bloons: [ {name: 'white', count: 16} ] },
	{id: 23, duration: 6.82, bloons: [ {name: 'black', count: 7}, {name: 'white', count: 7} ] },
	{id: 24, duration: 9, bloons: [ {name: 'blue', count: 20}, {name: 'green', count: 1, camo: true} ] },
	{id: 25, duration: 21.14, bloons: [ {name: 'yellow', count: 25, regrow: true}, {name: 'purple', count: 10} ] },
	{id: 26, duration: 14.51, bloons: [ {name: 'pink', count: 23}, {name: 'zebra', count: 4} ] },
	{id: 27, duration: 34.26, bloons: [ {name: 'red', count: 100}, {name: 'blue', count: 60}, {name: 'green', count: 45}, {name: 'yellow', count: 45} ] },
	{id: 28, duration: 5, bloons: [ {name: 'lead', count: 6} ] },
	{id: 29, duration: 15.25, bloons: [ {name: 'yellow', count: 50}, {name: 'yellow', count: 15, regrow: true} ] },
	{id: 30, duration: 13.07, bloons: [ {name: 'lead', count: 9} ] },
	
	{id: 31, duration: 15.91, bloons: [ {name: 'black', count: 8}, {name: 'white', count: 8}, {name: 'zebra', count: 8}, {name: 'zebra', count: 2, regrow: true}] },
	{id: 32, duration: 27.96, bloons: [ {name: 'purple', count: 10}, {name: 'black', count: 15}, {name: 'white', count: 20} ] },
	{id: 33, duration: 25.34, bloons: [ {name: 'red', count: 20, camo: true}, {name: 'yellow', count: 13, camo: true} ] },
	{id: 34, duration: 36, bloons: [ {name: 'yellow', count: 160}, {name: 'zebra', count: 6} ] },
	{id: 35, duration: 33.76, bloons: [ {name: 'pink', count: 35}, {name: 'black', count: 30}, {name: 'white', count: 25}, {name: 'rainbow', count: 5} ] },
	{id: 36, duration: 20.99, bloons: [ {name: 'green', count: 20, camo: true, regrow: true}, {name: 'pink', count: 140} ] },
	{id: 37, duration: 43.51, bloons: [ {name: 'black', count: 25}, {name: 'white', count: 25}, {name: 'white', count: 7, camo: true}, {name: 'lead', count: 15}, {name: 'zebra', count: 10} ] },
	{id: 38, duration: 29.06, bloons: [ {name: 'pink', count: 42}, {name: 'white', count: 17}, {name: 'lead', count: 14}, {name: 'zebra', count: 10}, {name: 'ceramic', count: 2} ] },
	{id: 39, duration: 37.93, bloons: [ {name: 'black', count: 10}, {name: 'white', count: 10}, {name: 'zebra', count: 20}, {name: 'rainbow', count: 18}, {name: 'rainbow', count: 2, regrow: true} ] },
	{id: 40, duration: 1, bloons: [ {name: 'm.o.a.b.', count: 1} ] },
	
	{id: 41, duration: 46.2, bloons: [ {name: 'black', count: 60}, {name: 'zebra', count: 60} ] },
	{id: 42, duration: 11.6, bloons: [ {name: 'rainbow', count: 6, regrow: true}, {name: 'rainbow', count: 5, camo: true} ] },
	{id: 43, duration: 9.26, bloons: [ {name: 'rainbow', count: 10}, {name: 'ceramic', count: 7} ] },
	{id: 44, duration: 23.67, bloons: [ {name: 'zebra', count: 50} ] },
	{id: 45, duration: 53.1, bloons: [ {name: 'pink', count: 180}, {name: 'purple', count: 10, camo: true}, {name: 'lead', count: 4, fortified: true}, {name: 'rainbow', count: 25} ] },
	{id: 46, duration: 7, bloons: [ {name: 'ceramic', count: 6, fortified: true} ] },
	{id: 47, duration: 24.65, bloons: [ {name: 'pink', count: 70, camo: true}, {name: 'ceramic', count: 12} ] },
	{id: 48, duration: 55.72, bloons: [ {name: 'pink', count: 40}, {name: 'purple', count: 30, camo: true, regrow: true}, {name: 'rainbow', count: 40}, {name: 'ceramic', count: 3, fortified: true} ] },
	{id: 49, duration: 50, bloons: [ {name: 'green', count: 343}, {name: 'zebra', count: 20}, {name: 'rainbow', count: 20}, {name: 'rainbow', count: 10, regrow: true}, {name: 'ceramic', count: 18} ] },
	{id: 50, duration: 28.98, bloons: [ {name: 'red', count: 20}, {name: 'lead', count: 8, fortified: true}, {name: 'ceramic', count: 20}, {name: 'm.o.a.b.', count: 2} ] },
	
	{id: 51, duration: 24.14, bloons: [ {name: 'rainbow', count: 10, regrow: true}, {name: 'ceramic', count: 15, camo: true} ] },
	{id: 52, duration: 20.56, bloons: [ {name: 'rainbow', count: 25}, {name: 'ceramic', count: 10}, {name: 'm.o.a.b.', count: 2} ] },
	{id: 53, duration: 35, bloons: [ {name: 'pink', count: 80, camo: true}, {name: 'm.o.a.b.', count: 3} ] },
	{id: 54, duration: 19.41, bloons: [ {name: 'ceramic', count: 35}, {name: 'm.o.a.b.', count: 2} ] },
	{id: 55, duration: 29.78, bloons: [ {name: 'ceramic', count: 45}, {name: 'm.o.a.b.', count: 1} ] },
	{id: 56, duration: 16.18, bloons: [ {name: 'rainbow', count: 40, camo: true}, {name: 'm.o.a.b.', count: 1} ] },
	{id: 57, duration: 26.23, bloons: [ {name: 'rainbow', count: 40}, {name: 'm.o.a.b.', count: 4} ] },
	{id: 58, duration: 43.98, bloons: [ {name: 'ceramic', count: 15}, {name: 'ceramic', count: 10, fortified: true}, {name: 'm.o.a.b.', count: 5} ] },
	{id: 59, duration: 26.16, bloons: [ {name: 'lead', count: 50, camo: true}, {name: 'ceramic', count: 20}, {name: 'ceramic', count: 10, regrow: true} ] },
	{id: 60, duration: 1, bloons: [ {name: 'b.f.b.', count: 1} ] },

	{id: 61, duration: 20, bloons: [ {name: 'zebra', count: 150}, {name: 'm.o.a.b.', count: 5} ] },
	{id: 62, duration: 48.29, bloons: [ {name: 'purple', count: 250}, {name: 'rainbow', count: 15, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 5}, {name: 'm.o.a.b.', count: 2, fortified: true} ] },
	{id: 63, duration: 42.25, bloons: [ {name: 'lead', count: 75}, {name: 'ceramic', count: 122} ] },
	{id: 64, duration: 9.53, bloons: [ {name: 'm.o.a.b.', count: 6}, {name: 'm.o.a.b.', count: 3, fortified: true} ] },
	{id: 65, duration: 62, bloons: [ {name: 'zebra', count: 100}, {name: 'rainbow', count: 70}, {name: 'ceramic', count: 50}, {name: 'm.o.a.b.', count: 3}, {name: 'b.f.b.', count: 2} ] },
	{id: 66, duration: 22.75, bloons: [ {name: 'm.o.a.b.', count: 8}, {name: 'm.o.a.b.', count: 3, fortified: true} ] },
	{id: 67, duration: 26.44, bloons: [ {name: 'ceramic', count: 13, fortified: true, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 8} ] },
	{id: 68, duration: 8.44, bloons: [ {name: 'm.o.a.b.', count: 4}, {name: 'b.f.b.', count: 1} ] },
	{id: 69, duration: 42.13, bloons: [ {name: 'black', count: 40}, {name: 'lead', count: 40, fortified: true}, {name: 'ceramic', count: 50} ] },
	{id: 70, duration: 41.14, bloons: [ {name: 'white', count: 120, camo: true, regrow: true}, {name: 'rainbow', count: 200}, {name: 'm.o.a.b.', count: 4} ] },
	
	{id: 71, duration: 16.55, bloons: [ {name: 'ceramic', count: 30}, {name: 'm.o.a.b.', count: 10} ] },
	{id: 72, duration: 21.7, bloons: [ {name: 'ceramic', count: 38, regrow: true}, {name: 'b.f.b.', count: 2} ] },
	{id: 73, duration: 26.95, bloons: [ {name: 'm.o.a.b.', count: 8}, {name: 'b.f.b.', count: 2} ] },
	{id: 74, duration: 82.39, bloons: [ {name: 'ceramic', count: 50}, {name: 'ceramic', count: 60, fortified: true}, {name: 'ceramic', count: 25, fortified: true, camo: true, regrow: true}, {name: 'b.f.b.', count: 1} ] },
	{id: 75, duration: 22.59, bloons: [ {name: 'lead', count: 14}, {name: 'lead', count: 14, fortified: true}, {name: 'm.o.a.b.', count: 3, fortified: true}, {name: 'b.f.b.', count: 7} ] },
	{id: 76, duration: 1.78, bloons: [ {name: 'ceramic', count: 60, regrow: true} ] },
	{id: 77, duration: 58.92, bloons: [ {name: 'm.o.a.b.', count: 11}, {name: 'b.f.b.', count: 5} ] },
	{id: 78, duration: 90, bloons: [ {name: 'purple', count: 80}, {name: 'rainbow', count: 150}, {name: 'ceramic', count: 75}, {name: 'ceramic', count: 72, camo: true}, {name: 'b.f.b.', count: 1} ] },
	{id: 79, duration: 60, bloons: [ {name: 'rainbow', count: 500, regrow: true}, {name: 'b.f.b.', count: 4}, {name: 'b.f.b.', count: 2, fortified: true} ] },
	{id: 80, duration: 2, bloons: [ {name: 'z.o.m.g.', count: 1} ] },
	
	{id: 81, duration: 26.47, bloons: [ {name: 'b.f.b.', count: 17} ] },
	{id: 82, duration: 35.68, bloons: [ {name: 'b.f.b.', count: 10}, {name: 'b.f.b.', count: 5, fortified: true} ] },
	{id: 83, duration: 60.2, bloons: [ {name: 'ceramic', count: 40}, {name: 'ceramic', count: 40, regrow: true}, {name: 'ceramic', count: 40, fortified: true}, {name: 'm.o.a.b.', count: 30} ] },
	{id: 84, duration: 25, bloons: [ {name: 'm.o.a.b.', count: 50}, {name: 'b.f.b.', count: 10} ] },
	{id: 85, duration: 10, bloons: [ {name: 'z.o.m.g.', count: 2} ] },
	{id: 86, duration: 20.85, bloons: [ {name: 'b.f.b.', count: 5, fortified: true} ] },
	{id: 87, duration: 10, bloons: [ {name: 'z.o.m.g.', count: 4} ] },
	{id: 88, duration: 14.55, bloons: [ {name: 'm.o.a.b.', count: 18}, {name: 'b.f.b.', count: 8}, {name: 'z.o.m.g.', count: 2} ] },
	{id: 89, duration: 20.74, bloons: [ {name: 'm.o.a.b.', count: 20, fortified: true}, {name: 'b.f.b.', count: 8, fortified: true} ] },
	{id: 90, duration: 11.9, bloons: [ {name: 'lead', count: 50, fortified: true, camo: true, regrow: true}, {name: 'd.d.t.', count: 3} ] },
	
	{id: 91, duration: 30, bloons: [ {name: 'ceramic', count: 100, fortified: true}, {name: 'b.f.b.', count: 20} ] },
	{id: 92, duration: 35, bloons: [ {name: 'm.o.a.b.', count: 50, fortified: true}, {name: 'z.o.m.g.', count: 4} ] },
	{id: 93, duration: 20, bloons: [ {name: 'b.f.b.', count: 10, fortified: true}, {name: 'd.d.t.', count: 6} ] },
	{id: 94, duration: 15, bloons: [ {name: 'b.f.b.', count: 25}, {name: 'z.o.m.g.', count: 6} ] },
	{id: 95, duration: 50.81, bloons: [ {name: 'purple', count: 500, camo: true, regrow: true}, {name: 'lead', count: 250, fortified: true, camo: true, regrow: true}, {name: 'm.o.a.b.', count: 50, fortified: true}, {name: 'd.d.t.', count: 30} ] },
	{id: 96, duration: 32.12, bloons: [ {name: 'm.o.a.b.', count: 40, fortified: true}, {name: 'b.f.b.', count: 30}, {name: 'z.o.m.g.', count: 6} ] },
	{id: 97, duration: 5, bloons: [ {name: 'z.o.m.g.', count: 2, fortified: true} ] },
	{id: 98, duration: 30, bloons: [ {name: 'b.f.b.', count: 30, fortified: true}, {name: 'z.o.m.g.', count: 8} ] },
	{id: 99, duration: 12, bloons: [ {name: 'm.o.a.b.', count: 60}, {name: 'd.d.t.', count: 9, fortified: true} ] },
	{id: 100, duration: 0.1, bloons: [ {name: 'b.a.d.', count: 1} ] },
	
	{id: 101, duration: 9.5, bloons: [ {name: 'purple', count: 450}, {name: 'ceramic', count: 50, fortified: true}, {name: 'm.o.a.b.', count: 10, fortified: true} ] },
	{id: 102, duration: 46.5, bloons: [ {name: 'b.f.b.', count: 3}, {name: 'b.f.b.', count: 3, fortified: true}, {name: 'z.o.m.g.', count: 1}, {name: 'z.o.m.g.', count: 3, fortified: true}, {name: 'd.d.t.', count: 18}, {name: 'd.d.t.', count: 12, fortified: true} ] },
	{id: 103, duration: 19, bloons: [ {name: 'purple', count: 198}, {name: 'm.o.a.b.', count: 100}, {name: 'm.o.a.b.', count: 50, fortified: true}, {name: 'z.o.m.g.', count: 10, fortified: true} ] },
	{id: 104, duration: 22, bloons: [ {name: 'purple', count: 200}, {name: 'lead', count: 200, fortified: true}, {name: 'ceramic', count: 200}, {name: 'm.o.a.b.', count: 25}, {name: 'm.o.a.b.', count: 150, fortified: true}, {name: 'b.f.b.', count: 25}, {name: 'b.f.b.', count: 14, fortified: true} ] },
	{id: 105, duration: 9, bloons: [ {name: 'lead', count: 25, fortified: true}, {name: 'ceramic', count: 100}, {name: 'ceramic', count: 300, fortified: true}, {name: 'b.f.b.', count: 30} ] },
	{id: 106, duration: 33.5, bloons: [ {name: 'd.d.t.', count: 66}, {name: 'd.d.t.', count: 27, fortified: true} ] },
	{id: 107, duration: 10, bloons: [ {name: 'purple', count: 444, camo: true}, {name: 'ceramic', count: 100, fortified: true}, {name: 'z.o.m.g.', count: 10, fortified: true} ] },
	{id: 108, duration: 24, bloons: [ {name: 'z.o.m.g.', count: 9}, {name: 'z.o.m.g.', count: 10, fortified: true} ] },
	{id: 109, duration: 18, bloons: [ {name: 'purple', count: 15}, {name: 'm.o.a.b.', count: 30, fortified: true}, {name: 'b.f.b.', count: 15}, {name: 'b.f.b.', count: 15, fortified: true}, {name: 'z.o.m.g.', count: 15} ] },
	{id: 110, duration: 36, bloons: [ {name: 'b.f.b.', count: 25}, {name: 'd.d.t.', count: 18}, {name: 'd.d.t.', count: 12, fortified: true} ] },
	
	{id: 111, duration: 18.5, bloons: [ {name: 'z.o.m.g.', count: 22}, {name: 'z.o.m.g.', count: 9, fortified: true} ] },
	{id: 112, duration: 20, bloons: [ {name: 'b.f.b.', count: 27, fortified: true}, {name: 'd.d.t.', count: 21, fortified: true} ] },
	{id: 113, duration: 21.5, bloons: [ {name: 'ceramic', count: 42, camo: true}, {name: 'ceramic', count: 42, fortified: true}, {name: 'm.o.a.b.', count: 75, fortified: true}, {name: 'b.f.b.', count: 15, fortified: true} ] },
	{id: 114, duration: 30, bloons: [ {name: 'm.o.a.b.', count: 24}, {name: 'm.o.a.b.', count: 36, fortified: true}, {name: 'b.f.b.', count: 12}, {name: 'b.f.b.', count: 8, fortified: true}, {name: 'z.o.m.g.', count: 5}, {name: 'z.o.m.g.', count: 3, fortified: true}, {name: 'd.d.t.', count: 9}, {name: 'd.d.t.', count: 6, fortified: true} ] },
	{id: 115, duration: 30, bloons: [ {name: 'm.o.a.b.', count: 24}, {name: 'm.o.a.b.', count: 36, fortified: true}, {name: 'b.f.b.', count: 12}, {name: 'b.f.b.', count: 8, fortified: true}, {name: 'z.o.m.g.', count: 5}, {name: 'z.o.m.g.', count: 3, fortified: true}, {name: 'd.d.t.', count: 9}, {name: 'd.d.t.', count: 6, fortified: true} ] },
	{id: 116, duration: 15, bloons: [ {name: 'purple', count: 400}, {name: 'b.f.b.', count: 18, fortified: true}, {name: 'z.o.m.g.', count: 8, fortified: true} ] },
	{id: 117, duration: 14, bloons: [ {name: 'lead', count: 250}, {name: 'd.d.t.', count: 27}, {name: 'd.d.t.', count: 18, fortified: true} ] },
	{id: 118, duration: 16, bloons: [ {name: 'z.o.m.g.', count: 12}, {name: 'd.d.t.', count: 30, fortified: true} ] },
	{id: 119, duration: 26, bloons: [ {name: 'b.a.d.', count: 3} ] },
	{id: 120, duration: 51, bloons: [ {name: 'm.o.a.b.', count: 24, fortified: true}, {name: 'b.f.b.', count: 12, fortified: true}, {name: 'z.o.m.g.', count: 12} ] },
	
	{id: 121, duration: 15, bloons: [ {name: 'm.o.a.b.', count: 28, fortified: true}, {name: 'b.f.b.', count: 14, fortified: true}, {name: 'z.o.m.g.', count: 6, fortified: true} ] },
	{id: 122, duration: 20, bloons: [ {name: 'lead', count: 225, fortified: true}, {name: 'b.f.b.', count: 40}, {name: 'b.f.b.', count: 20, fortified: true} ] },
	{id: 123, duration: 40, bloons: [ {name: 'm.o.a.b.', count: 200}, {name: 'z.o.m.g.', count: 8, fortified: true} ] },
	{id: 124, duration: 30, bloons: [ {name: 'b.f.b.', count: 75, fortified: true} ] },
	{id: 125, duration: 40, bloons: [ {name: 'm.o.a.b.', count: 63}, {name: 'b.f.b.', count: 42}, {name: 'z.o.m.g.', count: 21} ] },
	{id: 126, duration: 27, bloons: [ {name: 'lead', count: 1, fortified: true, camo: true, regrow: true}, {name: 'd.d.t.', count: 99} ] },
	{id: 127, duration: 14, bloons: [ {name: 'm.o.a.b.', count: 48}, {name: 'b.f.b.', count: 24} ] },
	{id: 128, duration: 28, bloons: [ {name: 'ceramic', count: 200, fortified: true, camo: true}, {name: 'd.d.t.', count: 39, fortified: true}, {name: 'b.f.b.', count: 30} ] },
	{id: 129, duration: 28, bloons: [ {name: 'purple', count: 77, camo: true}, {name: 'lead', count: 77, fortified: true, camo: true}, {name: 'ceramic', count: 77, camo: true}, {name: 'z.o.m.g.', count: 7}, {name: 'z.o.m.g.', count: 7, fortified: true}, {name: 'd.d.t.', count: 18} ] },
	{id: 130, duration: 40, bloons: [ {name: 'm.o.a.b.', count: 84}, {name: 'm.o.a.b.', count: 66, fortified: true}, {name: 'd.d.t.', count: 48}, {name: 'd.d.t.', count: 6, fortified: true} ] },
	
	{id: 131, duration: 39, bloons: [ {name: 'z.o.m.g.', count: 18, fortified: true} ] },
	{id: 132, duration: 41, bloons: [ {name: 'purple', count: 200, camo: true}, {name: 'z.o.m.g.', count: 18}, {name: 'z.o.m.g.', count: 6, fortified: true} ] },
	{id: 133, duration: 43, bloons: [ {name: 'm.o.a.b.', count: 27}, {name: 'm.o.a.b.', count: 12, fortified: true}, {name: 'b.f.b.', count: 27}, {name: 'b.f.b.', count: 12, fortified: true}, {name: 'z.o.m.g.', count: 9}, {name: 'z.o.m.g.', count: 4, fortified: true} ] },
	{id: 134, duration: 24.01, bloons: [ {name: 'b.f.b.', count: 28}, {name: 'b.f.b.', count: 12, fortified: true} ] },
	{id: 135, duration: 24, bloons: [ {name: 'z.o.m.g.', count: 14, fortified: true}, {name: 'd.d.t.', count: 21, fortified: true} ] },
	{id: 136, duration: 45, bloons: [ {name: 'm.o.a.b.', count: 96, fortified: true}, {name: 'b.f.b.', count: 24} ] },
	{id: 137, duration: 8.1, bloons: [ {name: 'm.o.a.b.', count: 48}, {name: 'b.f.b.', count: 24}, {name: 'z.o.m.g.', count: 18} ] },
	{id: 138, duration: 40, bloons: [ {name: 'd.d.t.', count: 45}, {name: 'd.d.t.', count: 81, fortified: true} ] },
	{id: 139, duration: 45, bloons: [ {name: 'm.o.a.b.', count: 181}, {name: 'm.o.a.b.', count: 72, fortified: true} ] },
	{id: 140, duration: 46, bloons: [ {name: 'b.a.d.', count: 1}, {name: 'b.a.d.', count: 1, fortified: true} ] }
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