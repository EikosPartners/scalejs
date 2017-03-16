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
                    "uri": "dashboard",
                }
            }
        },
        "output": true,
        "classes": "editor",
        "outputClasses": "output"
    };

    var eventJson = {
        "type": "editor",
        "id": "editorJson",
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
</script>

# How to use PJSON Actions

The Action component is what you can use to bring your application to life. From ajax calls, events, routing and popups, Action is one standardized way of creating interactivity in the app.

You should already have an application with a Scalejs/PJSON set up, if not visit the [quick start guide.](https://eikospartners.github.io/scalejs/quick-start.html)

## Available PJSON Actions
* Ajax
* Event
* Redirect
* Route
* Series
* Popup

## [Ajax](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-ajax.html)
<div class="editor-container container-small" data-bind="metadataFactory: ajaxJson"></div>

## [Event](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-event.html)
<div class="editor-container container-small" data-bind="metadataFactory: eventJson"></div>

## [Redirect](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-redirect.html)
<div class="editor-container container-small" data-bind="metadataFactory: redirectJson"></div>

## [Route](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-route.html)
<div class="editor-container container-small" data-bind="metadataFactory: routeJson"></div>

## [Series](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-series.html)
<div class="editor-coontainer container-large" data-bind="metadataFactory: seriesJson"></div>

## [Popup](https://eikospartners.github.io/scalejs.metadataFactory-common/doc/module-popup.html)
<div class="editor-container container-small" data-bind="metadataFactory: popupJson"></div>
<script src="https://eikospartners.github.io/scalejs-dev/build/app.bundle.js"></script>