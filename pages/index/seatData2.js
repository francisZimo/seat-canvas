export const seatInfo = {
	"version": "5.8.4",
	"platform": "html5",
	"images": {},
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
		}, {
			"id": "top",
			"name": "Default",
			"visible": true,
			"editable": true,
			"movable": true
		}, {
			"name": "Default",
			"visible": true,
			"editable": true,
			"movable": true
		}]
	},
	"datas": [{
		"class": "b2.RegionNode",
		"ref": 0,
		"p": {
			"name": "圆区",
			"location": {
				"x": -146.8350911574068,
				"y": 282.6368994092841
			},
			"width": 1103.0072372295435,
			"height": 571.541956103033
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
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
		}
	}, {
		"class": "b2.RowNode",
		"ref": 1,
		"p": {
			"name": "特种1排",
			"parent": 0,
			"location": {
				"x": 377.3285763829667,
				"y": 650.7412364941395
			}
		},
		"s": {
			"group.fill": false,
			"group.fill.color": "#FFFFFF",
			"group.shape": "roundrect",
			"group.outline.width": 0,
			"group.outline.color": "#000000",
			"group.padding": 2,
			"vector.outline.pattern": [2, 2],
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"label.position": "center",
			"label.xoffset": -109.99999999999955,
			"label.yoffset": 0
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1"
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 2,
		"p": {
			"name": "36",
			"parent": 1,
			"location": {
				"x": 463.3285763829663,
				"y": 652.7412364941395
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 36
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 3,
		"p": {
			"name": "34",
			"parent": 1,
			"location": {
				"x": 423.3285763829661,
				"y": 652.7412364941395
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 34
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 4,
		"p": {
			"name": "32",
			"parent": 1,
			"location": {
				"x": 383.328576382966,
				"y": 652.7412364941395
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 32
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 5,
		"p": {
			"name": "30",
			"parent": 1,
			"location": {
				"x": 343.3285763829662,
				"y": 652.7412364941395
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 30
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 6,
		"p": {
			"name": "28",
			"parent": 1,
			"location": {
				"x": 303.3285763829671,
				"y": 652.7412364941395
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 28
		}
	}, {
		"class": "b2.RowNode",
		"ref": 7,
		"p": {
			"name": "特种1排",
			"parent": 0,
			"location": {
				"x": 422.3155729654991,
				"y": 594.2566578449648
			}
		},
		"s": {
			"group.fill": false,
			"group.fill.color": "#FFFFFF",
			"group.shape": "roundrect",
			"group.outline.width": 0,
			"group.outline.color": "#000000",
			"group.padding": 2,
			"vector.outline.pattern": [2, 2],
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"label.position": "center",
			"label.xoffset": -250,
			"label.yoffset": 0
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1"
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 8,
		"p": {
			"name": "4",
			"parent": 7,
			"location": {
				"x": 208.3155729654991,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 4
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 9,
		"p": {
			"name": "6",
			"parent": 7,
			"location": {
				"x": 248.3155729654991,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 6
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 10,
		"p": {
			"name": "8",
			"parent": 7,
			"location": {
				"x": 288.3155729654991,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 8
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 11,
		"p": {
			"name": "10",
			"parent": 7,
			"location": {
				"x": 328.315572965499,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 10
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 12,
		"p": {
			"name": "12",
			"parent": 7,
			"location": {
				"x": 368.315572965499,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 12
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 13,
		"p": {
			"name": "14",
			"parent": 7,
			"location": {
				"x": 408.3155729654991,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 14
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 14,
		"p": {
			"name": "16",
			"parent": 7,
			"location": {
				"x": 448.31557296549937,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 16
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 15,
		"p": {
			"name": "18",
			"parent": 7,
			"location": {
				"x": 488.3155729654998,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 18
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 16,
		"p": {
			"name": "20",
			"parent": 7,
			"location": {
				"x": 528.3155729654999,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 20
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 17,
		"p": {
			"name": "22",
			"parent": 7,
			"location": {
				"x": 568.3155729654999,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 22
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 18,
		"p": {
			"name": "24",
			"parent": 7,
			"location": {
				"x": 608.3155729654999,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 24
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 19,
		"p": {
			"name": "26",
			"parent": 7,
			"location": {
				"x": 648.3155729654999,
				"y": 596.2566578449648
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 26
		}
	}, {
		"class": "b2.RowNode",
		"ref": 20,
		"p": {
			"name": "特种1排",
			"parent": 0,
			"location": {
				"x": 427.5701286810683,
				"y": 491.6925545083054
			}
		},
		"s": {
			"group.fill": false,
			"group.fill.color": "#FFFFFF",
			"group.shape": "roundrect",
			"group.outline.width": 0,
			"group.outline.color": "#000000",
			"group.padding": 2,
			"vector.outline.pattern": [2, 2],
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"label.position": "center",
			"label.xoffset": -230,
			"label.yoffset": 1.1368683772161603e-13
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1"
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 21,
		"p": {
			"name": "2",
			"parent": 20,
			"location": {
				"x": 633.5701286810689,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 2
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 22,
		"p": {
			"name": "1",
			"parent": 20,
			"location": {
				"x": 593.5701286810689,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 1
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 23,
		"p": {
			"name": "3",
			"parent": 20,
			"location": {
				"x": 553.5701286810687,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 3
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 24,
		"p": {
			"name": "5",
			"parent": 20,
			"location": {
				"x": 513.5701286810686,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 5
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 25,
		"p": {
			"name": "7",
			"parent": 20,
			"location": {
				"x": 473.5701286810686,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 7
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 26,
		"p": {
			"name": "9",
			"parent": 20,
			"location": {
				"x": 433.57012868106835,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 9
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 27,
		"p": {
			"name": "11",
			"parent": 20,
			"location": {
				"x": 393.5701286810683,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 11
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 28,
		"p": {
			"name": "13",
			"parent": 20,
			"location": {
				"x": 353.5701286810683,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 13
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 29,
		"p": {
			"name": "15",
			"parent": 20,
			"location": {
				"x": 313.5701286810683,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 15
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 30,
		"p": {
			"name": "17",
			"parent": 20,
			"location": {
				"x": 273.5701286810683,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 17
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 31,
		"p": {
			"name": "19",
			"parent": 20,
			"location": {
				"x": 233.5701286810683,
				"y": 493.69255450830553
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 19
		}
	}, {
		"class": "b2.RowNode",
		"ref": 32,
		"p": {
			"name": "特种1排",
			"parent": 0,
			"location": {
				"x": 388.6403652132182,
				"y": 429.2622307381653
			}
		},
		"s": {
			"group.fill": false,
			"group.fill.color": "#FFFFFF",
			"group.shape": "roundrect",
			"group.outline.width": 0,
			"group.outline.color": "#000000",
			"group.padding": 2,
			"vector.outline.pattern": [2, 2],
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"label.position": "center",
			"label.xoffset": -150,
			"label.yoffset": 0
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1"
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 33,
		"p": {
			"name": "33",
			"parent": 32,
			"location": {
				"x": 274.6403652132182,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 33
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 34,
		"p": {
			"name": "31",
			"parent": 32,
			"location": {
				"x": 314.6403652132182,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 31
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 35,
		"p": {
			"name": "29",
			"parent": 32,
			"location": {
				"x": 354.6403652132182,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 29
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 36,
		"p": {
			"name": "27",
			"parent": 32,
			"location": {
				"x": 394.6403652132182,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 27
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 37,
		"p": {
			"name": "25",
			"parent": 32,
			"location": {
				"x": 434.6403652132182,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 25
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 38,
		"p": {
			"name": "23",
			"parent": 32,
			"location": {
				"x": 474.6403652132185,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 23
		}
	}, {
		"class": "b2.SeatNode",
		"ref": 39,
		"p": {
			"name": "21",
			"parent": 32,
			"location": {
				"x": 514.6403652132185,
				"y": 431.2622307381653
			},
			"width": 20,
			"height": 20
		},
		"s": {
			"body.type": "vector",
			"vector.shape": "circle",
			"vector.fill.color": "#cdcdcd",
			"vector.outline.width": 1,
			"vector.outline.color": "#000000",
			"vector.outline.pattern": [10, 0],
			"label.position": "center",
			"label.font": "10px arial",
			"label2.position": "left.left",
			"label2.yoffset": 0,
			"shadow.blur": 4,
			"shadow.xoffset": 0,
			"shadow.yoffset": 0,
			"select.style": "shadow",
			"select.padding": 0,
			"select.color": "#ff0000"
		},
		"c": {
			"business.region": "圆区",
			"business.row": "特种1",
			"business.seat": 21
		}
	}]
}