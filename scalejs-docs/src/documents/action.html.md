---
title: "How to use Actions"
isPage: true
---

<script>
    var ajaxJson = {
        "type": "editor",
        "id": "ajaxJson",
        "value": {
            "type": "action",
            "actionType": "ajax",
            "text": "SUBMIT",
            "options": {
                "target": {
                    "uri": "store",
                }
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var ajaxMustache = {
        "type": "editor",
        "id": "ajaxMustache",
        "value": {
            "type": "adapter",
            "id": "dashboardAdapter",
            "dataSourceEndpoint": {
                "target": {
                    "uri": "stores"
                },
                "keyMap": {
                    "dataKey": "stores"
                }
            },
            "children": [
                {
                    "type": "listAdvanced",
                    "id": "stores",
                    "list": {
                        "type": "list",
                        "label": "Stores",
                        "classes": "list-advanced",
                        "options": {
                            "subscribeToData": true
                        },
                        "items": [
                            {
                                "id": "id",
                                "label": "ID",
                                "type": "input",
                                "inputType": "text"
                            },
                            {
                                "id": "name",
                                "label": "NAME",
                                "type": "input",
                                "inputType": "text"
                            },
                            {
                                "type": "action",
                                "actionType": "ajax",
                                "text": "Submit",
                                "classes": "center",
                                "options": {
                                    "target": {
                                        "uri": "example/{{id}}",
                                        "options": {
                                            "type": "POST"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var ajaxParams = {
        "type": "editor",
        "id": "editorJson",
        "value": {
            "type": "adapter",
            "id": "dashboardAdapter",
            "dataSourceEndpoint": {
                "target": {
                    "uri": "stores"
                },
                "keyMap": {
                    "dataKey": "stores"
                }
            },
            "children": [
                {
                    "type": "listAdvanced",
                    "id": "stores",
                    "list": {
                        "type": "list",
                        "label": "Stores",
                        "classes": "list-advanced",
                        "options": {
                            "subscribeToData": true
                        },
                        "items": [
                            {
                                "id": "id",
                                "label": "ID",
                                "type": "input",
                                "inputType": "text"
                            },
                            {
                                "id": "name",
                                "label": "NAME",
                                "type": "input",
                                "inputType": "text"
                            },
                            {
                                "type": "action",
                                "actionType": "ajax",
                                "text": "Submit",
                                "classes": "center",
                                "options": {
                                    "target": {
                                        "uri": "example",
                                        "options": {
                                            "type": "POST"
                                        }
                                    },
                                    "params": {
                                        "name": "{{name}}"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var ajaxInputs = {
        "type": "editor",
        "id": "ajaxInputs",
        "value": {
            "type": "adapter",
            "id": "dashboardAdapter",
            "dataSourceEndpoint": {
                "target": {
                    "uri": "stores"
                },
                "keyMap": {
                    "dataKey": "stores"
                }
            },
            "children": [
                {
                    "type": "listAdvanced",
                    "id": "stores",
                    "list": {
                        "type": "list",
                        "label": "Stores",
                        "classes": "list-advanced",
                        "options": {
                            "subscribeToData": true
                        },
                        "items": [
                            {
                                "id": "id",
                                "label": "ID",
                                "type": "input",
                                "inputType": "text"
                            },
                            {
                                "id": "name",
                                "label": "NAME",
                                "type": "input",
                                "inputType": "text"
                            },
                            {
                                "id": "location",
                                "label": "LOCATION",
                                "type": "input",
                                "inputType": "text"
                            }
                        ]
                    }
                },
                {
                    "type": "action",
                    "actionType": "ajax",
                    "text": "Submit",
                    "classes": "center",
                    "options": {
                        "target": {
                            "uri": "example",
                            "options": {
                                "type": "POST"
                            }
                        }
                    }
                }
            ]
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var nextErrorActions = {
        "type": "editor",
        "id": "nextErrorActions",
        "value": {
            "type": "action",
            "actionType": "ajax",
            "text": "SUBMIT",
            "options": {
                "target": {
                    "uri": "colors",
                },
                "nextActions": [
                    {
                        "type": "action",
                        "actionType": "popup",
                        "options": {
                            "title": "Success!",
                            "template": "action_popup_template",
                            "message": "This is a popup in the next action of an ajax request!",
                            "hideDelay": 2000
                        }
                    }
                ],
                "errorActions": [
                    {
                        "type": "action",
                        "actionType": "popup",
                        "options": {
                            "title": "Error!",
                            "template": "action_popup_template",
                            "message": "This is a popup in the error action of an ajax request",
                            "hideDelay": 2000
                        }
                    }
                ]
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var eventJson = {
        "type": "editor",
        "id": "eventJson",
        "value": {
            "type": "action",
            "actionType": "event",
            "options": {
                "target": "my_grid.add",
                "params": [
                    {
                        "status": "{{status}}"
                    }
                ],
                "useOptions": true
            }
        },
        "output": false,
        "classes": "editor"
    };

    var redirectJson = {
        "type": "editor",
        "id": "redirectJson",
        "value": {
            "type": "action",
            "actionType": "redirect",
            "text": "Redirect",
            "options": {
                "target": "https://www.google.com"
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var routeJson = {
        "type": "editor",
        "id": "routeJson",
        "value": {
            "type": "action",
            "actionType": "route",
            "text": "Add User",
            "options": {
                "target": "add-user"
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var seriesJson = {
        "type": "editor",
        "id": "seriesJson",
        "value": {
            "type": "action",
            "actionType": "series",
            "text": "Start Actions",
            "options": {
                "actions": [
                    {
                        "type": "action",
                        "actionType": "route",
                        "text": "Add User",
                        "options": {
                            "target": "add-user"
                        }
                    },
                    {
                        "type": "action",
                        "actionType": "event",
                        "options": {
                            "target": "my_grid.add",
                            "params": [                            
                                {
                                    "name": "{{request.name}}",
                                    "endpoint": "{{request.uri}}",
                                    "status": "{{status}}"
                                }
                            ],
                            "useOptions": true
                        }
                    }
                ]
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var popupJson = {
        "type": "editor",
        "id": "popupJson",
        "value": {
            "type": "action",
            "text": "Popup",
            "actionType": "popup",
            "options": {
                "title": "Success",
                "template": "action_popup_template",
                "message": "Your form has been submitted successfully"
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var closePopupJson = {
        "type": "editor",
        "id": "closePopupJson",
        "value": {
            "type": "action",
            "text": "Close Popup",
            "actionType": "closePopup"
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    }
</script>

# How to use PJSON Actions

The Action component is what you can use to bring your application to life. From ajax calls, events, routing and popups, Action is one standardized way of creating interactivity in the app.

You should already have an application with a Scalejs/PJSON set up, if not visit the [quick start guide.](https://eikospartners.github.io/scalejs/quick-start.html)

## Documentation
* [PJSON Action](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-action.html)
* [Source Code](https://github.com/EikosPartners/scalejs.metadataFactory-common/tree/master/src/action)

## Available PJSON Actions
* [Ajax](#ajax)
* [Event](#event)
* [Redirect](#redirect)
* [Route](#route)
* [Series](#series)
* [Popup](#popup)
* [Close Popup](#close_popup)

<hr>

<div id="ajax"></div>

## [Ajax](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-ajax.html)

### __Simple Request__
This is an example of a very simple ajax action that makes a GET request to the store route.
<div class="editor-container container-small" data-bind="metadataFactory: ajaxJson"></div>

### __URI Rendering__
This example shows how to create an ajax action with a dynamic uri that will be mustache rendered using the data in its context.
Simply add an entry to the list and the request will be made with the id from the row.
<div class="editor-container container-large" data-bind="metadataFactory: ajaxMustache"></div>

### __Params Rendering__
This example is similar to the previous, except this ajax action will render the data in the row based on the params key.
<div class="editor-container container-large" data-bind="metadataFactory: ajaxParams"></div>

### __Sending a registered input__
In this example an ajax action is created that will send all of the data that is in its context. The data will come from the inputs in the adapter.
<div class="editor-container container-large" data-bind="metadataFactory: ajaxInputs"></div>

### __Using Next/Error Actions__
Ajax actions provide a very useful feature with next and error actions. Simply supply an array of actions to `nextActions` and/or `errorActions` and these actions will run on success and error respectively.

To see what happens when an error occurs in the ajax request, try changing the uri to something else!
<div class="editor-container container-large" data-bind="metadataFactory: nextErrorActions"></div>

<hr>

<div id="event"></div>

## [Event](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-event.html)
<div class="editor-container container-small" data-bind="metadataFactory: eventJson"></div>

<div id="redirect"></div>

## [Redirect](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-redirect.html)
<div class="editor-container container-small" data-bind="metadataFactory: redirectJson"></div>

<div id="route"></div>

## [Route](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-route.html)
<div class="editor-container container-small" data-bind="metadataFactory: routeJson"></div>

<div id="series"></div>

## [Series](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-series.html)
<div class="editor-container container-large" data-bind="metadataFactory: seriesJson"></div>

<div id="popup"></div>

## [Popup](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-popup.html)
<div class="editor-container container-small" data-bind="metadataFactory: popupJson"></div>

<div id="close_popup"></div>

## [Close Popup](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-popup.html)
<div class="editor-container container-xs" data-bind="metadataFactory: closePopupJson"></div>

<script src="https://eikospartners.github.io/scalejs-dev/build/app.bundle.js"></script>