export const seatInfo = {
	"version": "5.8.4",
	"platform": "html5",
	"images": [],
	"dataBox": {
		"class": "b2.ElementBox",
		"s": {
			"background.type": "vector",
			"background.vector.fill": true,
			"background.vector.fill.color": "white",
			"background.vector.shape": "rect"
		},
		"layers": [{
				"id": "bottom",
				"name": "Default",
				"visible": true,
				"editable": true,
				"movable": true
			},
			{
				"id": "top",
				"name": "Default",
				"visible": true,
				"editable": true,
				"movable": true
			},
			{
				"name": "Default",
				"visible": true,
				"editable": true,
				"movable": true
			}
		]
	},
	"datas": [{
			"class": "b2.StageNode",
			"ref": 0,
			"p": {
				"name": "舞台",
				"location": {
					"x": 211.15604661086036,
					"y": 102.07200032505189
				},
				"width": 1075.5250885859577,
				"height": 100
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "rectangle",
				"vector.fill.color": "rgba(255,255,255,0.4)",
				"vector.outline.width": 2,
				"vector.outline.color": "#000000",
				"label.position": "center",
				"label.font": "20px arial",
				"label.xoffset": 0,
				"label.yoffset": 0,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.padding": 0
			},
			"id": "dbf7e9d8d1741af697381cd186a99079"
		},
		{
			"class": "b2.RegionNode",
			"ref": 1,
			"p": {
				"name": "乐池",
				"location": {
					"x": 82.1475302062058,
					"y": 241.96305256165368
				},
				"width": 1300.7644041404576,
				"height": 259.4007958589269
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "rectangle",
				"vector.fill.color": "rgba(186, 202, 198,0.5)",
				"vector.outline.width": 2,
				"vector.outline.color": "#000000",
				"label.position": "center",
				"label.font": "20px arial",
				"label.xoffset": 0,
				"label.yoffset": 0,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.padding": 0
			},
			"id": "b9d53dd649b350e49c29d46bf296f473"
		},
		{
			"class": "b2.RowNode",
			"ref": 2,
			"p": {
				"name": "1排",
				"parent": 1,
				"location": {
					"x": 321.33257173387864,
					"y": 299.8408745717421
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -128.51836289132166,
				"label.yoffset": 1.2712459104919276
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1"
			},
			"id": "710a3af14ea5e9f80229786681eb5935"
		},
		{
			"class": "b2.SeatNode",
			"ref": 3,
			"p": {
				"name": "9",
				"parent": 2,
				"location": {
					"x": 425.8509346252003,
					"y": 300.56962866125025
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 9
			},
			"id": "de0c086cb9a0447ed410d4d07bcd99fb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 4,
			"p": {
				"name": "11",
				"parent": 2,
				"location": {
					"x": 388.814208842557,
					"y": 301.8408745717421
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 11
			},
			"id": "ffc84b00c4f610a440878916a8675ed7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 5,
			"p": {
				"name": "13",
				"parent": 2,
				"location": {
					"x": 348.814208842557,
					"y": 303.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 13
			},
			"id": "03a4fc82eda5e2beb96da2b82a808edd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 6,
			"p": {
				"name": "15",
				"parent": 2,
				"location": {
					"x": 308.814208842557,
					"y": 303.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 15
			},
			"id": "abd2daa06478b2c1c31ee8d4a5ada7b9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 7,
			"p": {
				"name": "17",
				"parent": 2,
				"location": {
					"x": 268.814208842557,
					"y": 303.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 17
			},
			"id": "6e8c676beedf5d8ea3caf33f1d04451e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 8,
			"p": {
				"name": "19",
				"parent": 2,
				"location": {
					"x": 228.81420884255698,
					"y": 303.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 19
			},
			"id": "010a11152e085d3afbb940f9673832a3"
		},
		{
			"class": "b2.RowNode",
			"ref": 9,
			"p": {
				"name": "2排",
				"parent": 1,
				"location": {
					"x": 300.0098403640118,
					"y": 341.11212048223405
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -150,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2"
			},
			"id": "183c1fa1134c93317b1619764c2a01c8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 10,
			"p": {
				"name": "11",
				"parent": 9,
				"location": {
					"x": 426.0098403640118,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 11
			},
			"id": "4150f1d1a3ffa3775b83f42824789238"
		},
		{
			"class": "b2.SeatNode",
			"ref": 11,
			"p": {
				"name": "13",
				"parent": 9,
				"location": {
					"x": 386.0098403640118,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 13
			},
			"id": "ec7489741c3a447b092be53bb8264978"
		},
		{
			"class": "b2.SeatNode",
			"ref": 12,
			"p": {
				"name": "15",
				"parent": 9,
				"location": {
					"x": 346.0098403640118,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 15
			},
			"id": "d14d7245d712bc25999e4e81aec98010"
		},
		{
			"class": "b2.SeatNode",
			"ref": 13,
			"p": {
				"name": "17",
				"parent": 9,
				"location": {
					"x": 306.0098403640118,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 17
			},
			"id": "fc72b316a68b5fc291018bb49ec5ae34"
		},
		{
			"class": "b2.SeatNode",
			"ref": 14,
			"p": {
				"name": "19",
				"parent": 9,
				"location": {
					"x": 266.0098403640118,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 19
			},
			"id": "33062dc6b6060ee011cded612e91391a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 15,
			"p": {
				"name": "21",
				"parent": 9,
				"location": {
					"x": 226.00984036401178,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 21
			},
			"id": "0e5e4da5819434be51812c459a85b877"
		},
		{
			"class": "b2.SeatNode",
			"ref": 16,
			"p": {
				"name": "23",
				"parent": 9,
				"location": {
					"x": 186.00984036401178,
					"y": 343.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 23
			},
			"id": "5b330cab92be807062faa42298c38dcd"
		},
		{
			"class": "b2.RowNode",
			"ref": 17,
			"p": {
				"name": "3排",
				"parent": 1,
				"location": {
					"x": 280.0098403640118,
					"y": 381.11212048223405
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3"
			},
			"id": "4fb750b2163296bce8c6e63fde3b12c6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 18,
			"p": {
				"name": "11",
				"parent": 17,
				"location": {
					"x": 426.0098403640118,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 11
			},
			"id": "5e8999ca6f4d7a6e430fc6e4a9f4d5cb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 19,
			"p": {
				"name": "13",
				"parent": 17,
				"location": {
					"x": 386.0098403640118,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 13
			},
			"id": "aa6360747fe5a7057ed170dc5a08b2a4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 20,
			"p": {
				"name": "15",
				"parent": 17,
				"location": {
					"x": 346.0098403640118,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 15
			},
			"id": "5f9feca26240aea753ffc158bc08af4b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 21,
			"p": {
				"name": "17",
				"parent": 17,
				"location": {
					"x": 306.0098403640118,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 17
			},
			"id": "5a19b82b3980a17f31f1692d22051e9d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 22,
			"p": {
				"name": "19",
				"parent": 17,
				"location": {
					"x": 266.0098403640118,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 19
			},
			"id": "cf85b56eefc0d9d7bfc99237fa08cf40"
		},
		{
			"class": "b2.SeatNode",
			"ref": 23,
			"p": {
				"name": "21",
				"parent": 17,
				"location": {
					"x": 226.00984036401178,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 21
			},
			"id": "49b0daf3e71a4213684ea04e6aca45c7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 24,
			"p": {
				"name": "23",
				"parent": 17,
				"location": {
					"x": 186.00984036401178,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 23
			},
			"id": "ba72b5f90241421b7f90aec64853a127"
		},
		{
			"class": "b2.SeatNode",
			"ref": 25,
			"p": {
				"name": "25",
				"parent": 17,
				"location": {
					"x": 146.00984036401178,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 25
			},
			"id": "0a4dd417b60b3f12790b4234828bdf63"
		},
		{
			"class": "b2.RowNode",
			"ref": 26,
			"p": {
				"name": "4排",
				"parent": 1,
				"location": {
					"x": 280.0098403640118,
					"y": 418.8785573263491
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4"
			},
			"id": "372e7ed558db48fbdb3975569295a404"
		},
		{
			"class": "b2.SeatNode",
			"ref": 27,
			"p": {
				"name": "13",
				"parent": 26,
				"location": {
					"x": 426.0098403640118,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 13
			},
			"id": "b3e760903df0092ba4a5216189786b0a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 28,
			"p": {
				"name": "15",
				"parent": 26,
				"location": {
					"x": 386.0098403640118,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 15
			},
			"id": "19064969ab5326d41c9346b416dc773b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 29,
			"p": {
				"name": "17",
				"parent": 26,
				"location": {
					"x": 346.0098403640118,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 17
			},
			"id": "da4504f4d6f3368a503099f654730901"
		},
		{
			"class": "b2.SeatNode",
			"ref": 30,
			"p": {
				"name": "19",
				"parent": 26,
				"location": {
					"x": 306.0098403640118,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 19
			},
			"id": "e77284e4869ff4064da7d0c0dc3fd7c2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 31,
			"p": {
				"name": "21",
				"parent": 26,
				"location": {
					"x": 266.0098403640118,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 21
			},
			"id": "71b23e7d37d8befab38e39b6d3cbf6ef"
		},
		{
			"class": "b2.SeatNode",
			"ref": 32,
			"p": {
				"name": "23",
				"parent": 26,
				"location": {
					"x": 226.00984036401178,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 23
			},
			"id": "063984265c3b1800f125274c2c1b7225"
		},
		{
			"class": "b2.SeatNode",
			"ref": 33,
			"p": {
				"name": "25",
				"parent": 26,
				"location": {
					"x": 186.00984036401178,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 25
			},
			"id": "68b621eefb86d5802df3413f240929bb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 34,
			"p": {
				"name": "27",
				"parent": 26,
				"location": {
					"x": 146.00984036401178,
					"y": 420.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 27
			},
			"id": "313e9de3f82a16129fc711c973e65e0d"
		},
		{
			"class": "b2.RowNode",
			"ref": 35,
			"p": {
				"name": "1排",
				"parent": 1,
				"location": {
					"x": 744.8739724038776,
					"y": 298.8785573263491
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1"
			},
			"id": "3a6c143e0f0aeeb5d44607f4d5db9bcd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 36,
			"p": {
				"name": "8",
				"parent": 35,
				"location": {
					"x": 890.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 8
			},
			"id": "a1beba8f93101eeba20870b8c185e5c3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 37,
			"p": {
				"name": "6",
				"parent": 35,
				"location": {
					"x": 850.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 6
			},
			"id": "d62bff3c5233a602fbf6c7dc2957b141"
		},
		{
			"class": "b2.SeatNode",
			"ref": 38,
			"p": {
				"name": "4",
				"parent": 35,
				"location": {
					"x": 810.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 4
			},
			"id": "9534ce83d956deb887efca8978b8d9d8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 39,
			"p": {
				"name": "2",
				"parent": 35,
				"location": {
					"x": 770.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 2
			},
			"id": "546e0eb337824ec70030dece4d4b06d3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 40,
			"p": {
				"name": "1",
				"parent": 35,
				"location": {
					"x": 730.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 1
			},
			"id": "86011cdcb5e0cddc7713847246fe4507"
		},
		{
			"class": "b2.SeatNode",
			"ref": 41,
			"p": {
				"name": "3",
				"parent": 35,
				"location": {
					"x": 690.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 3
			},
			"id": "b1d3b4e52831cca99b3c97e09ecc277d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 42,
			"p": {
				"name": "5",
				"parent": 35,
				"location": {
					"x": 650.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 5
			},
			"id": "b7d9ea8d4121e1e91cbb5732f8ea600d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 43,
			"p": {
				"name": "7",
				"parent": 35,
				"location": {
					"x": 610.8739724038776,
					"y": 300.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 7
			},
			"id": "92efb0f7a00401421d646c71ce821c84"
		},
		{
			"class": "b2.RowNode",
			"ref": 44,
			"p": {
				"name": "2排",
				"parent": 1,
				"location": {
					"x": 727.005467156798,
					"y": 339.99533890429154
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2"
			},
			"id": "0bff3cae123ab3a0c0216b2fe032cc8a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 45,
			"p": {
				"name": "8",
				"parent": 44,
				"location": {
					"x": 893.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 8
			},
			"id": "14bd215140c3230f28e6c6069dc2e4f1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 46,
			"p": {
				"name": "6",
				"parent": 44,
				"location": {
					"x": 853.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 6
			},
			"id": "70ec1b7475b4e7d521ee433767cbc502"
		},
		{
			"class": "b2.SeatNode",
			"ref": 47,
			"p": {
				"name": "4",
				"parent": 44,
				"location": {
					"x": 813.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 4
			},
			"id": "d8549b43debca8b670c89521f32bfd19"
		},
		{
			"class": "b2.SeatNode",
			"ref": 48,
			"p": {
				"name": "2",
				"parent": 44,
				"location": {
					"x": 773.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 2
			},
			"id": "b6a4e743910a2f0d7f82b89e13687f18"
		},
		{
			"class": "b2.SeatNode",
			"ref": 49,
			"p": {
				"name": "1",
				"parent": 44,
				"location": {
					"x": 733.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 1
			},
			"id": "0532db42ac4c8e5b51b82054cc964ba3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 50,
			"p": {
				"name": "3",
				"parent": 44,
				"location": {
					"x": 693.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 3
			},
			"id": "cf5ab90e5b3bf798137396fc1d241607"
		},
		{
			"class": "b2.SeatNode",
			"ref": 51,
			"p": {
				"name": "5",
				"parent": 44,
				"location": {
					"x": 653.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 5
			},
			"id": "7cfaf4886ab1ff3abb4cb9b89bd0bc3e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 52,
			"p": {
				"name": "7",
				"parent": 44,
				"location": {
					"x": 613.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 7
			},
			"id": "014f830a07911a54c332c83d3662b2bb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 53,
			"p": {
				"name": "9",
				"parent": 44,
				"location": {
					"x": 573.005467156798,
					"y": 341.99533890429154
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 9
			},
			"id": "f6bf6be78c3d18201e1f276c44af0a01"
		},
		{
			"class": "b2.RowNode",
			"ref": 54,
			"p": {
				"name": "3排",
				"parent": 1,
				"location": {
					"x": 747.1075355597626,
					"y": 381.11212048223405
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -210,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3"
			},
			"id": "bb99784aa52b831065db6fc2a965cf46"
		},
		{
			"class": "b2.SeatNode",
			"ref": 55,
			"p": {
				"name": "10",
				"parent": 54,
				"location": {
					"x": 933.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 10
			},
			"id": "4205494124e170a4521c3a14f2babf3d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 56,
			"p": {
				"name": "8",
				"parent": 54,
				"location": {
					"x": 893.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 8
			},
			"id": "b5b34cb685192fa509476d3a25035101"
		},
		{
			"class": "b2.SeatNode",
			"ref": 57,
			"p": {
				"name": "6",
				"parent": 54,
				"location": {
					"x": 853.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 6
			},
			"id": "dfaff73f89efaf1c137bcf2215cfaeff"
		},
		{
			"class": "b2.SeatNode",
			"ref": 58,
			"p": {
				"name": "4",
				"parent": 54,
				"location": {
					"x": 813.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 4
			},
			"id": "5ecda213065125349d44c1b9b1a31b69"
		},
		{
			"class": "b2.SeatNode",
			"ref": 59,
			"p": {
				"name": "2",
				"parent": 54,
				"location": {
					"x": 773.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 2
			},
			"id": "0d66d4c8737e719a0887a142b4e44025"
		},
		{
			"class": "b2.SeatNode",
			"ref": 60,
			"p": {
				"name": "1",
				"parent": 54,
				"location": {
					"x": 733.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 1
			},
			"id": "63d5c5d8d956484b41c59dc394fbaf9b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 61,
			"p": {
				"name": "3",
				"parent": 54,
				"location": {
					"x": 693.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 3
			},
			"id": "401e3f779c9e6d7f385cdc093a424dce"
		},
		{
			"class": "b2.SeatNode",
			"ref": 62,
			"p": {
				"name": "5",
				"parent": 54,
				"location": {
					"x": 653.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 5
			},
			"id": "40f67cbf1d0ed11e68f93453abd9b5e3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 63,
			"p": {
				"name": "7",
				"parent": 54,
				"location": {
					"x": 613.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 7
			},
			"id": "41573c36578f2bfe8d46a170736905fa"
		},
		{
			"class": "b2.SeatNode",
			"ref": 64,
			"p": {
				"name": "9",
				"parent": 54,
				"location": {
					"x": 573.1075355597626,
					"y": 383.11212048223405
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 9
			},
			"id": "a795170a8281a97cf23bdc915fd32cae"
		},
		{
			"class": "b2.RowNode",
			"ref": 65,
			"p": {
				"name": "4排",
				"parent": 1,
				"location": {
					"x": 725.6541614474876,
					"y": 417.5272516170387
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -230,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4"
			},
			"id": "0d89815cf46f95adb22dae72e575a9d3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 66,
			"p": {
				"name": "10",
				"parent": 65,
				"location": {
					"x": 931.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 10
			},
			"id": "9e8f8d8158eb79777a6fa1072e7e0423"
		},
		{
			"class": "b2.SeatNode",
			"ref": 67,
			"p": {
				"name": "8",
				"parent": 65,
				"location": {
					"x": 891.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 8
			},
			"id": "b753353db90d7104ce09d0d85088df81"
		},
		{
			"class": "b2.SeatNode",
			"ref": 68,
			"p": {
				"name": "6",
				"parent": 65,
				"location": {
					"x": 851.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 6
			},
			"id": "919b1627ceb567ce777c13882f69a959"
		},
		{
			"class": "b2.SeatNode",
			"ref": 69,
			"p": {
				"name": "4",
				"parent": 65,
				"location": {
					"x": 811.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 4
			},
			"id": "d5730bb5190330fea888932073ad4bd9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 70,
			"p": {
				"name": "2",
				"parent": 65,
				"location": {
					"x": 771.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 2
			},
			"id": "37bbc420128a55ad12bc988840237d69"
		},
		{
			"class": "b2.SeatNode",
			"ref": 71,
			"p": {
				"name": "1",
				"parent": 65,
				"location": {
					"x": 731.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 1
			},
			"id": "9ea4ded395d972ae2c08c42b5a3deb4f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 72,
			"p": {
				"name": "3",
				"parent": 65,
				"location": {
					"x": 691.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 3
			},
			"id": "0694096775de69b3add8534ee94e466f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 73,
			"p": {
				"name": "5",
				"parent": 65,
				"location": {
					"x": 651.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 5
			},
			"id": "6f4d687297bda371ba5666a2303b3c36"
		},
		{
			"class": "b2.SeatNode",
			"ref": 74,
			"p": {
				"name": "7",
				"parent": 65,
				"location": {
					"x": 611.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 7
			},
			"id": "c806f0830027344ccb94b6a4d592291f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 75,
			"p": {
				"name": "9",
				"parent": 65,
				"location": {
					"x": 571.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 9
			},
			"id": "470d8d684e3e515c74352be913dc4e89"
		},
		{
			"class": "b2.SeatNode",
			"ref": 76,
			"p": {
				"name": "11",
				"parent": 65,
				"location": {
					"x": 531.6541614474876,
					"y": 419.5272516170387
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 11
			},
			"id": "19819d6eb3657415cee7d777f1cc5ee3"
		},
		{
			"class": "b2.RowNode",
			"ref": 77,
			"p": {
				"name": "1排",
				"parent": 1,
				"location": {
					"x": 1120.1974122570837,
					"y": 293.29464943663675
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -110,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1"
			},
			"id": "5bb14cb6111a6f49f33ff9a0d78141c6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 78,
			"p": {
				"name": "10",
				"parent": 77,
				"location": {
					"x": 1046.1974122570837,
					"y": 295.29464943663675
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 10
			},
			"id": "bf26d730fb06ba5bc05da8f92014b35d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 79,
			"p": {
				"name": "12",
				"parent": 77,
				"location": {
					"x": 1086.1974122570837,
					"y": 295.29464943663675
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 12
			},
			"id": "faf35533e8a62eb574fce755f5f2ffbd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 80,
			"p": {
				"name": "14",
				"parent": 77,
				"location": {
					"x": 1126.1974122570837,
					"y": 295.29464943663675
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 14
			},
			"id": "eea9b0e929c319109b37b2a1445fe169"
		},
		{
			"class": "b2.SeatNode",
			"ref": 81,
			"p": {
				"name": "16",
				"parent": 77,
				"location": {
					"x": 1166.1974122570834,
					"y": 295.29464943663675
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 16
			},
			"id": "8d42a7c4167b652a74dc2ef83e8d432d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 82,
			"p": {
				"name": "18",
				"parent": 77,
				"location": {
					"x": 1206.1974122570834,
					"y": 295.29464943663675
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "1",
				"business.seat": 18
			},
			"id": "016bd6a34578f4499cf8b114466fc239"
		},
		{
			"class": "b2.RowNode",
			"ref": 83,
			"p": {
				"name": "2排",
				"parent": 1,
				"location": {
					"x": 1160.1974122570844,
					"y": 336.64499417046414
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -150.00000000000045,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2"
			},
			"id": "bc7d9d922590e2c9d89e0a8753294abd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 84,
			"p": {
				"name": "10",
				"parent": 83,
				"location": {
					"x": 1046.197412257084,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 10
			},
			"id": "d5caf8de84b25119a7d23ca62a8c9f56"
		},
		{
			"class": "b2.SeatNode",
			"ref": 85,
			"p": {
				"name": "12",
				"parent": 83,
				"location": {
					"x": 1086.197412257084,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 12
			},
			"id": "6ef6f592f1bc81005d7a6914ec424585"
		},
		{
			"class": "b2.SeatNode",
			"ref": 86,
			"p": {
				"name": "14",
				"parent": 83,
				"location": {
					"x": 1126.197412257084,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 14
			},
			"id": "bbef02c7c61364381377640b1aab1b5a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 87,
			"p": {
				"name": "16",
				"parent": 83,
				"location": {
					"x": 1166.1974122570844,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 16
			},
			"id": "3842dc3e97aba4fd1799192f5b4f2d0c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 88,
			"p": {
				"name": "18",
				"parent": 83,
				"location": {
					"x": 1206.1974122570848,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 18
			},
			"id": "8b4b553d2fa1209b4c8b69bb66d887c3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 89,
			"p": {
				"name": "20",
				"parent": 83,
				"location": {
					"x": 1246.1974122570848,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 20
			},
			"id": "13a3d2c6691d51b151131a045ab0165f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 90,
			"p": {
				"name": "22",
				"parent": 83,
				"location": {
					"x": 1286.1974122570848,
					"y": 338.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "2",
				"business.seat": 22
			},
			"id": "102645ac3eb9a869aa170d40048ab574"
		},
		{
			"class": "b2.RowNode",
			"ref": 91,
			"p": {
				"name": "3排",
				"parent": 1,
				"location": {
					"x": 1160.1974122570844,
					"y": 378.8785573263491
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -150.00000000000045,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3"
			},
			"id": "02011461689089a05c06b7b532223275"
		},
		{
			"class": "b2.SeatNode",
			"ref": 92,
			"p": {
				"name": "12",
				"parent": 91,
				"location": {
					"x": 1046.197412257084,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 12
			},
			"id": "fe26c2b9324d4a46ec3dd5bafe590a5f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 93,
			"p": {
				"name": "14",
				"parent": 91,
				"location": {
					"x": 1086.1974122570844,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 14
			},
			"id": "a68a026fc5fd2b4ba7b4d0520266c8ff"
		},
		{
			"class": "b2.SeatNode",
			"ref": 94,
			"p": {
				"name": "16",
				"parent": 91,
				"location": {
					"x": 1126.1974122570848,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 16
			},
			"id": "c92fe637c5d769a030130ea8bbfcb8f0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 95,
			"p": {
				"name": "18",
				"parent": 91,
				"location": {
					"x": 1166.1974122570848,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 18
			},
			"id": "9dabccea14b1892411d8e620bcdb315c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 96,
			"p": {
				"name": "20",
				"parent": 91,
				"location": {
					"x": 1206.1974122570848,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 20
			},
			"id": "f1bd39bc316b29023bcfbf06ddb88dec"
		},
		{
			"class": "b2.SeatNode",
			"ref": 97,
			"p": {
				"name": "22",
				"parent": 91,
				"location": {
					"x": 1246.1974122570848,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 22
			},
			"id": "606b3c4fcc0f57e50f0bd364cd88836a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 98,
			"p": {
				"name": "24",
				"parent": 91,
				"location": {
					"x": 1286.1974122570848,
					"y": 380.8785573263491
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "3",
				"business.seat": 24
			},
			"id": "e0e0ba526566763918328366df76111b"
		},
		{
			"class": "b2.RowNode",
			"ref": 99,
			"p": {
				"name": "4排",
				"parent": 1,
				"location": {
					"x": 1180.1974122570841,
					"y": 416.64499417046414
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170.00000000000023,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4"
			},
			"id": "a2ef8060e794263c1593459cd03ddcdf"
		},
		{
			"class": "b2.SeatNode",
			"ref": 100,
			"p": {
				"name": "12",
				"parent": 99,
				"location": {
					"x": 1046.197412257084,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 12
			},
			"id": "1a4f1bd171c2b2038b0ed78eb11470ca"
		},
		{
			"class": "b2.SeatNode",
			"ref": 101,
			"p": {
				"name": "14",
				"parent": 99,
				"location": {
					"x": 1086.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 14
			},
			"id": "cda4b456ee686ac2c6afc4f3f6f1d6f4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 102,
			"p": {
				"name": "16",
				"parent": 99,
				"location": {
					"x": 1126.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 16
			},
			"id": "c44435d2f7ffc05e5a2f1701444c2df3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 103,
			"p": {
				"name": "18",
				"parent": 99,
				"location": {
					"x": 1166.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 18
			},
			"id": "9bb6be4cceb3b99b83ff8041d090afc0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 104,
			"p": {
				"name": "20",
				"parent": 99,
				"location": {
					"x": 1206.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 20
			},
			"id": "c994e246a7a2cffd30b896f9d4c5afc4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 105,
			"p": {
				"name": "22",
				"parent": 99,
				"location": {
					"x": 1246.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 22
			},
			"id": "9c4e9345bb85861f930f8d2c55cadaf1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 106,
			"p": {
				"name": "24",
				"parent": 99,
				"location": {
					"x": 1286.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 24
			},
			"id": "27be3c984a309142fcc57c04014dcb0a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 107,
			"p": {
				"name": "26",
				"parent": 99,
				"location": {
					"x": 1326.1974122570844,
					"y": 418.64499417046414
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "乐池",
				"business.row": "4",
				"business.seat": 26
			},
			"id": "460b5fc22ebe53a5f5025d4799879853"
		},
		{
			"class": "b2.RegionNode",
			"ref": 108,
			"p": {
				"name": "",
				"location": {
					"x": -186.5530098026918,
					"y": 535.0913079353518
				},
				"width": 1902.2259817308282,
				"height": 637.261635420713
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "rectangle",
				"vector.fill.color": "rgba(186, 202, 198,0.5)",
				"vector.outline.width": 2,
				"vector.outline.color": "#000000",
				"label.position": "center",
				"label.font": "20px arial",
				"label.xoffset": 0,
				"label.yoffset": 0,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.padding": 0
			},
			"id": "e88aceb8a4b0643c43d4fc67c5efe067"
		},
		{
			"class": "b2.RowNode",
			"ref": 109,
			"p": {
				"name": "1排",
				"parent": 108,
				"location": {
					"x": 102.83903672342797,
					"y": 571.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -150,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "1"
			},
			"id": "e79c5eea513042224c8b800fbd106d0c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 110,
			"p": {
				"name": "13",
				"parent": 109,
				"location": {
					"x": 228.83903672342797,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 13
			},
			"id": "3cb7c2d9f39e2a8efcb1ef2e8ac8f473"
		},
		{
			"class": "b2.SeatNode",
			"ref": 111,
			"p": {
				"name": "15",
				"parent": 109,
				"location": {
					"x": 188.83903672342797,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 15
			},
			"id": "27326e1b76526dc4f2de728f3c9cfced"
		},
		{
			"class": "b2.SeatNode",
			"ref": 112,
			"p": {
				"name": "17",
				"parent": 109,
				"location": {
					"x": 148.83903672342802,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 17
			},
			"id": "3f26e417274f86db28d4a891ed26ebaa"
		},
		{
			"class": "b2.SeatNode",
			"ref": 113,
			"p": {
				"name": "19",
				"parent": 109,
				"location": {
					"x": 108.83903672342797,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 19
			},
			"id": "59dac4b584118529c9b5fbfd5be7e33f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 114,
			"p": {
				"name": "21",
				"parent": 109,
				"location": {
					"x": 68.83903672342797,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 21
			},
			"id": "a84e7226f6e533737c23d9b8ad18d877"
		},
		{
			"class": "b2.SeatNode",
			"ref": 115,
			"p": {
				"name": "23",
				"parent": 109,
				"location": {
					"x": 28.839036723427967,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 23
			},
			"id": "2f6c949aa2f97d70202da6cc872c6eaf"
		},
		{
			"class": "b2.SeatNode",
			"ref": 116,
			"p": {
				"name": "25",
				"parent": 109,
				"location": {
					"x": -11.160963276572033,
					"y": 573.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 25
			},
			"id": "4962814ad0ef0066f5039eac1c9db7ff"
		},
		{
			"class": "b2.RowNode",
			"ref": 117,
			"p": {
				"name": "2排",
				"parent": 108,
				"location": {
					"x": 61.610576987691246,
					"y": 611.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "2"
			},
			"id": "6fb9e4c190a3a200f1ee24abbe8292aa"
		},
		{
			"class": "b2.SeatNode",
			"ref": 118,
			"p": {
				"name": "15",
				"parent": 117,
				"location": {
					"x": 227.61057698769122,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 15
			},
			"id": "641f41c49dcb03466f7291ba92e14fd6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 119,
			"p": {
				"name": "17",
				"parent": 117,
				"location": {
					"x": 187.61057698769122,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 17
			},
			"id": "425a512feadffe8440d2525977021bef"
		},
		{
			"class": "b2.SeatNode",
			"ref": 120,
			"p": {
				"name": "19",
				"parent": 117,
				"location": {
					"x": 147.61057698769122,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 19
			},
			"id": "7ac81eea8358bc103cb62cf72e99961d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 121,
			"p": {
				"name": "21",
				"parent": 117,
				"location": {
					"x": 107.61057698769123,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 21
			},
			"id": "a916c902a3c7ac24aa87c05a3d91215f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 122,
			"p": {
				"name": "23",
				"parent": 117,
				"location": {
					"x": 67.61057698769125,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 23
			},
			"id": "a75c00064ed9806dff41829b96900324"
		},
		{
			"class": "b2.SeatNode",
			"ref": 123,
			"p": {
				"name": "25",
				"parent": 117,
				"location": {
					"x": 27.610576987691218,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 25
			},
			"id": "8217f9f48c04b467e394e695ecd4379b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 124,
			"p": {
				"name": "27",
				"parent": 117,
				"location": {
					"x": -12.389423012308782,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 27
			},
			"id": "6a5aebacb6177cd0f2c0bca8e21cb524"
		},
		{
			"class": "b2.SeatNode",
			"ref": 125,
			"p": {
				"name": "29",
				"parent": 117,
				"location": {
					"x": -52.38942301230878,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 29
			},
			"id": "0290f48cfece2eb3d7667f5fa4cf4c43"
		},
		{
			"class": "b2.SeatNode",
			"ref": 126,
			"p": {
				"name": "31",
				"parent": 117,
				"location": {
					"x": -92.38942301230878,
					"y": 613.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 31
			},
			"id": "e8e8123013a3d17b65e4300273470721"
		},
		{
			"class": "b2.RowNode",
			"ref": 127,
			"p": {
				"name": "3排",
				"parent": 108,
				"location": {
					"x": 62.83903672342798,
					"y": 651.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "3"
			},
			"id": "0d2a6bdae79260bf9fb4caf6ba597341"
		},
		{
			"class": "b2.SeatNode",
			"ref": 128,
			"p": {
				"name": "15",
				"parent": 127,
				"location": {
					"x": 228.83903672342797,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 15
			},
			"id": "4b75e5e8c7969916ad10ecc6756cbaff"
		},
		{
			"class": "b2.SeatNode",
			"ref": 129,
			"p": {
				"name": "17",
				"parent": 127,
				"location": {
					"x": 188.83903672342797,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 17
			},
			"id": "9ffdb8d77b0469ea963023e575391067"
		},
		{
			"class": "b2.SeatNode",
			"ref": 130,
			"p": {
				"name": "19",
				"parent": 127,
				"location": {
					"x": 148.83903672342797,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 19
			},
			"id": "d142edae991124946891333d79f5bcef"
		},
		{
			"class": "b2.SeatNode",
			"ref": 131,
			"p": {
				"name": "21",
				"parent": 127,
				"location": {
					"x": 108.83903672342797,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 21
			},
			"id": "98295b8ff5dc00c0626de2bb7df0d37b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 132,
			"p": {
				"name": "23",
				"parent": 127,
				"location": {
					"x": 68.83903672342798,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 23
			},
			"id": "0a199502bd29d37d3e378d46b5f3b6c4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 133,
			"p": {
				"name": "25",
				"parent": 127,
				"location": {
					"x": 28.839036723427952,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 25
			},
			"id": "994c8ed48a777eff490bd5cb73f7631c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 134,
			"p": {
				"name": "27",
				"parent": 127,
				"location": {
					"x": -11.160963276572048,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 27
			},
			"id": "cfb450b2cae8425550d6ac31db4d3f94"
		},
		{
			"class": "b2.SeatNode",
			"ref": 135,
			"p": {
				"name": "29",
				"parent": 127,
				"location": {
					"x": -51.16096327657205,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 29
			},
			"id": "9480110da277d057b000896d405da948"
		},
		{
			"class": "b2.SeatNode",
			"ref": 136,
			"p": {
				"name": "31",
				"parent": 127,
				"location": {
					"x": -91.16096327657205,
					"y": 653.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 31
			},
			"id": "60c59095d4676da566a1eed8cfa44dc8"
		},
		{
			"class": "b2.RowNode",
			"ref": 137,
			"p": {
				"name": "4排",
				"parent": 108,
				"location": {
					"x": 62.83903672342798,
					"y": 691.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "4"
			},
			"id": "fd6a3e8fe143e42f450bed3029187035"
		},
		{
			"class": "b2.SeatNode",
			"ref": 138,
			"p": {
				"name": "17",
				"parent": 137,
				"location": {
					"x": 228.83903672342797,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 17
			},
			"id": "67b9419b0df593c2773531105b80b177"
		},
		{
			"class": "b2.SeatNode",
			"ref": 139,
			"p": {
				"name": "19",
				"parent": 137,
				"location": {
					"x": 188.83903672342797,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 19
			},
			"id": "a49dda4ea827b15f3db329291b60c2e7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 140,
			"p": {
				"name": "21",
				"parent": 137,
				"location": {
					"x": 148.83903672342797,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 21
			},
			"id": "871f2bfb969a86ce0a992d5c8ae549ab"
		},
		{
			"class": "b2.SeatNode",
			"ref": 141,
			"p": {
				"name": "23",
				"parent": 137,
				"location": {
					"x": 108.83903672342797,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 23
			},
			"id": "ef022b3148f945e4a605fa53e751ca04"
		},
		{
			"class": "b2.SeatNode",
			"ref": 142,
			"p": {
				"name": "25",
				"parent": 137,
				"location": {
					"x": 68.83903672342798,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 25
			},
			"id": "ef4947a1817fea050a8894f92459c6ad"
		},
		{
			"class": "b2.SeatNode",
			"ref": 143,
			"p": {
				"name": "27",
				"parent": 137,
				"location": {
					"x": 28.839036723427952,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 27
			},
			"id": "c12f84aa82cadb587d6e12bf86331729"
		},
		{
			"class": "b2.SeatNode",
			"ref": 144,
			"p": {
				"name": "29",
				"parent": 137,
				"location": {
					"x": -11.160963276572048,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 29
			},
			"id": "e8357aa66055c46fe59e242ee625b15f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 145,
			"p": {
				"name": "31",
				"parent": 137,
				"location": {
					"x": -51.16096327657205,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 31
			},
			"id": "fb94740c7bb1ae8f4f20e3f8cdfeadc0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 146,
			"p": {
				"name": "33",
				"parent": 137,
				"location": {
					"x": -91.16096327657205,
					"y": 693.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 33
			},
			"id": "abd888da6939c4c9690e6128c98e61c7"
		},
		{
			"class": "b2.RowNode",
			"ref": 147,
			"p": {
				"name": "5排",
				"parent": 108,
				"location": {
					"x": 62.83903672342798,
					"y": 731.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "5"
			},
			"id": "3ad8b1909fffb783d8c885fdd908ff24"
		},
		{
			"class": "b2.SeatNode",
			"ref": 148,
			"p": {
				"name": "17",
				"parent": 147,
				"location": {
					"x": 228.83903672342797,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 17
			},
			"id": "d51824904ebd45a2a28c75068c52ed5e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 149,
			"p": {
				"name": "19",
				"parent": 147,
				"location": {
					"x": 188.83903672342797,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 19
			},
			"id": "9a7dc79e433bdb0697188afcc84f9391"
		},
		{
			"class": "b2.SeatNode",
			"ref": 150,
			"p": {
				"name": "21",
				"parent": 147,
				"location": {
					"x": 148.83903672342797,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 21
			},
			"id": "035aeebf28d2e21fabc7670484ee1ceb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 151,
			"p": {
				"name": "23",
				"parent": 147,
				"location": {
					"x": 108.83903672342797,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 23
			},
			"id": "0ebae57fdd10ae99514aa33bc7856ed7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 152,
			"p": {
				"name": "25",
				"parent": 147,
				"location": {
					"x": 68.83903672342798,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 25
			},
			"id": "06b174c97b4aaea6655f04ec9548f84e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 153,
			"p": {
				"name": "27",
				"parent": 147,
				"location": {
					"x": 28.839036723427952,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 27
			},
			"id": "89395af619b1ed7bff1d631d4648f087"
		},
		{
			"class": "b2.SeatNode",
			"ref": 154,
			"p": {
				"name": "29",
				"parent": 147,
				"location": {
					"x": -11.160963276572048,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 29
			},
			"id": "419f3602b541228f8459b4892e7f0983"
		},
		{
			"class": "b2.SeatNode",
			"ref": 155,
			"p": {
				"name": "31",
				"parent": 147,
				"location": {
					"x": -51.16096327657205,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 31
			},
			"id": "895ad71681732ef2e43fd503be798aa7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 156,
			"p": {
				"name": "33",
				"parent": 147,
				"location": {
					"x": -91.16096327657205,
					"y": 733.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 33
			},
			"id": "778579361756bf645502386bcd290ecd"
		},
		{
			"class": "b2.RowNode",
			"ref": 157,
			"p": {
				"name": "6排",
				"parent": 108,
				"location": {
					"x": 42.83903672342798,
					"y": 771.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -210,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "6"
			},
			"id": "a7a1526036243164c074e26951ce0e25"
		},
		{
			"class": "b2.SeatNode",
			"ref": 158,
			"p": {
				"name": "19",
				"parent": 157,
				"location": {
					"x": 228.83903672342797,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 19
			},
			"id": "86457192aba1423004cd0aa4adf0b7ee"
		},
		{
			"class": "b2.SeatNode",
			"ref": 159,
			"p": {
				"name": "21",
				"parent": 157,
				"location": {
					"x": 188.83903672342797,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 21
			},
			"id": "d067b9300f743dbf1157b56da3dcbace"
		},
		{
			"class": "b2.SeatNode",
			"ref": 160,
			"p": {
				"name": "23",
				"parent": 157,
				"location": {
					"x": 148.83903672342797,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 23
			},
			"id": "635bc751f861403a6776b9a335b20b01"
		},
		{
			"class": "b2.SeatNode",
			"ref": 161,
			"p": {
				"name": "25",
				"parent": 157,
				"location": {
					"x": 108.83903672342797,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 25
			},
			"id": "802e316d05d8fd08143602fb8cb1b3e3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 162,
			"p": {
				"name": "27",
				"parent": 157,
				"location": {
					"x": 68.83903672342798,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 27
			},
			"id": "e27e83e539fe03c0d5f0d2f3f093dec6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 163,
			"p": {
				"name": "29",
				"parent": 157,
				"location": {
					"x": 28.83903672342798,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 29
			},
			"id": "c76657e7a461bc5605a89e434a13797c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 164,
			"p": {
				"name": "31",
				"parent": 157,
				"location": {
					"x": -11.160963276572048,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 31
			},
			"id": "4c667f2852412ace09dd0bdcd4c4bf45"
		},
		{
			"class": "b2.SeatNode",
			"ref": 165,
			"p": {
				"name": "33",
				"parent": 157,
				"location": {
					"x": -51.16096327657205,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 33
			},
			"id": "e7eb2364fba81bad9c74210c828006e8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 166,
			"p": {
				"name": "35",
				"parent": 157,
				"location": {
					"x": -91.16096327657205,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 35
			},
			"id": "68a40e451b65e4e5b36c737f43c62815"
		},
		{
			"class": "b2.SeatNode",
			"ref": 167,
			"p": {
				"name": "37",
				"parent": 157,
				"location": {
					"x": -131.16096327657203,
					"y": 773.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 37
			},
			"id": "f0e004a7cbc0d6f2ee4e04081b05eae5"
		},
		{
			"class": "b2.RowNode",
			"ref": 168,
			"p": {
				"name": "7排",
				"parent": 108,
				"location": {
					"x": 82.83903672342798,
					"y": 811.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "7"
			},
			"id": "e4bf270bdf1b5cbc7ec9791747aee2fa"
		},
		{
			"class": "b2.SeatNode",
			"ref": 169,
			"p": {
				"name": "17",
				"parent": 168,
				"location": {
					"x": 228.83903672342797,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 17
			},
			"id": "119da3553ba65633e1c459f6489a2cb2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 170,
			"p": {
				"name": "19",
				"parent": 168,
				"location": {
					"x": 188.83903672342797,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 19
			},
			"id": "b6064104dba871946403ee760b170b84"
		},
		{
			"class": "b2.SeatNode",
			"ref": 171,
			"p": {
				"name": "21",
				"parent": 168,
				"location": {
					"x": 148.83903672342797,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 21
			},
			"id": "57c4500d7fd994f536cffc6b426a70c8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 172,
			"p": {
				"name": "23",
				"parent": 168,
				"location": {
					"x": 108.83903672342797,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 23
			},
			"id": "64500d9240fdeb6069fd1f3a52651eeb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 173,
			"p": {
				"name": "25",
				"parent": 168,
				"location": {
					"x": 68.83903672342795,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 25
			},
			"id": "8e9e4a278a4937d2672e94057e8bdfff"
		},
		{
			"class": "b2.SeatNode",
			"ref": 174,
			"p": {
				"name": "27",
				"parent": 168,
				"location": {
					"x": 28.839036723427952,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 27
			},
			"id": "e55690c3a431290e08a7a6194394cbff"
		},
		{
			"class": "b2.SeatNode",
			"ref": 175,
			"p": {
				"name": "29",
				"parent": 168,
				"location": {
					"x": -11.160963276572048,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 29
			},
			"id": "b9f56556ccf268f710ec242a38229ee5"
		},
		{
			"class": "b2.SeatNode",
			"ref": 176,
			"p": {
				"name": "31",
				"parent": 168,
				"location": {
					"x": -51.16096327657205,
					"y": 813.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 31
			},
			"id": "eb908a33ecc6364b319a526b4c8138d9"
		},
		{
			"class": "b2.RowNode",
			"ref": 177,
			"p": {
				"name": "8排",
				"parent": 108,
				"location": {
					"x": 122.83903672342797,
					"y": 851.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -130.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "8"
			},
			"id": "7da9f970891cc5d05d1161ae8d7d0b85"
		},
		{
			"class": "b2.SeatNode",
			"ref": 178,
			"p": {
				"name": "19",
				"parent": 177,
				"location": {
					"x": 228.83903672342797,
					"y": 853.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 19
			},
			"id": "01b7a423b33413b4cf69504a221baa09"
		},
		{
			"class": "b2.SeatNode",
			"ref": 179,
			"p": {
				"name": "21",
				"parent": 177,
				"location": {
					"x": 188.83903672342797,
					"y": 853.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 21
			},
			"id": "7ec7d7938836c92b1a993c733efe5bd9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 180,
			"p": {
				"name": "23",
				"parent": 177,
				"location": {
					"x": 148.83903672342797,
					"y": 853.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 23
			},
			"id": "1d0a9bd24f864510b9721f53d1a9df7b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 181,
			"p": {
				"name": "25",
				"parent": 177,
				"location": {
					"x": 108.83903672342794,
					"y": 853.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 25
			},
			"id": "218ba8ce66c73699fec1a06dbe7c33a4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 182,
			"p": {
				"name": "27",
				"parent": 177,
				"location": {
					"x": 68.83903672342794,
					"y": 853.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 27
			},
			"id": "1b26311acb2618cec905e597206da58d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 183,
			"p": {
				"name": "29",
				"parent": 177,
				"location": {
					"x": 28.839036723427938,
					"y": 853.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 29
			},
			"id": "6f01df4e1b7acc0b93d5ea185f2cbd7c"
		},
		{
			"class": "b2.RowNode",
			"ref": 184,
			"p": {
				"name": "9排",
				"parent": 108,
				"location": {
					"x": 122.83903672342797,
					"y": 891.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -130.00000000000003,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "9"
			},
			"id": "470d306fcb909a06dd1267f1841cfd62"
		},
		{
			"class": "b2.SeatNode",
			"ref": 185,
			"p": {
				"name": "21",
				"parent": 184,
				"location": {
					"x": 228.83903672342797,
					"y": 893.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 21
			},
			"id": "7b84fc3b98f174726c067a7f80d32a16"
		},
		{
			"class": "b2.SeatNode",
			"ref": 186,
			"p": {
				"name": "23",
				"parent": 184,
				"location": {
					"x": 188.83903672342797,
					"y": 893.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 23
			},
			"id": "6428b638655f870584b965ef5cc82d6f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 187,
			"p": {
				"name": "25",
				"parent": 184,
				"location": {
					"x": 148.83903672342797,
					"y": 893.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 25
			},
			"id": "0a92562605734cf91221d99b7e99cdf9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 188,
			"p": {
				"name": "27",
				"parent": 184,
				"location": {
					"x": 108.83903672342794,
					"y": 893.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 27
			},
			"id": "bc16dbbb6faff4229bfa4df598661789"
		},
		{
			"class": "b2.SeatNode",
			"ref": 189,
			"p": {
				"name": "29",
				"parent": 184,
				"location": {
					"x": 68.83903672342794,
					"y": 893.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 29
			},
			"id": "d14fbb824232b82a245f488dff5c7538"
		},
		{
			"class": "b2.SeatNode",
			"ref": 190,
			"p": {
				"name": "31",
				"parent": 184,
				"location": {
					"x": 28.839036723427938,
					"y": 893.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 31
			},
			"id": "16a40593546aedfa8a399625bd5acbca"
		},
		{
			"class": "b2.RowNode",
			"ref": 191,
			"p": {
				"name": "10排",
				"parent": 108,
				"location": {
					"x": 162.83903672342797,
					"y": 931.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -90,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "10"
			},
			"id": "9b79c27d07077ccb1d87f7b88b06824a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 192,
			"p": {
				"name": "23",
				"parent": 191,
				"location": {
					"x": 228.83903672342797,
					"y": 933.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 23
			},
			"id": "67349bb35b20bdf3565ee987d64b2acb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 193,
			"p": {
				"name": "25",
				"parent": 191,
				"location": {
					"x": 188.83903672342797,
					"y": 933.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 25
			},
			"id": "05eb90ab41f2a4de75f59b12ce61cb01"
		},
		{
			"class": "b2.SeatNode",
			"ref": 194,
			"p": {
				"name": "27",
				"parent": 191,
				"location": {
					"x": 148.83903672342797,
					"y": 933.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 27
			},
			"id": "e99a11d5a0b03b1356c2c6b1ba8264b7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 195,
			"p": {
				"name": "29",
				"parent": 191,
				"location": {
					"x": 108.83903672342797,
					"y": 933.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 29
			},
			"id": "5576634628f58bfde2a8aac690bbc742"
		},
		{
			"class": "b2.RowNode",
			"ref": 196,
			"p": {
				"name": "11排",
				"parent": 108,
				"location": {
					"x": 202.83903672342797,
					"y": 970.4866943941543
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -50,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "11"
			},
			"id": "1e35258ba6a33302b5a4dd2699e26ded"
		},
		{
			"class": "b2.SeatNode",
			"ref": 197,
			"p": {
				"name": "23",
				"parent": 196,
				"location": {
					"x": 228.83903672342797,
					"y": 972.4866943941543
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 23
			},
			"id": "148e2899e0cb83af7d7fc0a851254959"
		},
		{
			"class": "b2.SeatNode",
			"ref": 198,
			"p": {
				"name": "25",
				"parent": 196,
				"location": {
					"x": 188.83903672342797,
					"y": 972.4866943941543
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 25
			},
			"id": "f7a4b130f9d3dac42be80e0e1577b12b"
		},
		{
			"class": "b2.RowNode",
			"ref": 199,
			"p": {
				"name": "1排",
				"parent": 108,
				"location": {
					"x": 733.7825763393614,
					"y": 569.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -250,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "1"
			},
			"id": "1d6265b6af307d51fe1b15a0e2eb0bf2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 200,
			"p": {
				"name": "9",
				"parent": 199,
				"location": {
					"x": 559.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 9
			},
			"id": "b67d1b1abdd699bd8a924be58c244aea"
		},
		{
			"class": "b2.SeatNode",
			"ref": 201,
			"p": {
				"name": "12",
				"parent": 199,
				"location": {
					"x": 959.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 12
			},
			"id": "f3a05b25949cc5e20a3c3ef36ec8a04d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 202,
			"p": {
				"name": "10",
				"parent": 199,
				"location": {
					"x": 919.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 10
			},
			"id": "62570e8256ba4464d9d26d3a7dd6bfe2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 203,
			"p": {
				"name": "8",
				"parent": 199,
				"location": {
					"x": 879.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 8
			},
			"id": "5b0a39382f884d3a3b5fecd810a094c0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 204,
			"p": {
				"name": "6",
				"parent": 199,
				"location": {
					"x": 839.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 6
			},
			"id": "2a1ad9453f0b4be0fac9682695d3673a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 205,
			"p": {
				"name": "4",
				"parent": 199,
				"location": {
					"x": 799.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 4
			},
			"id": "aaae94e86fc9ea5b3e6ac158b3833d9d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 206,
			"p": {
				"name": "2",
				"parent": 199,
				"location": {
					"x": 759.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 2
			},
			"id": "765c1a920aeee47cab98d10036136514"
		},
		{
			"class": "b2.SeatNode",
			"ref": 207,
			"p": {
				"name": "1",
				"parent": 199,
				"location": {
					"x": 719.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 1
			},
			"id": "060c5b2e21af94ee6c8867eab864dd42"
		},
		{
			"class": "b2.SeatNode",
			"ref": 208,
			"p": {
				"name": "3",
				"parent": 199,
				"location": {
					"x": 679.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 3
			},
			"id": "161a0abcc89c622f45a04492f19fc97c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 209,
			"p": {
				"name": "5",
				"parent": 199,
				"location": {
					"x": 639.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 5
			},
			"id": "55e0fedda2276709c93f446f1f688a47"
		},
		{
			"class": "b2.SeatNode",
			"ref": 210,
			"p": {
				"name": "7",
				"parent": 199,
				"location": {
					"x": 599.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 7
			},
			"id": "8fa7df650a3367de0288dd4c2dba9af7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 211,
			"p": {
				"name": "11",
				"parent": 199,
				"location": {
					"x": 519.7825763393614,
					"y": 571.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 11
			},
			"id": "f67aabe4b6e0cfc8fdcf09def379c99a"
		},
		{
			"class": "b2.RowNode",
			"ref": 212,
			"p": {
				"name": "2排",
				"parent": 108,
				"location": {
					"x": 714.864296409016,
					"y": 607.6612370019598
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -270,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "2"
			},
			"id": "b5e51b0fd6e83f1c748f7da6a2e16343"
		},
		{
			"class": "b2.SeatNode",
			"ref": 213,
			"p": {
				"name": "12",
				"parent": 212,
				"location": {
					"x": 960.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 12
			},
			"id": "e399c0ee5ad1889a7e9af797d849ac3f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 214,
			"p": {
				"name": "10",
				"parent": 212,
				"location": {
					"x": 920.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 10
			},
			"id": "b87ac9fc42049c98324488ecf180736d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 215,
			"p": {
				"name": "8",
				"parent": 212,
				"location": {
					"x": 880.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 8
			},
			"id": "4e4d6df72b3491ef8bad2c5625926535"
		},
		{
			"class": "b2.SeatNode",
			"ref": 216,
			"p": {
				"name": "6",
				"parent": 212,
				"location": {
					"x": 840.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 6
			},
			"id": "0257e38870148d7fb995d15bf453aa4a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 217,
			"p": {
				"name": "4",
				"parent": 212,
				"location": {
					"x": 800.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 4
			},
			"id": "a4a3dab7e04e16f8fe613920f27d0e9c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 218,
			"p": {
				"name": "2",
				"parent": 212,
				"location": {
					"x": 760.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 2
			},
			"id": "9582a0e815f0032f1526e1dfd319915a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 219,
			"p": {
				"name": "1",
				"parent": 212,
				"location": {
					"x": 720.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 1
			},
			"id": "4f7b23a003c641449e0d0b3990b40eec"
		},
		{
			"class": "b2.SeatNode",
			"ref": 220,
			"p": {
				"name": "3",
				"parent": 212,
				"location": {
					"x": 680.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 3
			},
			"id": "aeaafc954b24c3b5c075cf24547ef6ad"
		},
		{
			"class": "b2.SeatNode",
			"ref": 221,
			"p": {
				"name": "5",
				"parent": 212,
				"location": {
					"x": 640.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 5
			},
			"id": "0b6cfcaf753d68daf079ef2d0be06640"
		},
		{
			"class": "b2.SeatNode",
			"ref": 222,
			"p": {
				"name": "7",
				"parent": 212,
				"location": {
					"x": 600.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 7
			},
			"id": "9256415986a4a63ba1044cece0b01809"
		},
		{
			"class": "b2.SeatNode",
			"ref": 223,
			"p": {
				"name": "9",
				"parent": 212,
				"location": {
					"x": 560.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 9
			},
			"id": "a1cac5a2c58ef256dbfe94b39b8ee1ee"
		},
		{
			"class": "b2.SeatNode",
			"ref": 224,
			"p": {
				"name": "11",
				"parent": 212,
				"location": {
					"x": 520.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 11
			},
			"id": "892573b18acb813e2d61e0fdd6415070"
		},
		{
			"class": "b2.SeatNode",
			"ref": 225,
			"p": {
				"name": "13",
				"parent": 212,
				"location": {
					"x": 480.864296409016,
					"y": 609.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 13
			},
			"id": "800187f923e0d7f5e10d12b0443db142"
		},
		{
			"class": "b2.RowNode",
			"ref": 226,
			"p": {
				"name": "3排",
				"parent": 108,
				"location": {
					"x": 736.4851877579822,
					"y": 649.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -289.9999999999999,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "3"
			},
			"id": "30eec1c1fb57086c0152cc38a98c5f7c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 227,
			"p": {
				"name": "14",
				"parent": 226,
				"location": {
					"x": 1002.4851877579822,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 14
			},
			"id": "11403f3a14f05f5ccef6e49b727ae003"
		},
		{
			"class": "b2.SeatNode",
			"ref": 228,
			"p": {
				"name": "12",
				"parent": 226,
				"location": {
					"x": 962.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 12
			},
			"id": "a1692124c0de2b65b8ed730824ad8612"
		},
		{
			"class": "b2.SeatNode",
			"ref": 229,
			"p": {
				"name": "10",
				"parent": 226,
				"location": {
					"x": 922.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 10
			},
			"id": "8446e226b3bf806644ce623fe12ee897"
		},
		{
			"class": "b2.SeatNode",
			"ref": 230,
			"p": {
				"name": "8",
				"parent": 226,
				"location": {
					"x": 882.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 8
			},
			"id": "4b1d47ecada01fd0f4c48fbb7be9ba48"
		},
		{
			"class": "b2.SeatNode",
			"ref": 231,
			"p": {
				"name": "6",
				"parent": 226,
				"location": {
					"x": 842.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 6
			},
			"id": "fdf51c4dd8c8f2c55a572cfb3d1e8f88"
		},
		{
			"class": "b2.SeatNode",
			"ref": 232,
			"p": {
				"name": "4",
				"parent": 226,
				"location": {
					"x": 802.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 4
			},
			"id": "4420a9105d0029177e070a1abb1a1b3d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 233,
			"p": {
				"name": "2",
				"parent": 226,
				"location": {
					"x": 762.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 2
			},
			"id": "9a989307e6a94e2952212ae600297729"
		},
		{
			"class": "b2.SeatNode",
			"ref": 234,
			"p": {
				"name": "1",
				"parent": 226,
				"location": {
					"x": 722.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 1
			},
			"id": "d42ae02c438314547588ab6a14abaabb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 235,
			"p": {
				"name": "3",
				"parent": 226,
				"location": {
					"x": 682.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 3
			},
			"id": "978008a25b7c956c721285fe341f61ce"
		},
		{
			"class": "b2.SeatNode",
			"ref": 236,
			"p": {
				"name": "5",
				"parent": 226,
				"location": {
					"x": 642.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 5
			},
			"id": "78865f5880b9e52cb8f96e34baddcec7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 237,
			"p": {
				"name": "7",
				"parent": 226,
				"location": {
					"x": 602.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 7
			},
			"id": "9af1eb005baf03ceb73281103c066c19"
		},
		{
			"class": "b2.SeatNode",
			"ref": 238,
			"p": {
				"name": "9",
				"parent": 226,
				"location": {
					"x": 562.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 9
			},
			"id": "87c01279da2fce36aa2fa0609e8f0eee"
		},
		{
			"class": "b2.SeatNode",
			"ref": 239,
			"p": {
				"name": "11",
				"parent": 226,
				"location": {
					"x": 522.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 11
			},
			"id": "5abddcc02dc22db9c93757428c831fdb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 240,
			"p": {
				"name": "13",
				"parent": 226,
				"location": {
					"x": 482.4851877579823,
					"y": 651.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 13
			},
			"id": "f4f82751887704d37c31ff057837ce70"
		},
		{
			"class": "b2.RowNode",
			"ref": 241,
			"p": {
				"name": "4排",
				"parent": 108,
				"location": {
					"x": 717.5669078276367,
					"y": 689.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -310.0000000000001,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "4"
			},
			"id": "eec04410030dfb1662f013f9124e7b86"
		},
		{
			"class": "b2.SeatNode",
			"ref": 242,
			"p": {
				"name": "14",
				"parent": 241,
				"location": {
					"x": 1003.5669078276368,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 14
			},
			"id": "3aafafddf88827e6c1e1046cde0b949c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 243,
			"p": {
				"name": "12",
				"parent": 241,
				"location": {
					"x": 963.5669078276368,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 12
			},
			"id": "d58e0cbc227ea38737723fa7b18f9c0e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 244,
			"p": {
				"name": "10",
				"parent": 241,
				"location": {
					"x": 923.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 10
			},
			"id": "abd3eba34f03248d125a3628568a3df1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 245,
			"p": {
				"name": "8",
				"parent": 241,
				"location": {
					"x": 883.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 8
			},
			"id": "af9497cec980c93f358d88231cd4b89f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 246,
			"p": {
				"name": "6",
				"parent": 241,
				"location": {
					"x": 843.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 6
			},
			"id": "d058dd6fe3ae02be9efe80574d008173"
		},
		{
			"class": "b2.SeatNode",
			"ref": 247,
			"p": {
				"name": "4",
				"parent": 241,
				"location": {
					"x": 803.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 4
			},
			"id": "867687ed8bf30008512146065f186e6b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 248,
			"p": {
				"name": "2",
				"parent": 241,
				"location": {
					"x": 763.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 2
			},
			"id": "388807354337ab0a33ba0c698a23de1c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 249,
			"p": {
				"name": "1",
				"parent": 241,
				"location": {
					"x": 723.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 1
			},
			"id": "2383c2b2d9d0b59b450147f06da35c89"
		},
		{
			"class": "b2.SeatNode",
			"ref": 250,
			"p": {
				"name": "3",
				"parent": 241,
				"location": {
					"x": 683.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 3
			},
			"id": "69f17c759893fa50123d211f538d81d6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 251,
			"p": {
				"name": "5",
				"parent": 241,
				"location": {
					"x": 643.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 5
			},
			"id": "8c2e262b8de4ea73df89b76744cadc80"
		},
		{
			"class": "b2.SeatNode",
			"ref": 252,
			"p": {
				"name": "7",
				"parent": 241,
				"location": {
					"x": 603.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 7
			},
			"id": "da9ff8d0beffc1362b19c601f2794a78"
		},
		{
			"class": "b2.SeatNode",
			"ref": 253,
			"p": {
				"name": "9",
				"parent": 241,
				"location": {
					"x": 563.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 9
			},
			"id": "366ccdaa1dc25d5017e5fa81bee67e67"
		},
		{
			"class": "b2.SeatNode",
			"ref": 254,
			"p": {
				"name": "11",
				"parent": 241,
				"location": {
					"x": 523.5669078276366,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 11
			},
			"id": "c4ef5493d7d18c68950c981e02b84ba4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 255,
			"p": {
				"name": "13",
				"parent": 241,
				"location": {
					"x": 483.56690782763656,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 13
			},
			"id": "7cc86c86d037b0340a8078a007778e8f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 256,
			"p": {
				"name": "15",
				"parent": 241,
				"location": {
					"x": 443.56690782763656,
					"y": 691.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 15
			},
			"id": "fd61a1b2fc8180f0c71cb27eeb631266"
		},
		{
			"class": "b2.RowNode",
			"ref": 257,
			"p": {
				"name": "5排",
				"parent": 108,
				"location": {
					"x": 739.187799176603,
					"y": 729.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -330.00000000000034,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "5"
			},
			"id": "64dca385aec562a42016a732e29dbb1e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 258,
			"p": {
				"name": "16",
				"parent": 257,
				"location": {
					"x": 1045.1877991766037,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 16
			},
			"id": "99dba882fa37c2696c12243d0942aa2a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 259,
			"p": {
				"name": "14",
				"parent": 257,
				"location": {
					"x": 1005.1877991766033,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 14
			},
			"id": "cd42341f3b79288982e704598fedb40e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 260,
			"p": {
				"name": "12",
				"parent": 257,
				"location": {
					"x": 965.1877991766029,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 12
			},
			"id": "903248d6a46ae1bda1b5d4d96d0f1b42"
		},
		{
			"class": "b2.SeatNode",
			"ref": 261,
			"p": {
				"name": "10",
				"parent": 257,
				"location": {
					"x": 925.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 10
			},
			"id": "3fb9ffeb92c3791d9cc25947230830a5"
		},
		{
			"class": "b2.SeatNode",
			"ref": 262,
			"p": {
				"name": "8",
				"parent": 257,
				"location": {
					"x": 885.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 8
			},
			"id": "0dc14a9272fdb1843784a0f7d9adec69"
		},
		{
			"class": "b2.SeatNode",
			"ref": 263,
			"p": {
				"name": "6",
				"parent": 257,
				"location": {
					"x": 845.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 6
			},
			"id": "7b5248e16b94ca0d08d34b5699078bfc"
		},
		{
			"class": "b2.SeatNode",
			"ref": 264,
			"p": {
				"name": "4",
				"parent": 257,
				"location": {
					"x": 805.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 4
			},
			"id": "9f332b7d2bfc23c4bca0edb4910bff60"
		},
		{
			"class": "b2.SeatNode",
			"ref": 265,
			"p": {
				"name": "2",
				"parent": 257,
				"location": {
					"x": 765.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 2
			},
			"id": "a8f584b929699c5e2b7eef05d7403bb1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 266,
			"p": {
				"name": "1",
				"parent": 257,
				"location": {
					"x": 725.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 1
			},
			"id": "0ac7eced3b562a73dc91331508e54ed9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 267,
			"p": {
				"name": "3",
				"parent": 257,
				"location": {
					"x": 685.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 3
			},
			"id": "aa74982508def22b80486c0232400378"
		},
		{
			"class": "b2.SeatNode",
			"ref": 268,
			"p": {
				"name": "5",
				"parent": 257,
				"location": {
					"x": 645.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 5
			},
			"id": "4dd26ca3a0b5a0d336d010282fee8df0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 269,
			"p": {
				"name": "7",
				"parent": 257,
				"location": {
					"x": 605.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 7
			},
			"id": "5828287a8cba41028485c0e662c840e8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 270,
			"p": {
				"name": "9",
				"parent": 257,
				"location": {
					"x": 565.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 9
			},
			"id": "bd976e776273ce6d58e9eb0281ae4147"
		},
		{
			"class": "b2.SeatNode",
			"ref": 271,
			"p": {
				"name": "11",
				"parent": 257,
				"location": {
					"x": 525.1877991766027,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 11
			},
			"id": "85a0c2878e55770138011ff309a1d0f6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 272,
			"p": {
				"name": "13",
				"parent": 257,
				"location": {
					"x": 485.18779917660265,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 13
			},
			"id": "63e237830f332d30826e82f69c1c2b89"
		},
		{
			"class": "b2.SeatNode",
			"ref": 273,
			"p": {
				"name": "15",
				"parent": 257,
				"location": {
					"x": 445.18779917660265,
					"y": 731.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 15
			},
			"id": "b6939570544c4a8390a5e7d839cfec23"
		},
		{
			"class": "b2.RowNode",
			"ref": 274,
			"p": {
				"name": "6排",
				"parent": 108,
				"location": {
					"x": 720.2695192462575,
					"y": 770.3638484205806
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -350,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "6"
			},
			"id": "bae0b1a20d093cc109d90c69997f0acf"
		},
		{
			"class": "b2.SeatNode",
			"ref": 275,
			"p": {
				"name": "16",
				"parent": 274,
				"location": {
					"x": 1046.2695192462566,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 16
			},
			"id": "5936c537e335fff90374380037f68b66"
		},
		{
			"class": "b2.SeatNode",
			"ref": 276,
			"p": {
				"name": "14",
				"parent": 274,
				"location": {
					"x": 1006.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 14
			},
			"id": "6ba12790b42fb568e7e2d5b08117e000"
		},
		{
			"class": "b2.SeatNode",
			"ref": 277,
			"p": {
				"name": "12",
				"parent": 274,
				"location": {
					"x": 966.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 12
			},
			"id": "4d50571c6ffe584ff845c95d367f9dce"
		},
		{
			"class": "b2.SeatNode",
			"ref": 278,
			"p": {
				"name": "10",
				"parent": 274,
				"location": {
					"x": 926.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 10
			},
			"id": "ca2d1d9b85c343f0527a7afc762da702"
		},
		{
			"class": "b2.SeatNode",
			"ref": 279,
			"p": {
				"name": "8",
				"parent": 274,
				"location": {
					"x": 886.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 8
			},
			"id": "86ac3621d12e1209bff66b4a40411b45"
		},
		{
			"class": "b2.SeatNode",
			"ref": 280,
			"p": {
				"name": "6",
				"parent": 274,
				"location": {
					"x": 846.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 6
			},
			"id": "9b1dab9581fea588f5374d023b9d021f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 281,
			"p": {
				"name": "4",
				"parent": 274,
				"location": {
					"x": 806.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 4
			},
			"id": "b2d002902fc8ebecea5c5396cd03decc"
		},
		{
			"class": "b2.SeatNode",
			"ref": 282,
			"p": {
				"name": "2",
				"parent": 274,
				"location": {
					"x": 766.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 2
			},
			"id": "9bd8f40a3dfd54d42e5a5f4379c7cbe8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 283,
			"p": {
				"name": "1",
				"parent": 274,
				"location": {
					"x": 726.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 1
			},
			"id": "451be41fb18b2f1625a6a9283d02f78a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 284,
			"p": {
				"name": "3",
				"parent": 274,
				"location": {
					"x": 686.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 3
			},
			"id": "c4e180bcd0072fddfeea28258ad63fc8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 285,
			"p": {
				"name": "5",
				"parent": 274,
				"location": {
					"x": 646.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 5
			},
			"id": "9fbd947a3edf515be11ef68958ed7dcd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 286,
			"p": {
				"name": "7",
				"parent": 274,
				"location": {
					"x": 606.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 7
			},
			"id": "2e8166889d5e8311d942690a7b140623"
		},
		{
			"class": "b2.SeatNode",
			"ref": 287,
			"p": {
				"name": "9",
				"parent": 274,
				"location": {
					"x": 566.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 9
			},
			"id": "ccf35744435c41c46c868403974cd2b2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 288,
			"p": {
				"name": "11",
				"parent": 274,
				"location": {
					"x": 526.2695192462575,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 11
			},
			"id": "47cdfb65a7e61774544f9a2f8f8cf2db"
		},
		{
			"class": "b2.SeatNode",
			"ref": 289,
			"p": {
				"name": "13",
				"parent": 274,
				"location": {
					"x": 486.26951924625746,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 13
			},
			"id": "2ccd4bf073acb225a3ee7599f9fe45f6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 290,
			"p": {
				"name": "15",
				"parent": 274,
				"location": {
					"x": 446.26951924625746,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 15
			},
			"id": "e137a16defd4662e803bf184d18f14e6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 291,
			"p": {
				"name": "17",
				"parent": 274,
				"location": {
					"x": 406.26951924625746,
					"y": 772.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 17
			},
			"id": "a770218f0d5050e214bb3d210319c496"
		},
		{
			"class": "b2.RowNode",
			"ref": 292,
			"p": {
				"name": "7排",
				"parent": 108,
				"location": {
					"x": 741.7675646216501,
					"y": 810.3638484205806
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -330.0000000000001,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "7"
			},
			"id": "584f5779ebfe4ced8f368a83b1ce6ada"
		},
		{
			"class": "b2.SeatNode",
			"ref": 293,
			"p": {
				"name": "16",
				"parent": 292,
				"location": {
					"x": 1047.7675646216494,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 16
			},
			"id": "62da657bdb002b131cd9432e62fb1919"
		},
		{
			"class": "b2.SeatNode",
			"ref": 294,
			"p": {
				"name": "14",
				"parent": 292,
				"location": {
					"x": 1007.7675646216501,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 14
			},
			"id": "0965b03cc4409e2d4349d801f02e2690"
		},
		{
			"class": "b2.SeatNode",
			"ref": 295,
			"p": {
				"name": "12",
				"parent": 292,
				"location": {
					"x": 967.7675646216501,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 12
			},
			"id": "0c3b1250997c580ae474f5eb5b0be595"
		},
		{
			"class": "b2.SeatNode",
			"ref": 296,
			"p": {
				"name": "10",
				"parent": 292,
				"location": {
					"x": 927.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 10
			},
			"id": "f27fa6d28913a9dc6be8b57fa7208737"
		},
		{
			"class": "b2.SeatNode",
			"ref": 297,
			"p": {
				"name": "8",
				"parent": 292,
				"location": {
					"x": 887.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 8
			},
			"id": "58931a2fe6c1b210368ce85dd44c0e5c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 298,
			"p": {
				"name": "6",
				"parent": 292,
				"location": {
					"x": 847.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 6
			},
			"id": "474df7d3c6c4145a118aa3a4f496f6a1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 299,
			"p": {
				"name": "4",
				"parent": 292,
				"location": {
					"x": 807.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 4
			},
			"id": "9daccde1bc233347ba0eba94b05f78e3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 300,
			"p": {
				"name": "2",
				"parent": 292,
				"location": {
					"x": 767.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 2
			},
			"id": "576e564816d201f644bbf15ba1209505"
		},
		{
			"class": "b2.SeatNode",
			"ref": 301,
			"p": {
				"name": "1",
				"parent": 292,
				"location": {
					"x": 727.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 1
			},
			"id": "4c389f336e0a920d39efadf8f3c50dcc"
		},
		{
			"class": "b2.SeatNode",
			"ref": 302,
			"p": {
				"name": "3",
				"parent": 292,
				"location": {
					"x": 687.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 3
			},
			"id": "1faa29e0f38629258fad2a8260186540"
		},
		{
			"class": "b2.SeatNode",
			"ref": 303,
			"p": {
				"name": "5",
				"parent": 292,
				"location": {
					"x": 647.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 5
			},
			"id": "fb427cef3a64435e4635111eaaea7e16"
		},
		{
			"class": "b2.SeatNode",
			"ref": 304,
			"p": {
				"name": "7",
				"parent": 292,
				"location": {
					"x": 607.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 7
			},
			"id": "29b277f98c93c2ac04ef8292571848e1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 305,
			"p": {
				"name": "9",
				"parent": 292,
				"location": {
					"x": 567.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 9
			},
			"id": "d59a0a9232a75f5c41b82f4084bc8f80"
		},
		{
			"class": "b2.SeatNode",
			"ref": 306,
			"p": {
				"name": "11",
				"parent": 292,
				"location": {
					"x": 527.76756462165,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 11
			},
			"id": "dac3fa584e2337ee3df638aa93c90dd2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 307,
			"p": {
				"name": "13",
				"parent": 292,
				"location": {
					"x": 487.76756462164997,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 13
			},
			"id": "fb7849f8d344e75cb5afaa8324c7f733"
		},
		{
			"class": "b2.SeatNode",
			"ref": 308,
			"p": {
				"name": "15",
				"parent": 292,
				"location": {
					"x": 447.76756462164997,
					"y": 812.3638484205806
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 15
			},
			"id": "13acfe11aafeb845a739a86d364d46aa"
		},
		{
			"class": "b2.RowNode",
			"ref": 309,
			"p": {
				"name": "8排",
				"parent": 108,
				"location": {
					"x": 720.2695192462575,
					"y": 849.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -349.99999999999955,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "8"
			},
			"id": "eb6e19378c19e22c5ae436b5672d5c30"
		},
		{
			"class": "b2.SeatNode",
			"ref": 310,
			"p": {
				"name": "16",
				"parent": 309,
				"location": {
					"x": 1046.269519246256,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 16
			},
			"id": "d8a227e15962d20395528eeb8868d235"
		},
		{
			"class": "b2.SeatNode",
			"ref": 311,
			"p": {
				"name": "14",
				"parent": 309,
				"location": {
					"x": 1006.269519246257,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 14
			},
			"id": "40e8932bbefbe8e6dcb3632b42c83d33"
		},
		{
			"class": "b2.SeatNode",
			"ref": 312,
			"p": {
				"name": "12",
				"parent": 309,
				"location": {
					"x": 966.2695192462575,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 12
			},
			"id": "d37c0599a9971b9bb5b603f3d6a0e6c4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 313,
			"p": {
				"name": "10",
				"parent": 309,
				"location": {
					"x": 926.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 10
			},
			"id": "93deea8ba9a67d51abd29b673c6a6444"
		},
		{
			"class": "b2.SeatNode",
			"ref": 314,
			"p": {
				"name": "8",
				"parent": 309,
				"location": {
					"x": 886.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 8
			},
			"id": "ec6c238683727a32281028704e370bc4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 315,
			"p": {
				"name": "6",
				"parent": 309,
				"location": {
					"x": 846.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 6
			},
			"id": "0d3ab2c6fb78e15ec45919523f4dae27"
		},
		{
			"class": "b2.SeatNode",
			"ref": 316,
			"p": {
				"name": "4",
				"parent": 309,
				"location": {
					"x": 806.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 4
			},
			"id": "ab11405c7aa75d78b124d4e562f3ac38"
		},
		{
			"class": "b2.SeatNode",
			"ref": 317,
			"p": {
				"name": "2",
				"parent": 309,
				"location": {
					"x": 766.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 2
			},
			"id": "05ec43caecc1913cdf94a9bf90a7401d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 318,
			"p": {
				"name": "1",
				"parent": 309,
				"location": {
					"x": 726.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 1
			},
			"id": "3977d40a4417344de7fea717af393b18"
		},
		{
			"class": "b2.SeatNode",
			"ref": 319,
			"p": {
				"name": "3",
				"parent": 309,
				"location": {
					"x": 686.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 3
			},
			"id": "5278bac1e6241bdf478be7155f0f5dca"
		},
		{
			"class": "b2.SeatNode",
			"ref": 320,
			"p": {
				"name": "5",
				"parent": 309,
				"location": {
					"x": 646.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 5
			},
			"id": "bb5093af55dea8307747db0c6d4aed86"
		},
		{
			"class": "b2.SeatNode",
			"ref": 321,
			"p": {
				"name": "7",
				"parent": 309,
				"location": {
					"x": 606.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 7
			},
			"id": "edf4ff85b5fd0d8d48f89bdec1cfcced"
		},
		{
			"class": "b2.SeatNode",
			"ref": 322,
			"p": {
				"name": "9",
				"parent": 309,
				"location": {
					"x": 566.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 9
			},
			"id": "9bc4454d1af9a7dbe4f0e07ce13d0b0f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 323,
			"p": {
				"name": "11",
				"parent": 309,
				"location": {
					"x": 526.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 11
			},
			"id": "d631a139a8dff46a8c128bbad9560975"
		},
		{
			"class": "b2.SeatNode",
			"ref": 324,
			"p": {
				"name": "13",
				"parent": 309,
				"location": {
					"x": 486.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 13
			},
			"id": "516c25a95d7c65803b5c94ee90239acb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 325,
			"p": {
				"name": "15",
				"parent": 309,
				"location": {
					"x": 446.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 15
			},
			"id": "d8da287b0c090ae8fdd8caf35cfbe00a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 326,
			"p": {
				"name": "17",
				"parent": 309,
				"location": {
					"x": 406.2695192462579,
					"y": 851.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 17
			},
			"id": "49a6c241a1dd7225e0c2749cce344ee4"
		},
		{
			"class": "b2.RowNode",
			"ref": 327,
			"p": {
				"name": "9排",
				"parent": 108,
				"location": {
					"x": 737.9593394408662,
					"y": 889.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -410.0000000000002,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "9"
			},
			"id": "95009c7ab047a4088fe447d6c334bf36"
		},
		{
			"class": "b2.SeatNode",
			"ref": 328,
			"p": {
				"name": "20",
				"parent": 327,
				"location": {
					"x": 1123.9593394408669,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 20
			},
			"id": "042351714b998671b32331bfa6578d6c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 329,
			"p": {
				"name": "18",
				"parent": 327,
				"location": {
					"x": 1083.9593394408669,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 18
			},
			"id": "815b90108401e97293d2fb25949470cc"
		},
		{
			"class": "b2.SeatNode",
			"ref": 330,
			"p": {
				"name": "16",
				"parent": 327,
				"location": {
					"x": 1043.9593394408669,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 16
			},
			"id": "10bd3df87fd33a9066225b9600ecefe0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 331,
			"p": {
				"name": "14",
				"parent": 327,
				"location": {
					"x": 1003.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 14
			},
			"id": "09c9d101899c0f51bf4037a9cac0119f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 332,
			"p": {
				"name": "12",
				"parent": 327,
				"location": {
					"x": 963.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 12
			},
			"id": "3db7f053e768441ac1d07328e7a76495"
		},
		{
			"class": "b2.SeatNode",
			"ref": 333,
			"p": {
				"name": "10",
				"parent": 327,
				"location": {
					"x": 923.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 10
			},
			"id": "0e9695207f1348b58a10640484fd3331"
		},
		{
			"class": "b2.SeatNode",
			"ref": 334,
			"p": {
				"name": "8",
				"parent": 327,
				"location": {
					"x": 883.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 8
			},
			"id": "c564c585462425f55e754c3b809e5d8d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 335,
			"p": {
				"name": "6",
				"parent": 327,
				"location": {
					"x": 843.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 6
			},
			"id": "bf8c43b7cd098f94372bf5d268d73966"
		},
		{
			"class": "b2.SeatNode",
			"ref": 336,
			"p": {
				"name": "4",
				"parent": 327,
				"location": {
					"x": 803.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 4
			},
			"id": "3f9fe880a8afec4c15b081f9c5c2546b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 337,
			"p": {
				"name": "2",
				"parent": 327,
				"location": {
					"x": 763.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 2
			},
			"id": "274d9214c4389a88a31ea0beecaaafcf"
		},
		{
			"class": "b2.SeatNode",
			"ref": 338,
			"p": {
				"name": "1",
				"parent": 327,
				"location": {
					"x": 723.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 1
			},
			"id": "33c595220f461fba1d87690360ad9526"
		},
		{
			"class": "b2.SeatNode",
			"ref": 339,
			"p": {
				"name": "3",
				"parent": 327,
				"location": {
					"x": 683.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 3
			},
			"id": "086890e02d810efd6771e854e8f6270c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 340,
			"p": {
				"name": "5",
				"parent": 327,
				"location": {
					"x": 643.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 5
			},
			"id": "317f36d8683b41add2d1b7fc29f83213"
		},
		{
			"class": "b2.SeatNode",
			"ref": 341,
			"p": {
				"name": "7",
				"parent": 327,
				"location": {
					"x": 603.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 7
			},
			"id": "1a4c05fb9756c2f98762b8f9cd631f1c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 342,
			"p": {
				"name": "9",
				"parent": 327,
				"location": {
					"x": 563.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 9
			},
			"id": "91753a0d16e8b156eab2086d7832a9d7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 343,
			"p": {
				"name": "11",
				"parent": 327,
				"location": {
					"x": 523.959339440866,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 11
			},
			"id": "c2aa9e85b5a8b171d74b4aff53f98338"
		},
		{
			"class": "b2.SeatNode",
			"ref": 344,
			"p": {
				"name": "13",
				"parent": 327,
				"location": {
					"x": 483.95933944086596,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 13
			},
			"id": "bc5cd41385fbd858204b941c51ca6fea"
		},
		{
			"class": "b2.SeatNode",
			"ref": 345,
			"p": {
				"name": "15",
				"parent": 327,
				"location": {
					"x": 443.95933944086596,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 15
			},
			"id": "1591e5b916f091a6a89782e56210b5ac"
		},
		{
			"class": "b2.SeatNode",
			"ref": 346,
			"p": {
				"name": "17",
				"parent": 327,
				"location": {
					"x": 403.95933944086596,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 17
			},
			"id": "94c5bca6b58767902748312688a802e2"
		},
		{
			"class": "b2.SeatNode",
			"ref": 347,
			"p": {
				"name": "19",
				"parent": 327,
				"location": {
					"x": 363.95933944086596,
					"y": 891.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 19
			},
			"id": "e85d8e10d73beb600fe715c8841d0571"
		},
		{
			"class": "b2.RowNode",
			"ref": 348,
			"p": {
				"name": "10排",
				"parent": 108,
				"location": {
					"x": 720.2695192462575,
					"y": 927.6612370019598
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -430.0000000000001,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "10"
			},
			"id": "257779ecd45b2d5a5004d934a7a7cdd0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 349,
			"p": {
				"name": "20",
				"parent": 348,
				"location": {
					"x": 1126.269519246257,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 20
			},
			"id": "a221e574697f864f1b09332493d6582f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 350,
			"p": {
				"name": "18",
				"parent": 348,
				"location": {
					"x": 1086.269519246257,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 18
			},
			"id": "48bd35e8eb3781041f057890fffb29fb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 351,
			"p": {
				"name": "16",
				"parent": 348,
				"location": {
					"x": 1046.269519246257,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 16
			},
			"id": "a2dbdd2341f425ec379a86be9cf132ae"
		},
		{
			"class": "b2.SeatNode",
			"ref": 352,
			"p": {
				"name": "14",
				"parent": 348,
				"location": {
					"x": 1006.2695192462576,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 14
			},
			"id": "5f811c719c7c3ed7fd1b22babba27a76"
		},
		{
			"class": "b2.SeatNode",
			"ref": 353,
			"p": {
				"name": "12",
				"parent": 348,
				"location": {
					"x": 966.2695192462576,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 12
			},
			"id": "c85d1b5829072afd7494b925d6769d96"
		},
		{
			"class": "b2.SeatNode",
			"ref": 354,
			"p": {
				"name": "10",
				"parent": 348,
				"location": {
					"x": 926.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 10
			},
			"id": "764d78371def2b16df0a29360412ddda"
		},
		{
			"class": "b2.SeatNode",
			"ref": 355,
			"p": {
				"name": "8",
				"parent": 348,
				"location": {
					"x": 886.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 8
			},
			"id": "dd7c3146339f23e7deb1c372d318dd11"
		},
		{
			"class": "b2.SeatNode",
			"ref": 356,
			"p": {
				"name": "6",
				"parent": 348,
				"location": {
					"x": 846.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 6
			},
			"id": "e29e18a5a04a485840749a30213a027b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 357,
			"p": {
				"name": "4",
				"parent": 348,
				"location": {
					"x": 806.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 4
			},
			"id": "85545601efb112897a06c6a826a15d1d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 358,
			"p": {
				"name": "2",
				"parent": 348,
				"location": {
					"x": 766.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 2
			},
			"id": "f0849cc887299aaf3e9b29233fa92641"
		},
		{
			"class": "b2.SeatNode",
			"ref": 359,
			"p": {
				"name": "1",
				"parent": 348,
				"location": {
					"x": 726.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 1
			},
			"id": "2b8d0eaaaf7e11cfb238f93c4ff2e24d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 360,
			"p": {
				"name": "3",
				"parent": 348,
				"location": {
					"x": 686.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 3
			},
			"id": "8bb7d0ee770e9382cc30795239cf6ac8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 361,
			"p": {
				"name": "5",
				"parent": 348,
				"location": {
					"x": 646.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 5
			},
			"id": "619a415015dd22b083bd5b0c828db7be"
		},
		{
			"class": "b2.SeatNode",
			"ref": 362,
			"p": {
				"name": "7",
				"parent": 348,
				"location": {
					"x": 606.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 7
			},
			"id": "4551fcfb2a5d62e71af08c8ba11e0c5c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 363,
			"p": {
				"name": "9",
				"parent": 348,
				"location": {
					"x": 566.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 9
			},
			"id": "a7cc125eccf0d74e0b290a553cebcddc"
		},
		{
			"class": "b2.SeatNode",
			"ref": 364,
			"p": {
				"name": "11",
				"parent": 348,
				"location": {
					"x": 526.2695192462573,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 11
			},
			"id": "76cf2317d3a19fa9b891daa5b8fbfac6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 365,
			"p": {
				"name": "13",
				"parent": 348,
				"location": {
					"x": 486.26951924625735,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 13
			},
			"id": "3c473358a4fb17d1809a6695b32283f8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 366,
			"p": {
				"name": "15",
				"parent": 348,
				"location": {
					"x": 446.26951924625735,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 15
			},
			"id": "89236fdb1633243a392f73af49ddd57e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 367,
			"p": {
				"name": "17",
				"parent": 348,
				"location": {
					"x": 406.26951924625735,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 17
			},
			"id": "a5120eec48acc4c8d6293886861ed062"
		},
		{
			"class": "b2.SeatNode",
			"ref": 368,
			"p": {
				"name": "19",
				"parent": 348,
				"location": {
					"x": 366.26951924625735,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 19
			},
			"id": "dba2959898357164d7c99e1f05bbb95e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 369,
			"p": {
				"name": "21",
				"parent": 348,
				"location": {
					"x": 326.26951924625735,
					"y": 929.6612370019598
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 21
			},
			"id": "cd657292a7cd414fd6cdd292f9bea105"
		},
		{
			"class": "b2.RowNode",
			"ref": 370,
			"p": {
				"name": "11排",
				"parent": 108,
				"location": {
					"x": 741.8904105952238,
					"y": 971.715154129891
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -449.9999999999999,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "11"
			},
			"id": "825ea23ec2e5afb100d54608a480f4ba"
		},
		{
			"class": "b2.SeatNode",
			"ref": 371,
			"p": {
				"name": "22",
				"parent": 370,
				"location": {
					"x": 1167.8904105952242,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 22
			},
			"id": "e9f2b5e7a9b19305bb4bf38fae1e4b54"
		},
		{
			"class": "b2.SeatNode",
			"ref": 372,
			"p": {
				"name": "20",
				"parent": 370,
				"location": {
					"x": 1127.8904105952242,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 20
			},
			"id": "c699aca00684c6873d1cde6fe7e48c7d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 373,
			"p": {
				"name": "18",
				"parent": 370,
				"location": {
					"x": 1087.8904105952242,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 18
			},
			"id": "0aa23222d56a5ee1ce3e5452afd8ba55"
		},
		{
			"class": "b2.SeatNode",
			"ref": 374,
			"p": {
				"name": "16",
				"parent": 370,
				"location": {
					"x": 1047.8904105952242,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 16
			},
			"id": "d2a10ead2356d1cfd878d773502ad619"
		},
		{
			"class": "b2.SeatNode",
			"ref": 375,
			"p": {
				"name": "14",
				"parent": 370,
				"location": {
					"x": 1007.8904105952241,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 14
			},
			"id": "160587a8e32f94c12b748c82ab96d26c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 376,
			"p": {
				"name": "12",
				"parent": 370,
				"location": {
					"x": 967.8904105952241,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 12
			},
			"id": "17574bc62dcd15581c0ff01a9f07f14e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 377,
			"p": {
				"name": "10",
				"parent": 370,
				"location": {
					"x": 927.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 10
			},
			"id": "75b7570b89434724a85b8e40a7c9ee26"
		},
		{
			"class": "b2.SeatNode",
			"ref": 378,
			"p": {
				"name": "8",
				"parent": 370,
				"location": {
					"x": 887.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 8
			},
			"id": "ee658f998578a4692202b132f959f282"
		},
		{
			"class": "b2.SeatNode",
			"ref": 379,
			"p": {
				"name": "6",
				"parent": 370,
				"location": {
					"x": 847.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 6
			},
			"id": "2fee92d45e2c6c3d872f714eb76e6189"
		},
		{
			"class": "b2.SeatNode",
			"ref": 380,
			"p": {
				"name": "4",
				"parent": 370,
				"location": {
					"x": 807.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 4
			},
			"id": "e7e00c7906868aa42c8ae6d9cb5a45ed"
		},
		{
			"class": "b2.SeatNode",
			"ref": 381,
			"p": {
				"name": "2",
				"parent": 370,
				"location": {
					"x": 767.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 2
			},
			"id": "13a31f0c273758645c470ca443ddf6b8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 382,
			"p": {
				"name": "1",
				"parent": 370,
				"location": {
					"x": 727.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 1
			},
			"id": "5cd597c084ae766aa282244754b0b87b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 383,
			"p": {
				"name": "3",
				"parent": 370,
				"location": {
					"x": 687.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 3
			},
			"id": "f65ddf92f8669000197402eac484375a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 384,
			"p": {
				"name": "5",
				"parent": 370,
				"location": {
					"x": 647.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 5
			},
			"id": "9b79b40200119b2ef3187b5dd27aa5a4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 385,
			"p": {
				"name": "7",
				"parent": 370,
				"location": {
					"x": 607.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 7
			},
			"id": "423a6d2ec5a7d46e17d1ce9a6638973b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 386,
			"p": {
				"name": "9",
				"parent": 370,
				"location": {
					"x": 567.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 9
			},
			"id": "00550aa5a6d7bf9aece34400cb85e2b1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 387,
			"p": {
				"name": "11",
				"parent": 370,
				"location": {
					"x": 527.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 11
			},
			"id": "a9ac905e53f8a56143533e7af735bf9b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 388,
			"p": {
				"name": "13",
				"parent": 370,
				"location": {
					"x": 487.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 13
			},
			"id": "f63dde2222143618cfd0f6a90bc034a4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 389,
			"p": {
				"name": "15",
				"parent": 370,
				"location": {
					"x": 447.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 15
			},
			"id": "863b927217547b3afe492be7707254e3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 390,
			"p": {
				"name": "17",
				"parent": 370,
				"location": {
					"x": 407.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 17
			},
			"id": "3da7d021b5e7df6b0962c1ae3769b6c0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 391,
			"p": {
				"name": "19",
				"parent": 370,
				"location": {
					"x": 367.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 19
			},
			"id": "4ac909071bd23fe4aa7b95a0f1bbc3c7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 392,
			"p": {
				"name": "21",
				"parent": 370,
				"location": {
					"x": 327.8904105952239,
					"y": 973.715154129891
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 21
			},
			"id": "2494a619580f2cf1682618f033ad7664"
		},
		{
			"class": "b2.RowNode",
			"ref": 393,
			"p": {
				"name": "12排",
				"parent": 108,
				"location": {
					"x": 722.9721306648783,
					"y": 1009.0125427112702
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -430,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "12"
			},
			"id": "76f27c5095d965dce572a3e007ee0d20"
		},
		{
			"class": "b2.SeatNode",
			"ref": 394,
			"p": {
				"name": "21",
				"parent": 393,
				"location": {
					"x": 328.97213066487825,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 21
			},
			"id": "74172761801b12c09c9b19662da140be"
		},
		{
			"class": "b2.SeatNode",
			"ref": 395,
			"p": {
				"name": "19",
				"parent": 393,
				"location": {
					"x": 368.97213066487825,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 19
			},
			"id": "2b196379a2de04977d783fdbf1e61736"
		},
		{
			"class": "b2.SeatNode",
			"ref": 396,
			"p": {
				"name": "17",
				"parent": 393,
				"location": {
					"x": 408.97213066487825,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 17
			},
			"id": "81dad3147b1ad476a5640531fd98ad3e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 397,
			"p": {
				"name": "15",
				"parent": 393,
				"location": {
					"x": 448.97213066487825,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 15
			},
			"id": "e9dd5a93e8c2814b275096f2a77d7250"
		},
		{
			"class": "b2.SeatNode",
			"ref": 398,
			"p": {
				"name": "13",
				"parent": 393,
				"location": {
					"x": 488.97213066487825,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 13
			},
			"id": "8a1722f15466d010d9ac71cb0c514e41"
		},
		{
			"class": "b2.SeatNode",
			"ref": 399,
			"p": {
				"name": "11",
				"parent": 393,
				"location": {
					"x": 528.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 11
			},
			"id": "834f2cae77a39cd4320c642c9d2ecf57"
		},
		{
			"class": "b2.SeatNode",
			"ref": 400,
			"p": {
				"name": "9",
				"parent": 393,
				"location": {
					"x": 568.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 9
			},
			"id": "ce39ac68f1aa5175883df075a9c50955"
		},
		{
			"class": "b2.SeatNode",
			"ref": 401,
			"p": {
				"name": "7",
				"parent": 393,
				"location": {
					"x": 608.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 7
			},
			"id": "298e942ca75ff2945d2f1e7bb7bc465a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 402,
			"p": {
				"name": "5",
				"parent": 393,
				"location": {
					"x": 648.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 5
			},
			"id": "3cce440b8ec729a97563bbc4c842602e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 403,
			"p": {
				"name": "3",
				"parent": 393,
				"location": {
					"x": 688.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 3
			},
			"id": "b61884467a68f88fe78cf2e720496b88"
		},
		{
			"class": "b2.SeatNode",
			"ref": 404,
			"p": {
				"name": "1",
				"parent": 393,
				"location": {
					"x": 728.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 1
			},
			"id": "bd9630d0e969ea233e1bfe551b015b3a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 405,
			"p": {
				"name": "2",
				"parent": 393,
				"location": {
					"x": 768.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 2
			},
			"id": "32676046ab6c1832d28e0f72d0a3db7d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 406,
			"p": {
				"name": "4",
				"parent": 393,
				"location": {
					"x": 808.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 4
			},
			"id": "7e9ff566ad3e2246be25d5075aa7efcf"
		},
		{
			"class": "b2.SeatNode",
			"ref": 407,
			"p": {
				"name": "6",
				"parent": 393,
				"location": {
					"x": 848.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 6
			},
			"id": "632bd495e83b93108040e193397c5bda"
		},
		{
			"class": "b2.SeatNode",
			"ref": 408,
			"p": {
				"name": "8",
				"parent": 393,
				"location": {
					"x": 888.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 8
			},
			"id": "6f998ebc8a7f9f47aa10faf673acd42b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 409,
			"p": {
				"name": "10",
				"parent": 393,
				"location": {
					"x": 928.9721306648783,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 10
			},
			"id": "bd40d5a747b783cb6c583a6fff3b6c6c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 410,
			"p": {
				"name": "12",
				"parent": 393,
				"location": {
					"x": 968.9721306648784,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 12
			},
			"id": "9bfd30eadf7d19cf8221c19d55c85263"
		},
		{
			"class": "b2.SeatNode",
			"ref": 411,
			"p": {
				"name": "14",
				"parent": 393,
				"location": {
					"x": 1008.9721306648788,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 14
			},
			"id": "8d6badae970ffdf0158d59ff5612e515"
		},
		{
			"class": "b2.SeatNode",
			"ref": 412,
			"p": {
				"name": "16",
				"parent": 393,
				"location": {
					"x": 1048.972130664878,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 16
			},
			"id": "225db145dc09371dd1697c0b8a8112fb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 413,
			"p": {
				"name": "18",
				"parent": 393,
				"location": {
					"x": 1088.9721306648785,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 18
			},
			"id": "0928e7798d71f7c1890f75dc56538b14"
		},
		{
			"class": "b2.SeatNode",
			"ref": 414,
			"p": {
				"name": "20",
				"parent": 393,
				"location": {
					"x": 1128.972130664878,
					"y": 1011.0125427112702
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "12",
				"business.seat": 20
			},
			"id": "ad4b5c1ec7740ff3910fc0fcfd8c4776"
		},
		{
			"class": "b2.RowNode",
			"ref": 415,
			"p": {
				"name": "13排",
				"parent": 108,
				"location": {
					"x": 743.2417163045342,
					"y": 1044.9586255833392
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -330,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "13"
			},
			"id": "d7492d31c686cb5cb3db5b711ee42f51"
		},
		{
			"class": "b2.SeatNode",
			"ref": 416,
			"p": {
				"name": "15",
				"parent": 415,
				"location": {
					"x": 449.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 15
			},
			"id": "cd591ed19a56f32e530bbfb0c73d2b0f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 417,
			"p": {
				"name": "13",
				"parent": 415,
				"location": {
					"x": 489.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 13
			},
			"id": "59d5e3e49543e84414451bf2ecad0cd5"
		},
		{
			"class": "b2.SeatNode",
			"ref": 418,
			"p": {
				"name": "11",
				"parent": 415,
				"location": {
					"x": 529.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 11
			},
			"id": "4367cb7802a4f4951bd12c1e33004f98"
		},
		{
			"class": "b2.SeatNode",
			"ref": 419,
			"p": {
				"name": "9",
				"parent": 415,
				"location": {
					"x": 569.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 9
			},
			"id": "1b705c9f137e01c29ab913a6c36c8e5f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 420,
			"p": {
				"name": "7",
				"parent": 415,
				"location": {
					"x": 609.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 7
			},
			"id": "9a8ab2dab4d0e6454f6b1874255f1a71"
		},
		{
			"class": "b2.SeatNode",
			"ref": 421,
			"p": {
				"name": "5",
				"parent": 415,
				"location": {
					"x": 649.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 5
			},
			"id": "729fe3694e43ea312ed0aa646e156959"
		},
		{
			"class": "b2.SeatNode",
			"ref": 422,
			"p": {
				"name": "3",
				"parent": 415,
				"location": {
					"x": 689.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 3
			},
			"id": "0a2aedbb7ab5f82c98962d4168b23a97"
		},
		{
			"class": "b2.SeatNode",
			"ref": 423,
			"p": {
				"name": "1",
				"parent": 415,
				"location": {
					"x": 729.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 1
			},
			"id": "dddef565fb6e2bc23c3d6578667d81cf"
		},
		{
			"class": "b2.SeatNode",
			"ref": 424,
			"p": {
				"name": "2",
				"parent": 415,
				"location": {
					"x": 769.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 2
			},
			"id": "2091928a0e156cac335bdb33eb302b26"
		},
		{
			"class": "b2.SeatNode",
			"ref": 425,
			"p": {
				"name": "4",
				"parent": 415,
				"location": {
					"x": 809.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 4
			},
			"id": "0e7eb2a74b4ff2beb3372f4352725d10"
		},
		{
			"class": "b2.SeatNode",
			"ref": 426,
			"p": {
				"name": "6",
				"parent": 415,
				"location": {
					"x": 849.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 6
			},
			"id": "930b197f1aeae93be4846e75c4f1b97f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 427,
			"p": {
				"name": "8",
				"parent": 415,
				"location": {
					"x": 889.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 8
			},
			"id": "99f4506df3d4a63710e2b9369af00cc4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 428,
			"p": {
				"name": "10",
				"parent": 415,
				"location": {
					"x": 929.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 10
			},
			"id": "e899ab1d4583b8889a9c3b83387ca717"
		},
		{
			"class": "b2.SeatNode",
			"ref": 429,
			"p": {
				"name": "12",
				"parent": 415,
				"location": {
					"x": 969.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 12
			},
			"id": "929ff9db32fb63b872a741317c833db7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 430,
			"p": {
				"name": "14",
				"parent": 415,
				"location": {
					"x": 1009.2417163045342,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 14
			},
			"id": "913c1fae872f29e95c69cf1cfd786542"
		},
		{
			"class": "b2.SeatNode",
			"ref": 431,
			"p": {
				"name": "16",
				"parent": 415,
				"location": {
					"x": 1049.2417163045347,
					"y": 1046.9586255833392
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "13",
				"business.seat": 16
			},
			"id": "2b00ef01f3c8bcae9ff130b5eab84a28"
		},
		{
			"class": "b2.RowNode",
			"ref": 432,
			"p": {
				"name": "14排",
				"parent": 108,
				"location": {
					"x": 724.3234363741885,
					"y": 1089.0125427112703
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -270,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "14"
			},
			"id": "8ed91dd7b56b64eaf925564e8a662348"
		},
		{
			"class": "b2.SeatNode",
			"ref": 433,
			"p": {
				"name": "13",
				"parent": 432,
				"location": {
					"x": 490.32343637418853,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 13
			},
			"id": "098d065e4f44f1f097c553494696ddb0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 434,
			"p": {
				"name": "11",
				"parent": 432,
				"location": {
					"x": 530.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 11
			},
			"id": "61004aef36de54a810a4f95449db4407"
		},
		{
			"class": "b2.SeatNode",
			"ref": 435,
			"p": {
				"name": "9",
				"parent": 432,
				"location": {
					"x": 570.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 9
			},
			"id": "5076242b52748b84609aa55c6285a146"
		},
		{
			"class": "b2.SeatNode",
			"ref": 436,
			"p": {
				"name": "7",
				"parent": 432,
				"location": {
					"x": 610.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 7
			},
			"id": "11a5b7e915ee40e041dfc040ed22535d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 437,
			"p": {
				"name": "5",
				"parent": 432,
				"location": {
					"x": 650.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 5
			},
			"id": "6d57eea59215e0279392b18d1fc0c6e9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 438,
			"p": {
				"name": "3",
				"parent": 432,
				"location": {
					"x": 690.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 3
			},
			"id": "207e4af7a6f0a3a99c4bac0d9b0ac1eb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 439,
			"p": {
				"name": "1",
				"parent": 432,
				"location": {
					"x": 730.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 1
			},
			"id": "c09b028fec110252677bb9c664aaf18c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 440,
			"p": {
				"name": "2",
				"parent": 432,
				"location": {
					"x": 770.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 2
			},
			"id": "31c8022d6c79cd8448ce74393c861385"
		},
		{
			"class": "b2.SeatNode",
			"ref": 441,
			"p": {
				"name": "4",
				"parent": 432,
				"location": {
					"x": 810.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 4
			},
			"id": "7b0466f119e623526955c7ce5da10b6d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 442,
			"p": {
				"name": "6",
				"parent": 432,
				"location": {
					"x": 850.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 6
			},
			"id": "f65c9966b1ce4f518006b75eb5d41c69"
		},
		{
			"class": "b2.SeatNode",
			"ref": 443,
			"p": {
				"name": "8",
				"parent": 432,
				"location": {
					"x": 890.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 8
			},
			"id": "5c58dd03903951ee0bdad86101f07fbd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 444,
			"p": {
				"name": "10",
				"parent": 432,
				"location": {
					"x": 930.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 10
			},
			"id": "6269c962a1ad788542afc5d8a45ca3af"
		},
		{
			"class": "b2.SeatNode",
			"ref": 445,
			"p": {
				"name": "12",
				"parent": 432,
				"location": {
					"x": 970.3234363741885,
					"y": 1091.0125427112703
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "14",
				"business.seat": 12
			},
			"id": "250ae35684c68492a929517d88e924c1"
		},
		{
			"class": "b2.RowNode",
			"ref": 446,
			"p": {
				"name": "1排",
				"parent": 108,
				"location": {
					"x": 1404.719360933233,
					"y": 564.958625583339
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -150,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "1"
			},
			"id": "0f44c47509eec73c4c1ce009d5f7da0a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 447,
			"p": {
				"name": "14",
				"parent": 446,
				"location": {
					"x": 1290.719360933233,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 14
			},
			"id": "9922ce9f7247e70e83a7d0bbed0afe44"
		},
		{
			"class": "b2.SeatNode",
			"ref": 448,
			"p": {
				"name": "16",
				"parent": 446,
				"location": {
					"x": 1330.719360933233,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 16
			},
			"id": "c65972280e4b473caeda8c9cdc13d162"
		},
		{
			"class": "b2.SeatNode",
			"ref": 449,
			"p": {
				"name": "18",
				"parent": 446,
				"location": {
					"x": 1370.719360933233,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 18
			},
			"id": "20ebcccfdbd6b221e5f49f47d5f06105"
		},
		{
			"class": "b2.SeatNode",
			"ref": 450,
			"p": {
				"name": "20",
				"parent": 446,
				"location": {
					"x": 1410.7193609332332,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 20
			},
			"id": "5dd309bc8e3b6d3286646fe28696c27a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 451,
			"p": {
				"name": "22",
				"parent": 446,
				"location": {
					"x": 1450.7193609332332,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 22
			},
			"id": "81241f0a9b6045796eafc1d855c5995a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 452,
			"p": {
				"name": "24",
				"parent": 446,
				"location": {
					"x": 1490.7193609332332,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 24
			},
			"id": "fd96b7310306a52503d7f701df7d3f28"
		},
		{
			"class": "b2.SeatNode",
			"ref": 453,
			"p": {
				"name": "26",
				"parent": 446,
				"location": {
					"x": 1530.7193609332332,
					"y": 566.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "1",
				"business.seat": 26
			},
			"id": "11838ebcc80a7ad69baace8b89ccecb3"
		},
		{
			"class": "b2.RowNode",
			"ref": 454,
			"p": {
				"name": "2排",
				"parent": 108,
				"location": {
					"x": 1444.7193609332328,
					"y": 603.6073198740286
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "2"
			},
			"id": "dd278249d650f159f8efaf071c89f348"
		},
		{
			"class": "b2.SeatNode",
			"ref": 455,
			"p": {
				"name": "14",
				"parent": 454,
				"location": {
					"x": 1290.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 14
			},
			"id": "f44340104fe0588b135007e0d00a2ce3"
		},
		{
			"class": "b2.SeatNode",
			"ref": 456,
			"p": {
				"name": "16",
				"parent": 454,
				"location": {
					"x": 1330.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 16
			},
			"id": "f7222fc913e93844b59815aff25a6d10"
		},
		{
			"class": "b2.SeatNode",
			"ref": 457,
			"p": {
				"name": "18",
				"parent": 454,
				"location": {
					"x": 1370.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 18
			},
			"id": "b0f4703ce7d97042da3940797b453b70"
		},
		{
			"class": "b2.SeatNode",
			"ref": 458,
			"p": {
				"name": "20",
				"parent": 454,
				"location": {
					"x": 1410.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 20
			},
			"id": "204a8692d3338979542ba47c0d0e5436"
		},
		{
			"class": "b2.SeatNode",
			"ref": 459,
			"p": {
				"name": "22",
				"parent": 454,
				"location": {
					"x": 1450.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 22
			},
			"id": "9c8391833c9f3c86506f02a0af84fbaa"
		},
		{
			"class": "b2.SeatNode",
			"ref": 460,
			"p": {
				"name": "24",
				"parent": 454,
				"location": {
					"x": 1490.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 24
			},
			"id": "54a921ec2c58183bf4ba4b700f6563c6"
		},
		{
			"class": "b2.SeatNode",
			"ref": 461,
			"p": {
				"name": "26",
				"parent": 454,
				"location": {
					"x": 1530.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 26
			},
			"id": "a544f80fde28a085c4685f92fc1a3cca"
		},
		{
			"class": "b2.SeatNode",
			"ref": 462,
			"p": {
				"name": "28",
				"parent": 454,
				"location": {
					"x": 1570.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 28
			},
			"id": "3638a46687f0d2f1630487a446f2b44b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 463,
			"p": {
				"name": "30",
				"parent": 454,
				"location": {
					"x": 1610.7193609332328,
					"y": 605.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "2",
				"business.seat": 30
			},
			"id": "4b21949c6b79f908501f5e2518bafb03"
		},
		{
			"class": "b2.RowNode",
			"ref": 464,
			"p": {
				"name": "3排",
				"parent": 108,
				"location": {
					"x": 1444.7193609332328,
					"y": 643.6073198740286
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -190,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "3"
			},
			"id": "f987fb162c0259575d631493a90cc0f9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 465,
			"p": {
				"name": "16",
				"parent": 464,
				"location": {
					"x": 1290.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 16
			},
			"id": "5e801861466cbca9d844b4fa5ea7f641"
		},
		{
			"class": "b2.SeatNode",
			"ref": 466,
			"p": {
				"name": "18",
				"parent": 464,
				"location": {
					"x": 1330.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 18
			},
			"id": "b7f712aef6abe97cbff56653511e1d37"
		},
		{
			"class": "b2.SeatNode",
			"ref": 467,
			"p": {
				"name": "20",
				"parent": 464,
				"location": {
					"x": 1370.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 20
			},
			"id": "aae98a62bc138301639a8aba9b48736a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 468,
			"p": {
				"name": "22",
				"parent": 464,
				"location": {
					"x": 1410.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 22
			},
			"id": "83426443a802bf49d7f4df4c07aa9e51"
		},
		{
			"class": "b2.SeatNode",
			"ref": 469,
			"p": {
				"name": "24",
				"parent": 464,
				"location": {
					"x": 1450.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 24
			},
			"id": "cc895c1ccdb5199bdbf499a3e7c9d0b1"
		},
		{
			"class": "b2.SeatNode",
			"ref": 470,
			"p": {
				"name": "26",
				"parent": 464,
				"location": {
					"x": 1490.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 26
			},
			"id": "57a4026c82fde93c6ddb61ee1a4537b0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 471,
			"p": {
				"name": "28",
				"parent": 464,
				"location": {
					"x": 1530.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 28
			},
			"id": "ddabff70061623e4baaa6e37dcd81552"
		},
		{
			"class": "b2.SeatNode",
			"ref": 472,
			"p": {
				"name": "30",
				"parent": 464,
				"location": {
					"x": 1570.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 30
			},
			"id": "a6d8a305cf140c6e465a3dae1e037dc9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 473,
			"p": {
				"name": "32",
				"parent": 464,
				"location": {
					"x": 1610.7193609332328,
					"y": 645.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "3",
				"business.seat": 32
			},
			"id": "6db553f9a9160836d29cc7dd3689c89c"
		},
		{
			"class": "b2.RowNode",
			"ref": 474,
			"p": {
				"name": "4排",
				"parent": 108,
				"location": {
					"x": 1424.7193609332328,
					"y": 684.958625583339
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "4"
			},
			"id": "4b6eb6a8d751bd722dc4c69533664a29"
		},
		{
			"class": "b2.SeatNode",
			"ref": 475,
			"p": {
				"name": "16",
				"parent": 474,
				"location": {
					"x": 1290.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 16
			},
			"id": "faa795d5e672391c74f5e03e52720177"
		},
		{
			"class": "b2.SeatNode",
			"ref": 476,
			"p": {
				"name": "18",
				"parent": 474,
				"location": {
					"x": 1330.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 18
			},
			"id": "19820d0ebff67d8abc61a13b56bac476"
		},
		{
			"class": "b2.SeatNode",
			"ref": 477,
			"p": {
				"name": "20",
				"parent": 474,
				"location": {
					"x": 1370.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 20
			},
			"id": "4ed3afe3964437283bd52c4d38f4dfeb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 478,
			"p": {
				"name": "22",
				"parent": 474,
				"location": {
					"x": 1410.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 22
			},
			"id": "2b49d848535be2233d68d74fe40aaf95"
		},
		{
			"class": "b2.SeatNode",
			"ref": 479,
			"p": {
				"name": "24",
				"parent": 474,
				"location": {
					"x": 1450.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 24
			},
			"id": "1ab9597d9fa2180a8545894baf0579ef"
		},
		{
			"class": "b2.SeatNode",
			"ref": 480,
			"p": {
				"name": "26",
				"parent": 474,
				"location": {
					"x": 1490.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 26
			},
			"id": "c1c7c83ef47af6f5101c06191e571acb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 481,
			"p": {
				"name": "28",
				"parent": 474,
				"location": {
					"x": 1530.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 28
			},
			"id": "d6f25de516857601a16cfa8b1e768207"
		},
		{
			"class": "b2.SeatNode",
			"ref": 482,
			"p": {
				"name": "30",
				"parent": 474,
				"location": {
					"x": 1570.7193609332328,
					"y": 686.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "4",
				"business.seat": 30
			},
			"id": "4fd4f4ebad6133db1c1772a56142a8b1"
		},
		{
			"class": "b2.RowNode",
			"ref": 483,
			"p": {
				"name": "5排",
				"parent": 108,
				"location": {
					"x": 1424.7193609332328,
					"y": 724.958625583339
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "5"
			},
			"id": "68c0c60bfa84f0402559e96c15e8f45e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 484,
			"p": {
				"name": "18",
				"parent": 483,
				"location": {
					"x": 1290.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 18
			},
			"id": "f47cf370f14df0f7456b55890747023b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 485,
			"p": {
				"name": "20",
				"parent": 483,
				"location": {
					"x": 1330.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 20
			},
			"id": "efda98acb7e7852223aa9690fe273e76"
		},
		{
			"class": "b2.SeatNode",
			"ref": 486,
			"p": {
				"name": "22",
				"parent": 483,
				"location": {
					"x": 1370.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 22
			},
			"id": "247bc3f7eea5cac61e469a78b08dd0bd"
		},
		{
			"class": "b2.SeatNode",
			"ref": 487,
			"p": {
				"name": "24",
				"parent": 483,
				"location": {
					"x": 1410.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 24
			},
			"id": "95b9373bfbfae6b55fa134e12dbdec6b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 488,
			"p": {
				"name": "26",
				"parent": 483,
				"location": {
					"x": 1450.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 26
			},
			"id": "e71984ffe479d781e76ef602220715b5"
		},
		{
			"class": "b2.SeatNode",
			"ref": 489,
			"p": {
				"name": "28",
				"parent": 483,
				"location": {
					"x": 1490.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 28
			},
			"id": "d9f7c1fd8cc78b0239d8f526811e3ad4"
		},
		{
			"class": "b2.SeatNode",
			"ref": 490,
			"p": {
				"name": "30",
				"parent": 483,
				"location": {
					"x": 1530.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 30
			},
			"id": "3e0d2d939aef7449fef97e46e5d342a7"
		},
		{
			"class": "b2.SeatNode",
			"ref": 491,
			"p": {
				"name": "32",
				"parent": 483,
				"location": {
					"x": 1570.7193609332328,
					"y": 726.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "5",
				"business.seat": 32
			},
			"id": "cd8491c726b5881c8df8287c1a73bf50"
		},
		{
			"class": "b2.RowNode",
			"ref": 492,
			"p": {
				"name": "6排",
				"parent": 108,
				"location": {
					"x": 1464.7193609332328,
					"y": 764.958625583339
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -210,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "6"
			},
			"id": "85ea6f428c146f551e11469449a22601"
		},
		{
			"class": "b2.SeatNode",
			"ref": 493,
			"p": {
				"name": "18",
				"parent": 492,
				"location": {
					"x": 1290.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 18
			},
			"id": "72985149b312957fb4fba30c1781cf18"
		},
		{
			"class": "b2.SeatNode",
			"ref": 494,
			"p": {
				"name": "20",
				"parent": 492,
				"location": {
					"x": 1330.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 20
			},
			"id": "9a105bea2e09d01ee5ee29d49050474c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 495,
			"p": {
				"name": "22",
				"parent": 492,
				"location": {
					"x": 1370.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 22
			},
			"id": "6ff743f1852175de8d281e34d3851fda"
		},
		{
			"class": "b2.SeatNode",
			"ref": 496,
			"p": {
				"name": "24",
				"parent": 492,
				"location": {
					"x": 1410.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 24
			},
			"id": "61ad899abcb2b3f7e675e14296f744c8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 497,
			"p": {
				"name": "26",
				"parent": 492,
				"location": {
					"x": 1450.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 26
			},
			"id": "8ed7f8d124c06acf6ee5812b8e688738"
		},
		{
			"class": "b2.SeatNode",
			"ref": 498,
			"p": {
				"name": "28",
				"parent": 492,
				"location": {
					"x": 1490.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 28
			},
			"id": "7450faa68da538bba9f884a9fa25394c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 499,
			"p": {
				"name": "30",
				"parent": 492,
				"location": {
					"x": 1530.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 30
			},
			"id": "28dad0444c5512e79dc84c651c62702e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 500,
			"p": {
				"name": "32",
				"parent": 492,
				"location": {
					"x": 1570.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 32
			},
			"id": "42e47c99a7e316657a8dd531f72b6542"
		},
		{
			"class": "b2.SeatNode",
			"ref": 501,
			"p": {
				"name": "34",
				"parent": 492,
				"location": {
					"x": 1610.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 34
			},
			"id": "60fe7608d92e2a3d8e1d9caf9f1d6a1f"
		},
		{
			"class": "b2.SeatNode",
			"ref": 502,
			"p": {
				"name": "36",
				"parent": 492,
				"location": {
					"x": 1650.7193609332328,
					"y": 766.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "6",
				"business.seat": 36
			},
			"id": "470eefa430d0d9688a42a26f19a3dab7"
		},
		{
			"class": "b2.RowNode",
			"ref": 503,
			"p": {
				"name": "7排",
				"parent": 108,
				"location": {
					"x": 1424.7193609332328,
					"y": 804.958625583339
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -170,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "7"
			},
			"id": "0f7f1eae2b7c9ac106b667e9124ac0ca"
		},
		{
			"class": "b2.SeatNode",
			"ref": 504,
			"p": {
				"name": "18",
				"parent": 503,
				"location": {
					"x": 1290.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 18
			},
			"id": "2aabf1e6bdaba5c3af537f13147e4737"
		},
		{
			"class": "b2.SeatNode",
			"ref": 505,
			"p": {
				"name": "20",
				"parent": 503,
				"location": {
					"x": 1330.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 20
			},
			"id": "77523a6bf5da0b232efdaa5355a7b8c8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 506,
			"p": {
				"name": "22",
				"parent": 503,
				"location": {
					"x": 1370.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 22
			},
			"id": "981fc419f6f99b6e5fe31376ea187702"
		},
		{
			"class": "b2.SeatNode",
			"ref": 507,
			"p": {
				"name": "24",
				"parent": 503,
				"location": {
					"x": 1410.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 24
			},
			"id": "cb523908f3d24fbc1f18e7d6e586f53e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 508,
			"p": {
				"name": "26",
				"parent": 503,
				"location": {
					"x": 1450.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 26
			},
			"id": "809c7fdb9bc746dbeed885901458f7c8"
		},
		{
			"class": "b2.SeatNode",
			"ref": 509,
			"p": {
				"name": "28",
				"parent": 503,
				"location": {
					"x": 1490.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 28
			},
			"id": "52dd2d3b94b6e967d674f422cf2e364a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 510,
			"p": {
				"name": "30",
				"parent": 503,
				"location": {
					"x": 1530.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 30
			},
			"id": "c2c338809bcd072ac1c45f196ec2311a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 511,
			"p": {
				"name": "32",
				"parent": 503,
				"location": {
					"x": 1570.7193609332328,
					"y": 806.958625583339
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "7",
				"business.seat": 32
			},
			"id": "257d09d10fa7f2f69be26a2f80f744ab"
		},
		{
			"class": "b2.RowNode",
			"ref": 512,
			"p": {
				"name": "8排",
				"parent": 108,
				"location": {
					"x": 1384.7193609332328,
					"y": 843.6073198740286
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -130,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "8"
			},
			"id": "d95d0eda738ac5eca86fdbb44dd9ece9"
		},
		{
			"class": "b2.SeatNode",
			"ref": 513,
			"p": {
				"name": "18",
				"parent": 512,
				"location": {
					"x": 1290.7193609332328,
					"y": 845.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 18
			},
			"id": "ce5268478c00a636ea23f2c6db56159c"
		},
		{
			"class": "b2.SeatNode",
			"ref": 514,
			"p": {
				"name": "20",
				"parent": 512,
				"location": {
					"x": 1330.7193609332328,
					"y": 845.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 20
			},
			"id": "6fc6a944f7fa57350f2c2b8d0ef814df"
		},
		{
			"class": "b2.SeatNode",
			"ref": 515,
			"p": {
				"name": "22",
				"parent": 512,
				"location": {
					"x": 1370.7193609332328,
					"y": 845.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 22
			},
			"id": "bf91fca030a7a55306c09407b9d05a4a"
		},
		{
			"class": "b2.SeatNode",
			"ref": 516,
			"p": {
				"name": "24",
				"parent": 512,
				"location": {
					"x": 1410.7193609332328,
					"y": 845.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 24
			},
			"id": "7da8b829f2c4caabcba549a2754c8a6e"
		},
		{
			"class": "b2.SeatNode",
			"ref": 517,
			"p": {
				"name": "26",
				"parent": 512,
				"location": {
					"x": 1450.7193609332328,
					"y": 845.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 26
			},
			"id": "9257e585e27d5dd580bb23f464aacf13"
		},
		{
			"class": "b2.SeatNode",
			"ref": 518,
			"p": {
				"name": "28",
				"parent": 512,
				"location": {
					"x": 1490.7193609332328,
					"y": 845.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "8",
				"business.seat": 28
			},
			"id": "6ec62431813dda339a082186e56ebb92"
		},
		{
			"class": "b2.RowNode",
			"ref": 519,
			"p": {
				"name": "9排",
				"parent": 108,
				"location": {
					"x": 1384.7193609332328,
					"y": 883.6073198740286
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -130,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "9"
			},
			"id": "3b868b004413fa2b71ede57b29d80e41"
		},
		{
			"class": "b2.SeatNode",
			"ref": 520,
			"p": {
				"name": "22",
				"parent": 519,
				"location": {
					"x": 1290.7193609332328,
					"y": 885.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 22
			},
			"id": "cb18ec8a72e9f25fe79dff3caba33267"
		},
		{
			"class": "b2.SeatNode",
			"ref": 521,
			"p": {
				"name": "24",
				"parent": 519,
				"location": {
					"x": 1330.7193609332328,
					"y": 885.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 24
			},
			"id": "532008cff11057e4cd9379c81afd383d"
		},
		{
			"class": "b2.SeatNode",
			"ref": 522,
			"p": {
				"name": "26",
				"parent": 519,
				"location": {
					"x": 1370.7193609332328,
					"y": 885.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 26
			},
			"id": "b91672883cbe0fdc9bb87d7c170ec511"
		},
		{
			"class": "b2.SeatNode",
			"ref": 523,
			"p": {
				"name": "28",
				"parent": 519,
				"location": {
					"x": 1410.7193609332328,
					"y": 885.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 28
			},
			"id": "1670367db2661f45e912b4da84e0d198"
		},
		{
			"class": "b2.SeatNode",
			"ref": 524,
			"p": {
				"name": "30",
				"parent": 519,
				"location": {
					"x": 1450.7193609332328,
					"y": 885.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 30
			},
			"id": "5de25996d2956fd1545a0a5757252e40"
		},
		{
			"class": "b2.SeatNode",
			"ref": 525,
			"p": {
				"name": "32",
				"parent": 519,
				"location": {
					"x": 1490.7193609332328,
					"y": 885.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "9",
				"business.seat": 32
			},
			"id": "2a889612ca7fd8a63bae009ca056fb19"
		},
		{
			"class": "b2.RowNode",
			"ref": 526,
			"p": {
				"name": "10排",
				"parent": 108,
				"location": {
					"x": 1344.7193609332328,
					"y": 923.6073198740286
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -90,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "10"
			},
			"id": "1a3db68c4c258e2d9ac77a62905d5853"
		},
		{
			"class": "b2.SeatNode",
			"ref": 527,
			"p": {
				"name": "22",
				"parent": 526,
				"location": {
					"x": 1290.7193609332328,
					"y": 925.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 22
			},
			"id": "47a97b1fc6301e67cfd86d34a47585fb"
		},
		{
			"class": "b2.SeatNode",
			"ref": 528,
			"p": {
				"name": "24",
				"parent": 526,
				"location": {
					"x": 1330.7193609332328,
					"y": 925.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 24
			},
			"id": "97932982e2965066f1ddf531647869b0"
		},
		{
			"class": "b2.SeatNode",
			"ref": 529,
			"p": {
				"name": "26",
				"parent": 526,
				"location": {
					"x": 1370.7193609332328,
					"y": 925.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 26
			},
			"id": "5dd83c76bd6e2cfeae8db3968cc3c124"
		},
		{
			"class": "b2.SeatNode",
			"ref": 530,
			"p": {
				"name": "28",
				"parent": 526,
				"location": {
					"x": 1410.7193609332328,
					"y": 925.6073198740286
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "10",
				"business.seat": 28
			},
			"id": "b3e7848f1d7be0e23258e718713ea212"
		},
		{
			"class": "b2.RowNode",
			"ref": 531,
			"p": {
				"name": "11排",
				"parent": 108,
				"location": {
					"x": 1304.7193609332328,
					"y": 966.3099312926494
				}
			},
			"s": {
				"group.fill": false,
				"group.fill.color": "#FFFFFF",
				"group.shape": "roundrect",
				"group.outline.width": 0,
				"group.outline.color": "#000000",
				"group.padding": 2,
				"vector.outline.pattern": [
					2,
					2
				],
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"label.position": "center",
				"label.xoffset": -50,
				"label.yoffset": 0
			},
			"c": {
				"business.region": "",
				"business.row": "11"
			},
			"id": "5d634fdc8f6da193d72c4a645b496354"
		},
		{
			"class": "b2.SeatNode",
			"ref": 532,
			"p": {
				"name": "24",
				"parent": 531,
				"location": {
					"x": 1290.7193609332328,
					"y": 968.3099312926494
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 24
			},
			"id": "feb19e53967e5aa88d194042f11d3e9b"
		},
		{
			"class": "b2.SeatNode",
			"ref": 533,
			"p": {
				"name": "26",
				"parent": 531,
				"location": {
					"x": 1330.7193609332328,
					"y": 968.3099312926494
				},
				"width": 20,
				"height": 20
			},
			"s": {
				"body.type": "vector",
				"vector.shape": "circle",
				"vector.fill.color": "#cdcdcd",
				"vector.outline.width": 1,
				"vector.outline.color": "#000000",
				"vector.outline.pattern": [
					10,
					0
				],
				"label.position": "center",
				"label.font": "10px arial",
				"label2.position": "left.left",
				"label2.yoffset": 0,
				"shadow.blur": 4,
				"shadow.xoffset": 0,
				"shadow.yoffset": 0,
				"select.style": "shadow",
				"select.padding": 0,
				"select.color": "#ff0000"
			},
			"c": {
				"business.region": "",
				"business.row": "11",
				"business.seat": 26
			},
			"id": "e609c65467ebd3aaa40c23535b09d6c6"
		}
	]
}