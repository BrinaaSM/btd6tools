const startInput = document.getElementById("start-round-input");
const endInput = document.getElementById("end-round-input");
const cashInput = document.getElementById("cash-input");

const rbeOutputTotal = document.getElementById("rbe-output-total");
const xpOutputTotal = document.getElementById("xp-output-total");
const cashOutputTotal = document.getElementById("cash-output-total");
const durationOutputTotal = document.getElementById("duration-output-total");

const rbeOutputStart = document.getElementById("rbe-output-start");
const xpOutputStart = document.getElementById("xp-output-start");
const cashOutputStart = document.getElementById("cash-output-start");
const durationOutputStart = document.getElementById("duration-output-start");

const rbeOutputEnd = document.getElementById("rbe-output-end");
const xpOutputEnd = document.getElementById("xp-output-end");
const cashOutputEnd = document.getElementById("cash-output-end");
const durationOutputEnd = document.getElementById("duration-output-end");

/*
r red
b blue
g green
y yellow
p pink
pu purple
bl black
w white
l lead
fl fortified lead
z zebra
rb rainbow
c ceramic
fc fortified ceramic
m moab
fm fortified M.O.A.B.
f B.F.B.
ff fortified B.F.B.
z Z.O.M.G.
fz fortified Z.O.M.G.
d D.D.T
fd fortified D.D.T.
a B.A.D.
fa fortified B.A.D.
*/
const rounds = [
	{id: 1, duration: 17.51, r: 20, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 2, duration: 19, r: 35, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 3, duration: 16.71, r: 25, b: 5, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 4, duration: 17.31, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 5, duration: 16.5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 6, duration: 18.7, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 7, duration: 26.8, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 8, duration: 28.87, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 9, duration: 18.95, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 10, duration: 47.99, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 11, duration: 19.16, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 12, duration: 17.39, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 13, duration: 32.21, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 14, duration: 26.63, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 15, duration: 25, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 16, duration: 16.02, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 17, duration: 5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 18, duration: 26.82, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 19, duration: 15.76, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 20, duration: 5.25, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 21, duration: 18.12, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 22, duration: 8, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 23, duration: 6.82, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 24, duration: 9, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 25, duration: 21.14, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 26, duration: 14.51, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 27, duration: 34.26, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 28, duration: 5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 29, duration: 15.25, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 30, duration: 13.07, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 31, duration: 15.91, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 32, duration: 27.96, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 33, duration: 25.34, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 34, duration: 36, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 35, duration: 33.76, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 36, duration: 20.99, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 37, duration: 43.51, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 38, duration: 29.06, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 39, duration: 37.93, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 40, duration: 1, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 41, duration: 46.2, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 42, duration: 11.6, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 43, duration: 9.26, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 44, duration: 23.67, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 45, duration: 53.1, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 46, duration: 7, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 47, duration: 24.65, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 48, duration: 55.72, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 49, duration: 50, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 50, duration: 28.98, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 51, duration: 24.14, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 52, duration: 20.56, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 53, duration: 35, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 54, duration: 19.41, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 55, duration: 29.78, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 56, duration: 16.18, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 57, duration: 26.23, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 58, duration: 43.98, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 59, duration: 26.16, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 60, duration: 1, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 61, duration: 20, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 62, duration: 48.29, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 63, duration: 42.25, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 64, duration: 9.53, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 65, duration: 62, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 66, duration: 22.75, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 67, duration: 26.44, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 68, duration: 8.44, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 69, duration: 42.13, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 70, duration: 41.14, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 71, duration: 16.55, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 72, duration: 21.7, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 73, duration: 26.95, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 74, duration: 82.39, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 75, duration: 22.59, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 76, duration: 1.78, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 77, duration: 58.92, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 78, duration: 90, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 79, duration: 60, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 80, duration: 2, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 81, duration: 26.47, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 82, duration: 35.68, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 83, duration: 60.2, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 84, duration: 25, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 85, duration: 10, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 86, duration: 20.85, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 87, duration: 10, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 88, duration: 14.55, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 89, duration: 20.74, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 90, duration: 11.9, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 91, duration: 30, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 92, duration: 35, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 93, duration: 20, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 94, duration: 15, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 95, duration: 50.81, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 96, duration: 32.12, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 97, duration: 5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 98, duration: 30, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 99, duration: 12, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 100, duration: 0.1, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 101, duration: 9.5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 102, duration: 46.5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 103, duration: 19, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 104, duration: 22, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 105, duration: 9, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 106, duration: 33.5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 107, duration: 10, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 108, duration: 24, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 109, duration: 18, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 110, duration: 36, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 111, duration: 18.5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 112, duration: 20, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 113, duration: 21.5, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 114, duration: 30, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 115, duration: 30, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 116, duration: 15, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 117, duration: 14, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 118, duration: 16, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 119, duration: 26, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 120, duration: 51, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 121, duration: 15, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 122, duration: 20, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 123, duration: 40, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 124, duration: 30, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 125, duration: 40, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 126, duration: 27, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 127, duration: 14, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 128, duration: 28, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 129, duration: 28, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 130, duration: 40, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	
	{id: 131, duration: 39, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 132, duration: 41, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 133, duration: 43, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 134, duration: 24.01, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 135, duration: 24, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 136, duration: 45, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 137, duration: 8.1, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 138, duration: 40, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 139, duration: 45, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0},
	{id: 140, duration: 46, r: 0, b: 0, g: 0, y: 0, p: 0, pu: 0, bl: 0, w: 0, l: 0, fl: 0, z:0, rb: 0, c: 0, fc: 0, m: 0, fm: 0, f: 0, ff: 0, z: 0, fz: 0, d: 0, fd: 0, a: 0, fa: 0}
	];
	
var startRound = 1;
var endRound = 1;
var currentCash = 0;

function inputHandlerStart(e) {
	startRound = e.target.value;
	if(startRound < 1) {
		startRound = "";
	}
	if(startRound > 140) {
		startRound = 140;
	}
	startInput.value = startRound;
}

function inputHandlerEnd(e) {
	endRound = e.target.value;
	if(endRound < 1) {
		endRound = "";
	}
	if(endRound > 140) {
		endRound = 140;
	}
	endInput.value = endRound;
}

function checkValidRounds() {
	if(startRound === undefined || startRound === "") {	
		startRound = 1;
	}
	if(endRound === undefined || endRound === "") {
		endRound = 1;
	}
	if (parseInt(startRound) > parseInt(endRound)) {
		endRound = startRound;
	}
	startInput.value = startRound;
	endInput.value = endRound;
}

function inputHandlerCash(e) {
	var regex=/^[0-9]+$/; // only numbers valid
	var max_integer = 2147483647;
	currentCash = e.target.value;
	if(currentCash < 0) {
		cashInput.value = currentCash;
		currentCash = 0;
	}
	if (!currentCash.match(regex)) {
		cashInput.value = "";
		currentCash = 0;
	}
	if(currentCash > max_integer) {
		currentCash = max_integer;
		cashInput.value = currentCash;
	}
}

function calcAll() {
	checkValidRounds();
	var startRoundResult = getRound(startRound);
	var endRoundResult = getRound(endRound);
	var incomeSum = sumIncome();
	
	rbeOutputTotal.innerHTML = sumRBE().toLocaleString() + " RBE";
	xpOutputTotal.innerHTML = sumXP().toLocaleString() + " XP";
	cashOutputTotal.innerHTML = "$"+ Math.floor(incomeSum).toLocaleString() + " + $" + currentCash.toLocaleString() + " = $" + (parseInt(currentCash) + parseInt(incomeSum)).toLocaleString();
	durationOutputTotal.innerHTML = convertDuration(sumDuration()) + "s";
	
	rbeOutputStart.innerHTML = calcRBE(startRound).toLocaleString() + " RBE";
	xpOutputStart.innerHTML = calcXP(startRound).toLocaleString() + " XP";
	cashOutputStart.innerHTML = "$"+ Math.floor(calcIncome(startRound)).toLocaleString();
	durationOutputStart.innerHTML = convertDuration(startRoundResult.duration) + "s";
	
	rbeOutputEnd.innerHTML = calcRBE(endRound).toLocaleString() + " RBE";
	xpOutputEnd.innerHTML = calcXP(endRound).toLocaleString() + " XP";
	cashOutputEnd.innerHTML = "$"+ Math.floor(calcIncome(endRound)).toLocaleString();
	durationOutputEnd.innerHTML = convertDuration(endRoundResult.duration) + "s";
}

function getRound(round) {
  for (var i = 0; i < rounds.length; i++) {
    if (parseInt(rounds[i].id) === parseInt(round)) {
		return rounds[i];
	}
  }
}

function sumIncome() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += calcIncome(i);
	}
	return sum;
}
	
function sumRBE() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += calcRBE(i);
	}
	return sum;
}

function sumXP() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += calcXP(i);
	}
	return sum;
}

function sumDuration() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += getRound(i).duration;
	}
	return sum;
}

function calcXP(round) {
	var roundResult = getRound(round);
	var xp = 0;
	if (round < 21) {
		xp = (round * 20 + 20);
	} else if (round < 51) {
		xp = (round* 50 - 380);
	} else {
		xp = (round * 90 - 2880);
	}
	return xp;
}

function convertDuration(duration) {
	var converted = "";
	if(duration > 60) {
		var min = Math.floor(duration/60);
		converted += min + "m ";
		converted += Math.floor(duration - (min * 60));
	} else {
		converted = Math.floor(duration);
	}
	return converted;
}

function calcIncome(round) {
	var income = 0;
	var multiplier = 1;
	income += getRound(round).r;
	income += getRound(round).b;
	income += getRound(round).g;
	income += getRound(round).y;
	income += getRound(round).p;
	income += getRound(round).pu;
	income += getRound(round).bl;
	income += getRound(round).w;
	income += getRound(round).l;
	income += getRound(round).fl;
	income += getRound(round).z;
	income += getRound(round).rb;
	income += getRound(round).c;
	income += getRound(round).fc;
	income += getRound(round).m;
	income += getRound(round).fm;
	income += getRound(round).f;
	income += getRound(round).ff;
	income += getRound(round).z;
	income += getRound(round).fz;
	income += getRound(round).d;
	income += getRound(round).fd;
	income += getRound(round).a;
	income += getRound(round).fa;
	
	income += (parseInt(round) + 100);
	
	if (round > 120) {
		multiplier = 0.02;
	} else if (round > 100) {
		multiplier = 0.05;
	} else if (round > 85) {
		multiplier = 0.1;
	} else if (round > 60) {
		multiplier = 0.2;
	} else if (round > 50) {
		multiplier = 0.5;
	} else {
		multiplier = 1;
	}
	
	return (income * multiplier);
}

function calcRBE(round) {
	var income = 0;
	var multiplier = 1;
	income += getRound(round).r;
	income += getRound(round).b;
	income += getRound(round).g;
	income += getRound(round).y;
	income += getRound(round).p;
	income += getRound(round).pu;
	income += getRound(round).bl;
	income += getRound(round).w;
	income += getRound(round).l;
	income += getRound(round).fl;
	income += getRound(round).z;
	income += getRound(round).rb;
	income += getRound(round).c;
	income += getRound(round).fc;
	income += getRound(round).m;
	income += getRound(round).fm;
	income += getRound(round).f;
	income += getRound(round).ff;
	income += getRound(round).z;
	income += getRound(round).fz;
	income += getRound(round).d;
	income += getRound(round).fd;
	income += getRound(round).a;
	income += getRound(round).fa;
	
	if (round > 120) {
		multiplier = 0.02;
	} else if (round > 100) {
		multiplier = 0.05;
	} else if (round > 85) {
		multiplier = 0.1;
	} else if (round > 60) {
		multiplier = 0.2;
	} else if (round > 50) {
		multiplier = 0.5;
	} else {
		multiplier = 1;
	}
	
	return (income * multiplier);
}
	
startInput.addEventListener("input", inputHandlerStart);
endInput.addEventListener("input", inputHandlerEnd);
cashInput.addEventListener("input", inputHandlerCash);
startInput.addEventListener("blur", calcAll);
endInput.addEventListener("blur", calcAll);
cashInput.addEventListener("blur", calcAll);