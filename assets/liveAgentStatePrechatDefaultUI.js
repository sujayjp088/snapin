(function() {
    return (function() {
        $A.componentService.addComponentClass("markup://embeddedService:liveAgentStatePrechatDefaultUI", function() {
            return {
                meta: {
                    name: "embeddedService$liveAgentStatePrechatDefaultUI",
                    "extends": "markup://aura:component",
                    imports: {
                        manager: "markup://embeddedService:embeddedServiceManager"
                    }
                },
                controller: {
                    onInit: function(b, a, c) {
                        a = b.find("prechatAPI").getPrechatFields();
                        b.set("v.prechatFields", a);
                        b.find("form").set("v.buttonData", {
                            "class": "startButton",
                            label: $A.get("$Label.LiveAgentPrechat.StartChat"),
                            press: c.onStartButtonClick.bind(c, b)
                        })
                    }
                },
                helper: {
                    onStartButtonClick: function(b) {
                        var a = b.find("form").find("fieldContainer")
                          , c = [];
                        embedded_svc.util.validateFormFields(a) ? (c = this.createFieldsArray(a),
                        b.find("prechatAPI").startChat(c)) : embedded_svc.util.warn("Prechat fields failed value validation.")
                    },
                    createFieldsArray: function(b) {
                        debugger;
                        return b.length ? b.map(function(a) {
                            a = a.get("v.fieldInfo");
                            return {
                                label: a.label,
                                value: a.value,
                                name: a.name
                            }
                        }) : []
                    }
                }
            }
        });
    }
    )
}
)();
