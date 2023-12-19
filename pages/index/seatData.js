export const seatInfo = {
	version: '5.8.4',
	platform: 'html5',
	images: {},
	dataBox: {
		class: 'b2.ElementBox',
		s: {
			'background.type': 'vector',
			'background.vector.fill': true,
			'background.vector.fill.color': 'white',
			'background.vector.shape': 'rect',
		},
		layers: [{
				name: 'Default',
				visible: true,
				editable: true,
				movable: true
			},
			{
				id: 'bottom',
				name: 'Default',
				visible: true,
				editable: true,
				movable: true
			},
			{
				id: 'top',
				name: 'Default',
				visible: true,
				editable: true,
				movable: true
			},
		],
	},
	datas: [{
			class: 'b2.StageNode',
			ref: 0,
			p: {
				name: '舞台',
				location: {
					x: -45.221878434831865,
					y: -183.71199588870127
				},
				width: 1025.282025244941,
				height: 100,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'rectangle',
				'vector.fill.color': 'rgba(255,255,255,0.4)',
				'vector.outline.width': 2,
				'vector.outline.color': '#000000',
				'label.position': 'center',
				'label.font': '20px arial',
				'label.xoffset': 0,
				'label.yoffset': 0,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.padding': 0,
			},
		},
		{
			class: 'b2.RegionNode',
			ref: 1,
			p: {
				name: '乐池',
				location: {
					x: -236.97414729766592,
					y: -13.321940420017484
				},
				width: 1405.0720157272326,
				height: 258.267411799118,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'rectangle',
				'vector.fill.color': 'rgba(186, 202, 198,0.5)',
				'vector.outline.width': 2,
				'vector.outline.color': '#000000',
				'label.position': 'center',
				'label.font': '20px arial',
				'label.xoffset': -12,
				'label.yoffset': -69,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.padding': 0,
			},
		},
		{
			class: 'b2.RowNode',
			ref: 2,
			p: {
				name: 'Y4排',
				parent: 1,
				location: {
					x: 904.9788452148438,
					y: 188
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -170,
				'label.yoffset': 0,
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 3,
			p: {
				name: '12',
				parent: 2,
				location: {
					x: 770.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 12
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 4,
			p: {
				name: '14',
				parent: 2,
				location: {
					x: 810.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 14
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 5,
			p: {
				name: '16',
				parent: 2,
				location: {
					x: 850.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 16
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 6,
			p: {
				name: '18',
				parent: 2,
				location: {
					x: 890.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 18
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 7,
			p: {
				name: '20',
				parent: 2,
				location: {
					x: 930.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 20
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 8,
			p: {
				name: '22',
				parent: 2,
				location: {
					x: 970.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 22
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 9,
			p: {
				name: '24',
				parent: 2,
				location: {
					x: 1010.9788452148438,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 24
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 10,
			p: {
				name: '26',
				parent: 2,
				location: {
					x: 1050.9788452148437,
					y: 190
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y4',
				'business.seat': 26
			},
		},
		{
			class: 'b2.RowNode',
			ref: 11,
			p: {
				name: 'Y3排',
				parent: 1,
				location: {
					x: 924.9788452148438,
					y: 148
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -190,
				'label.yoffset': 0,
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 12,
			p: {
				name: '10',
				parent: 11,
				location: {
					x: 770.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 10
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 13,
			p: {
				name: '12',
				parent: 11,
				location: {
					x: 810.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 12
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 14,
			p: {
				name: '14',
				parent: 11,
				location: {
					x: 850.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 14
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 15,
			p: {
				name: '16',
				parent: 11,
				location: {
					x: 890.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 16
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 16,
			p: {
				name: '18',
				parent: 11,
				location: {
					x: 930.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 18
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 17,
			p: {
				name: '20',
				parent: 11,
				location: {
					x: 970.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 20
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 18,
			p: {
				name: '22',
				parent: 11,
				location: {
					x: 1010.9788452148438,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 22
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 19,
			p: {
				name: '24',
				parent: 11,
				location: {
					x: 1050.9788452148437,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 24
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 20,
			p: {
				name: '26',
				parent: 11,
				location: {
					x: 1090.9788452148437,
					y: 150
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y3',
				'business.seat': 26
			},
		},
		{
			class: 'b2.RowNode',
			ref: 21,
			p: {
				name: 'Y2排',
				parent: 1,
				location: {
					x: 884.9788452148438,
					y: 108
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -150,
				'label.yoffset': 0,
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 22,
			p: {
				name: '10',
				parent: 21,
				location: {
					x: 770.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 10
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 23,
			p: {
				name: '12',
				parent: 21,
				location: {
					x: 810.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 12
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 24,
			p: {
				name: '14',
				parent: 21,
				location: {
					x: 850.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 14
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 25,
			p: {
				name: '16',
				parent: 21,
				location: {
					x: 890.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 16
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 26,
			p: {
				name: '18',
				parent: 21,
				location: {
					x: 930.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 18
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 27,
			p: {
				name: '20',
				parent: 21,
				location: {
					x: 970.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 20
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 28,
			p: {
				name: '22',
				parent: 21,
				location: {
					x: 1010.9788452148438,
					y: 110
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y2',
				'business.seat': 22
			},
		},
		{
			class: 'b2.RowNode',
			ref: 29,
			p: {
				name: 'Y1排',
				parent: 1,
				location: {
					x: 844.9788452148438,
					y: 69.10000000000001
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -110,
				'label.yoffset': 0,
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y1'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 30,
			p: {
				name: '10',
				parent: 29,
				location: {
					x: 770.9788452148438,
					y: 71.10000000000001
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y1',
				'business.seat': 10
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 31,
			p: {
				name: '12',
				parent: 29,
				location: {
					x: 810.9788452148438,
					y: 71.10000000000001
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y1',
				'business.seat': 12
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 32,
			p: {
				name: '14',
				parent: 29,
				location: {
					x: 850.9788452148438,
					y: 71.10000000000001
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.region': '乐池',
				'business.row': 'Y1',
				'business.seat': 14
			},
		},
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 33,
		// 	p: {
		// 		name: '16',
		// 		parent: 29,
		// 		location: {
		// 			x: 890.9788452148438,
		// 			y: 71.10000000000001
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 34,
		// 	p: {
		// 		name: '18',
		// 		parent: 29,
		// 		location: {
		// 			x: 930.9788452148438,
		// 			y: 71.10000000000001
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 35,
		// 	p: {
		// 		name: 'Y4排',
		// 		parent: 1,
		// 		location: {
		// 			x: 440.4999999999999,
		// 			y: 186.89999999999998
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -230,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 36,
		// 	p: {
		// 		name: '10',
		// 		parent: 35,
		// 		location: {
		// 			x: 646.4999999999998,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 37,
		// 	p: {
		// 		name: '8',
		// 		parent: 35,
		// 		location: {
		// 			x: 606.4999999999998,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 38,
		// 	p: {
		// 		name: '6',
		// 		parent: 35,
		// 		location: {
		// 			x: 566.4999999999998,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 39,
		// 	p: {
		// 		name: '4',
		// 		parent: 35,
		// 		location: {
		// 			x: 526.4999999999998,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 40,
		// 	p: {
		// 		name: '2',
		// 		parent: 35,
		// 		location: {
		// 			x: 486.49999999999983,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 41,
		// 	p: {
		// 		name: '1',
		// 		parent: 35,
		// 		location: {
		// 			x: 446.4999999999999,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 42,
		// 	p: {
		// 		name: '3',
		// 		parent: 35,
		// 		location: {
		// 			x: 406.4999999999999,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 43,
		// 	p: {
		// 		name: '5',
		// 		parent: 35,
		// 		location: {
		// 			x: 366.4999999999999,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 44,
		// 	p: {
		// 		name: '7',
		// 		parent: 35,
		// 		location: {
		// 			x: 326.4999999999999,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 45,
		// 	p: {
		// 		name: '9',
		// 		parent: 35,
		// 		location: {
		// 			x: 286.4999999999999,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 46,
		// 	p: {
		// 		name: '11',
		// 		parent: 35,
		// 		location: {
		// 			x: 246.4999999999999,
		// 			y: 188.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 47,
		// 	p: {
		// 		name: 'Y1排',
		// 		parent: 1,
		// 		location: {
		// 			x: 440.4999999999999,
		// 			y: 66.89999999999998
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -170,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 48,
		// 	p: {
		// 		name: '7',
		// 		parent: 47,
		// 		location: {
		// 			x: 306.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 49,
		// 	p: {
		// 		name: '8',
		// 		parent: 47,
		// 		location: {
		// 			x: 586.4999999999998,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 50,
		// 	p: {
		// 		name: '6',
		// 		parent: 47,
		// 		location: {
		// 			x: 546.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 51,
		// 	p: {
		// 		name: '4',
		// 		parent: 47,
		// 		location: {
		// 			x: 506.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 52,
		// 	p: {
		// 		name: '2',
		// 		parent: 47,
		// 		location: {
		// 			x: 466.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 53,
		// 	p: {
		// 		name: '1',
		// 		parent: 47,
		// 		location: {
		// 			x: 426.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 54,
		// 	p: {
		// 		name: '3',
		// 		parent: 47,
		// 		location: {
		// 			x: 386.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 55,
		// 	p: {
		// 		name: '5',
		// 		parent: 47,
		// 		location: {
		// 			x: 346.4999999999999,
		// 			y: 68.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 56,
		// 	p: {
		// 		name: 'Y2排',
		// 		parent: 1,
		// 		location: {
		// 			x: 440.4999999999999,
		// 			y: 106.89999999999998
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -190,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 57,
		// 	p: {
		// 		name: '9',
		// 		parent: 56,
		// 		location: {
		// 			x: 286.4999999999999,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 58,
		// 	p: {
		// 		name: '8',
		// 		parent: 56,
		// 		location: {
		// 			x: 606.4999999999997,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 59,
		// 	p: {
		// 		name: '6',
		// 		parent: 56,
		// 		location: {
		// 			x: 566.4999999999997,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 60,
		// 	p: {
		// 		name: '4',
		// 		parent: 56,
		// 		location: {
		// 			x: 526.4999999999998,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 61,
		// 	p: {
		// 		name: '2',
		// 		parent: 56,
		// 		location: {
		// 			x: 486.4999999999999,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 62,
		// 	p: {
		// 		name: '1',
		// 		parent: 56,
		// 		location: {
		// 			x: 446.4999999999999,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 63,
		// 	p: {
		// 		name: '3',
		// 		parent: 56,
		// 		location: {
		// 			x: 406.4999999999999,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 64,
		// 	p: {
		// 		name: '5',
		// 		parent: 56,
		// 		location: {
		// 			x: 366.4999999999999,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 65,
		// 	p: {
		// 		name: '7',
		// 		parent: 56,
		// 		location: {
		// 			x: 326.4999999999999,
		// 			y: 108.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 66,
		// 	p: {
		// 		name: 'Y3排',
		// 		parent: 1,
		// 		location: {
		// 			x: 440.4999999999999,
		// 			y: 146.89999999999998
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -190,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 67,
		// 	p: {
		// 		name: '8',
		// 		parent: 66,
		// 		location: {
		// 			x: 606.4999999999997,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 68,
		// 	p: {
		// 		name: '6',
		// 		parent: 66,
		// 		location: {
		// 			x: 566.4999999999997,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 69,
		// 	p: {
		// 		name: '4',
		// 		parent: 66,
		// 		location: {
		// 			x: 526.4999999999997,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 70,
		// 	p: {
		// 		name: '2',
		// 		parent: 66,
		// 		location: {
		// 			x: 486.4999999999997,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 71,
		// 	p: {
		// 		name: '1',
		// 		parent: 66,
		// 		location: {
		// 			x: 446.4999999999999,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 72,
		// 	p: {
		// 		name: '3',
		// 		parent: 66,
		// 		location: {
		// 			x: 406.4999999999999,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 73,
		// 	p: {
		// 		name: '5',
		// 		parent: 66,
		// 		location: {
		// 			x: 366.4999999999999,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 74,
		// 	p: {
		// 		name: '7',
		// 		parent: 66,
		// 		location: {
		// 			x: 326.4999999999999,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 75,
		// 	p: {
		// 		name: '9',
		// 		parent: 66,
		// 		location: {
		// 			x: 286.4999999999999,
		// 			y: 148.89999999999998
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 76,
		// 	p: {
		// 		name: 'Y4排',
		// 		parent: 1,
		// 		location: {
		// 			x: -25.178845214843506,
		// 			y: 189.1
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -170,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 77,
		// 	p: {
		// 		name: '13',
		// 		parent: 76,
		// 		location: {
		// 			x: 120.82115478515632,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 78,
		// 	p: {
		// 		name: '15',
		// 		parent: 76,
		// 		location: {
		// 			x: 80.82115478515638,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 79,
		// 	p: {
		// 		name: '17',
		// 		parent: 76,
		// 		location: {
		// 			x: 40.821154785156494,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 80,
		// 	p: {
		// 		name: '19',
		// 		parent: 76,
		// 		location: {
		// 			x: 0.8211547851565086,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 81,
		// 	p: {
		// 		name: '21',
		// 		parent: 76,
		// 		location: {
		// 			x: -39.178845214843506,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 82,
		// 	p: {
		// 		name: '23',
		// 		parent: 76,
		// 		location: {
		// 			x: -79.1788452148435,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 83,
		// 	p: {
		// 		name: '25',
		// 		parent: 76,
		// 		location: {
		// 			x: -119.1788452148435,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 84,
		// 	p: {
		// 		name: '27',
		// 		parent: 76,
		// 		location: {
		// 			x: -159.1788452148435,
		// 			y: 191.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y4',
		// 		'business.seat': 27
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 85,
		// 	p: {
		// 		name: 'Y3排',
		// 		parent: 1,
		// 		location: {
		// 			x: -25.178845214843506,
		// 			y: 149.1
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -170,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 86,
		// 	p: {
		// 		name: '11',
		// 		parent: 85,
		// 		location: {
		// 			x: 120.82115478515632,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 87,
		// 	p: {
		// 		name: '13',
		// 		parent: 85,
		// 		location: {
		// 			x: 80.82115478515638,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 88,
		// 	p: {
		// 		name: '15',
		// 		parent: 85,
		// 		location: {
		// 			x: 40.821154785156494,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 89,
		// 	p: {
		// 		name: '17',
		// 		parent: 85,
		// 		location: {
		// 			x: 0.8211547851565086,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 90,
		// 	p: {
		// 		name: '19',
		// 		parent: 85,
		// 		location: {
		// 			x: -39.178845214843506,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 91,
		// 	p: {
		// 		name: '21',
		// 		parent: 85,
		// 		location: {
		// 			x: -79.1788452148435,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 92,
		// 	p: {
		// 		name: '23',
		// 		parent: 85,
		// 		location: {
		// 			x: -119.1788452148435,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 93,
		// 	p: {
		// 		name: '25',
		// 		parent: 85,
		// 		location: {
		// 			x: -159.1788452148435,
		// 			y: 151.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y3',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 94,
		// 	p: {
		// 		name: 'Y2排',
		// 		parent: 1,
		// 		location: {
		// 			x: -5.178845214843619,
		// 			y: 109.1
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -150,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 95,
		// 	p: {
		// 		name: '11',
		// 		parent: 94,
		// 		location: {
		// 			x: 120.82115478515635,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 96,
		// 	p: {
		// 		name: '13',
		// 		parent: 94,
		// 		location: {
		// 			x: 80.82115478515647,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 97,
		// 	p: {
		// 		name: '15',
		// 		parent: 94,
		// 		location: {
		// 			x: 40.82115478515648,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 98,
		// 	p: {
		// 		name: '17',
		// 		parent: 94,
		// 		location: {
		// 			x: 0.8211547851564234,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 99,
		// 	p: {
		// 		name: '19',
		// 		parent: 94,
		// 		location: {
		// 			x: -39.17884521484362,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 100,
		// 	p: {
		// 		name: '21',
		// 		parent: 94,
		// 		location: {
		// 			x: -79.17884521484362,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 101,
		// 	p: {
		// 		name: '23',
		// 		parent: 94,
		// 		location: {
		// 			x: -119.17884521484362,
		// 			y: 111.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y2',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 102,
		// 	p: {
		// 		name: 'Y1排',
		// 		parent: 1,
		// 		location: {
		// 			x: 14.821154785156352,
		// 			y: 69.1
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -130,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 103,
		// 	p: {
		// 		name: '9',
		// 		parent: 102,
		// 		location: {
		// 			x: 120.82115478515641,
		// 			y: 71.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 104,
		// 	p: {
		// 		name: '11',
		// 		parent: 102,
		// 		location: {
		// 			x: 80.82115478515641,
		// 			y: 71.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 105,
		// 	p: {
		// 		name: '13',
		// 		parent: 102,
		// 		location: {
		// 			x: 40.82115478515638,
		// 			y: 71.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 106,
		// 	p: {
		// 		name: '15',
		// 		parent: 102,
		// 		location: {
		// 			x: 0.8211547851563523,
		// 			y: 71.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 107,
		// 	p: {
		// 		name: '17',
		// 		parent: 102,
		// 		location: {
		// 			x: -39.17884521484365,
		// 			y: 71.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 108,
		// 	p: {
		// 		name: '19',
		// 		parent: 102,
		// 		location: {
		// 			x: -79.17884521484365,
		// 			y: 71.1
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '乐池',
		// 		'business.row': 'Y1',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 109,
		// 	p: {
		// 		name: '1排',
		// 		location: {
		// 			x: 450.8732413364488,
		// 			y: 359.42996075924157
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -330,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.row': '1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 110,
		// 	p: {
		// 		name: '7',
		// 		parent: 109,
		// 		location: {
		// 			x: 316.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 111,
		// 	p: {
		// 		name: '5',
		// 		parent: 109,
		// 		location: {
		// 			x: 356.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 112,
		// 	p: {
		// 		name: '3',
		// 		parent: 109,
		// 		location: {
		// 			x: 396.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 113,
		// 	p: {
		// 		name: '1',
		// 		parent: 109,
		// 		location: {
		// 			x: 436.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 114,
		// 	p: {
		// 		name: '2',
		// 		parent: 109,
		// 		location: {
		// 			x: 476.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 115,
		// 	p: {
		// 		name: '4',
		// 		parent: 109,
		// 		location: {
		// 			x: 516.8732413364489,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 116,
		// 	p: {
		// 		name: '6',
		// 		parent: 109,
		// 		location: {
		// 			x: 556.8732413364492,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 117,
		// 	p: {
		// 		name: '8',
		// 		parent: 109,
		// 		location: {
		// 			x: 596.8732413364492,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 118,
		// 	p: {
		// 		name: '10',
		// 		parent: 109,
		// 		location: {
		// 			x: 636.8732413364494,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 119,
		// 	p: {
		// 		name: '12',
		// 		parent: 109,
		// 		location: {
		// 			x: 676.8732413364494,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 120,
		// 	p: {
		// 		name: '14',
		// 		parent: 109,
		// 		location: {
		// 			x: 716.8732413364494,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 121,
		// 	p: {
		// 		name: '16',
		// 		parent: 109,
		// 		location: {
		// 			x: 756.8732413364494,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 122,
		// 	p: {
		// 		name: '9',
		// 		parent: 109,
		// 		location: {
		// 			x: 276.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 123,
		// 	p: {
		// 		name: '15',
		// 		parent: 109,
		// 		location: {
		// 			x: 156.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 124,
		// 	p: {
		// 		name: '13',
		// 		parent: 109,
		// 		location: {
		// 			x: 196.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 125,
		// 	p: {
		// 		name: '11',
		// 		parent: 109,
		// 		location: {
		// 			x: 236.8732413364488,
		// 			y: 361.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 126,
		// 	p: {
		// 		name: '2排',
		// 		location: {
		// 			x: 450.8732413364488,
		// 			y: 399.42996075924157
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -510,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.row': '2'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 127,
		// 	p: {
		// 		name: '11',
		// 		parent: 126,
		// 		location: {
		// 			x: 296.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 128,
		// 	p: {
		// 		name: '9',
		// 		parent: 126,
		// 		location: {
		// 			x: 336.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 129,
		// 	p: {
		// 		name: '7',
		// 		parent: 126,
		// 		location: {
		// 			x: 376.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 130,
		// 	p: {
		// 		name: '5',
		// 		parent: 126,
		// 		location: {
		// 			x: 416.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 131,
		// 	p: {
		// 		name: '3',
		// 		parent: 126,
		// 		location: {
		// 			x: 456.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 132,
		// 	p: {
		// 		name: '1',
		// 		parent: 126,
		// 		location: {
		// 			x: 496.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 133,
		// 	p: {
		// 		name: '2',
		// 		parent: 126,
		// 		location: {
		// 			x: 536.8732413364492,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 134,
		// 	p: {
		// 		name: '4',
		// 		parent: 126,
		// 		location: {
		// 			x: 576.8732413364492,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 135,
		// 	p: {
		// 		name: '6',
		// 		parent: 126,
		// 		location: {
		// 			x: 616.8732413364492,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 136,
		// 	p: {
		// 		name: '8',
		// 		parent: 126,
		// 		location: {
		// 			x: 656.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 137,
		// 	p: {
		// 		name: '10',
		// 		parent: 126,
		// 		location: {
		// 			x: 696.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 138,
		// 	p: {
		// 		name: '12',
		// 		parent: 126,
		// 		location: {
		// 			x: 736.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 139,
		// 	p: {
		// 		name: '14',
		// 		parent: 126,
		// 		location: {
		// 			x: 776.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 140,
		// 	p: {
		// 		name: '16',
		// 		parent: 126,
		// 		location: {
		// 			x: 816.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 141,
		// 	p: {
		// 		name: '18',
		// 		parent: 126,
		// 		location: {
		// 			x: 856.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 142,
		// 	p: {
		// 		name: '20',
		// 		parent: 126,
		// 		location: {
		// 			x: 896.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 143,
		// 	p: {
		// 		name: '22',
		// 		parent: 126,
		// 		location: {
		// 			x: 936.8732413364494,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 144,
		// 	p: {
		// 		name: '27',
		// 		parent: 126,
		// 		location: {
		// 			x: -23.126758663551186,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 27
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 145,
		// 	p: {
		// 		name: '25',
		// 		parent: 126,
		// 		location: {
		// 			x: 16.873241336448814,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 146,
		// 	p: {
		// 		name: '23',
		// 		parent: 126,
		// 		location: {
		// 			x: 56.873241336448814,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 147,
		// 	p: {
		// 		name: '21',
		// 		parent: 126,
		// 		location: {
		// 			x: 96.87324133644881,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 148,
		// 	p: {
		// 		name: '19',
		// 		parent: 126,
		// 		location: {
		// 			x: 136.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 149,
		// 	p: {
		// 		name: '17',
		// 		parent: 126,
		// 		location: {
		// 			x: 176.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 150,
		// 	p: {
		// 		name: '15',
		// 		parent: 126,
		// 		location: {
		// 			x: 216.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 151,
		// 	p: {
		// 		name: '13',
		// 		parent: 126,
		// 		location: {
		// 			x: 256.8732413364488,
		// 			y: 401.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '2',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 152,
		// 	p: {
		// 		name: '3排',
		// 		location: {
		// 			x: 450.8732413364488,
		// 			y: 437.03604026554996
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -550,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.row': '3'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 153,
		// 	p: {
		// 		name: '9',
		// 		parent: 152,
		// 		location: {
		// 			x: 256.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 154,
		// 	p: {
		// 		name: '7',
		// 		parent: 152,
		// 		location: {
		// 			x: 296.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 155,
		// 	p: {
		// 		name: '5',
		// 		parent: 152,
		// 		location: {
		// 			x: 336.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 156,
		// 	p: {
		// 		name: '3',
		// 		parent: 152,
		// 		location: {
		// 			x: 376.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 157,
		// 	p: {
		// 		name: '1',
		// 		parent: 152,
		// 		location: {
		// 			x: 416.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 158,
		// 	p: {
		// 		name: '2',
		// 		parent: 152,
		// 		location: {
		// 			x: 456.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 159,
		// 	p: {
		// 		name: '4',
		// 		parent: 152,
		// 		location: {
		// 			x: 496.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 160,
		// 	p: {
		// 		name: '6',
		// 		parent: 152,
		// 		location: {
		// 			x: 536.8732413364492,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 161,
		// 	p: {
		// 		name: '8',
		// 		parent: 152,
		// 		location: {
		// 			x: 576.8732413364492,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 162,
		// 	p: {
		// 		name: '10',
		// 		parent: 152,
		// 		location: {
		// 			x: 616.8732413364492,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 163,
		// 	p: {
		// 		name: '12',
		// 		parent: 152,
		// 		location: {
		// 			x: 656.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 164,
		// 	p: {
		// 		name: '14',
		// 		parent: 152,
		// 		location: {
		// 			x: 696.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 165,
		// 	p: {
		// 		name: '16',
		// 		parent: 152,
		// 		location: {
		// 			x: 736.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 166,
		// 	p: {
		// 		name: '18',
		// 		parent: 152,
		// 		location: {
		// 			x: 776.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 167,
		// 	p: {
		// 		name: '20',
		// 		parent: 152,
		// 		location: {
		// 			x: 816.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 168,
		// 	p: {
		// 		name: '22',
		// 		parent: 152,
		// 		location: {
		// 			x: 856.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 169,
		// 	p: {
		// 		name: '24',
		// 		parent: 152,
		// 		location: {
		// 			x: 896.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 24
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 170,
		// 	p: {
		// 		name: '26',
		// 		parent: 152,
		// 		location: {
		// 			x: 936.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 26
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 171,
		// 	p: {
		// 		name: '28',
		// 		parent: 152,
		// 		location: {
		// 			x: 976.8732413364494,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 28
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 172,
		// 	p: {
		// 		name: '25',
		// 		parent: 152,
		// 		location: {
		// 			x: -63.126758663551186,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 173,
		// 	p: {
		// 		name: '23',
		// 		parent: 152,
		// 		location: {
		// 			x: -23.126758663551186,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 174,
		// 	p: {
		// 		name: '21',
		// 		parent: 152,
		// 		location: {
		// 			x: 16.873241336448814,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 175,
		// 	p: {
		// 		name: '19',
		// 		parent: 152,
		// 		location: {
		// 			x: 56.873241336448814,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 176,
		// 	p: {
		// 		name: '17',
		// 		parent: 152,
		// 		location: {
		// 			x: 96.87324133644881,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 177,
		// 	p: {
		// 		name: '15',
		// 		parent: 152,
		// 		location: {
		// 			x: 136.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 178,
		// 	p: {
		// 		name: '13',
		// 		parent: 152,
		// 		location: {
		// 			x: 176.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 179,
		// 	p: {
		// 		name: '11',
		// 		parent: 152,
		// 		location: {
		// 			x: 216.8732413364488,
		// 			y: 439.03604026554996
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '3',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 180,
		// 	p: {
		// 		name: '4排',
		// 		location: {
		// 			x: 450.8732413364488,
		// 			y: 479.42996075924157
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -570,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.row': '4'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 181,
		// 	p: {
		// 		name: '11',
		// 		parent: 180,
		// 		location: {
		// 			x: 236.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 182,
		// 	p: {
		// 		name: '9',
		// 		parent: 180,
		// 		location: {
		// 			x: 276.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 183,
		// 	p: {
		// 		name: '7',
		// 		parent: 180,
		// 		location: {
		// 			x: 316.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 184,
		// 	p: {
		// 		name: '5',
		// 		parent: 180,
		// 		location: {
		// 			x: 356.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 185,
		// 	p: {
		// 		name: '3',
		// 		parent: 180,
		// 		location: {
		// 			x: 396.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 186,
		// 	p: {
		// 		name: '1',
		// 		parent: 180,
		// 		location: {
		// 			x: 436.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 187,
		// 	p: {
		// 		name: '2',
		// 		parent: 180,
		// 		location: {
		// 			x: 476.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 188,
		// 	p: {
		// 		name: '4',
		// 		parent: 180,
		// 		location: {
		// 			x: 516.8732413364489,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 189,
		// 	p: {
		// 		name: '6',
		// 		parent: 180,
		// 		location: {
		// 			x: 556.8732413364492,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 190,
		// 	p: {
		// 		name: '8',
		// 		parent: 180,
		// 		location: {
		// 			x: 596.8732413364492,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 191,
		// 	p: {
		// 		name: '10',
		// 		parent: 180,
		// 		location: {
		// 			x: 636.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 192,
		// 	p: {
		// 		name: '12',
		// 		parent: 180,
		// 		location: {
		// 			x: 676.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 193,
		// 	p: {
		// 		name: '14',
		// 		parent: 180,
		// 		location: {
		// 			x: 716.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 194,
		// 	p: {
		// 		name: '16',
		// 		parent: 180,
		// 		location: {
		// 			x: 756.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 195,
		// 	p: {
		// 		name: '18',
		// 		parent: 180,
		// 		location: {
		// 			x: 796.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 196,
		// 	p: {
		// 		name: '20',
		// 		parent: 180,
		// 		location: {
		// 			x: 836.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 197,
		// 	p: {
		// 		name: '22',
		// 		parent: 180,
		// 		location: {
		// 			x: 876.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 198,
		// 	p: {
		// 		name: '24',
		// 		parent: 180,
		// 		location: {
		// 			x: 916.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 24
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 199,
		// 	p: {
		// 		name: '26',
		// 		parent: 180,
		// 		location: {
		// 			x: 956.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 26
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 200,
		// 	p: {
		// 		name: '28',
		// 		parent: 180,
		// 		location: {
		// 			x: 996.8732413364494,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 28
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 201,
		// 	p: {
		// 		name: '27',
		// 		parent: 180,
		// 		location: {
		// 			x: -83.12675866355119,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 27
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 202,
		// 	p: {
		// 		name: '25',
		// 		parent: 180,
		// 		location: {
		// 			x: -43.126758663551186,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 203,
		// 	p: {
		// 		name: '23',
		// 		parent: 180,
		// 		location: {
		// 			x: -3.126758663551186,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 204,
		// 	p: {
		// 		name: '21',
		// 		parent: 180,
		// 		location: {
		// 			x: 36.873241336448814,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 205,
		// 	p: {
		// 		name: '19',
		// 		parent: 180,
		// 		location: {
		// 			x: 76.87324133644881,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 206,
		// 	p: {
		// 		name: '17',
		// 		parent: 180,
		// 		location: {
		// 			x: 116.87324133644881,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 207,
		// 	p: {
		// 		name: '15',
		// 		parent: 180,
		// 		location: {
		// 			x: 156.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 208,
		// 	p: {
		// 		name: '13',
		// 		parent: 180,
		// 		location: {
		// 			x: 196.8732413364488,
		// 			y: 481.42996075924157
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '4',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 209,
		// 	p: {
		// 		name: '5排',
		// 		location: {
		// 			x: 450.8732413364488,
		// 			y: 519.4299607592416
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -570,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.row': '5'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 210,
		// 	p: {
		// 		name: '13',
		// 		parent: 209,
		// 		location: {
		// 			x: 236.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 211,
		// 	p: {
		// 		name: '11',
		// 		parent: 209,
		// 		location: {
		// 			x: 276.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 212,
		// 	p: {
		// 		name: '9',
		// 		parent: 209,
		// 		location: {
		// 			x: 316.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 213,
		// 	p: {
		// 		name: '7',
		// 		parent: 209,
		// 		location: {
		// 			x: 356.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 214,
		// 	p: {
		// 		name: '5',
		// 		parent: 209,
		// 		location: {
		// 			x: 396.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 215,
		// 	p: {
		// 		name: '3',
		// 		parent: 209,
		// 		location: {
		// 			x: 436.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 216,
		// 	p: {
		// 		name: '1',
		// 		parent: 209,
		// 		location: {
		// 			x: 476.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 217,
		// 	p: {
		// 		name: '2',
		// 		parent: 209,
		// 		location: {
		// 			x: 516.8732413364489,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 218,
		// 	p: {
		// 		name: '4',
		// 		parent: 209,
		// 		location: {
		// 			x: 556.8732413364492,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 219,
		// 	p: {
		// 		name: '6',
		// 		parent: 209,
		// 		location: {
		// 			x: 596.8732413364492,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 220,
		// 	p: {
		// 		name: '8',
		// 		parent: 209,
		// 		location: {
		// 			x: 636.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 221,
		// 	p: {
		// 		name: '10',
		// 		parent: 209,
		// 		location: {
		// 			x: 676.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 222,
		// 	p: {
		// 		name: '12',
		// 		parent: 209,
		// 		location: {
		// 			x: 716.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 223,
		// 	p: {
		// 		name: '14',
		// 		parent: 209,
		// 		location: {
		// 			x: 756.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 224,
		// 	p: {
		// 		name: '16',
		// 		parent: 209,
		// 		location: {
		// 			x: 796.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 225,
		// 	p: {
		// 		name: '18',
		// 		parent: 209,
		// 		location: {
		// 			x: 836.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 226,
		// 	p: {
		// 		name: '20',
		// 		parent: 209,
		// 		location: {
		// 			x: 876.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 227,
		// 	p: {
		// 		name: '22',
		// 		parent: 209,
		// 		location: {
		// 			x: 916.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 228,
		// 	p: {
		// 		name: '24',
		// 		parent: 209,
		// 		location: {
		// 			x: 956.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 24
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 229,
		// 	p: {
		// 		name: '26',
		// 		parent: 209,
		// 		location: {
		// 			x: 996.8732413364494,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 26
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 230,
		// 	p: {
		// 		name: '29',
		// 		parent: 209,
		// 		location: {
		// 			x: -83.12675866355119,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 29
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 231,
		// 	p: {
		// 		name: '27',
		// 		parent: 209,
		// 		location: {
		// 			x: -43.126758663551186,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 27
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 232,
		// 	p: {
		// 		name: '25',
		// 		parent: 209,
		// 		location: {
		// 			x: -3.126758663551186,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 233,
		// 	p: {
		// 		name: '23',
		// 		parent: 209,
		// 		location: {
		// 			x: 36.873241336448814,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 234,
		// 	p: {
		// 		name: '21',
		// 		parent: 209,
		// 		location: {
		// 			x: 76.87324133644881,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 235,
		// 	p: {
		// 		name: '19',
		// 		parent: 209,
		// 		location: {
		// 			x: 116.87324133644881,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 236,
		// 	p: {
		// 		name: '17',
		// 		parent: 209,
		// 		location: {
		// 			x: 156.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 237,
		// 	p: {
		// 		name: '15',
		// 		parent: 209,
		// 		location: {
		// 			x: 196.8732413364488,
		// 			y: 521.4299607592416
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '5',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 238,
		// 	p: {
		// 		name: 'M1排',
		// 		location: {
		// 			x: 431.37791213867115,
		// 			y: 662.2327601058807
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -609.9999999999998,
		// 		'label.yoffset': -10.196117253310263,
		// 	},
		// 	c: {
		// 		'business.row': 'M1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 239,
		// 	p: {
		// 		name: '1',
		// 		parent: 238,
		// 		location: {
		// 			x: -142.62208786132862,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 240,
		// 	p: {
		// 		name: '2',
		// 		parent: 238,
		// 		location: {
		// 			x: -102.62208786132862,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 241,
		// 	p: {
		// 		name: '3',
		// 		parent: 238,
		// 		location: {
		// 			x: -62.62208786132862,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 242,
		// 	p: {
		// 		name: '4',
		// 		parent: 238,
		// 		location: {
		// 			x: -23.315521356272754,
		// 			y: 701.8835540037155
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 243,
		// 	p: {
		// 		name: '5',
		// 		parent: 238,
		// 		location: {
		// 			x: 17.377912138671377,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 244,
		// 	p: {
		// 		name: '6',
		// 		parent: 238,
		// 		location: {
		// 			x: 57.37791213867138,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 245,
		// 	p: {
		// 		name: '7',
		// 		parent: 238,
		// 		location: {
		// 			x: 98.07134563361551,
		// 			y: 605.4962982064812
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 246,
		// 	p: {
		// 		name: '8',
		// 		parent: 238,
		// 		location: {
		// 			x: 137.37791213867138,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 247,
		// 	p: {
		// 		name: '9',
		// 		parent: 238,
		// 		location: {
		// 			x: 177.37791213867138,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 248,
		// 	p: {
		// 		name: '10',
		// 		parent: 238,
		// 		location: {
		// 			x: 217.37791213867138,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 249,
		// 	p: {
		// 		name: '11',
		// 		parent: 238,
		// 		location: {
		// 			x: 259.45821262350375,
		// 			y: 710.8981894379892
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 250,
		// 	p: {
		// 		name: '12',
		// 		parent: 238,
		// 		location: {
		// 			x: 297.3779121386714,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 251,
		// 	p: {
		// 		name: '13',
		// 		parent: 238,
		// 		location: {
		// 			x: 337.3779121386714,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 252,
		// 	p: {
		// 		name: '14',
		// 		parent: 238,
		// 		location: {
		// 			x: 379.4582126235038,
		// 			y: 579.1458253986042
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 253,
		// 	p: {
		// 		name: '15',
		// 		parent: 238,
		// 		location: {
		// 			x: 417.3779121386714,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 254,
		// 	p: {
		// 		name: '16',
		// 		parent: 238,
		// 		location: {
		// 			x: 457.3779121386714,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 255,
		// 	p: {
		// 		name: '17',
		// 		parent: 238,
		// 		location: {
		// 			x: 497.3779121386709,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 256,
		// 	p: {
		// 		name: '18',
		// 		parent: 238,
		// 		location: {
		// 			x: 537.3779121386707,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 257,
		// 	p: {
		// 		name: '19',
		// 		parent: 238,
		// 		location: {
		// 			x: 577.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 258,
		// 	p: {
		// 		name: '20',
		// 		parent: 238,
		// 		location: {
		// 			x: 617.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 259,
		// 	p: {
		// 		name: '21',
		// 		parent: 238,
		// 		location: {
		// 			x: 657.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 260,
		// 	p: {
		// 		name: '22',
		// 		parent: 238,
		// 		location: {
		// 			x: 699.4364965946093,
		// 			y: 749.3196948131573
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 261,
		// 	p: {
		// 		name: '23',
		// 		parent: 238,
		// 		location: {
		// 			x: 737.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 262,
		// 	p: {
		// 		name: '24',
		// 		parent: 238,
		// 		location: {
		// 			x: 777.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 24
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 263,
		// 	p: {
		// 		name: '25',
		// 		parent: 238,
		// 		location: {
		// 			x: 817.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 264,
		// 	p: {
		// 		name: '26',
		// 		parent: 238,
		// 		location: {
		// 			x: 857.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 26
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 265,
		// 	p: {
		// 		name: '27',
		// 		parent: 238,
		// 		location: {
		// 			x: 897.3779121386706,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 27
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 266,
		// 	p: {
		// 		name: '28',
		// 		parent: 238,
		// 		location: {
		// 			x: 937.3779121386704,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 28
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 267,
		// 	p: {
		// 		name: '29',
		// 		parent: 238,
		// 		location: {
		// 			x: 977.3779121386708,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 29
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 268,
		// 	p: {
		// 		name: '30',
		// 		parent: 238,
		// 		location: {
		// 			x: 1017.3779121386708,
		// 			y: 654.0366428525705
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M1',
		// 		'business.seat': 30
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 269,
		// 	p: {
		// 		name: 'M2排',
		// 		location: {
		// 			x: 847.4689978553639,
		// 			y: 869.5611546527365
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -210,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.row': 'M2'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 270,
		// 	p: {
		// 		name: '1',
		// 		parent: 269,
		// 		location: {
		// 			x: 673.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 271,
		// 	p: {
		// 		name: '2',
		// 		parent: 269,
		// 		location: {
		// 			x: 713.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 272,
		// 	p: {
		// 		name: '3',
		// 		parent: 269,
		// 		location: {
		// 			x: 753.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 273,
		// 	p: {
		// 		name: '4',
		// 		parent: 269,
		// 		location: {
		// 			x: 793.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 274,
		// 	p: {
		// 		name: '5',
		// 		parent: 269,
		// 		location: {
		// 			x: 833.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 275,
		// 	p: {
		// 		name: '6',
		// 		parent: 269,
		// 		location: {
		// 			x: 873.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 276,
		// 	p: {
		// 		name: '7',
		// 		parent: 269,
		// 		location: {
		// 			x: 913.4689978553639,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 277,
		// 	p: {
		// 		name: '8',
		// 		parent: 269,
		// 		location: {
		// 			x: 953.4689978553636,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 278,
		// 	p: {
		// 		name: '9',
		// 		parent: 269,
		// 		location: {
		// 			x: 993.4689978553631,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 279,
		// 	p: {
		// 		name: '10',
		// 		parent: 269,
		// 		location: {
		// 			x: 1033.4689978553633,
		// 			y: 871.5611546527365
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': 'M2',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 280,
		// 	p: {
		// 		name: '1排',
		// 		angle: 90,
		// 		location: {
		// 			x: -320.068399803979,
		// 			y: 264.3988113864958
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -30.00000260177808,
		// 		'label.yoffset': 80.00000304872225,
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		angle: '90'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 281,
		// 	p: {
		// 		name: '17',
		// 		angle: 90,
		// 		parent: 280,
		// 		location: {
		// 			x: -314.06840240575707,
		// 			y: 346.39881443521807
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 282,
		// 	p: {
		// 		name: '19',
		// 		angle: 90,
		// 		parent: 280,
		// 		location: {
		// 			x: -314.06840240575707,
		// 			y: 306.39881443521807
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 283,
		// 	p: {
		// 		name: '21',
		// 		angle: 90,
		// 		parent: 280,
		// 		location: {
		// 			x: -314.06840240575707,
		// 			y: 266.39881443521807
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 284,
		// 	p: {
		// 		name: '23',
		// 		angle: 90,
		// 		parent: 280,
		// 		location: {
		// 			x: -314.06840240575707,
		// 			y: 226.39881443521807
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 285,
		// 	p: {
		// 		name: '25',
		// 		parent: 280,
		// 		location: {
		// 			x: -314.068397202201,
		// 			y: 186.39880833777357
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 286,
		// 	p: {
		// 		name: '1排',
		// 		angle: 90,
		// 		location: {
		// 			x: 1236.4755792300064,
		// 			y: 264.6737652976791
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -30.000000636305458,
		// 		'label.yoffset': -80.00000057792695,
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		angle: '90'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 287,
		// 	p: {
		// 		name: '26',
		// 		angle: 90,
		// 		parent: 286,
		// 		location: {
		// 			x: 1242.475579866312,
		// 			y: 346.673765875606
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 26
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 288,
		// 	p: {
		// 		name: '24',
		// 		angle: 90,
		// 		parent: 286,
		// 		location: {
		// 			x: 1242.475579866312,
		// 			y: 306.673765875606
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 24
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 289,
		// 	p: {
		// 		name: '22',
		// 		angle: 90,
		// 		parent: 286,
		// 		location: {
		// 			x: 1242.475579866312,
		// 			y: 266.673765875606
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 290,
		// 	p: {
		// 		name: '20',
		// 		angle: 90,
		// 		parent: 286,
		// 		location: {
		// 			x: 1242.475579866312,
		// 			y: 226.67376587560602
		// 		},
		// 		width: 20,
		// 		height: 20,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 291,
		// 	p: {
		// 		name: '18',
		// 		parent: 286,
		// 		location: {
		// 			x: 1242.475578593701,
		// 			y: 186.67376471975214
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.row': '1',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.ShapeRegionNode',
		// 	ref: 292,
		// 	p: {
		// 		name: '一楼',
		// 		location: {
		// 			x: -354.2037247284348,
		// 			y: 149.04186079930753
		// 		},
		// 		width: 1711.6531529895185,
		// 		height: 414.14824540865266,
		// 		points: [{
		// 				x: -258.4469049807694,
		// 				y: 165.17750672431995
		// 			},
		// 			{
		// 				x: -354.2037247284348,
		// 				y: 170.55605536599086
		// 			},
		// 			{
		// 				x: -351.8098042347431,
		// 				y: 563.1901062079602
		// 			},
		// 			{
		// 				x: 1352.6615872737004,
		// 				y: 552.4330089246184
		// 			},
		// 			{
		// 				x: 1357.4494282610838,
		// 				y: 149.04186079930753
		// 			},
		// 			{
		// 				x: 1204.2385166648191,
		// 				y: 149.04186079930753
		// 			},
		// 			{
		// 				x: 1194.6628346900527,
		// 				y: 305.019771407761
		// 			},
		// 			{
		// 				x: -253.65906399338613,
		// 				y: 307.70904572859655
		// 			},
		// 			{
		// 				x: -258.4469049807694,
		// 				y: 165.17750672431995
		// 			},
		// 		],
		// 	},
		// 	s: {
		// 		'shapenode.closed': true,
		// 		'vector.fill.color': 'rgba(186, 202, 198,0.5)',
		// 		'vector.outline.width': 2,
		// 		'vector.outline.color': '#000000',
		// 		'label.position': 'center',
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.padding': 0,
		// 		'label.yoffset': -10.29999999999999,
		// 	},
		// },
		// {
		// 	class: 'b2.RegionNode',
		// 	ref: 293,
		// 	p: {
		// 		name: '圆区',
		// 		location: {
		// 			x: -437.20521044021575,
		// 			y: 772.3656080504397
		// 		},
		// 		width: 1103.0072372295435,
		// 		height: 571.541956103033,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': 'rgba(186, 202, 198,0.5)',
		// 		'vector.outline.width': 2,
		// 		'vector.outline.color': '#000000',
		// 		'label.position': 'center',
		// 		'label.font': '20px arial',
		// 		'label.xoffset': 0,
		// 		'label.yoffset': 0,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.padding': 0,
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 294,
		// 	p: {
		// 		name: '特种1排',
		// 		parent: 293,
		// 		location: {
		// 			x: 86.95845710015772,
		// 			y: 1140.4699451352951
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -109.99999999999955,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 295,
		// 	p: {
		// 		name: '36',
		// 		parent: 294,
		// 		location: {
		// 			x: 172.95845710015732,
		// 			y: 1142.4699451352951
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 36
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 296,
		// 	p: {
		// 		name: '34',
		// 		parent: 294,
		// 		location: {
		// 			x: 132.95845710015715,
		// 			y: 1142.4699451352951
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 34
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 297,
		// 	p: {
		// 		name: '32',
		// 		parent: 294,
		// 		location: {
		// 			x: 92.95845710015703,
		// 			y: 1142.4699451352951
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 32
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 298,
		// 	p: {
		// 		name: '30',
		// 		parent: 294,
		// 		location: {
		// 			x: 52.95845710015726,
		// 			y: 1142.4699451352951
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 30
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 299,
		// 	p: {
		// 		name: '28',
		// 		parent: 294,
		// 		location: {
		// 			x: 12.95845710015817,
		// 			y: 1142.4699451352951
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 28
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 300,
		// 	p: {
		// 		name: '特种1排',
		// 		parent: 293,
		// 		location: {
		// 			x: 131.94545368269013,
		// 			y: 1083.9853664861205
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -250,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 301,
		// 	p: {
		// 		name: '4',
		// 		parent: 300,
		// 		location: {
		// 			x: -82.05454631730987,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 4
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 302,
		// 	p: {
		// 		name: '6',
		// 		parent: 300,
		// 		location: {
		// 			x: -42.05454631730987,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 6
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 303,
		// 	p: {
		// 		name: '8',
		// 		parent: 300,
		// 		location: {
		// 			x: -2.054546317309871,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 8
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 304,
		// 	p: {
		// 		name: '10',
		// 		parent: 300,
		// 		location: {
		// 			x: 37.945453682690015,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 10
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 305,
		// 	p: {
		// 		name: '12',
		// 		parent: 300,
		// 		location: {
		// 			x: 77.94545368269002,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 12
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 306,
		// 	p: {
		// 		name: '14',
		// 		parent: 300,
		// 		location: {
		// 			x: 117.94545368269013,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 14
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 307,
		// 	p: {
		// 		name: '16',
		// 		parent: 300,
		// 		location: {
		// 			x: 157.9454536826904,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 16
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 308,
		// 	p: {
		// 		name: '18',
		// 		parent: 300,
		// 		location: {
		// 			x: 197.94545368269087,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 18
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 309,
		// 	p: {
		// 		name: '20',
		// 		parent: 300,
		// 		location: {
		// 			x: 237.94545368269087,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 20
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 310,
		// 	p: {
		// 		name: '22',
		// 		parent: 300,
		// 		location: {
		// 			x: 277.9454536826908,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 22
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 311,
		// 	p: {
		// 		name: '24',
		// 		parent: 300,
		// 		location: {
		// 			x: 317.9454536826909,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 24
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 312,
		// 	p: {
		// 		name: '26',
		// 		parent: 300,
		// 		location: {
		// 			x: 357.9454536826908,
		// 			y: 1085.9853664861205
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 26
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 313,
		// 	p: {
		// 		name: '特种1排',
		// 		parent: 293,
		// 		location: {
		// 			x: 137.20000939825934,
		// 			y: 981.4212631494611
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -230,
		// 		'label.yoffset': 1.1368683772161603e-13,
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 314,
		// 	p: {
		// 		name: '2',
		// 		parent: 313,
		// 		location: {
		// 			x: 343.20000939825985,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 2
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 315,
		// 	p: {
		// 		name: '1',
		// 		parent: 313,
		// 		location: {
		// 			x: 303.20000939825997,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 1
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 316,
		// 	p: {
		// 		name: '3',
		// 		parent: 313,
		// 		location: {
		// 			x: 263.2000093982596,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 3
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 317,
		// 	p: {
		// 		name: '5',
		// 		parent: 313,
		// 		location: {
		// 			x: 223.20000939825962,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 5
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 318,
		// 	p: {
		// 		name: '7',
		// 		parent: 313,
		// 		location: {
		// 			x: 183.20000939825962,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 7
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 319,
		// 	p: {
		// 		name: '9',
		// 		parent: 313,
		// 		location: {
		// 			x: 143.2000093982594,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 9
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 320,
		// 	p: {
		// 		name: '11',
		// 		parent: 313,
		// 		location: {
		// 			x: 103.20000939825934,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 11
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 321,
		// 	p: {
		// 		name: '13',
		// 		parent: 313,
		// 		location: {
		// 			x: 63.20000939825934,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 13
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 322,
		// 	p: {
		// 		name: '15',
		// 		parent: 313,
		// 		location: {
		// 			x: 23.20000939825934,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 15
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 323,
		// 	p: {
		// 		name: '17',
		// 		parent: 313,
		// 		location: {
		// 			x: -16.79999060174066,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 17
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 324,
		// 	p: {
		// 		name: '19',
		// 		parent: 313,
		// 		location: {
		// 			x: -56.79999060174066,
		// 			y: 983.4212631494612
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 19
		// 	},
		// },
		// {
		// 	class: 'b2.RowNode',
		// 	ref: 325,
		// 	p: {
		// 		name: '特种1排',
		// 		parent: 293,
		// 		location: {
		// 			x: 98.27024593040926,
		// 			y: 918.9909393793209
		// 		}
		// 	},
		// 	s: {
		// 		'group.fill': false,
		// 		'group.fill.color': '#FFFFFF',
		// 		'group.shape': 'roundrect',
		// 		'group.outline.width': 0,
		// 		'group.outline.color': '#000000',
		// 		'group.padding': 2,
		// 		'vector.outline.pattern': [2, 2],
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'label.position': 'center',
		// 		'label.xoffset': -150,
		// 		'label.yoffset': 0,
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1'
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 326,
		// 	p: {
		// 		name: '33',
		// 		parent: 325,
		// 		location: {
		// 			x: -15.72975406959074,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 33
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 327,
		// 	p: {
		// 		name: '31',
		// 		parent: 325,
		// 		location: {
		// 			x: 24.27024593040926,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 31
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 328,
		// 	p: {
		// 		name: '29',
		// 		parent: 325,
		// 		location: {
		// 			x: 64.27024593040926,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 29
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 329,
		// 	p: {
		// 		name: '27',
		// 		parent: 325,
		// 		location: {
		// 			x: 104.27024593040926,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 27
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 330,
		// 	p: {
		// 		name: '25',
		// 		parent: 325,
		// 		location: {
		// 			x: 144.27024593040926,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 25
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 331,
		// 	p: {
		// 		name: '23',
		// 		parent: 325,
		// 		location: {
		// 			x: 184.27024593040954,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 23
		// 	},
		// },
		// {
		// 	class: 'b2.SeatNode',
		// 	ref: 332,
		// 	p: {
		// 		name: '21',
		// 		parent: 325,
		// 		location: {
		// 			x: 224.27024593040954,
		// 			y: 920.9909393793209
		// 		},
		// 		width: 20,
		// 		height: 20
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'circle',
		// 		'vector.fill.color': '#cdcdcd',
		// 		'vector.outline.width': 1,
		// 		'vector.outline.color': '#000000',
		// 		'vector.outline.pattern': [10, 0],
		// 		'label.position': 'center',
		// 		'label.font': '10px arial',
		// 		'label2.position': 'left.left',
		// 		'label2.yoffset': 0,
		// 		'shadow.blur': 4,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.style': 'shadow',
		// 		'select.padding': 0,
		// 		'select.color': '#ff0000',
		// 	},
		// 	c: {
		// 		'business.region': '圆区',
		// 		'business.row': '特种1',
		// 		'business.seat': 21
		// 	},
		// },
		// {
		// 	class: 'b2.StageNode',
		// 	ref: 333,
		// 	p: {
		// 		name: 'Stage',
		// 		location: {
		// 			x: 697.115445269436,
		// 			y: 936.5073180180348
		// 		},
		// 		width: 273.5785958719507,
		// 		height: 226.58863009268237,
		// 	},
		// 	s: {
		// 		'body.type': 'vector',
		// 		'vector.shape': 'rectangle',
		// 		'vector.fill.color': 'rgba(255,68,68,0.4)',
		// 		'vector.outline.width': 2,
		// 		'vector.outline.color': '#000000',
		// 		'label.position': 'center',
		// 		'label.font': '20px arial',
		// 		'label.xoffset': 0,
		// 		'label.yoffset': 0,
		// 		'shadow.xoffset': 0,
		// 		'shadow.yoffset': 0,
		// 		'select.padding': 0,
		// 	},
		// },
		{
			class: 'b2.RowNode',
			ref: 334,
			p: {
				name: 'M2排',
				angle: 90,
				location: {
					x: 1030.4720311537267,
					y: 1037.439558866745
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -30.000013617311197,
				'label.yoffset': 119.99999434017536,
			},
			c: {
				'business.row': 'M2',
				angle: '90'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 335,
			p: {
				name: '17',
				angle: 90,
				parent: 334,
				location: {
					x: 1036.4720175364155,
					y: 1159.4395532069204
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 17
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 336,
			p: {
				name: '16',
				angle: 90,
				parent: 334,
				location: {
					x: 1036.4720175364155,
					y: 1119.4395532069204
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 16
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 337,
			p: {
				name: '15',
				angle: 90,
				parent: 334,
				location: {
					x: 1036.4720175364155,
					y: 1079.4395532069204
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 15
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 338,
			p: {
				name: '14',
				angle: 90,
				parent: 334,
				location: {
					x: 1036.4720175364155,
					y: 1039.4395532069204
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 14
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 339,
			p: {
				name: '13',
				angle: 90,
				parent: 334,
				location: {
					x: 1036.4720175364155,
					y: 999.4395532069204
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 13
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 340,
			p: {
				name: '12',
				angle: 90,
				parent: 334,
				location: {
					x: 1036.4720175364155,
					y: 959.4395532069204
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 12
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 341,
			p: {
				name: '11',
				parent: 334,
				location: {
					x: 1036.4720447710386,
					y: 919.4395645265699
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 11
			},
		},
		{
			class: 'b2.RowNode',
			ref: 342,
			p: {
				name: 'M2排',
				angle: -90,
				location: {
					x: 828.9036749472589,
					y: 1185.8165375195704
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -189.9999694824212,
				'label.yoffset': 0.000026271449542036862,
			},
			c: {
				'business.row': 'M2',
				angle: '-90'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 343,
			p: {
				name: '25',
				angle: 90,
				parent: 342,
				location: {
					x: 794.9036768093503,
					y: 1187.8165112481213
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 25
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 344,
			p: {
				name: '22',
				angle: -90,
				parent: 342,
				location: {
					x: 674.9037054648377,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 22
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 345,
			p: {
				name: '23',
				angle: -90,
				parent: 342,
				location: {
					x: 714.9037054648377,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 23
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 346,
			p: {
				name: '24',
				angle: -90,
				parent: 342,
				location: {
					x: 754.9037054648377,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 24
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 347,
			p: {
				name: '26',
				angle: -90,
				parent: 342,
				location: {
					x: 834.9037054648377,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 26
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 348,
			p: {
				name: '27',
				angle: -90,
				parent: 342,
				location: {
					x: 874.903644429681,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 27
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 349,
			p: {
				name: '28',
				angle: -90,
				parent: 342,
				location: {
					x: 914.9036444296804,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 28
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 350,
			p: {
				name: '29',
				angle: -90,
				parent: 342,
				location: {
					x: 954.9036444296801,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 29
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 351,
			p: {
				name: '30',
				angle: -90,
				parent: 342,
				location: {
					x: 994.9036444296796,
					y: 1187.81656379102
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 30
			},
		},
		{
			class: 'b2.RowNode',
			ref: 352,
			p: {
				name: 'M2排',
				angle: 90,
				location: {
					x: 630.7760281745183,
					y: 1017.3059699452822
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -30.00000666719734,
				'label.yoffset': -59.99999873391812,
			},
			c: {
				'business.row': 'M2',
				angle: '90'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 353,
			p: {
				name: '21',
				angle: 90,
				parent: 352,
				location: {
					x: 636.7760348417156,
					y: 1079.3059686792017
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 21
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 354,
			p: {
				name: '20',
				angle: 90,
				parent: 352,
				location: {
					x: 636.7760348417156,
					y: 1039.3059686792012
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 20
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 355,
			p: {
				name: '19',
				angle: 90,
				parent: 352,
				location: {
					x: 636.7760348417156,
					y: 999.3059686792005
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 19
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 356,
			p: {
				name: '18',
				angle: -90,
				parent: 352,
				location: {
					x: 636.7760215073209,
					y: 959.3059712113641
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'M2',
				'business.seat': 18
			},
		},
		{
			class: 'b2.RowNode',
			ref: 357,
			p: {
				name: 'X1排',
				angle: 15,
				location: {
					x: 545.346987230123,
					y: 1328.907805995881
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -127.71630736538629,
				'label.yoffset': -27.005599246826023,
			},
			c: {
				'business.row': 'X1',
				angle: '15'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 358,
			p: {
				name: '5',
				parent: 357,
				location: {
					x: 453.63067986473675,
					y: 1303.902206749055
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X1',
				'business.seat': 5
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 359,
			p: {
				name: '3',
				angle: 15,
				parent: 357,
				location: {
					x: 492.2677196608903,
					y: 1314.2549457866037
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X1',
				'business.seat': 3
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 360,
			p: {
				name: '1',
				angle: 15,
				parent: 357,
				location: {
					x: 530.9047435866715,
					y: 1324.6077289897287
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X1',
				'business.seat': 1
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 361,
			p: {
				name: '2',
				angle: 15,
				parent: 357,
				location: {
					x: 569.5417789565447,
					y: 1334.9603901225412
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X1',
				'business.seat': 2
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 362,
			p: {
				name: '4',
				angle: 15,
				parent: 357,
				location: {
					x: 608.1788124190689,
					y: 1345.3131733256662
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X1',
				'business.seat': 4
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 363,
			p: {
				name: '6',
				angle: 15,
				parent: 357,
				location: {
					x: 646.8158458815933,
					y: 1355.6659565287912
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X1',
				'business.seat': 6
			},
		},
		{
			class: 'b2.RowNode',
			ref: 364,
			p: {
				name: 'X2排',
				angle: 15,
				location: {
					x: 545.346987230123,
					y: 1368.907805995881
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -127.71630736538631,
				'label.yoffset': -27.005599246826023,
			},
			c: {
				'business.row': 'X2',
				angle: '15'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 365,
			p: {
				name: '5',
				parent: 364,
				location: {
					x: 453.63067986473675,
					y: 1343.902206749055
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X2',
				'business.seat': 5
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 366,
			p: {
				name: '3',
				angle: 15,
				parent: 364,
				location: {
					x: 492.2677196608903,
					y: 1354.2549457866037
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X2',
				'business.seat': 3
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 367,
			p: {
				name: '1',
				angle: 15,
				parent: 364,
				location: {
					x: 530.9047435866714,
					y: 1364.6077289897287
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X2',
				'business.seat': 1
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 368,
			p: {
				name: '2',
				angle: 15,
				parent: 364,
				location: {
					x: 569.5417789565445,
					y: 1374.9603901225412
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X2',
				'business.seat': 2
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 369,
			p: {
				name: '4',
				angle: 15,
				parent: 364,
				location: {
					x: 608.1788124190689,
					y: 1385.3131733256662
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X2',
				'business.seat': 4
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 370,
			p: {
				name: '6',
				angle: 15,
				parent: 364,
				location: {
					x: 646.8158458815933,
					y: 1395.6659565287912
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X2',
				'business.seat': 6
			},
		},
		{
			class: 'b2.RowNode',
			ref: 371,
			p: {
				name: 'X3排',
				angle: 15,
				location: {
					x: 545.346987230123,
					y: 1408.9078059958813
				}
			},
			s: {
				'group.fill': false,
				'group.fill.color': '#FFFFFF',
				'group.shape': 'roundrect',
				'group.outline.width': 0,
				'group.outline.color': '#000000',
				'group.padding': 2,
				'vector.outline.pattern': [2, 2],
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'label.position': 'center',
				'label.xoffset': -127.71630736538629,
				'label.yoffset': -27.00559924682625,
			},
			c: {
				'business.row': 'X3',
				angle: '15'
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 372,
			p: {
				name: '5',
				parent: 371,
				location: {
					x: 453.63067986473675,
					y: 1383.902206749055
				},
				width: 20,
				height: 20
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X3',
				'business.seat': 5
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 373,
			p: {
				name: '3',
				angle: 15,
				parent: 371,
				location: {
					x: 492.2677196608903,
					y: 1394.2549457866037
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X3',
				'business.seat': 3
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 374,
			p: {
				name: '1',
				angle: 15,
				parent: 371,
				location: {
					x: 530.9047435866715,
					y: 1404.6077289897287
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X3',
				'business.seat': 1
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 375,
			p: {
				name: '2',
				angle: 15,
				parent: 371,
				location: {
					x: 569.5417789565447,
					y: 1414.9603901225412
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X3',
				'business.seat': 2
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 376,
			p: {
				name: '4',
				angle: 15,
				parent: 371,
				location: {
					x: 608.1788124190689,
					y: 1425.3131733256662
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X3',
				'business.seat': 4
			},
		},
		{
			class: 'b2.SeatNode',
			ref: 377,
			p: {
				name: '6',
				angle: 15,
				parent: 371,
				location: {
					x: 646.8158458815933,
					y: 1435.6659565287912
				},
				width: 20,
				height: 20,
			},
			s: {
				'body.type': 'vector',
				'vector.shape': 'circle',
				'vector.fill.color': '#cdcdcd',
				'vector.outline.width': 1,
				'vector.outline.color': '#000000',
				'vector.outline.pattern': [10, 0],
				'label.position': 'center',
				'label.font': '10px arial',
				'label2.position': 'left.left',
				'label2.yoffset': 0,
				'shadow.blur': 4,
				'shadow.xoffset': 0,
				'shadow.yoffset': 0,
				'select.style': 'shadow',
				'select.padding': 0,
				'select.color': '#ff0000',
			},
			c: {
				'business.row': 'X3',
				'business.seat': 6
			},
		},
	],
};