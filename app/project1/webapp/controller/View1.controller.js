sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
  ],
  function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        // MessageToast.show("Hello THERE!");

        var oData = {
          receipient: {
            name: "World",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onOpenDialog: function () {
        this.getOwnerComponent().openHelloDialog();
      },
    });
  }
);
