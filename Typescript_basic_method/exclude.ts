type Events =
  | {
      type: "click";
    }
  | {
      type: "focus";
    }
  | {
      type: "change";
    };

type ClickAndFocusEvent = Exclude<Events,{ type: "change" }>; //here change never use in typescript..,