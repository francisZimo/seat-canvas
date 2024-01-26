export const seatInfo =  {
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
        "layers": [
            {
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
    "datas": [
        {
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
            }
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
            }
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
            }
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
            "angle": {
                "picture": "https://img.juzai.cn/juzai/20240126/9eea1528c5eef8e99088c148b89c7c36.png",
                "sheltered": false
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        }
    ],
    "field_options": {
        "regions": [
            {
                "id": "乐池",
                "name": "乐池"
            }
        ],
        "rows": [
            {
                "id": "1",
                "name": "1",
                "parent": "乐池"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "乐池"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "乐池"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "乐池"
            },
            {
                "id": "1",
                "name": "1",
                "parent": ""
            },
            {
                "id": "2",
                "name": "2",
                "parent": ""
            },
            {
                "id": "3",
                "name": "3",
                "parent": ""
            },
            {
                "id": "4",
                "name": "4",
                "parent": ""
            },
            {
                "id": "5",
                "name": "5",
                "parent": ""
            },
            {
                "id": "6",
                "name": "6",
                "parent": ""
            },
            {
                "id": "7",
                "name": "7",
                "parent": ""
            },
            {
                "id": "8",
                "name": "8",
                "parent": ""
            },
            {
                "id": "9",
                "name": "9",
                "parent": ""
            },
            {
                "id": "10",
                "name": "10",
                "parent": ""
            },
            {
                "id": "11",
                "name": "11",
                "parent": ""
            },
            {
                "id": "12",
                "name": "12",
                "parent": ""
            },
            {
                "id": "13",
                "name": "13",
                "parent": ""
            },
            {
                "id": "14",
                "name": "14",
                "parent": ""
            }
        ],
        "seats": [
            {
                "id": "9",
                "name": "9",
                "parent": "1"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "1"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "1"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "1"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "1"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "1"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "2"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "2"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "2"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "2"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "2"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "2"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "2"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "3"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "3"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "3"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "3"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "3"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "3"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "3"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "3"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "4"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "4"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "4"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "4"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "4"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "4"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "4"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "4"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "1"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "1"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "1"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "1"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "1"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "1"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "1"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "1"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "2"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "2"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "2"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "2"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "2"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "2"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "2"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "2"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "2"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "3"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "3"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "3"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "3"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "3"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "3"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "3"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "3"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "3"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "3"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "4"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "4"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "4"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "4"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "4"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "4"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "4"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "4"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "4"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "4"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "4"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "1"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "1"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "1"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "1"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "1"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "2"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "2"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "2"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "2"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "2"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "2"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "2"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "3"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "3"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "3"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "3"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "3"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "3"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "3"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "4"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "4"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "4"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "4"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "4"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "4"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "4"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "4"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "1"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "1"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "1"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "1"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "1"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "1"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "1"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "2"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "2"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "2"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "2"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "2"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "2"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "2"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "2"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "2"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "3"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "3"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "3"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "3"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "3"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "3"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "3"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "3"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "3"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "4"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "4"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "4"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "4"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "4"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "4"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "4"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "4"
            },
            {
                "id": "33",
                "name": "33",
                "parent": "4"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "5"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "5"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "5"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "5"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "5"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "5"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "5"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "5"
            },
            {
                "id": "33",
                "name": "33",
                "parent": "5"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "6"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "6"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "6"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "6"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "6"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "6"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "6"
            },
            {
                "id": "33",
                "name": "33",
                "parent": "6"
            },
            {
                "id": "35",
                "name": "35",
                "parent": "6"
            },
            {
                "id": "37",
                "name": "37",
                "parent": "6"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "7"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "7"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "7"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "7"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "7"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "7"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "7"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "7"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "8"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "8"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "8"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "8"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "8"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "8"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "9"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "9"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "9"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "9"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "9"
            },
            {
                "id": "31",
                "name": "31",
                "parent": "9"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "10"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "10"
            },
            {
                "id": "27",
                "name": "27",
                "parent": "10"
            },
            {
                "id": "29",
                "name": "29",
                "parent": "10"
            },
            {
                "id": "23",
                "name": "23",
                "parent": "11"
            },
            {
                "id": "25",
                "name": "25",
                "parent": "11"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "1"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "1"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "1"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "1"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "1"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "1"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "1"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "1"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "1"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "1"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "1"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "1"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "2"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "2"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "2"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "2"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "2"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "2"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "2"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "2"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "2"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "2"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "2"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "2"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "2"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "3"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "3"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "3"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "3"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "3"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "3"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "3"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "3"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "3"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "3"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "3"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "3"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "3"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "3"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "4"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "4"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "4"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "4"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "4"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "4"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "4"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "4"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "4"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "4"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "4"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "4"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "4"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "4"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "4"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "5"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "5"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "5"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "5"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "5"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "5"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "5"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "5"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "5"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "5"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "5"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "5"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "5"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "5"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "5"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "5"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "6"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "6"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "6"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "6"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "6"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "6"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "6"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "6"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "6"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "6"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "6"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "6"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "6"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "6"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "6"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "6"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "6"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "7"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "7"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "7"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "7"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "7"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "7"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "7"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "7"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "7"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "7"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "7"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "7"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "7"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "7"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "7"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "7"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "8"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "8"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "8"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "8"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "8"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "8"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "8"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "8"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "8"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "8"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "8"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "8"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "8"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "8"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "8"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "8"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "8"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "9"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "9"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "9"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "9"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "9"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "9"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "9"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "9"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "9"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "9"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "9"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "9"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "9"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "9"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "9"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "9"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "9"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "9"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "9"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "9"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "10"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "10"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "10"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "10"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "10"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "10"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "10"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "10"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "10"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "10"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "10"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "10"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "10"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "10"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "10"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "10"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "10"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "10"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "10"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "10"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "10"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "11"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "11"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "11"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "11"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "11"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "11"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "11"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "11"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "11"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "11"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "11"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "11"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "11"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "11"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "11"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "11"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "11"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "11"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "11"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "11"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "11"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "11"
            },
            {
                "id": "21",
                "name": "21",
                "parent": "12"
            },
            {
                "id": "19",
                "name": "19",
                "parent": "12"
            },
            {
                "id": "17",
                "name": "17",
                "parent": "12"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "12"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "12"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "12"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "12"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "12"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "12"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "12"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "12"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "12"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "12"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "12"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "12"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "12"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "12"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "12"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "12"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "12"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "12"
            },
            {
                "id": "15",
                "name": "15",
                "parent": "13"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "13"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "13"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "13"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "13"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "13"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "13"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "13"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "13"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "13"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "13"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "13"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "13"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "13"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "13"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "13"
            },
            {
                "id": "13",
                "name": "13",
                "parent": "14"
            },
            {
                "id": "11",
                "name": "11",
                "parent": "14"
            },
            {
                "id": "9",
                "name": "9",
                "parent": "14"
            },
            {
                "id": "7",
                "name": "7",
                "parent": "14"
            },
            {
                "id": "5",
                "name": "5",
                "parent": "14"
            },
            {
                "id": "3",
                "name": "3",
                "parent": "14"
            },
            {
                "id": "1",
                "name": "1",
                "parent": "14"
            },
            {
                "id": "2",
                "name": "2",
                "parent": "14"
            },
            {
                "id": "4",
                "name": "4",
                "parent": "14"
            },
            {
                "id": "6",
                "name": "6",
                "parent": "14"
            },
            {
                "id": "8",
                "name": "8",
                "parent": "14"
            },
            {
                "id": "10",
                "name": "10",
                "parent": "14"
            },
            {
                "id": "12",
                "name": "12",
                "parent": "14"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "1"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "1"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "1"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "1"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "1"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "1"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "1"
            },
            {
                "id": "14",
                "name": "14",
                "parent": "2"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "2"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "2"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "2"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "2"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "2"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "2"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "2"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "2"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "3"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "3"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "3"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "3"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "3"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "3"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "3"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "3"
            },
            {
                "id": "32",
                "name": "32",
                "parent": "3"
            },
            {
                "id": "16",
                "name": "16",
                "parent": "4"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "4"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "4"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "4"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "4"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "4"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "4"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "4"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "5"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "5"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "5"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "5"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "5"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "5"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "5"
            },
            {
                "id": "32",
                "name": "32",
                "parent": "5"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "6"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "6"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "6"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "6"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "6"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "6"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "6"
            },
            {
                "id": "32",
                "name": "32",
                "parent": "6"
            },
            {
                "id": "34",
                "name": "34",
                "parent": "6"
            },
            {
                "id": "36",
                "name": "36",
                "parent": "6"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "7"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "7"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "7"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "7"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "7"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "7"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "7"
            },
            {
                "id": "32",
                "name": "32",
                "parent": "7"
            },
            {
                "id": "18",
                "name": "18",
                "parent": "8"
            },
            {
                "id": "20",
                "name": "20",
                "parent": "8"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "8"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "8"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "8"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "8"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "9"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "9"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "9"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "9"
            },
            {
                "id": "30",
                "name": "30",
                "parent": "9"
            },
            {
                "id": "32",
                "name": "32",
                "parent": "9"
            },
            {
                "id": "22",
                "name": "22",
                "parent": "10"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "10"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "10"
            },
            {
                "id": "28",
                "name": "28",
                "parent": "10"
            },
            {
                "id": "24",
                "name": "24",
                "parent": "11"
            },
            {
                "id": "26",
                "name": "26",
                "parent": "11"
            }
        ]
    }
}