(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var colorString$1 = {exports: {}};

	var colorName = {
	  "aliceblue": [240, 248, 255],
	  "antiquewhite": [250, 235, 215],
	  "aqua": [0, 255, 255],
	  "aquamarine": [127, 255, 212],
	  "azure": [240, 255, 255],
	  "beige": [245, 245, 220],
	  "bisque": [255, 228, 196],
	  "black": [0, 0, 0],
	  "blanchedalmond": [255, 235, 205],
	  "blue": [0, 0, 255],
	  "blueviolet": [138, 43, 226],
	  "brown": [165, 42, 42],
	  "burlywood": [222, 184, 135],
	  "cadetblue": [95, 158, 160],
	  "chartreuse": [127, 255, 0],
	  "chocolate": [210, 105, 30],
	  "coral": [255, 127, 80],
	  "cornflowerblue": [100, 149, 237],
	  "cornsilk": [255, 248, 220],
	  "crimson": [220, 20, 60],
	  "cyan": [0, 255, 255],
	  "darkblue": [0, 0, 139],
	  "darkcyan": [0, 139, 139],
	  "darkgoldenrod": [184, 134, 11],
	  "darkgray": [169, 169, 169],
	  "darkgreen": [0, 100, 0],
	  "darkgrey": [169, 169, 169],
	  "darkkhaki": [189, 183, 107],
	  "darkmagenta": [139, 0, 139],
	  "darkolivegreen": [85, 107, 47],
	  "darkorange": [255, 140, 0],
	  "darkorchid": [153, 50, 204],
	  "darkred": [139, 0, 0],
	  "darksalmon": [233, 150, 122],
	  "darkseagreen": [143, 188, 143],
	  "darkslateblue": [72, 61, 139],
	  "darkslategray": [47, 79, 79],
	  "darkslategrey": [47, 79, 79],
	  "darkturquoise": [0, 206, 209],
	  "darkviolet": [148, 0, 211],
	  "deeppink": [255, 20, 147],
	  "deepskyblue": [0, 191, 255],
	  "dimgray": [105, 105, 105],
	  "dimgrey": [105, 105, 105],
	  "dodgerblue": [30, 144, 255],
	  "firebrick": [178, 34, 34],
	  "floralwhite": [255, 250, 240],
	  "forestgreen": [34, 139, 34],
	  "fuchsia": [255, 0, 255],
	  "gainsboro": [220, 220, 220],
	  "ghostwhite": [248, 248, 255],
	  "gold": [255, 215, 0],
	  "goldenrod": [218, 165, 32],
	  "gray": [128, 128, 128],
	  "green": [0, 128, 0],
	  "greenyellow": [173, 255, 47],
	  "grey": [128, 128, 128],
	  "honeydew": [240, 255, 240],
	  "hotpink": [255, 105, 180],
	  "indianred": [205, 92, 92],
	  "indigo": [75, 0, 130],
	  "ivory": [255, 255, 240],
	  "khaki": [240, 230, 140],
	  "lavender": [230, 230, 250],
	  "lavenderblush": [255, 240, 245],
	  "lawngreen": [124, 252, 0],
	  "lemonchiffon": [255, 250, 205],
	  "lightblue": [173, 216, 230],
	  "lightcoral": [240, 128, 128],
	  "lightcyan": [224, 255, 255],
	  "lightgoldenrodyellow": [250, 250, 210],
	  "lightgray": [211, 211, 211],
	  "lightgreen": [144, 238, 144],
	  "lightgrey": [211, 211, 211],
	  "lightpink": [255, 182, 193],
	  "lightsalmon": [255, 160, 122],
	  "lightseagreen": [32, 178, 170],
	  "lightskyblue": [135, 206, 250],
	  "lightslategray": [119, 136, 153],
	  "lightslategrey": [119, 136, 153],
	  "lightsteelblue": [176, 196, 222],
	  "lightyellow": [255, 255, 224],
	  "lime": [0, 255, 0],
	  "limegreen": [50, 205, 50],
	  "linen": [250, 240, 230],
	  "magenta": [255, 0, 255],
	  "maroon": [128, 0, 0],
	  "mediumaquamarine": [102, 205, 170],
	  "mediumblue": [0, 0, 205],
	  "mediumorchid": [186, 85, 211],
	  "mediumpurple": [147, 112, 219],
	  "mediumseagreen": [60, 179, 113],
	  "mediumslateblue": [123, 104, 238],
	  "mediumspringgreen": [0, 250, 154],
	  "mediumturquoise": [72, 209, 204],
	  "mediumvioletred": [199, 21, 133],
	  "midnightblue": [25, 25, 112],
	  "mintcream": [245, 255, 250],
	  "mistyrose": [255, 228, 225],
	  "moccasin": [255, 228, 181],
	  "navajowhite": [255, 222, 173],
	  "navy": [0, 0, 128],
	  "oldlace": [253, 245, 230],
	  "olive": [128, 128, 0],
	  "olivedrab": [107, 142, 35],
	  "orange": [255, 165, 0],
	  "orangered": [255, 69, 0],
	  "orchid": [218, 112, 214],
	  "palegoldenrod": [238, 232, 170],
	  "palegreen": [152, 251, 152],
	  "paleturquoise": [175, 238, 238],
	  "palevioletred": [219, 112, 147],
	  "papayawhip": [255, 239, 213],
	  "peachpuff": [255, 218, 185],
	  "peru": [205, 133, 63],
	  "pink": [255, 192, 203],
	  "plum": [221, 160, 221],
	  "powderblue": [176, 224, 230],
	  "purple": [128, 0, 128],
	  "rebeccapurple": [102, 51, 153],
	  "red": [255, 0, 0],
	  "rosybrown": [188, 143, 143],
	  "royalblue": [65, 105, 225],
	  "saddlebrown": [139, 69, 19],
	  "salmon": [250, 128, 114],
	  "sandybrown": [244, 164, 96],
	  "seagreen": [46, 139, 87],
	  "seashell": [255, 245, 238],
	  "sienna": [160, 82, 45],
	  "silver": [192, 192, 192],
	  "skyblue": [135, 206, 235],
	  "slateblue": [106, 90, 205],
	  "slategray": [112, 128, 144],
	  "slategrey": [112, 128, 144],
	  "snow": [255, 250, 250],
	  "springgreen": [0, 255, 127],
	  "steelblue": [70, 130, 180],
	  "tan": [210, 180, 140],
	  "teal": [0, 128, 128],
	  "thistle": [216, 191, 216],
	  "tomato": [255, 99, 71],
	  "turquoise": [64, 224, 208],
	  "violet": [238, 130, 238],
	  "wheat": [245, 222, 179],
	  "white": [255, 255, 255],
	  "whitesmoke": [245, 245, 245],
	  "yellow": [255, 255, 0],
	  "yellowgreen": [154, 205, 50]
	};

	var simpleSwizzle = {exports: {}};

	var isArrayish$1 = function isArrayish(obj) {
	  if (!obj || typeof obj === 'string') {
	    return false;
	  }

	  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
	};

	var isArrayish = isArrayish$1;
	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle$1 = simpleSwizzle.exports = function swizzle(args) {
	  var results = [];

	  for (var i = 0, len = args.length; i < len; i++) {
	    var arg = args[i];

	    if (isArrayish(arg)) {
	      // http://jsperf.com/javascript-array-concat-vs-push/98
	      results = concat.call(results, slice.call(arg));
	    } else {
	      results.push(arg);
	    }
	  }

	  return results;
	};

	swizzle$1.wrap = function (fn) {
	  return function () {
	    return fn(swizzle$1(arguments));
	  };
	};

	/* MIT license */
	var colorNames = colorName;
	var swizzle = simpleSwizzle.exports;
	var hasOwnProperty = Object.hasOwnProperty;
	var reverseNames = {}; // create a list of reverse color names

	for (var name in colorNames) {
	  if (hasOwnProperty.call(colorNames, name)) {
	    reverseNames[colorNames[name]] = name;
	  }
	}

	var cs = colorString$1.exports = {
	  to: {},
	  get: {}
	};

	cs.get = function (string) {
	  var prefix = string.substring(0, 3).toLowerCase();
	  var val;
	  var model;

	  switch (prefix) {
	    case 'hsl':
	      val = cs.get.hsl(string);
	      model = 'hsl';
	      break;

	    case 'hwb':
	      val = cs.get.hwb(string);
	      model = 'hwb';
	      break;

	    default:
	      val = cs.get.rgb(string);
	      model = 'rgb';
	      break;
	  }

	  if (!val) {
	    return null;
	  }

	  return {
	    model: model,
	    value: val
	  };
	};

	cs.get.rgb = function (string) {
	  if (!string) {
	    return null;
	  }

	  var abbr = /^#([a-f0-9]{3,4})$/i;
	  var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	  var rgba = /^rgba?\(\s*([+-]?\d+)\s*,?\s*([+-]?\d+)\s*,?\s*([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	  var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	  var keyword = /(\w+)/;
	  var rgb = [0, 0, 0, 1];
	  var match;
	  var i;
	  var hexAlpha;

	  if (match = string.match(hex)) {
	    hexAlpha = match[2];
	    match = match[1];

	    for (i = 0; i < 3; i++) {
	      // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
	      var i2 = i * 2;
	      rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
	    }

	    if (hexAlpha) {
	      rgb[3] = parseInt(hexAlpha, 16) / 255;
	    }
	  } else if (match = string.match(abbr)) {
	    match = match[1];
	    hexAlpha = match[3];

	    for (i = 0; i < 3; i++) {
	      rgb[i] = parseInt(match[i] + match[i], 16);
	    }

	    if (hexAlpha) {
	      rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
	    }
	  } else if (match = string.match(rgba)) {
	    for (i = 0; i < 3; i++) {
	      rgb[i] = parseInt(match[i + 1], 0);
	    }

	    if (match[4]) {
	      if (match[5]) {
	        rgb[3] = parseInt(match[4], 0) * 0.01;
	      } else {
	        rgb[3] = parseFloat(match[4]);
	      }
	    }
	  } else if (match = string.match(per)) {
	    for (i = 0; i < 3; i++) {
	      rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	    }

	    if (match[4]) {
	      if (match[5]) {
	        rgb[3] = parseInt(match[4], 0) * 0.01;
	      } else {
	        rgb[3] = parseFloat(match[4]);
	      }
	    }
	  } else if (match = string.match(keyword)) {
	    if (match[1] === 'transparent') {
	      return [0, 0, 0, 0];
	    }

	    if (!hasOwnProperty.call(colorNames, match[1])) {
	      return null;
	    }

	    rgb = colorNames[match[1]];
	    rgb[3] = 1;
	    return rgb;
	  } else {
	    return null;
	  }

	  for (i = 0; i < 3; i++) {
	    rgb[i] = clamp(rgb[i], 0, 255);
	  }

	  rgb[3] = clamp(rgb[3], 0, 1);
	  return rgb;
	};

	cs.get.hsl = function (string) {
	  if (!string) {
	    return null;
	  }

	  var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/;
	  var match = string.match(hsl);

	  if (match) {
	    var alpha = parseFloat(match[4]);
	    var h = (parseFloat(match[1]) % 360 + 360) % 360;
	    var s = clamp(parseFloat(match[2]), 0, 100);
	    var l = clamp(parseFloat(match[3]), 0, 100);
	    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
	    return [h, s, l, a];
	  }

	  return null;
	};

	cs.get.hwb = function (string) {
	  if (!string) {
	    return null;
	  }

	  var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	  var match = string.match(hwb);

	  if (match) {
	    var alpha = parseFloat(match[4]);
	    var h = (parseFloat(match[1]) % 360 + 360) % 360;
	    var w = clamp(parseFloat(match[2]), 0, 100);
	    var b = clamp(parseFloat(match[3]), 0, 100);
	    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
	    return [h, w, b, a];
	  }

	  return null;
	};

	cs.to.hex = function () {
	  var rgba = swizzle(arguments);
	  return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
	};

	cs.to.rgb = function () {
	  var rgba = swizzle(arguments);
	  return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
	  var rgba = swizzle(arguments);
	  var r = Math.round(rgba[0] / 255 * 100);
	  var g = Math.round(rgba[1] / 255 * 100);
	  var b = Math.round(rgba[2] / 255 * 100);
	  return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
	  var hsla = swizzle(arguments);
	  return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	}; // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)


	cs.to.hwb = function () {
	  var hwba = swizzle(arguments);
	  var a = '';

	  if (hwba.length >= 4 && hwba[3] !== 1) {
	    a = ', ' + hwba[3];
	  }

	  return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}; // helpers


	function clamp(num, min, max) {
	  return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
	  var str = Math.round(num).toString(16).toUpperCase();
	  return str.length < 2 ? '0' + str : str;
	}

	/* MIT license */
	/* eslint-disable no-mixed-operators */

	const cssKeywords = colorName; // NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	const reverseKeywords = {};

	for (const key of Object.keys(cssKeywords)) {
	  reverseKeywords[cssKeywords[key]] = key;
	}

	const convert$2 = {
	  rgb: {
	    channels: 3,
	    labels: 'rgb'
	  },
	  hsl: {
	    channels: 3,
	    labels: 'hsl'
	  },
	  hsv: {
	    channels: 3,
	    labels: 'hsv'
	  },
	  hwb: {
	    channels: 3,
	    labels: 'hwb'
	  },
	  cmyk: {
	    channels: 4,
	    labels: 'cmyk'
	  },
	  xyz: {
	    channels: 3,
	    labels: 'xyz'
	  },
	  lab: {
	    channels: 3,
	    labels: 'lab'
	  },
	  lch: {
	    channels: 3,
	    labels: 'lch'
	  },
	  hex: {
	    channels: 1,
	    labels: ['hex']
	  },
	  keyword: {
	    channels: 1,
	    labels: ['keyword']
	  },
	  ansi16: {
	    channels: 1,
	    labels: ['ansi16']
	  },
	  ansi256: {
	    channels: 1,
	    labels: ['ansi256']
	  },
	  hcg: {
	    channels: 3,
	    labels: ['h', 'c', 'g']
	  },
	  apple: {
	    channels: 3,
	    labels: ['r16', 'g16', 'b16']
	  },
	  gray: {
	    channels: 1,
	    labels: ['gray']
	  }
	};
	var conversions$2 = convert$2; // Hide .channels and .labels properties

	for (const model of Object.keys(convert$2)) {
	  if (!('channels' in convert$2[model])) {
	    throw new Error('missing channels property: ' + model);
	  }

	  if (!('labels' in convert$2[model])) {
	    throw new Error('missing channel labels property: ' + model);
	  }

	  if (convert$2[model].labels.length !== convert$2[model].channels) {
	    throw new Error('channel and label counts mismatch: ' + model);
	  }

	  const {
	    channels,
	    labels
	  } = convert$2[model];
	  delete convert$2[model].channels;
	  delete convert$2[model].labels;
	  Object.defineProperty(convert$2[model], 'channels', {
	    value: channels
	  });
	  Object.defineProperty(convert$2[model], 'labels', {
	    value: labels
	  });
	}

	convert$2.rgb.hsl = function (rgb) {
	  const r = rgb[0] / 255;
	  const g = rgb[1] / 255;
	  const b = rgb[2] / 255;
	  const min = Math.min(r, g, b);
	  const max = Math.max(r, g, b);
	  const delta = max - min;
	  let h;
	  let s;

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  const l = (min + max) / 2;

	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }

	  return [h, s * 100, l * 100];
	};

	convert$2.rgb.hsv = function (rgb) {
	  let rdif;
	  let gdif;
	  let bdif;
	  let h;
	  let s;
	  const r = rgb[0] / 255;
	  const g = rgb[1] / 255;
	  const b = rgb[2] / 255;
	  const v = Math.max(r, g, b);
	  const diff = v - Math.min(r, g, b);

	  const diffc = function (c) {
	    return (v - c) / 6 / diff + 1 / 2;
	  };

	  if (diff === 0) {
	    h = 0;
	    s = 0;
	  } else {
	    s = diff / v;
	    rdif = diffc(r);
	    gdif = diffc(g);
	    bdif = diffc(b);

	    if (r === v) {
	      h = bdif - gdif;
	    } else if (g === v) {
	      h = 1 / 3 + rdif - bdif;
	    } else if (b === v) {
	      h = 2 / 3 + gdif - rdif;
	    }

	    if (h < 0) {
	      h += 1;
	    } else if (h > 1) {
	      h -= 1;
	    }
	  }

	  return [h * 360, s * 100, v * 100];
	};

	convert$2.rgb.hwb = function (rgb) {
	  const r = rgb[0];
	  const g = rgb[1];
	  let b = rgb[2];
	  const h = convert$2.rgb.hsl(rgb)[0];
	  const w = 1 / 255 * Math.min(r, Math.min(g, b));
	  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	  return [h, w * 100, b * 100];
	};

	convert$2.rgb.cmyk = function (rgb) {
	  const r = rgb[0] / 255;
	  const g = rgb[1] / 255;
	  const b = rgb[2] / 255;
	  const k = Math.min(1 - r, 1 - g, 1 - b);
	  const c = (1 - r - k) / (1 - k) || 0;
	  const m = (1 - g - k) / (1 - k) || 0;
	  const y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	};

	function comparativeDistance(x, y) {
	  /*
	  	See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	  */
	  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
	}

	convert$2.rgb.keyword = function (rgb) {
	  const reversed = reverseKeywords[rgb];

	  if (reversed) {
	    return reversed;
	  }

	  let currentClosestDistance = Infinity;
	  let currentClosestKeyword;

	  for (const keyword of Object.keys(cssKeywords)) {
	    const value = cssKeywords[keyword]; // Compute comparative distance

	    const distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

	    if (distance < currentClosestDistance) {
	      currentClosestDistance = distance;
	      currentClosestKeyword = keyword;
	    }
	  }

	  return currentClosestKeyword;
	};

	convert$2.keyword.rgb = function (keyword) {
	  return cssKeywords[keyword];
	};

	convert$2.rgb.xyz = function (rgb) {
	  let r = rgb[0] / 255;
	  let g = rgb[1] / 255;
	  let b = rgb[2] / 255; // Assume sRGB

	  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
	  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
	  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
	  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
	  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
	  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
	  return [x * 100, y * 100, z * 100];
	};

	convert$2.rgb.lab = function (rgb) {
	  const xyz = convert$2.rgb.xyz(rgb);
	  let x = xyz[0];
	  let y = xyz[1];
	  let z = xyz[2];
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	  x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
	  y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
	  z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
	  const l = 116 * y - 16;
	  const a = 500 * (x - y);
	  const b = 200 * (y - z);
	  return [l, a, b];
	};

	convert$2.hsl.rgb = function (hsl) {
	  const h = hsl[0] / 360;
	  const s = hsl[1] / 100;
	  const l = hsl[2] / 100;
	  let t2;
	  let t3;
	  let val;

	  if (s === 0) {
	    val = l * 255;
	    return [val, val, val];
	  }

	  if (l < 0.5) {
	    t2 = l * (1 + s);
	  } else {
	    t2 = l + s - l * s;
	  }

	  const t1 = 2 * l - t2;
	  const rgb = [0, 0, 0];

	  for (let i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * -(i - 1);

	    if (t3 < 0) {
	      t3++;
	    }

	    if (t3 > 1) {
	      t3--;
	    }

	    if (6 * t3 < 1) {
	      val = t1 + (t2 - t1) * 6 * t3;
	    } else if (2 * t3 < 1) {
	      val = t2;
	    } else if (3 * t3 < 2) {
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    } else {
	      val = t1;
	    }

	    rgb[i] = val * 255;
	  }

	  return rgb;
	};

	convert$2.hsl.hsv = function (hsl) {
	  const h = hsl[0];
	  let s = hsl[1] / 100;
	  let l = hsl[2] / 100;
	  let smin = s;
	  const lmin = Math.max(l, 0.01);
	  l *= 2;
	  s *= l <= 1 ? l : 2 - l;
	  smin *= lmin <= 1 ? lmin : 2 - lmin;
	  const v = (l + s) / 2;
	  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
	  return [h, sv * 100, v * 100];
	};

	convert$2.hsv.rgb = function (hsv) {
	  const h = hsv[0] / 60;
	  const s = hsv[1] / 100;
	  let v = hsv[2] / 100;
	  const hi = Math.floor(h) % 6;
	  const f = h - Math.floor(h);
	  const p = 255 * v * (1 - s);
	  const q = 255 * v * (1 - s * f);
	  const t = 255 * v * (1 - s * (1 - f));
	  v *= 255;

	  switch (hi) {
	    case 0:
	      return [v, t, p];

	    case 1:
	      return [q, v, p];

	    case 2:
	      return [p, v, t];

	    case 3:
	      return [p, q, v];

	    case 4:
	      return [t, p, v];

	    case 5:
	      return [v, p, q];
	  }
	};

	convert$2.hsv.hsl = function (hsv) {
	  const h = hsv[0];
	  const s = hsv[1] / 100;
	  const v = hsv[2] / 100;
	  const vmin = Math.max(v, 0.01);
	  let sl;
	  let l;
	  l = (2 - s) * v;
	  const lmin = (2 - s) * vmin;
	  sl = s * vmin;
	  sl /= lmin <= 1 ? lmin : 2 - lmin;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


	convert$2.hwb.rgb = function (hwb) {
	  const h = hwb[0] / 360;
	  let wh = hwb[1] / 100;
	  let bl = hwb[2] / 100;
	  const ratio = wh + bl;
	  let f; // Wh + bl cant be > 1

	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }

	  const i = Math.floor(6 * h);
	  const v = 1 - bl;
	  f = 6 * h - i;

	  if ((i & 0x01) !== 0) {
	    f = 1 - f;
	  }

	  const n = wh + f * (v - wh); // Linear interpolation

	  let r;
	  let g;
	  let b;
	  /* eslint-disable max-statements-per-line,no-multi-spaces */

	  switch (i) {
	    default:
	    case 6:
	    case 0:
	      r = v;
	      g = n;
	      b = wh;
	      break;

	    case 1:
	      r = n;
	      g = v;
	      b = wh;
	      break;

	    case 2:
	      r = wh;
	      g = v;
	      b = n;
	      break;

	    case 3:
	      r = wh;
	      g = n;
	      b = v;
	      break;

	    case 4:
	      r = n;
	      g = wh;
	      b = v;
	      break;

	    case 5:
	      r = v;
	      g = wh;
	      b = n;
	      break;
	  }
	  /* eslint-enable max-statements-per-line,no-multi-spaces */


	  return [r * 255, g * 255, b * 255];
	};

	convert$2.cmyk.rgb = function (cmyk) {
	  const c = cmyk[0] / 100;
	  const m = cmyk[1] / 100;
	  const y = cmyk[2] / 100;
	  const k = cmyk[3] / 100;
	  const r = 1 - Math.min(1, c * (1 - k) + k);
	  const g = 1 - Math.min(1, m * (1 - k) + k);
	  const b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	};

	convert$2.xyz.rgb = function (xyz) {
	  const x = xyz[0] / 100;
	  const y = xyz[1] / 100;
	  const z = xyz[2] / 100;
	  let r;
	  let g;
	  let b;
	  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
	  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
	  b = x * 0.0557 + y * -0.2040 + z * 1.0570; // Assume sRGB

	  r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
	  g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
	  b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);
	  return [r * 255, g * 255, b * 255];
	};

	convert$2.xyz.lab = function (xyz) {
	  let x = xyz[0];
	  let y = xyz[1];
	  let z = xyz[2];
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	  x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
	  y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
	  z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
	  const l = 116 * y - 16;
	  const a = 500 * (x - y);
	  const b = 200 * (y - z);
	  return [l, a, b];
	};

	convert$2.lab.xyz = function (lab) {
	  const l = lab[0];
	  const a = lab[1];
	  const b = lab[2];
	  let x;
	  let y;
	  let z;
	  y = (l + 16) / 116;
	  x = a / 500 + y;
	  z = y - b / 200;
	  const y2 = y ** 3;
	  const x2 = x ** 3;
	  const z2 = z ** 3;
	  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	  x *= 95.047;
	  y *= 100;
	  z *= 108.883;
	  return [x, y, z];
	};

	convert$2.lab.lch = function (lab) {
	  const l = lab[0];
	  const a = lab[1];
	  const b = lab[2];
	  let h;
	  const hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;

	  if (h < 0) {
	    h += 360;
	  }

	  const c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	};

	convert$2.lch.lab = function (lch) {
	  const l = lch[0];
	  const c = lch[1];
	  const h = lch[2];
	  const hr = h / 360 * 2 * Math.PI;
	  const a = c * Math.cos(hr);
	  const b = c * Math.sin(hr);
	  return [l, a, b];
	};

	convert$2.rgb.ansi16 = function (args, saturation = null) {
	  const [r, g, b] = args;
	  let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	  value = Math.round(value / 50);

	  if (value === 0) {
	    return 30;
	  }

	  let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

	  if (value === 2) {
	    ansi += 60;
	  }

	  return ansi;
	};

	convert$2.hsv.ansi16 = function (args) {
	  // Optimization here; we already know the value and don't need to get
	  // it converted for us.
	  return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
	};

	convert$2.rgb.ansi256 = function (args) {
	  const r = args[0];
	  const g = args[1];
	  const b = args[2]; // We use the extended greyscale palette here, with the exception of
	  // black and white. normal palette only has 4 greyscale shades.

	  if (r === g && g === b) {
	    if (r < 8) {
	      return 16;
	    }

	    if (r > 248) {
	      return 231;
	    }

	    return Math.round((r - 8) / 247 * 24) + 232;
	  }

	  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
	  return ansi;
	};

	convert$2.ansi16.rgb = function (args) {
	  let color = args % 10; // Handle greyscale

	  if (color === 0 || color === 7) {
	    if (args > 50) {
	      color += 3.5;
	    }

	    color = color / 10.5 * 255;
	    return [color, color, color];
	  }

	  const mult = (~~(args > 50) + 1) * 0.5;
	  const r = (color & 1) * mult * 255;
	  const g = (color >> 1 & 1) * mult * 255;
	  const b = (color >> 2 & 1) * mult * 255;
	  return [r, g, b];
	};

	convert$2.ansi256.rgb = function (args) {
	  // Handle greyscale
	  if (args >= 232) {
	    const c = (args - 232) * 10 + 8;
	    return [c, c, c];
	  }

	  args -= 16;
	  let rem;
	  const r = Math.floor(args / 36) / 5 * 255;
	  const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	  const b = rem % 6 / 5 * 255;
	  return [r, g, b];
	};

	convert$2.rgb.hex = function (args) {
	  const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
	  const string = integer.toString(16).toUpperCase();
	  return '000000'.substring(string.length) + string;
	};

	convert$2.hex.rgb = function (args) {
	  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

	  if (!match) {
	    return [0, 0, 0];
	  }

	  let colorString = match[0];

	  if (match[0].length === 3) {
	    colorString = colorString.split('').map(char => {
	      return char + char;
	    }).join('');
	  }

	  const integer = parseInt(colorString, 16);
	  const r = integer >> 16 & 0xFF;
	  const g = integer >> 8 & 0xFF;
	  const b = integer & 0xFF;
	  return [r, g, b];
	};

	convert$2.rgb.hcg = function (rgb) {
	  const r = rgb[0] / 255;
	  const g = rgb[1] / 255;
	  const b = rgb[2] / 255;
	  const max = Math.max(Math.max(r, g), b);
	  const min = Math.min(Math.min(r, g), b);
	  const chroma = max - min;
	  let grayscale;
	  let hue;

	  if (chroma < 1) {
	    grayscale = min / (1 - chroma);
	  } else {
	    grayscale = 0;
	  }

	  if (chroma <= 0) {
	    hue = 0;
	  } else if (max === r) {
	    hue = (g - b) / chroma % 6;
	  } else if (max === g) {
	    hue = 2 + (b - r) / chroma;
	  } else {
	    hue = 4 + (r - g) / chroma;
	  }

	  hue /= 6;
	  hue %= 1;
	  return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert$2.hsl.hcg = function (hsl) {
	  const s = hsl[1] / 100;
	  const l = hsl[2] / 100;
	  const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
	  let f = 0;

	  if (c < 1.0) {
	    f = (l - 0.5 * c) / (1.0 - c);
	  }

	  return [hsl[0], c * 100, f * 100];
	};

	convert$2.hsv.hcg = function (hsv) {
	  const s = hsv[1] / 100;
	  const v = hsv[2] / 100;
	  const c = s * v;
	  let f = 0;

	  if (c < 1.0) {
	    f = (v - c) / (1 - c);
	  }

	  return [hsv[0], c * 100, f * 100];
	};

	convert$2.hcg.rgb = function (hcg) {
	  const h = hcg[0] / 360;
	  const c = hcg[1] / 100;
	  const g = hcg[2] / 100;

	  if (c === 0.0) {
	    return [g * 255, g * 255, g * 255];
	  }

	  const pure = [0, 0, 0];
	  const hi = h % 1 * 6;
	  const v = hi % 1;
	  const w = 1 - v;
	  let mg = 0;
	  /* eslint-disable max-statements-per-line */

	  switch (Math.floor(hi)) {
	    case 0:
	      pure[0] = 1;
	      pure[1] = v;
	      pure[2] = 0;
	      break;

	    case 1:
	      pure[0] = w;
	      pure[1] = 1;
	      pure[2] = 0;
	      break;

	    case 2:
	      pure[0] = 0;
	      pure[1] = 1;
	      pure[2] = v;
	      break;

	    case 3:
	      pure[0] = 0;
	      pure[1] = w;
	      pure[2] = 1;
	      break;

	    case 4:
	      pure[0] = v;
	      pure[1] = 0;
	      pure[2] = 1;
	      break;

	    default:
	      pure[0] = 1;
	      pure[1] = 0;
	      pure[2] = w;
	  }
	  /* eslint-enable max-statements-per-line */


	  mg = (1.0 - c) * g;
	  return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
	};

	convert$2.hcg.hsv = function (hcg) {
	  const c = hcg[1] / 100;
	  const g = hcg[2] / 100;
	  const v = c + g * (1.0 - c);
	  let f = 0;

	  if (v > 0.0) {
	    f = c / v;
	  }

	  return [hcg[0], f * 100, v * 100];
	};

	convert$2.hcg.hsl = function (hcg) {
	  const c = hcg[1] / 100;
	  const g = hcg[2] / 100;
	  const l = g * (1.0 - c) + 0.5 * c;
	  let s = 0;

	  if (l > 0.0 && l < 0.5) {
	    s = c / (2 * l);
	  } else if (l >= 0.5 && l < 1.0) {
	    s = c / (2 * (1 - l));
	  }

	  return [hcg[0], s * 100, l * 100];
	};

	convert$2.hcg.hwb = function (hcg) {
	  const c = hcg[1] / 100;
	  const g = hcg[2] / 100;
	  const v = c + g * (1.0 - c);
	  return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert$2.hwb.hcg = function (hwb) {
	  const w = hwb[1] / 100;
	  const b = hwb[2] / 100;
	  const v = 1 - b;
	  const c = v - w;
	  let g = 0;

	  if (c < 1) {
	    g = (v - c) / (1 - c);
	  }

	  return [hwb[0], c * 100, g * 100];
	};

	convert$2.apple.rgb = function (apple) {
	  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
	};

	convert$2.rgb.apple = function (rgb) {
	  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
	};

	convert$2.gray.rgb = function (args) {
	  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert$2.gray.hsl = function (args) {
	  return [0, 0, args[0]];
	};

	convert$2.gray.hsv = convert$2.gray.hsl;

	convert$2.gray.hwb = function (gray) {
	  return [0, 100, gray[0]];
	};

	convert$2.gray.cmyk = function (gray) {
	  return [0, 0, 0, gray[0]];
	};

	convert$2.gray.lab = function (gray) {
	  return [gray[0], 0, 0];
	};

	convert$2.gray.hex = function (gray) {
	  const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	  const integer = (val << 16) + (val << 8) + val;
	  const string = integer.toString(16).toUpperCase();
	  return '000000'.substring(string.length) + string;
	};

	convert$2.rgb.gray = function (rgb) {
	  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	  return [val / 255 * 100];
	};

	const conversions$1 = conversions$2;
	/*
		This function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
	  const graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

	  const models = Object.keys(conversions$1);

	  for (let len = models.length, i = 0; i < len; i++) {
	    graph[models[i]] = {
	      // http://jsperf.com/1-vs-infinity
	      // micro-opt, but this is simple.
	      distance: -1,
	      parent: null
	    };
	  }

	  return graph;
	} // https://en.wikipedia.org/wiki/Breadth-first_search


	function deriveBFS(fromModel) {
	  const graph = buildGraph();
	  const queue = [fromModel]; // Unshift -> queue -> pop

	  graph[fromModel].distance = 0;

	  while (queue.length) {
	    const current = queue.pop();
	    const adjacents = Object.keys(conversions$1[current]);

	    for (let len = adjacents.length, i = 0; i < len; i++) {
	      const adjacent = adjacents[i];
	      const node = graph[adjacent];

	      if (node.distance === -1) {
	        node.distance = graph[current].distance + 1;
	        node.parent = current;
	        queue.unshift(adjacent);
	      }
	    }
	  }

	  return graph;
	}

	function link(from, to) {
	  return function (args) {
	    return to(from(args));
	  };
	}

	function wrapConversion(toModel, graph) {
	  const path = [graph[toModel].parent, toModel];
	  let fn = conversions$1[graph[toModel].parent][toModel];
	  let cur = graph[toModel].parent;

	  while (graph[cur].parent) {
	    path.unshift(graph[cur].parent);
	    fn = link(conversions$1[graph[cur].parent][cur], fn);
	    cur = graph[cur].parent;
	  }

	  fn.conversion = path;
	  return fn;
	}

	var route$1 = function (fromModel) {
	  const graph = deriveBFS(fromModel);
	  const conversion = {};
	  const models = Object.keys(graph);

	  for (let len = models.length, i = 0; i < len; i++) {
	    const toModel = models[i];
	    const node = graph[toModel];

	    if (node.parent === null) {
	      // No possible conversion, or this node is the source model.
	      continue;
	    }

	    conversion[toModel] = wrapConversion(toModel, graph);
	  }

	  return conversion;
	};

	const conversions = conversions$2;
	const route = route$1;
	const convert$1 = {};
	const models = Object.keys(conversions);

	function wrapRaw(fn) {
	  const wrappedFn = function (...args) {
	    const arg0 = args[0];

	    if (arg0 === undefined || arg0 === null) {
	      return arg0;
	    }

	    if (arg0.length > 1) {
	      args = arg0;
	    }

	    return fn(args);
	  }; // Preserve .conversion property if there is one


	  if ('conversion' in fn) {
	    wrappedFn.conversion = fn.conversion;
	  }

	  return wrappedFn;
	}

	function wrapRounded(fn) {
	  const wrappedFn = function (...args) {
	    const arg0 = args[0];

	    if (arg0 === undefined || arg0 === null) {
	      return arg0;
	    }

	    if (arg0.length > 1) {
	      args = arg0;
	    }

	    const result = fn(args); // We're assuming the result is an array here.
	    // see notice in conversions.js; don't use box types
	    // in conversion functions.

	    if (typeof result === 'object') {
	      for (let len = result.length, i = 0; i < len; i++) {
	        result[i] = Math.round(result[i]);
	      }
	    }

	    return result;
	  }; // Preserve .conversion property if there is one


	  if ('conversion' in fn) {
	    wrappedFn.conversion = fn.conversion;
	  }

	  return wrappedFn;
	}

	models.forEach(fromModel => {
	  convert$1[fromModel] = {};
	  Object.defineProperty(convert$1[fromModel], 'channels', {
	    value: conversions[fromModel].channels
	  });
	  Object.defineProperty(convert$1[fromModel], 'labels', {
	    value: conversions[fromModel].labels
	  });
	  const routes = route(fromModel);
	  const routeModels = Object.keys(routes);
	  routeModels.forEach(toModel => {
	    const fn = routes[toModel];
	    convert$1[fromModel][toModel] = wrapRounded(fn);
	    convert$1[fromModel][toModel].raw = wrapRaw(fn);
	  });
	});
	var colorConvert = convert$1;

	const colorString = colorString$1.exports;
	const convert = colorConvert;
	const _slice = [].slice;
	const skippedModels = [// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword', // Gray conflicts with some method names, and has its own method defined.
	'gray', // Shouldn't really be in color-convert either...
	'hex'];
	const hashedModelKeys = {};

	for (const model of Object.keys(convert)) {
	  hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
	}

	const limiters = {};

	function Color(object, model) {
	  if (!(this instanceof Color)) {
	    return new Color(object, model);
	  }

	  if (model && model in skippedModels) {
	    model = null;
	  }

	  if (model && !(model in convert)) {
	    throw new Error('Unknown model: ' + model);
	  }

	  let i;
	  let channels;

	  if (object == null) {
	    // eslint-disable-line no-eq-null,eqeqeq
	    this.model = 'rgb';
	    this.color = [0, 0, 0];
	    this.valpha = 1;
	  } else if (object instanceof Color) {
	    this.model = object.model;
	    this.color = object.color.slice();
	    this.valpha = object.valpha;
	  } else if (typeof object === 'string') {
	    const result = colorString.get(object);

	    if (result === null) {
	      throw new Error('Unable to parse color from string: ' + object);
	    }

	    this.model = result.model;
	    channels = convert[this.model].channels;
	    this.color = result.value.slice(0, channels);
	    this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	  } else if (object.length > 0) {
	    this.model = model || 'rgb';
	    channels = convert[this.model].channels;

	    const newArray = _slice.call(object, 0, channels);

	    this.color = zeroArray(newArray, channels);
	    this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	  } else if (typeof object === 'number') {
	    // This is always RGB - can be converted later on.
	    this.model = 'rgb';
	    this.color = [object >> 16 & 0xFF, object >> 8 & 0xFF, object & 0xFF];
	    this.valpha = 1;
	  } else {
	    this.valpha = 1;
	    const keys = Object.keys(object);

	    if ('alpha' in object) {
	      keys.splice(keys.indexOf('alpha'), 1);
	      this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
	    }

	    const hashedKeys = keys.sort().join('');

	    if (!(hashedKeys in hashedModelKeys)) {
	      throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
	    }

	    this.model = hashedModelKeys[hashedKeys];
	    const labels = convert[this.model].labels;
	    const color = [];

	    for (i = 0; i < labels.length; i++) {
	      color.push(object[labels[i]]);
	    }

	    this.color = zeroArray(color);
	  } // Perform limitations (clamping, etc.)


	  if (limiters[this.model]) {
	    channels = convert[this.model].channels;

	    for (i = 0; i < channels; i++) {
	      const limit = limiters[this.model][i];

	      if (limit) {
	        this.color[i] = limit(this.color[i]);
	      }
	    }
	  }

	  this.valpha = Math.max(0, Math.min(1, this.valpha));

	  if (Object.freeze) {
	    Object.freeze(this);
	  }
	}

	Color.prototype = {
	  toString() {
	    return this.string();
	  },

	  toJSON() {
	    return this[this.model]();
	  },

	  string(places) {
	    let self = this.model in colorString.to ? this : this.rgb();
	    self = self.round(typeof places === 'number' ? places : 1);
	    const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
	    return colorString.to[self.model](args);
	  },

	  percentString(places) {
	    const self = this.rgb().round(typeof places === 'number' ? places : 1);
	    const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
	    return colorString.to.rgb.percent(args);
	  },

	  array() {
	    return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	  },

	  object() {
	    const result = {};
	    const channels = convert[this.model].channels;
	    const labels = convert[this.model].labels;

	    for (let i = 0; i < channels; i++) {
	      result[labels[i]] = this.color[i];
	    }

	    if (this.valpha !== 1) {
	      result.alpha = this.valpha;
	    }

	    return result;
	  },

	  unitArray() {
	    const rgb = this.rgb().color;
	    rgb[0] /= 255;
	    rgb[1] /= 255;
	    rgb[2] /= 255;

	    if (this.valpha !== 1) {
	      rgb.push(this.valpha);
	    }

	    return rgb;
	  },

	  unitObject() {
	    const rgb = this.rgb().object();
	    rgb.r /= 255;
	    rgb.g /= 255;
	    rgb.b /= 255;

	    if (this.valpha !== 1) {
	      rgb.alpha = this.valpha;
	    }

	    return rgb;
	  },

	  round(places) {
	    places = Math.max(places || 0, 0);
	    return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	  },

	  alpha(value) {
	    if (arguments.length > 0) {
	      return new Color(this.color.concat(Math.max(0, Math.min(1, value))), this.model);
	    }

	    return this.valpha;
	  },

	  // Rgb
	  red: getset('rgb', 0, maxfn(255)),
	  green: getset('rgb', 1, maxfn(255)),
	  blue: getset('rgb', 2, maxfn(255)),
	  hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => (value % 360 + 360) % 360),
	  saturationl: getset('hsl', 1, maxfn(100)),
	  lightness: getset('hsl', 2, maxfn(100)),
	  saturationv: getset('hsv', 1, maxfn(100)),
	  value: getset('hsv', 2, maxfn(100)),
	  chroma: getset('hcg', 1, maxfn(100)),
	  gray: getset('hcg', 2, maxfn(100)),
	  white: getset('hwb', 1, maxfn(100)),
	  wblack: getset('hwb', 2, maxfn(100)),
	  cyan: getset('cmyk', 0, maxfn(100)),
	  magenta: getset('cmyk', 1, maxfn(100)),
	  yellow: getset('cmyk', 2, maxfn(100)),
	  black: getset('cmyk', 3, maxfn(100)),
	  x: getset('xyz', 0, maxfn(100)),
	  y: getset('xyz', 1, maxfn(100)),
	  z: getset('xyz', 2, maxfn(100)),
	  l: getset('lab', 0, maxfn(100)),
	  a: getset('lab', 1),
	  b: getset('lab', 2),

	  keyword(value) {
	    if (arguments.length > 0) {
	      return new Color(value);
	    }

	    return convert[this.model].keyword(this.color);
	  },

	  hex(value) {
	    if (arguments.length > 0) {
	      return new Color(value);
	    }

	    return colorString.to.hex(this.rgb().round().color);
	  },

	  rgbNumber() {
	    const rgb = this.rgb().color;
	    return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
	  },

	  luminosity() {
	    // http://www.w3.org/TR/WCAG20/#relativeluminancedef
	    const rgb = this.rgb().color;
	    const lum = [];

	    for (const [i, element] of rgb.entries()) {
	      const chan = element / 255;
	      lum[i] = chan <= 0.039_28 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
	    }

	    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	  },

	  contrast(color2) {
	    // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
	    const lum1 = this.luminosity();
	    const lum2 = color2.luminosity();

	    if (lum1 > lum2) {
	      return (lum1 + 0.05) / (lum2 + 0.05);
	    }

	    return (lum2 + 0.05) / (lum1 + 0.05);
	  },

	  level(color2) {
	    const contrastRatio = this.contrast(color2);

	    if (contrastRatio >= 7.1) {
	      return 'AAA';
	    }

	    return contrastRatio >= 4.5 ? 'AA' : '';
	  },

	  isDark() {
	    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
	    const rgb = this.rgb().color;
	    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	    return yiq < 128;
	  },

	  isLight() {
	    return !this.isDark();
	  },

	  negate() {
	    const rgb = this.rgb();

	    for (let i = 0; i < 3; i++) {
	      rgb.color[i] = 255 - rgb.color[i];
	    }

	    return rgb;
	  },

	  lighten(ratio) {
	    const hsl = this.hsl();
	    hsl.color[2] += hsl.color[2] * ratio;
	    return hsl;
	  },

	  darken(ratio) {
	    const hsl = this.hsl();
	    hsl.color[2] -= hsl.color[2] * ratio;
	    return hsl;
	  },

	  saturate(ratio) {
	    const hsl = this.hsl();
	    hsl.color[1] += hsl.color[1] * ratio;
	    return hsl;
	  },

	  desaturate(ratio) {
	    const hsl = this.hsl();
	    hsl.color[1] -= hsl.color[1] * ratio;
	    return hsl;
	  },

	  whiten(ratio) {
	    const hwb = this.hwb();
	    hwb.color[1] += hwb.color[1] * ratio;
	    return hwb;
	  },

	  blacken(ratio) {
	    const hwb = this.hwb();
	    hwb.color[2] += hwb.color[2] * ratio;
	    return hwb;
	  },

	  grayscale() {
	    // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
	    const rgb = this.rgb().color;
	    const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
	    return Color.rgb(value, value, value);
	  },

	  fade(ratio) {
	    return this.alpha(this.valpha - this.valpha * ratio);
	  },

	  opaquer(ratio) {
	    return this.alpha(this.valpha + this.valpha * ratio);
	  },

	  rotate(degrees) {
	    const hsl = this.hsl();
	    let hue = hsl.color[0];
	    hue = (hue + degrees) % 360;
	    hue = hue < 0 ? 360 + hue : hue;
	    hsl.color[0] = hue;
	    return hsl;
	  },

	  mix(mixinColor, weight) {
	    // Ported from sass implementation in C
	    // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	    if (!mixinColor || !mixinColor.rgb) {
	      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
	    }

	    const color1 = mixinColor.rgb();
	    const color2 = this.rgb();
	    const p = weight === undefined ? 0.5 : weight;
	    const w = 2 * p - 1;
	    const a = color1.alpha() - color2.alpha();
	    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
	    const w2 = 1 - w1;
	    return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
	  }

	}; // Model conversion methods and static constructors

	for (const model of Object.keys(convert)) {
	  if (skippedModels.includes(model)) {
	    continue;
	  }

	  const channels = convert[model].channels; // Conversion methods

	  Color.prototype[model] = function () {
	    if (this.model === model) {
	      return new Color(this);
	    }

	    if (arguments.length > 0) {
	      return new Color(arguments, model);
	    }

	    const newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
	    return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	  }; // 'static' construction methods


	  Color[model] = function (color) {
	    if (typeof color === 'number') {
	      color = zeroArray(_slice.call(arguments), channels);
	    }

	    return new Color(color, model);
	  };
	}

	function roundTo(number, places) {
	  return Number(number.toFixed(places));
	}

	function roundToPlace(places) {
	  return function (number) {
	    return roundTo(number, places);
	  };
	}

	function getset(model, channel, modifier) {
	  model = Array.isArray(model) ? model : [model];

	  for (const m of model) {
	    (limiters[m] || (limiters[m] = []))[channel] = modifier;
	  }

	  model = model[0];
	  return function (value) {
	    let result;

	    if (arguments.length > 0) {
	      if (modifier) {
	        value = modifier(value);
	      }

	      result = this[model]();
	      result.color[channel] = value;
	      return result;
	    }

	    result = this[model]().color[channel];

	    if (modifier) {
	      result = modifier(result);
	    }

	    return result;
	  };
	}

	function maxfn(max) {
	  return function (v) {
	    return Math.max(0, Math.min(max, v));
	  };
	}

	function assertArray(value) {
	  return Array.isArray(value) ? value : [value];
	}

	function zeroArray(array, length) {
	  for (let i = 0; i < length; i++) {
	    if (typeof array[i] !== 'number') {
	      array[i] = 0;
	    }
	  }

	  return array;
	}

	var color = Color;

	var jkstra$1 = {exports: {}};

	var BFS = {exports: {}};

	var constants = {};

	Object.defineProperty(constants, "__esModule", {
	  value: true
	});
	constants.OUT = true;
	constants.IN = false;
	constants.REACHED = 1;
	constants.SETTLED = 2;

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  var _constants = constants;

	  function BFS(graph, opts) {
	    var options = _extends({
	      flagKey: '_bfs'
	    }, opts);

	    var flagKey = options.flagKey;

	    function clearFlags() {
	      graph.forEachVertex(function (v) {
	        delete v[flagKey];
	      });
	    }

	    function mark(v) {
	      v[flagKey] = true;
	    }

	    function isMarked(v) {
	      return v[flagKey] === true;
	    }

	    var defaultTraversalOptions = {
	      direction: _constants.OUT,
	      onVisit: function onVisit(u) {},
	      onTestEdge: function onTestEdge(e) {},
	      edgeFilter: null // take all edges

	    };
	    return {
	      /**
	      Traverse the graph using the breadth first algorithm,
	      starting from source, with the specified options
	      */
	      traverse: function traverse(source, opts) {
	        var options = _extends({}, defaultTraversalOptions, opts);

	        clearFlags();
	        var queue = [];
	        queue.push(source);
	        mark(source);
	        var u = void 0,
	            v = void 0,
	            edges = void 0;

	        while (queue.length > 0) {
	          u = queue.shift();
	          options.onVisit(u);
	          edges = graph.incidentEdges(u, options.direction, options.edgeFilter);
	          edges.forEach(function (e) {
	            options.onTestEdge(e);
	            v = options.direction ? e.to : e.from;

	            if (!isMarked(v)) {
	              mark(v);
	              queue.push(v);
	            }
	          });
	        }
	      }
	    };
	  }

	  exports.default = BFS;
	  module.exports = exports['default'];
	})(BFS, BFS.exports);

	var DijkstraIterator = {exports: {}};

	var PriorityQueue = {exports: {}};

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var PriorityQueue = function () {
	    function PriorityQueue() {
	      _classCallCheck(this, PriorityQueue);

	      this.heap = [];
	    } // TODO: make it an option, for max or min priority queue


	    _createClass(PriorityQueue, [{
	      key: "_compare",
	      value: function _compare(a, b) {
	        return a.key - b.key;
	      }
	    }, {
	      key: "_bubbleUp",
	      value: function _bubbleUp(idx) {
	        var element = this.heap[idx];
	        var parentIdx = void 0;
	        var parent = void 0;

	        while (idx > 0) {
	          // Compute the parent element's index, and fetch it.
	          parentIdx = Math.floor((idx + 1) / 2) - 1;
	          parent = this.heap[parentIdx]; // If the parent has a lesser score, things are in order and we
	          // are done.

	          if (this._compare(element, parent) > 0) {
	            break;
	          } // Otherwise, swap the parent with the current element and
	          // continue.


	          this.heap[parentIdx] = element;
	          this.heap[idx] = parent;
	          idx = parentIdx;
	        }
	      }
	    }, {
	      key: "_sinkDown",
	      value: function _sinkDown(idx) {
	        var length = this.heap.length;
	        var element = this.heap[idx];
	        var swapIdx = void 0;

	        while (true) {
	          var rChildIdx = (idx + 1) * 2;
	          var lChildIdx = rChildIdx - 1;
	          swapIdx = -1; // if the first child exists

	          if (lChildIdx < length) {
	            var lChild = this.heap[lChildIdx]; // and is lower than the element, they must be swapped

	            if (this._compare(lChild, element) < 0) {
	              swapIdx = lChildIdx;
	            } // unless there is another lesser child, which will be the one swapped


	            if (rChildIdx < length) {
	              var rChild = this.heap[rChildIdx];

	              if ((swapIdx === -1 || this._compare(rChild, lChild) < 0) && this._compare(rChild, element) < 0) {
	                swapIdx = rChildIdx;
	              }
	            }
	          } // if no swap occurs, the element found its right place


	          if (swapIdx === -1) {
	            break;
	          } // otherwise, swap and continue on next tree level


	          this.heap[idx] = this.heap[swapIdx];
	          this.heap[swapIdx] = element;
	          idx = swapIdx;
	        }
	      }
	    }, {
	      key: "_findElementIndex",
	      value: function _findElementIndex(item) {
	        // TODO: optimize
	        for (var i = 0, l = this.heap.length; i < l; i++) {
	          if (this.heap[i].item === item) {
	            return i;
	          }
	        }

	        return -1;
	      }
	    }, {
	      key: "insert",
	      value: function insert(item, key) {
	        this.heap.push({
	          item: item,
	          key: key
	        });

	        this._bubbleUp(this.heap.length - 1);
	      }
	    }, {
	      key: "pop",
	      value: function pop() {
	        if (this.heap.length === 0) {
	          return null;
	        }

	        var element = this.heap[0];
	        var end = this.heap.pop(); // replace the first element by the last,
	        // and let it sink to its right place

	        if (this.heap.length > 0) {
	          this.heap[0] = end;

	          this._sinkDown(0);
	        }

	        return element;
	      }
	    }, {
	      key: "peek",
	      value: function peek() {
	        if (this.heap.length === 0) {
	          return null;
	        }

	        return this.heap[0];
	      }
	    }, {
	      key: "updateKey",
	      value: function updateKey(item, newKey) {
	        var idx = this._findElementIndex(item);

	        if (idx === -1) {
	          return;
	        }

	        var oldKey = this.heap[idx].key;
	        this.heap[idx].key = newKey;

	        if (newKey < oldKey) {
	          this._bubbleUp(idx);
	        } else {
	          this._sinkDown(idx);
	        }
	      }
	    }, {
	      key: "count",
	      get: function get() {
	        return this.heap.length;
	      }
	    }]);

	    return PriorityQueue;
	  }();
	  exports.default = PriorityQueue;
	  module.exports = exports['default'];
	})(PriorityQueue, PriorityQueue.exports);

	var nodeFlagger = {exports: {}};

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _class = function () {
	    function _class(graph, flagKey) {
	      _classCallCheck(this, _class);

	      this.graph = graph;
	      this.flagKey = flagKey;
	    }

	    _createClass(_class, [{
	      key: "clearFlags",
	      value: function clearFlags(graph) {
	        var _this = this;

	        this.graph.forEachVertex(function (v) {
	          delete v[_this.flagKey];
	        });
	      }
	    }, {
	      key: "getFlags",
	      value: function getFlags(v) {
	        return v[this.flagKey] || {};
	      }
	    }, {
	      key: "setFlags",
	      value: function setFlags(v, flags) {
	        if (!v.hasOwnProperty(this.flagKey)) {
	          v[this.flagKey] = {};
	        }

	        for (var key in flags) {
	          v[this.flagKey][key] = flags[key];
	        }
	      }
	    }]);

	    return _class;
	  }();

	  exports.default = _class;
	  module.exports = exports['default'];
	})(nodeFlagger, nodeFlagger.exports);

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var _updatablePriorityQueue = PriorityQueue.exports;

	  var _updatablePriorityQueue2 = _interopRequireDefault(_updatablePriorityQueue);

	  var _nodeFlagger = nodeFlagger.exports;

	  var _nodeFlagger2 = _interopRequireDefault(_nodeFlagger);

	  var _constants = constants;

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var DijkstraIterator = function () {
	    function DijkstraIterator(graph, source, opts) {
	      _classCallCheck(this, DijkstraIterator);

	      this.graph = graph;
	      this.source = source;
	      this.options = _extends({}, DijkstraIterator.defaultOptions, opts);
	      this.flags = new _nodeFlagger2.default(this.graph, this.options.flagKey);
	      this.pQ = new _updatablePriorityQueue2.default();

	      this._initTraversal();
	    }

	    _createClass(DijkstraIterator, [{
	      key: '_reach',
	      value: function _reach(v, incEdge, fCost, gCost, action) {
	        // update state to "reached", and register cost and incomingEdge
	        this.flags.setFlags(v, {
	          state: _constants.REACHED,
	          fCost: fCost,
	          gCost: gCost,
	          inc: incEdge
	        });

	        if (action) {
	          action(v);
	        }
	      }
	    }, {
	      key: '_settle',
	      value: function _settle(v, action) {
	        this.flags.setFlags(v, {
	          state: _constants.SETTLED
	        });

	        if (action) {
	          action(v);
	        }
	      }
	    }, {
	      key: '_initTraversal',
	      value: function _initTraversal() {
	        // reset node tagging
	        this.flags.clearFlags(this.graph);
	        this.pQ.insert(this.source, this.options.heuristic(this.source));

	        this._reach(this.source, null, this.options.heuristic(this.source), 0, this.options.onReach);
	      }
	    }, {
	      key: 'next',
	      value: function next() {
	        // if no more node available in the queue,
	        // return the iterator end signal
	        if (this.pQ.count === 0) {
	          return {
	            done: true
	          };
	        }

	        var _options = this.options,
	            direction = _options.direction,
	            onReach = _options.onReach,
	            onSettle = _options.onSettle,
	            edgeFilter = _options.edgeFilter,
	            edgeCost = _options.edgeCost,
	            heuristic = _options.heuristic,
	            shouldUpdateKey = _options.shouldUpdateKey;
	        var u = this.pQ.pop().item;
	        var v = void 0;
	        var vFlags = void 0;
	        var uGCost = this.flags.getFlags(u).gCost;
	        var vFCost = void 0,
	            vGCost = void 0;

	        this._settle(u, onSettle);

	        var edges = this.graph.incidentEdges(u, direction, edgeFilter);
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = edges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var e = _step.value;
	            v = direction === _constants.OUT ? e.to : e.from;
	            vFlags = this.flags.getFlags(v);

	            if (vFlags.state !== _constants.SETTLED) {
	              vGCost = uGCost + edgeCost(e, uGCost);
	              vFCost = vGCost + heuristic(v);

	              if (vFlags.state !== _constants.REACHED) {
	                this.pQ.insert(v, vFCost);

	                this._reach(v, e, vFCost, vGCost, onReach);
	              } else {
	                if (shouldUpdateKey(vFlags.fCost, vFCost, vFlags.inc, e)) {
	                  this.pQ.updateKey(v, vFCost);

	                  this._reach(v, e, vFCost, vGCost, onReach);
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return {
	          value: u
	        };
	      }
	    }]);

	    return DijkstraIterator;
	  }();

	  DijkstraIterator.defaultOptions = {
	    flagKey: '_dijkstra',
	    direction: _constants.OUT,
	    shouldUpdateKey: function shouldUpdateKey(prevCost, newCost) {
	      return newCost < prevCost;
	    },
	    edgeCost: function edgeCost(e, costDone) {
	      return 1;
	    },
	    heuristic: function heuristic(v) {
	      return 0;
	    },
	    onReach: null,
	    // nothing special to do when reaching a node
	    onSettle: null,
	    // nothing special to do when setting a node
	    edgeFilter: null // take all edges

	  };
	  exports.default = DijkstraIterator;
	  module.exports = exports['default'];
	})(DijkstraIterator, DijkstraIterator.exports);

	var Dijkstra = {exports: {}};

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var _DijkstraIterator = DijkstraIterator.exports;

	  var _DijkstraIterator2 = _interopRequireDefault(_DijkstraIterator);

	  var _nodeFlagger = nodeFlagger.exports;

	  var _nodeFlagger2 = _interopRequireDefault(_nodeFlagger);

	  var _constants = constants;

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var Dijkstra = function () {
	    function Dijkstra(graph, opts) {
	      _classCallCheck(this, Dijkstra);

	      this.graph = graph;
	      this.options = _extends({
	        flagKey: '_dijkstra'
	      }, opts);
	      this.nodeFlagger = new _nodeFlagger2.default(this.graph, this.options.flagKey);
	    }

	    _createClass(Dijkstra, [{
	      key: 'rebuildPath',
	      value: function rebuildPath(end) {
	        var edges = [];
	        var edge = void 0; // going upward in the tree until the first vertex (with no incoming edge)

	        while ((edge = this.nodeFlagger.getFlags(end).inc) !== null) {
	          edges.push(edge);
	          end = edge.from;
	        }

	        return edges.reverse();
	      }
	    }, {
	      key: 'shortestPath',

	      /**
	      The most common use of Dijkstra traversal
	      */
	      value: function shortestPath(source, target, opts) {
	        var _this = this;

	        var options = opts || {};

	        options.isFinished = function () {
	          return _this.nodeFlagger.getFlags(target).state === _constants.SETTLED;
	        };

	        var found = this.traverse(source, options);

	        if (found) {
	          return this.rebuildPath(target);
	        }

	        return null;
	      }
	      /**
	      Traverse the graph using Dijkstra's algorithm,
	      starting from source, with the specified options
	      */

	    }, {
	      key: 'traverse',
	      value: function traverse(source, opts) {
	        var options = _extends({}, Dijkstra.defaultTraversalOptions, opts);

	        var dijkstraIterator = new _DijkstraIterator2.default(this.graph, source, opts); // simply loop over the iterator until it ends

	        while (!dijkstraIterator.next().done && !options.isFinished()) {} // if false, means the whole graph was traversed


	        return options.isFinished();
	      }
	    }]);

	    return Dijkstra;
	  }();

	  Dijkstra.defaultTraversalOptions = {
	    isFinished: function isFinished() {
	      return false;
	    }
	  };
	  exports.default = Dijkstra;
	  module.exports = exports['default'];
	})(Dijkstra, Dijkstra.exports);

	var BidirectionalDijkstra = {exports: {}};

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var _DijkstraIterator = DijkstraIterator.exports;

	  var _DijkstraIterator2 = _interopRequireDefault(_DijkstraIterator);

	  var _nodeFlagger = nodeFlagger.exports;

	  var _nodeFlagger2 = _interopRequireDefault(_nodeFlagger);

	  var _constants = constants;

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var BidirectionalDijkstra = function () {
	    function BidirectionalDijkstra(graph, opts) {
	      _classCallCheck(this, BidirectionalDijkstra);

	      this.graph = graph;
	      this.options = _extends({}, opts);
	      this.outKey = '_dijkstra_out';
	      this.inKey = '_dijkstra_in';
	    }

	    _createClass(BidirectionalDijkstra, [{
	      key: 'rebuildPath',
	      value: function rebuildPath(meetingNode) {
	        var edges = [];
	        var edge = void 0;
	        var currentNode = meetingNode; // going upward in the tree until the first vertex (with no incoming edge)

	        while ((edge = this.outFlagger.getFlags(currentNode).inc) !== null) {
	          edges.push(edge);
	          currentNode = edge.from;
	        }

	        edges.reverse();
	        currentNode = meetingNode; // going upward in the tree until the first vertex (with no incoming edge)

	        while ((edge = this.inFlagger.getFlags(currentNode).inc) !== null) {
	          edges.push(edge);
	          currentNode = edge.to;
	        }

	        return edges;
	      }
	    }, {
	      key: '_hasBeenReachBothWays',
	      value: function _hasBeenReachBothWays(node) {
	        var outState = this.outFlagger.getFlags(node);
	        var inState = this.inFlagger.getFlags(node);
	        return (outState.state === _constants.REACHED || outState.state === _constants.SETTLED) && (inState.state === _constants.REACHED || inState.state === _constants.SETTLED);
	      }
	    }, {
	      key: 'shortestPath',
	      value: function shortestPath(source, target, options) {
	        var outIteraror = new _DijkstraIterator2.default(this.graph, source, _extends({}, options, options.OUT, {
	          direction: _constants.OUT,
	          flagKey: this.outKey
	        }));
	        var inIterator = new _DijkstraIterator2.default(this.graph, target, _extends({}, options, options.IN, {
	          direction: _constants.IN,
	          flagKey: this.inKey
	        }));
	        this.outFlagger = new _nodeFlagger2.default(this.graph, this.outKey);
	        this.inFlagger = new _nodeFlagger2.default(this.graph, this.inKey);
	        var iterator = outIteraror;
	        var meetingNode = void 0;
	        var next = void 0; // simply loop over the iterator until it ends

	        while (!(next = iterator.next()).done) {
	          if (this._hasBeenReachBothWays(next.value)) {
	            meetingNode = next.value;
	            break;
	          } // alternate between the two iterators


	          iterator = iterator === outIteraror ? inIterator : outIteraror;
	        }

	        if (meetingNode) {
	          return this.rebuildPath(meetingNode);
	        }

	        return null;
	      }
	    }]);

	    return BidirectionalDijkstra;
	  }();
	  exports.default = BidirectionalDijkstra;
	  module.exports = exports['default'];
	})(BidirectionalDijkstra, BidirectionalDijkstra.exports);

	var Graph = {exports: {}};

	var utils = {};

	Object.defineProperty(utils, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	utils.propsMatch = propsMatch;

	function isScalar(o) {
	  return /boolean|number|string/.test(typeof o === "undefined" ? "undefined" : _typeof(o));
	}

	function propsMatch(set, subSet) {
	  if (subSet === null) {
	    return set === null;
	  }

	  if (isScalar(set)) {
	    return isScalar(subSet) && set === subSet;
	  }

	  for (var p in subSet) {
	    if (set.hasOwnProperty(p)) {
	      if (!propsMatch(set[p], subSet[p])) {
	        return false;
	      }
	    } else {
	      return false;
	    }
	  }

	  return true;
	}

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var _constants = constants;
	  var _utils = utils;

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var Graph = function () {
	    function Graph() {
	      _classCallCheck(this, Graph);

	      this.vertices = [];
	      this.edges = [];
	    }

	    _createClass(Graph, [{
	      key: 'addVertex',
	      value: function addVertex(data) {
	        var vertex = {
	          _in: [],
	          _out: [],
	          data: data
	        };
	        this.vertices.push(vertex);
	        return vertex;
	      }
	    }, {
	      key: 'addEdge',
	      value: function addEdge(from, to, data) {
	        var edge = {
	          from: from,
	          to: to,
	          data: data || {}
	        };

	        from._out.push(edge);

	        to._in.push(edge);

	        this.edges.push(edge);
	        return edge;
	      }
	      /**
	      Shortcut to add an edge and its reverse,
	      sharing the same data.
	      */

	    }, {
	      key: 'addEdgePair',
	      value: function addEdgePair(a, b, data) {
	        return [this.addEdge(a, b, data), this.addEdge(b, a, data)];
	      }
	    }, {
	      key: 'removeEdge',
	      value: function removeEdge(edge) {
	        var index = this.edges.indexOf(edge);

	        if (index !== -1) {
	          // remove from extremity this.vertices first
	          edge.from._out.splice(edge.from._out.indexOf(edge), 1);

	          edge.to._in.splice(edge.to._in.indexOf(edge), 1);

	          this.edges.splice(index, 1);
	        }
	      }
	    }, {
	      key: 'removeVertex',
	      value: function removeVertex(vertex) {
	        var index = this.vertices.indexOf(vertex);

	        if (index !== -1) {
	          // remove all incident this.edges first
	          var edgesToRemove = vertex._in.concat(vertex._out);

	          for (var i = 0; i < edgesToRemove.length; i++) {
	            this.removeEdge(edgesToRemove[i]);
	          }

	          this.vertices.splice(index, 1);
	        }
	      }
	    }, {
	      key: 'outEdges',
	      value: function outEdges(vertex, filter) {
	        return this.incidentEdges(vertex, _constants.OUT, filter);
	      }
	    }, {
	      key: 'inEdges',
	      value: function inEdges(vertex, filter) {
	        return this.incidentEdges(vertex, _constants.IN, filter);
	      }
	      /**
	      Returns all this.edges incident to a vertex, in one direction (outgoing or incoming),
	      optionnaly filtered by a given function.
	      */

	    }, {
	      key: 'incidentEdges',
	      value: function incidentEdges(vertex, direction, filter) {
	        if (!filter) {
	          return direction ? vertex._out : vertex._in;
	        }

	        var edges = direction ? vertex._out : vertex._in;
	        return edges.filter(filter);
	      }
	    }, {
	      key: 'vertex',
	      value: function vertex(props) {
	        var vertices = this.vertices;

	        for (var i = 0, l = vertices.length; i < l; i++) {
	          if ((0, _utils.propsMatch)(vertices[i].data, props)) {
	            return vertices[i];
	          }
	        }

	        return null;
	      }
	    }, {
	      key: 'edge',
	      value: function edge(props) {
	        var edges = this.edges;

	        for (var i = 0, l = edges.length; i < l; i++) {
	          if ((0, _utils.propsMatch)(edges[i].data, props)) {
	            return edges[i];
	          }
	        }

	        return null;
	      }
	      /**
	      Perform an action on each vertex of the graph
	      */

	    }, {
	      key: 'forEachVertex',
	      value: function forEachVertex(action) {
	        this.vertices.forEach(function (v) {
	          return action(v);
	        });
	      }
	      /**
	      Perform an action on each edge of the graph
	      */

	    }, {
	      key: 'forEachEdge',
	      value: function forEachEdge(action) {
	        this.edges.forEach(function (e) {
	          return action(e);
	        });
	      }
	    }, {
	      key: 'vertexCount',
	      get: function get() {
	        return this.vertices.length;
	      }
	    }, {
	      key: 'edgeCount',
	      get: function get() {
	        return this.edges.length;
	      }
	    }]);

	    return Graph;
	  }();
	  exports.default = Graph;
	  module.exports = exports['default'];
	})(Graph, Graph.exports);

	(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var _BFS = BFS.exports;

	  var _BFS2 = _interopRequireDefault(_BFS);

	  var _DijkstraIterator = DijkstraIterator.exports;

	  var _DijkstraIterator2 = _interopRequireDefault(_DijkstraIterator);

	  var _Dijkstra = Dijkstra.exports;

	  var _Dijkstra2 = _interopRequireDefault(_Dijkstra);

	  var _BidirectionalDijkstra = BidirectionalDijkstra.exports;

	  var _BidirectionalDijkstra2 = _interopRequireDefault(_BidirectionalDijkstra);

	  var _Graph = Graph.exports;

	  var _Graph2 = _interopRequireDefault(_Graph);

	  var _constants = constants;

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  var jkstra = {
	    IN: _constants.IN,
	    OUT: _constants.OUT,
	    Graph: _Graph2.default,
	    algos: {
	      BFS: _BFS2.default,
	      Dijkstra: _Dijkstra2.default,
	      BidirectionalDijkstra: _BidirectionalDijkstra2.default,
	      DijkstraIterator: _DijkstraIterator2.default
	    }
	  };
	  exports.default = jkstra;
	  module.exports = exports['default'];
	})(jkstra$1, jkstra$1.exports);

	var jkstra = /*@__PURE__*/getDefaultExportFromCjs(jkstra$1.exports);

	/**
	Functions to create and manipulate transportation network graphs,
	with notions of stations, stops, lines and connections.
	It is *NOT* GTFS compatible as-is (no management of real time tables,
	only basic travel times between stations)
	*/

	const PTGraph = function () {
	  const graph = new jkstra.Graph();
	  const stations = {};
	  const lines = {};

	  function createSegment(fromStop, toStop, _toStation, line, direction, time) {
	    const edgeData = {
	      line,
	      type: line.type,
	      direction
	    };

	    if (time) {
	      edgeData.travelTime = time;
	    }

	    line.segments.push(graph.addEdge(fromStop, toStop, edgeData));
	  }
	  /**
	  Creates graph elements to modelize a stop for a line at a given station,
	  */


	  function createStop(station, line, direction) {
	    // try to find an existing stop (for branch reconnection)
	    const tmp = graph.outEdges(station.vertex, e => e.to.data.line === line && e.to.data.direction === direction);

	    if (tmp?.length > 0) {
	      return tmp[0].to;
	    }

	    const stop = graph.addVertex({
	      station,
	      line,
	      direction
	    });
	    graph.addEdgePair(stop, station.vertex, {
	      type: 'connection'
	    });
	    return stop;
	  }
	  /**
	  Adds a line branch to the graph.
	  A branch is defined as a linear and ordered sequence of existing station ids.
	  */


	  function addBranch(line, stationIds, direction, times = []) {
	    if (stationIds.length < 2) {
	      return;
	    }

	    let station,
	        stop,
	        prevStop = null;

	    for (let i = 0; i < stationIds.length; i++) {
	      station = stations[stationIds[i]];

	      if (!station) {
	        console.error('Unknown station "' + stationIds[i] + '". Skip.');
	        continue;
	      }

	      station.lines.add(line);
	      stop = createStop(station, line, direction);

	      if (prevStop) {
	        createSegment(prevStop, stop, station.vertex, line, direction, times[i - 1]);
	      }

	      prevStop = stop;
	    }
	  }
	  /**
	  Ensure the travel time is defined as a 2 cell array
	  */


	  function normalizeBiDirTime(time) {
	    const times = [].concat(time);

	    if (times.length === 1) {
	      times.push(times[0]);
	    }

	    return times;
	  }
	  /**
	  Establish an explicit connection between two stations, with a given travel time.
	  Used to connect otherwise disconnected stations
	  (example: on-foot transfer between 2 stations of different transport type)
	  */


	  function connectStations(stationA, stationB, times) {
	    graph.addEdge(stationA.vertex, stationB.vertex, {
	      type: 'connection',
	      interStation: true,
	      explicit: true,
	      travelTime: times[0]
	    });
	    graph.addEdge(stationB.vertex, stationA.vertex, {
	      type: 'connection',
	      interStation: true,
	      explicit: true,
	      travelTime: times[1]
	    });
	  }
	  /**
	  Establish an explicit connection between stops of two different lines
	  at the same station, with a given travel time.
	  Used to assign specific travel times to connections instead of default ones
	  */


	  function connectLinesAtStation(station, lineA, lineB, times) {
	    // find stops of lineA
	    const stopsA = graph.outEdges(station.vertex, edge => edge.to.data.line === lineA).map(edge => edge.to);
	    const stopsB = graph.outEdges(station.vertex, edge => edge.to.data.line === lineB).map(edge => edge.to);
	    stopsA.forEach(function (a) {
	      stopsB.forEach(function (b) {
	        graph.addEdge(a, b, {
	          type: 'connection',
	          explicit: true,
	          travelTime: times[0]
	        });
	        graph.addEdge(b, a, {
	          type: 'connection',
	          explicit: true,
	          travelTime: times[1]
	        });
	      });
	    });
	  }

	  const publicAPI = {
	    innerGraph: graph,
	    loadNetwork: function (networkDef) {
	      publicAPI.loadStations(networkDef.stations);
	      publicAPI.loadLines(networkDef.lines);
	      publicAPI.loadConnections(networkDef.connections);
	    },

	    /**
	    Loads a list of transport stations and build corresponding graph vertices
	    */
	    loadStations: function (stationDef) {
	      stationDef.forEach(_station => {
	        const station = { ..._station
	        };
	        station.vertex = graph.addVertex(station);
	        station.lines = new Set();
	        stations[station.id] = station;
	      });
	    },

	    /**
	    Loads a list of transport lines and build corresponding graph elements
	    */
	    loadLines: function (lineDef) {
	      lineDef.forEach(_line => {
	        const line = { ..._line,
	          segments: []
	        };
	        line.branches.forEach(b => {
	          if (b.direction !== undefined) {
	            addBranch(line, b.stations, b.direction, b.times);
	          } else {
	            addBranch(line, b.stations, 0, b.times);
	            addBranch(line, b.stations.slice().reverse(), 1, b.times?.slice().reverse());
	          }
	        });
	        lines[line.id] = line;
	      });
	    },

	    /**
	    Loads a list of connections and build corresponding graph edges
	    */
	    loadConnections: function (connDef) {
	      connDef.forEach(conn => {
	        const inOutTimes = normalizeBiDirTime(conn.time);

	        if (conn.station && conn.lineA && conn.lineB) {
	          connectLinesAtStation(this.stationById(conn.station), lines[conn.lineA], lines[conn.lineB], inOutTimes);
	        } else if (conn.stationA && conn.stationB) {
	          connectStations(this.stationById(conn.stationA), this.stationById(conn.stationB), inOutTimes);
	        }
	      });
	    },
	    stationById: function (stationId) {
	      return stations[stationId] || null;
	    },

	    /**
	    Perform an action on each station of the transportation network
	    */
	    forEachStation: function (action) {
	      for (let id in stations) {
	        action(stations[id]);
	      }
	    },

	    /**
	    Perform an action on each line of the transportation network
	    */
	    forEachLine: function (action) {
	      for (let id in lines) {
	        action(lines[id]);
	      }
	    },

	    /**
	    Compute the shortest route between two stations, using the Dijkstra algorithm
	    */
	    shortestRoute: function (stationFrom, stationTo, opts) {
	      const search = new jkstra.algos.Dijkstra(graph);
	      return search.shortestPath(stationFrom.vertex, stationTo.vertex, Object.assign({
	        shouldUpdateKey: function (prevCost, newCost, prevIncoming, newIncoming) {
	          if (prevIncoming.data.explicit && !newIncoming.data.explicit) {
	            return false;
	          }

	          return newCost < prevCost;
	        }
	      }, opts));
	    }
	  };
	  return publicAPI;
	};

	/*!
	* tabbable 5.2.1
	* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
	*/
	var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
	var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
	var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

	var getCandidates = function getCandidates(el, includeContainer, filter) {
	  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

	  if (includeContainer && matches.call(el, candidateSelector)) {
	    candidates.unshift(el);
	  }

	  candidates = candidates.filter(filter);
	  return candidates;
	};

	var isContentEditable = function isContentEditable(node) {
	  return node.contentEditable === 'true';
	};

	var getTabindex = function getTabindex(node) {
	  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

	  if (!isNaN(tabindexAttr)) {
	    return tabindexAttr;
	  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
	  // so if they don't have a tabindex attribute specifically set, assume it's 0.


	  if (isContentEditable(node)) {
	    return 0;
	  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
	  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
	  //  yet they are still part of the regular tab order; in FF, they get a default
	  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
	  //  order, consider their tab index to be 0.


	  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
	    return 0;
	  }

	  return node.tabIndex;
	};

	var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
	  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
	};

	var isInput = function isInput(node) {
	  return node.tagName === 'INPUT';
	};

	var isHiddenInput = function isHiddenInput(node) {
	  return isInput(node) && node.type === 'hidden';
	};

	var isDetailsWithSummary = function isDetailsWithSummary(node) {
	  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
	    return child.tagName === 'SUMMARY';
	  });
	  return r;
	};

	var getCheckedRadio = function getCheckedRadio(nodes, form) {
	  for (var i = 0; i < nodes.length; i++) {
	    if (nodes[i].checked && nodes[i].form === form) {
	      return nodes[i];
	    }
	  }
	};

	var isTabbableRadio = function isTabbableRadio(node) {
	  if (!node.name) {
	    return true;
	  }

	  var radioScope = node.form || node.ownerDocument;

	  var queryRadios = function queryRadios(name) {
	    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
	  };

	  var radioSet;

	  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
	    radioSet = queryRadios(window.CSS.escape(node.name));
	  } else {
	    try {
	      radioSet = queryRadios(node.name);
	    } catch (err) {
	      // eslint-disable-next-line no-console
	      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
	      return false;
	    }
	  }

	  var checked = getCheckedRadio(radioSet, node.form);
	  return !checked || checked === node;
	};

	var isRadio = function isRadio(node) {
	  return isInput(node) && node.type === 'radio';
	};

	var isNonTabbableRadio = function isNonTabbableRadio(node) {
	  return isRadio(node) && !isTabbableRadio(node);
	};

	var isHidden = function isHidden(node, displayCheck) {
	  if (getComputedStyle(node).visibility === 'hidden') {
	    return true;
	  }

	  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
	  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

	  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
	    return true;
	  }

	  if (!displayCheck || displayCheck === 'full') {
	    while (node) {
	      if (getComputedStyle(node).display === 'none') {
	        return true;
	      }

	      node = node.parentElement;
	    }
	  } else if (displayCheck === 'non-zero-area') {
	    var _node$getBoundingClie = node.getBoundingClientRect(),
	        width = _node$getBoundingClie.width,
	        height = _node$getBoundingClie.height;

	    return width === 0 && height === 0;
	  }

	  return false;
	}; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
	//  unless they are in the _first_ <legend> element of the top-most disabled
	//  fieldset


	var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
	  if (isInput(node) || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA' || node.tagName === 'BUTTON') {
	    var parentNode = node.parentElement;

	    while (parentNode) {
	      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
	        // look for the first <legend> as an immediate child of the disabled
	        //  <fieldset>: if the node is in that legend, it'll be enabled even
	        //  though the fieldset is disabled; otherwise, the node is in a
	        //  secondary/subsequent legend, or somewhere else within the fieldset
	        //  (however deep nested) and it'll be disabled
	        for (var i = 0; i < parentNode.children.length; i++) {
	          var child = parentNode.children.item(i);

	          if (child.tagName === 'LEGEND') {
	            if (child.contains(node)) {
	              return false;
	            } // the node isn't in the first legend (in doc order), so no matter
	            //  where it is now, it'll be disabled


	            return true;
	          }
	        } // the node isn't in a legend, so no matter where it is now, it'll be disabled


	        return true;
	      }

	      parentNode = parentNode.parentElement;
	    }
	  } // else, node's tabbable/focusable state should not be affected by a fieldset's
	  //  enabled/disabled state


	  return false;
	};

	var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
	  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || // For a details element with a summary, the summary element gets the focus
	  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
	    return false;
	  }

	  return true;
	};

	var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
	  if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
	    return false;
	  }

	  return true;
	};

	var tabbable = function tabbable(el, options) {
	  options = options || {};
	  var regularTabbables = [];
	  var orderedTabbables = [];
	  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
	  candidates.forEach(function (candidate, i) {
	    var candidateTabindex = getTabindex(candidate);

	    if (candidateTabindex === 0) {
	      regularTabbables.push(candidate);
	    } else {
	      orderedTabbables.push({
	        documentOrder: i,
	        tabIndex: candidateTabindex,
	        node: candidate
	      });
	    }
	  });
	  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
	    return a.node;
	  }).concat(regularTabbables);
	  return tabbableNodes;
	};

	var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

	var isFocusable = function isFocusable(node, options) {
	  options = options || {};

	  if (!node) {
	    throw new Error('No node provided');
	  }

	  if (matches.call(node, focusableCandidateSelector) === false) {
	    return false;
	  }

	  return isNodeMatchingSelectorFocusable(options, node);
	};

	/*!
	* focus-trap 6.7.1
	* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
	*/

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var activeFocusTraps = function () {
	  var trapQueue = [];
	  return {
	    activateTrap: function activateTrap(trap) {
	      if (trapQueue.length > 0) {
	        var activeTrap = trapQueue[trapQueue.length - 1];

	        if (activeTrap !== trap) {
	          activeTrap.pause();
	        }
	      }

	      var trapIndex = trapQueue.indexOf(trap);

	      if (trapIndex === -1) {
	        trapQueue.push(trap);
	      } else {
	        // move this existing trap to the front of the queue
	        trapQueue.splice(trapIndex, 1);
	        trapQueue.push(trap);
	      }
	    },
	    deactivateTrap: function deactivateTrap(trap) {
	      var trapIndex = trapQueue.indexOf(trap);

	      if (trapIndex !== -1) {
	        trapQueue.splice(trapIndex, 1);
	      }

	      if (trapQueue.length > 0) {
	        trapQueue[trapQueue.length - 1].unpause();
	      }
	    }
	  };
	}();

	var isSelectableInput = function isSelectableInput(node) {
	  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
	};

	var isEscapeEvent = function isEscapeEvent(e) {
	  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
	};

	var isTabEvent = function isTabEvent(e) {
	  return e.key === 'Tab' || e.keyCode === 9;
	};

	var delay = function delay(fn) {
	  return setTimeout(fn, 0);
	}; // Array.find/findIndex() are not supported on IE; this replicates enough
	//  of Array.findIndex() for our needs


	var findIndex = function findIndex(arr, fn) {
	  var idx = -1;
	  arr.every(function (value, i) {
	    if (fn(value)) {
	      idx = i;
	      return false; // break
	    }

	    return true; // next
	  });
	  return idx;
	};
	/**
	 * Get an option's value when it could be a plain value, or a handler that provides
	 *  the value.
	 * @param {*} value Option's value to check.
	 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
	 * @returns {*} The `value`, or the handler's returned value.
	 */


	var valueOrHandler = function valueOrHandler(value) {
	  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    params[_key - 1] = arguments[_key];
	  }

	  return typeof value === 'function' ? value.apply(void 0, params) : value;
	};

	var getActualTarget = function getActualTarget(event) {
	  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
	  //  shadow host. However, event.target.composedPath() will be an array of
	  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
	  //  outer-most (the host HTML document). If we have access to composedPath(),
	  //  then use its first element; otherwise, fall back to event.target (and
	  //  this only works for an _open_ shadow DOM; otherwise,
	  //  composedPath()[0] === event.target always).
	  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
	};

	var createFocusTrap = function createFocusTrap(elements, userOptions) {
	  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;

	  var config = _objectSpread2({
	    returnFocusOnDeactivate: true,
	    escapeDeactivates: true,
	    delayInitialFocus: true
	  }, userOptions);

	  var state = {
	    // @type {Array<HTMLElement>}
	    containers: [],
	    // list of objects identifying the first and last tabbable nodes in all containers/groups in
	    //  the trap
	    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
	    //  is active, but the trap should never get to a state where there isn't at least one group
	    //  with at least one tabbable node in it (that would lead to an error condition that would
	    //  result in an error being thrown)
	    // @type {Array<{ container: HTMLElement, firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
	    tabbableGroups: [],
	    nodeFocusedBeforeActivation: null,
	    mostRecentlyFocusedNode: null,
	    active: false,
	    paused: false,
	    // timer ID for when delayInitialFocus is true and initial focus in this trap
	    //  has been delayed during activation
	    delayInitialFocusTimer: undefined
	  };
	  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

	  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
	    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
	  };

	  var containersContain = function containersContain(element) {
	    return !!(element && state.containers.some(function (container) {
	      return container.contains(element);
	    }));
	  };
	  /**
	   * Gets the node for the given option, which is expected to be an option that
	   *  can be either a DOM node, a string that is a selector to get a node, `false`
	   *  (if a node is explicitly NOT given), or a function that returns any of these
	   *  values.
	   * @param {string} optionName
	   * @returns {undefined | false | HTMLElement | SVGElement} Returns
	   *  `undefined` if the option is not specified; `false` if the option
	   *  resolved to `false` (node explicitly not given); otherwise, the resolved
	   *  DOM node.
	   * @throws {Error} If the option is set, not `false`, and is not, or does not
	   *  resolve to a node.
	   */


	  var getNodeForOption = function getNodeForOption(optionName) {
	    var optionValue = config[optionName];

	    if (typeof optionValue === 'function') {
	      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        params[_key2 - 1] = arguments[_key2];
	      }

	      optionValue = optionValue.apply(void 0, params);
	    }

	    if (!optionValue) {
	      if (optionValue === undefined || optionValue === false) {
	        return optionValue;
	      } // else, empty string (invalid), null (invalid), 0 (invalid)


	      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
	    }

	    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

	    if (typeof optionValue === 'string') {
	      node = doc.querySelector(optionValue); // resolve to node, or null if fails

	      if (!node) {
	        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
	      }
	    }

	    return node;
	  };

	  var getInitialFocusNode = function getInitialFocusNode() {
	    var node = getNodeForOption('initialFocus'); // false explicitly indicates we want no initialFocus at all

	    if (node === false) {
	      return false;
	    }

	    if (node === undefined) {
	      // option not specified: use fallback options
	      if (containersContain(doc.activeElement)) {
	        node = doc.activeElement;
	      } else {
	        var firstTabbableGroup = state.tabbableGroups[0];
	        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode; // NOTE: `fallbackFocus` option function cannot return `false` (not supported)

	        node = firstTabbableNode || getNodeForOption('fallbackFocus');
	      }
	    }

	    if (!node) {
	      throw new Error('Your focus-trap needs to have at least one focusable element');
	    }

	    return node;
	  };

	  var updateTabbableNodes = function updateTabbableNodes() {
	    state.tabbableGroups = state.containers.map(function (container) {
	      var tabbableNodes = tabbable(container);

	      if (tabbableNodes.length > 0) {
	        return {
	          container: container,
	          firstTabbableNode: tabbableNodes[0],
	          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
	        };
	      }

	      return undefined;
	    }).filter(function (group) {
	      return !!group;
	    }); // remove groups with no tabbable nodes
	    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

	    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
	    ) {
	      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
	    }
	  };

	  var tryFocus = function tryFocus(node) {
	    if (node === false) {
	      return;
	    }

	    if (node === doc.activeElement) {
	      return;
	    }

	    if (!node || !node.focus) {
	      tryFocus(getInitialFocusNode());
	      return;
	    }

	    node.focus({
	      preventScroll: !!config.preventScroll
	    });
	    state.mostRecentlyFocusedNode = node;

	    if (isSelectableInput(node)) {
	      node.select();
	    }
	  };

	  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
	    var node = getNodeForOption('setReturnFocus', previousActiveElement);
	    return node ? node : node === false ? false : previousActiveElement;
	  }; // This needs to be done on mousedown and touchstart instead of click
	  // so that it precedes the focus event.


	  var checkPointerDown = function checkPointerDown(e) {
	    var target = getActualTarget(e);

	    if (containersContain(target)) {
	      // allow the click since it ocurred inside the trap
	      return;
	    }

	    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
	      // immediately deactivate the trap
	      trap.deactivate({
	        // if, on deactivation, we should return focus to the node originally-focused
	        //  when the trap was activated (or the configured `setReturnFocus` node),
	        //  then assume it's also OK to return focus to the outside node that was
	        //  just clicked, causing deactivation, as long as that node is focusable;
	        //  if it isn't focusable, then return focus to the original node focused
	        //  on activation (or the configured `setReturnFocus` node)
	        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
	        //  which will result in the outside click setting focus to the node
	        //  that was clicked, whether it's focusable or not; by setting
	        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
	        //  on activation (or the configured `setReturnFocus` node)
	        returnFocus: config.returnFocusOnDeactivate && !isFocusable(target)
	      });
	      return;
	    } // This is needed for mobile devices.
	    // (If we'll only let `click` events through,
	    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


	    if (valueOrHandler(config.allowOutsideClick, e)) {
	      // allow the click outside the trap to take place
	      return;
	    } // otherwise, prevent the click


	    e.preventDefault();
	  }; // In case focus escapes the trap for some strange reason, pull it back in.


	  var checkFocusIn = function checkFocusIn(e) {
	    var target = getActualTarget(e);
	    var targetContained = containersContain(target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

	    if (targetContained || target instanceof Document) {
	      if (targetContained) {
	        state.mostRecentlyFocusedNode = target;
	      }
	    } else {
	      // escaped! pull it back in to where it just left
	      e.stopImmediatePropagation();
	      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
	    }
	  }; // Hijack Tab events on the first and last focusable nodes of the trap,
	  // in order to prevent focus from escaping. If it escapes for even a
	  // moment it can end up scrolling the page and causing confusion so we
	  // kind of need to capture the action at the keydown phase.


	  var checkTab = function checkTab(e) {
	    var target = getActualTarget(e);
	    updateTabbableNodes();
	    var destinationNode = null;

	    if (state.tabbableGroups.length > 0) {
	      // make sure the target is actually contained in a group
	      // NOTE: the target may also be the container itself if it's tabbable
	      //  with tabIndex='-1' and was given initial focus
	      var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
	        var container = _ref.container;
	        return container.contains(target);
	      });

	      if (containerIndex < 0) {
	        // target not found in any group: quite possible focus has escaped the trap,
	        //  so bring it back in to...
	        if (e.shiftKey) {
	          // ...the last node in the last group
	          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
	        } else {
	          // ...the first node in the first group
	          destinationNode = state.tabbableGroups[0].firstTabbableNode;
	        }
	      } else if (e.shiftKey) {
	        // REVERSE
	        // is the target the first tabbable node in a group?
	        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
	          var firstTabbableNode = _ref2.firstTabbableNode;
	          return target === firstTabbableNode;
	        });

	        if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === target) {
	          // an exception case where the target is the container itself, in which
	          //  case, we should handle shift+tab as if focus were on the container's
	          //  first tabbable node, and go to the last tabbable node of the LAST group
	          startOfGroupIndex = containerIndex;
	        }

	        if (startOfGroupIndex >= 0) {
	          // YES: then shift+tab should go to the last tabbable node in the
	          //  previous group (and wrap around to the last tabbable node of
	          //  the LAST group if it's the first tabbable node of the FIRST group)
	          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
	          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
	          destinationNode = destinationGroup.lastTabbableNode;
	        }
	      } else {
	        // FORWARD
	        // is the target the last tabbable node in a group?
	        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
	          var lastTabbableNode = _ref3.lastTabbableNode;
	          return target === lastTabbableNode;
	        });

	        if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === target) {
	          // an exception case where the target is the container itself, in which
	          //  case, we should handle tab as if focus were on the container's
	          //  last tabbable node, and go to the first tabbable node of the FIRST group
	          lastOfGroupIndex = containerIndex;
	        }

	        if (lastOfGroupIndex >= 0) {
	          // YES: then tab should go to the first tabbable node in the next
	          //  group (and wrap around to the first tabbable node of the FIRST
	          //  group if it's the last tabbable node of the LAST group)
	          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

	          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
	          destinationNode = _destinationGroup.firstTabbableNode;
	        }
	      }
	    } else {
	      // NOTE: the fallbackFocus option does not support returning false to opt-out
	      destinationNode = getNodeForOption('fallbackFocus');
	    }

	    if (destinationNode) {
	      e.preventDefault();
	      tryFocus(destinationNode);
	    } // else, let the browser take care of [shift+]tab and move the focus

	  };

	  var checkKey = function checkKey(e) {
	    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
	      e.preventDefault();
	      trap.deactivate();
	      return;
	    }

	    if (isTabEvent(e)) {
	      checkTab(e);
	      return;
	    }
	  };

	  var checkClick = function checkClick(e) {
	    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
	      return;
	    }

	    var target = getActualTarget(e);

	    if (containersContain(target)) {
	      return;
	    }

	    if (valueOrHandler(config.allowOutsideClick, e)) {
	      return;
	    }

	    e.preventDefault();
	    e.stopImmediatePropagation();
	  }; //
	  // EVENT LISTENERS
	  //


	  var addListeners = function addListeners() {
	    if (!state.active) {
	      return;
	    } // There can be only one listening focus trap at a time


	    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
	    // that caused the focus trap activation.

	    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
	      tryFocus(getInitialFocusNode());
	    }) : tryFocus(getInitialFocusNode());
	    doc.addEventListener('focusin', checkFocusIn, true);
	    doc.addEventListener('mousedown', checkPointerDown, {
	      capture: true,
	      passive: false
	    });
	    doc.addEventListener('touchstart', checkPointerDown, {
	      capture: true,
	      passive: false
	    });
	    doc.addEventListener('click', checkClick, {
	      capture: true,
	      passive: false
	    });
	    doc.addEventListener('keydown', checkKey, {
	      capture: true,
	      passive: false
	    });
	    return trap;
	  };

	  var removeListeners = function removeListeners() {
	    if (!state.active) {
	      return;
	    }

	    doc.removeEventListener('focusin', checkFocusIn, true);
	    doc.removeEventListener('mousedown', checkPointerDown, true);
	    doc.removeEventListener('touchstart', checkPointerDown, true);
	    doc.removeEventListener('click', checkClick, true);
	    doc.removeEventListener('keydown', checkKey, true);
	    return trap;
	  }; //
	  // TRAP DEFINITION
	  //


	  trap = {
	    activate: function activate(activateOptions) {
	      if (state.active) {
	        return this;
	      }

	      var onActivate = getOption(activateOptions, 'onActivate');
	      var onPostActivate = getOption(activateOptions, 'onPostActivate');
	      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

	      if (!checkCanFocusTrap) {
	        updateTabbableNodes();
	      }

	      state.active = true;
	      state.paused = false;
	      state.nodeFocusedBeforeActivation = doc.activeElement;

	      if (onActivate) {
	        onActivate();
	      }

	      var finishActivation = function finishActivation() {
	        if (checkCanFocusTrap) {
	          updateTabbableNodes();
	        }

	        addListeners();

	        if (onPostActivate) {
	          onPostActivate();
	        }
	      };

	      if (checkCanFocusTrap) {
	        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
	        return this;
	      }

	      finishActivation();
	      return this;
	    },
	    deactivate: function deactivate(deactivateOptions) {
	      if (!state.active) {
	        return this;
	      }

	      clearTimeout(state.delayInitialFocusTimer); // noop if undefined

	      state.delayInitialFocusTimer = undefined;
	      removeListeners();
	      state.active = false;
	      state.paused = false;
	      activeFocusTraps.deactivateTrap(trap);
	      var onDeactivate = getOption(deactivateOptions, 'onDeactivate');
	      var onPostDeactivate = getOption(deactivateOptions, 'onPostDeactivate');
	      var checkCanReturnFocus = getOption(deactivateOptions, 'checkCanReturnFocus');

	      if (onDeactivate) {
	        onDeactivate();
	      }

	      var returnFocus = getOption(deactivateOptions, 'returnFocus', 'returnFocusOnDeactivate');

	      var finishDeactivation = function finishDeactivation() {
	        delay(function () {
	          if (returnFocus) {
	            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
	          }

	          if (onPostDeactivate) {
	            onPostDeactivate();
	          }
	        });
	      };

	      if (returnFocus && checkCanReturnFocus) {
	        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
	        return this;
	      }

	      finishDeactivation();
	      return this;
	    },
	    pause: function pause() {
	      if (state.paused || !state.active) {
	        return this;
	      }

	      state.paused = true;
	      removeListeners();
	      return this;
	    },
	    unpause: function unpause() {
	      if (!state.paused || !state.active) {
	        return this;
	      }

	      state.paused = false;
	      updateTabbableNodes();
	      addListeners();
	      return this;
	    },
	    updateContainerElements: function updateContainerElements(containerElements) {
	      var elementsAsArray = [].concat(containerElements).filter(Boolean);
	      state.containers = elementsAsArray.map(function (element) {
	        return typeof element === 'string' ? doc.querySelector(element) : element;
	      });

	      if (state.active) {
	        updateTabbableNodes();
	      }

	      return this;
	    }
	  }; // initialize container elements

	  trap.updateContainerElements(elements);
	  return trap;
	};

	const travelCostLessConnections = e => e.data.type === 'connection' ? 3 : 1;

	const ALLOWED_TYPES = {
	  metro: true,
	  rer: true,
	  tram: true,
	  connection: true
	};

	function initAboutDialog() {
	  const trap = createFocusTrap(document.querySelector('#about .dialog'));
	  const dialogClose = document.getElementById('about-close');

	  const closeAbout = () => {
	    trap.deactivate();
	    document.body.classList.remove('about');
	    document.getElementById('wrapper').removeAttribute('aria-hidden');
	  };

	  dialogClose.addEventListener('click', closeAbout);
	  document.getElementById('about-button').addEventListener('click', () => {
	    document.body.classList.add('about');
	    document.getElementById('wrapper').setAttribute('aria-hidden', 'true');
	    dialogClose.focus();
	    trap.activate();
	    document.addEventListener('keydown', e => {
	      if (e.code === 'Escape') {
	        closeAbout();
	      }
	    });
	  });
	}

	function loadNetwork() {
	  const network = new PTGraph();

	  const getJson = url => fetch(url).then(response => response.json());

	  return Promise.all([getJson('data/stations.json'), getJson('data/lines.json'), getJson('data/connections.json')]).then(([stations, lines, connections]) => {
	    network.loadNetwork({
	      stations,
	      lines,
	      connections
	    });
	    return network;
	  });
	}

	function init(ratp) {
	  const _map = L.map('map', {
	    center: [48.86, 2.335],
	    zoom: 13,
	    minZoom: 13,
	    maxZoom: 15,
	    layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
	    attributionControl: false
	  }); // ensure drawing order of layers


	  _map.createPane('outlines');

	  _map.createPane('lines');

	  _map.createPane('connOutlines');

	  _map.createPane('conn');

	  const stationMarkers = {};
	  const stationsWithConnections = new Set();
	  const lineIndex = {};
	  ratp.forEachLine(line => {
	    lineIndex[line.id] = line;
	  });
	  const stations = [];
	  ratp.forEachStation(station => {
	    const lineName = lineIndex[station.idrefligc].name.replace('METRO ', '').replace('TRAM ', 'T');
	    stations.push({ ...station,
	      uniqueName: `${station.name} (${lineName})`
	    });
	  });
	  initForm();

	  const stationToolTip = (station, on) => {
	    const marker = stationMarkers[station.id];

	    if (!marker) {
	      return;
	    }

	    if (on) {
	      stationMarkers[station.id].bindTooltip(station.name, {
	        opacity: 1,
	        className: 'stationTooltip',
	        permanent: true
	      });
	    } else {
	      marker.unbindTooltip();
	    }
	  }; // Stations


	  stations.forEach(function (station) {
	    const {
	      id,
	      coords,
	      name,
	      lines
	    } = station;
	    const lineColor = color(lineIndex[station.idrefligc].color);
	    const offLedColor = (lineColor.isDark() ? lineColor : lineColor.darken(0.5)).desaturate(0.75).hex();
	    const stationMarker = L.marker(coords, {
	      icon: L.divIcon({
	        className: 'stationMarker',
	        html: `<div class="stationMarker-inner" id="station-${id}" style="--led-color:${offLedColor};"></div>`
	      })
	    }).addTo(_map).on('click', () => toggleRoutePoint(station)).on('mouseover', ({
	      target
	    }) => {
	      if (routePoints.includes(station)) {
	        return;
	      }

	      stationToolTip(station, true);
	    }).on('mouseout', ({
	      target
	    }) => {
	      if (routePoints.includes(station)) {
	        return;
	      }

	      stationToolTip(station, false);
	    });
	    stationMarkers[id] = stationMarker;

	    if (lines.size > 1) {
	      stationsWithConnections.add(station);
	    }
	  }); // Lines

	  function drawPolys(coords, options = []) {
	    options.forEach(opts => {
	      L.polyline(coords, {
	        clickable: false,
	        opacity: 1,
	        ...opts
	      }).addTo(_map);
	    });
	  }

	  ratp.forEachLine(function (line) {
	    const segments = line.branches.flatMap(({
	      segments
	    }) => segments.map(segment => segment.map(coord => coord.slice().reverse())));
	    const color$1 = color(line.color).hex();
	    const darkerColor = color(color$1).darken(0.25).hex();
	    const weight = line.type === 'rer' ? 7 : line.type === 'tram' ? 2 : 4;
	    segments.forEach(coordsPath => {
	      drawPolys(coordsPath, [{
	        pane: 'outlines',
	        color: darkerColor,
	        weight: weight + 2
	      }, {
	        pane: 'lines',
	        color: color$1,
	        weight
	      }]);
	    });
	  }); // Connections

	  ratp.innerGraph.forEachEdge(function (edge) {
	    if (edge.data.interStation) {
	      const {
	        from: {
	          data: stationA
	        },
	        to: {
	          data: stationB
	        }
	      } = edge;
	      stationsWithConnections.add(stationA);
	      stationsWithConnections.add(stationB);
	      drawPolys([stationA.coords, stationB.coords], [{
	        pane: 'connOutlines',
	        color: 'black',
	        weight: 8
	      }, {
	        pane: 'conn',
	        color: 'white',
	        weight: 6
	      }]);
	    }
	  });
	  stationsWithConnections.forEach(({
	    coords
	  }) => {
	    drawPolys([coords, coords], [{
	      pane: 'connOutlines',
	      color: 'black',
	      weight: 20
	    }, {
	      pane: 'conn',
	      color: 'white',
	      weight: 18
	    }]);
	  }); // -----

	  function initForm() {
	    document.getElementById('station-list').innerHTML = stations.map(map => map.uniqueName).sort().map(name => `<option value="${name}" />`).join('');
	    const start = document.getElementById('start');
	    const end = document.getElementById('end');
	    start.addEventListener('blur', () => {
	      const from = stations.find(station => station.uniqueName === start.value);
	      start.setCustomValidity(from ? '' : 'Station inconnue');
	    });
	    document.getElementById('searchform').addEventListener('submit', e => {
	      e.preventDefault();
	      const from = stations.find(station => station.uniqueName === start.value);
	      const to = stations.find(station => station.uniqueName === end.value);
	      routePoints.forEach(previous => stationToolTip(previous, false));

	      if (from && to) {
	        stationToolTip(from, true);
	        stationToolTip(to, true);
	        routePoints.push(from);
	        routePoints.push(to);
	        computeRoute(from, to);
	      }
	    });
	  } // Route computing


	  function computeRoute(startStation, endStation) {
	    mapClearPath();

	    if (startStation && endStation) {
	      console.log(JSON.stringify({
	        comm: startStation.name + '=>' + endStation.name,
	        stationA: startStation.id,
	        stationB: endStation.id
	      }));
	      const route = ratp.shortestRoute(startStation, endStation, {
	        edgeFilter: edge => ALLOWED_TYPES[edge.data.type],
	        edgeCost: travelCostLessConnections
	      });
	      displayResult(route);
	    }

	    return;
	  }

	  const routePoints = [];

	  function removeRoutePoint(i) {
	    const [removedPoint] = routePoints.splice(i, 1);
	    stationToolTip(removedPoint, false);
	  }

	  function toggleRoutePoint(station) {
	    const i = routePoints.findIndex(s => s === station);

	    if (i > -1) {
	      removeRoutePoint(i);
	    } else {
	      routePoints.push(station);

	      if (routePoints.length > 2) {
	        removeRoutePoint(0);
	      }
	    }

	    computeRoute(routePoints[0], routePoints[1]);
	  }

	  function mapClearPath() {
	    const pathLeds = [...document.getElementsByClassName('path')];
	    pathLeds.forEach(pathLed => {
	      pathLed.style = '';
	      pathLed.classList.remove('path');
	    });
	  }

	  let zIndexOffset = 1;

	  function displayResult(path) {
	    if (!path) {
	      return;
	    }

	    const stations = [];
	    path.forEach(({
	      to: {
	        data: toPoint
	      }
	    }) => {
	      if (toPoint.hasOwnProperty('station') && (stations.length === 0 || stations[stations.length - 1] !== toPoint.station)) {
	        stations.push({
	          station: toPoint.station,
	          color: toPoint.line.color
	        });
	      }
	    });
	    stations.forEach(({
	      station,
	      color: color$1
	    }) => {
	      const haloColor = color(color$1).saturate(3).lightness(85).hex();
	      const ledColor = color(color$1).lightness(65).hex();
	      const stationLed = document.getElementById(`station-${station.id}`);
	      stationLed.style = `--line-color:${color$1};--led-color:${ledColor};--halo-color:${haloColor}`;
	      stationLed.classList.add('path');
	      stationMarkers[station.id].setZIndexOffset(zIndexOffset++);
	    });
	  }
	}

	function start() {
	  loadNetwork().then(init);
	  initAboutDialog();
	}

	window.onload = start;

})();
