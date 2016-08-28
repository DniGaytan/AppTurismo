jQuery("#simulation")
  .on("dragstart", ".s-37246f2b-610c-43b9-99b0-08af8cd20acd .dragstart", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_3",
                    "top": {
                      "type": "movebyoffset",
                      "value": "-10"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-10"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Ellipse_3",
                    "width": {
                      "type": "exprvalue",
                      "value": "33"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "33"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-37246f2b-610c-43b9-99b0-08af8cd20acd .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_3",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_14",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-37246f2b-610c-43b9-99b0-08af8cd20acd .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-37246f2b-610c-43b9-99b0-08af8cd20acd .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_3",
                    "top": {
                      "type": "movebyoffset",
                      "value": "10"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "10"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Ellipse_3",
                    "width": {
                      "type": "exprvalue",
                      "value": "15"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "15"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-37246f2b-610c-43b9-99b0-08af8cd20acd .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-37246f2b-610c-43b9-99b0-08af8cd20acd .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Background")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });