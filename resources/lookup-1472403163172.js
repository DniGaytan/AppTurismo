(function(window, undefined) {
  var dictionary = {
    "d97802f0-b60c-4c67-a420-23c693c40d69": "Matisse",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "37246f2b-610c-43b9-99b0-08af8cd20acd": "registr",
    "829bd10a-f3e4-4a4f-b7ad-e18b0792955a": "Mana",
    "ca9a3de2-ebaa-4533-bfde-3f138f15bb60": "starred",
    "e8ced47e-3d2c-491e-aff7-8b8bcad7c694": "settings",
    "50a06e67-4ea2-4d87-8b85-7d38e7cd7f25": "Cola de caballo",
    "79993a48-efeb-4cbf-aee6-458010ed79a6": "Gran Pstor",
    "37b7dd7a-8cf0-4027-9053-0c87ceaa03dc": "Expo M&B",
    "cadcdbd5-d639-4865-b840-0c142b724760": "home",
    "49905f46-e4fc-4723-9d7d-112c8e6f0641": "near-me",
    "b6521f02-c9ac-40f9-9d5c-e9d8cd36d347": "C&D",
    "69faf821-6dcd-4653-995c-72dfb615c275": "Events",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "a7e80a92-57ee-4bb6-87e8-ae15c099c529": "default imported",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);